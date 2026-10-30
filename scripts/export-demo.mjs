// Exemplo ao vivo da ajuda: exporta o workspace DEMO como página web (Export as Web Page do próprio app)
// para docs/public/demo/index.html, linkado na home. Abre o MarkPlus (build em out/) com uma cópia do DEMO
// numa pasta de dados própria e responde o diálogo de salvar com esse caminho.
// Uso: npm run build && node docs/scripts/export-demo.mjs
//   MARKPLUS_DEMO_DIR: o workspace DEMO (padrão: ~/Documents/Cafe Handbook)
import { _electron as electron } from 'playwright-core'
import electronPath from 'electron'
import fs from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')
const target = path.join(root, 'docs/public/demo/index.html')
const demo = process.env.MARKPLUS_DEMO_DIR ?? path.join(os.homedir(), 'Documents/Cafe Handbook')

const tmp = await fs.mkdtemp(path.join(os.tmpdir(), 'markplus-demo-'))
const workspace = path.join(tmp, path.basename(demo))
await fs.cp(demo, workspace, { recursive: true })
const userData = path.join(tmp, 'userData')
await fs.mkdir(userData)
await fs.writeFile(
  path.join(userData, 'settings.json'),
  JSON.stringify({
    workspaces: [{ id: 'ws_demo', name: path.basename(demo), path: workspace, lastDocumentId: null, openDocumentIds: [], lastOpenedAt: Date.now() }],
    activeWorkspaceId: 'ws_demo',
    externalDocuments: [],
  }),
)
await fs.mkdir(path.dirname(target), { recursive: true })
await fs.rm(target, { force: true })

const env = { ...process.env, MARKPLUS_USER_DATA: userData }
delete env.ELECTRON_RUN_AS_NODE
const app = await electron.launch({ executablePath: electronPath, args: [path.join(root, 'out/main/index.js')], env })
try {
  const page = await app.firstWindow()
  await page.waitForLoadState('domcontentloaded')
  await page.waitForTimeout(2500)
  // O diálogo de salvar responde sozinho com o caminho da ajuda
  await app.evaluate(({ dialog }, file) => {
    dialog.showSaveDialog = async () => ({ canceled: false, filePath: file })
  }, target)
  await app.evaluate(({ BrowserWindow }) => BrowserWindow.getAllWindows()[0].webContents.send('app:menu-action', 'export-web-page'))
  // Espera o arquivo ficar pronto (o tamanho para de mudar)
  let last = -1
  for (let i = 0; i < 120; i++) {
    await page.waitForTimeout(500)
    const size = await fs.stat(target).then((s) => s.size, () => -1)
    if (size > 0 && size === last) break
    last = size
  }
  if (last <= 0) throw new Error('The web page was not exported')
  console.log(`✓ ${path.relative(root, target)} (${(last / 1024 / 1024).toFixed(1)} MB)`)
} finally {
  await app.close()
  await fs.rm(tmp, { recursive: true, force: true })
}
