// Prints da ajuda: abre o MarkPlus (build em out/) com uma cópia do workspace DEMO numa pasta de dados
// própria, monta cada cena e grava docs/public/screenshots/<nome>-light.png e -dark.png.
// Uso: npm run build && node docs/scripts/screenshots.mjs [cena…]   (precisa do cwebp: brew install webp)
//   MARKPLUS_DEMO_DIR: o workspace DEMO (padrão: ~/Documents/Cafe Handbook)
// Menus nativos e diálogos do macOS não aparecem (não fazem parte da página).
import { _electron as electron } from 'playwright-core'
import electronPath from 'electron'
import fs from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import { scenes } from './screenshot-scenes.mjs'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')
const outDir = path.join(root, 'docs/public/screenshots')
const demo = process.env.MARKPLUS_DEMO_DIR ?? path.join(os.homedir(), 'Documents/Cafe Handbook')
const only = process.argv.slice(2)

// Fundo sólido no lugar do vibrancy (a captura é só da página, sem o material da janela)
const SHOT_CSS = `
  html, body { background: var(--background) !important; }
  [data-sidebar="sidebar"], .bg-sidebar { background: var(--shot-sidebar) !important; }
  :root { --shot-sidebar: #ebebed; }
  :root.dark { --shot-sidebar: #262628; }
  * { caret-color: transparent !important; }
`

async function prepare() {
  const tmp = await fs.mkdtemp(path.join(os.tmpdir(), 'markplus-shots-'))
  const workspace = path.join(tmp, 'Cafe Handbook')
  await fs.cp(demo, workspace, { recursive: true })
  const userData = path.join(tmp, 'userData')
  await fs.mkdir(userData)
  return { tmp, userData, workspace }
}

// Antes de cada cena: só o DEMO, sem abas nem documento aberto
async function resetSettings(userData, workspace) {
  const id = 'ws_shots'
  await fs.writeFile(
    path.join(userData, 'settings.json'),
    JSON.stringify({
      workspaces: [{ id, name: 'Cafe Handbook', path: workspace, lastDocumentId: null, openDocumentIds: [], lastOpenedAt: Date.now() }],
      activeWorkspaceId: id,
      externalDocuments: [],
      windowBounds: { x: 80, y: 60, width: 1280, height: 800 },
    }),
  )
}

async function launch(userData, theme) {
  const env = { ...process.env, MARKPLUS_USER_DATA: userData }
  delete env.ELECTRON_RUN_AS_NODE
  const app = await electron.launch({ executablePath: electronPath, args: [path.join(root, 'out/main/index.js')], env })
  const page = await app.firstWindow()
  await page.waitForLoadState('domcontentloaded')
  await page.evaluate((theme) => {
    localStorage.setItem('markdown-editor-theme', theme)
    localStorage.setItem('markplus-show-path-bar', 'false')
    localStorage.setItem('markplus-documents-view', 'grid')
    // A barra flutuante de formatação cobriria o conteúdo nos recortes
    localStorage.setItem('markdown-editor-show-toolbar', 'false')
    localStorage.setItem('markplus-page-view', 'false')
  }, theme)
  await page.reload()
  await page.waitForLoadState('domcontentloaded')
  await page.addStyleTag({ content: SHOT_CSS })
  // Coluna estreita (A4): os recortes ficam menos largos e o texto legível na coluna da ajuda
  await app.evaluate(({ BrowserWindow }) => BrowserWindow.getAllWindows()[0].webContents.send('app:menu-action', 'width-narrow'))
  await page.waitForTimeout(1500)
  return { app, page }
}

const { tmp, userData, workspace } = await prepare()
await fs.mkdir(outDir, { recursive: true })
try {
  for (const theme of ['light', 'dark']) {
    for (const scene of scenes) {
      if (only.length && !only.includes(scene.name)) continue
      await resetSettings(userData, workspace)
      const { app, page } = await launch(userData, theme)
      try {
        const target = await scene.run(page, { app })
        await page.waitForTimeout(scene.settle ?? 800)
        const file = path.join(tmp, `${scene.name}-${theme}.png`)
        // Elemento, { clip } (área da janela) ou nada (a janela inteira)
        if (target?.clip) await page.screenshot({ path: file, clip: target.clip })
        else if (target) await target.screenshot({ path: file })
        else await page.screenshot({ path: file })
        // WebP: a página da ajuda carrega bem menos que PNG
        const webp = path.join(outDir, `${scene.name}-${theme}.webp`)
        await promisify(execFile)('cwebp', ['-quiet', '-q', '85', file, '-o', webp])
        console.log('✓', path.relative(root, webp))
      } catch (error) {
        console.error('✗', scene.name, theme, error.message.split('\n')[0])
      } finally {
        await app.close()
      }
    }
  }
} finally {
  await fs.rm(tmp, { recursive: true, force: true })
}
