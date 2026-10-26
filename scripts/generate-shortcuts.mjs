#!/usr/bin/env node
// Gera a tabela de atalhos da ajuda (src/content/docs/shortcuts.md) a partir do menu real do
// app (../electron/main/menu.ts, com docs/ dentro do projeto do app), para a ajuda nunca ficar
// desatualizada. No repositório só da ajuda (GitHub Pages) o menu não existe: mantém a tabela
// já commitada.
// Lê o menu como texto (sem Electron): item('Label', 'ação', 'Atalho'), { label, accelerator }
// e os roles com atalho padrão do macOS (Undo, Copy, Zoom…).
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const DOCS = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const MENU = path.resolve(DOCS, '../electron/main/menu.ts')
const PAGE = path.join(DOCS, 'src/content/docs/shortcuts.md')
const START = '<!-- shortcuts:start -->'
const END = '<!-- shortcuts:end -->'

// Roles do Electron com atalho padrão no macOS (o menu.ts não escreve esses atalhos)
const ROLE_SHORTCUTS = {
  undo: ['Undo', 'CmdOrCtrl+Z'],
  redo: ['Redo', 'Shift+CmdOrCtrl+Z'],
  cut: ['Cut', 'CmdOrCtrl+X'],
  copy: ['Copy', 'CmdOrCtrl+C'],
  paste: ['Paste', 'CmdOrCtrl+V'],
  pasteAndMatchStyle: ['Paste and Match Style', 'Alt+Shift+CmdOrCtrl+V'],
  selectAll: ['Select All', 'CmdOrCtrl+A'],
  close: ['Close Window', 'CmdOrCtrl+W'],
  hide: ['Hide MarkPlus', 'CmdOrCtrl+H'],
  hideOthers: ['Hide Others', 'Alt+CmdOrCtrl+H'],
  quit: ['Quit MarkPlus', 'CmdOrCtrl+Q'],
  resetZoom: ['Actual Size', 'CmdOrCtrl+0'],
  zoomIn: ['Zoom In', 'CmdOrCtrl+Plus'],
  zoomOut: ['Zoom Out', 'CmdOrCtrl+-'],
  togglefullscreen: ['Toggle Full Screen', 'Ctrl+CmdOrCtrl+F'],
  windowMenu: ['Minimize', 'CmdOrCtrl+M'],
}

// Seções, na ordem em que aparecem no arquivo (marcadores no código do menu)
const SECTIONS = [
  [/const documentItems\b/, 'File and Workspace'],
  // closeItem (Close Window ⌘W) é o da grade; no editor, File usa ⇧⌘W
  [/const closeItem\b/, 'Workspace'],
  [/const fileMenu\b/, 'File'],
  [/const workspaceMenu\b/, 'Workspace'],
  [/const editMenu\b/, 'Edit'],
  [/label: 'Find'/, 'Edit › Find'],
  [/label: 'Speech'/, null], // sem atalhos
  [/label: app\.name/, 'MarkPlus'],
  [/label: 'View'/, 'View'],
  [/role: 'windowMenu'/, 'Window'],
  [/role: 'help'/, 'Help'],
]

const MODIFIERS = [
  ['Ctrl', '⌃'],
  ['Alt', '⌥'],
  ['Shift', '⇧'],
  ['Cmd', '⌘'],
]

const KEYS = { Plus: '+', '-': '−', '\\\\': '\\', '\\': '\\', Up: '↑', Down: '↓', Left: '←', Right: '→', Enter: '↩', Tab: '⇥', Escape: '⎋' }

/** 'Alt+CmdOrCtrl+F' → '⌥⌘F' (ordem do Mac: ⌃ ⌥ ⇧ ⌘ e a tecla) */
export function formatAccelerator(accelerator) {
  const parts = accelerator.split('+')
  // "Plus" ou um "+" no fim (ex.: CmdOrCtrl++) é a tecla
  const key = parts.at(-1) === '' ? '+' : parts.pop()
  const mods = new Set(parts.filter(Boolean).map((p) => (/^(CmdOrCtrl|CommandOrControl|Command|Cmd|Meta|Super)$/.test(p) ? 'Cmd' : p === 'Control' ? 'Ctrl' : p === 'Option' ? 'Alt' : p)))
  // ⇧/ é o "?" (o macOS mostra ⌘? no menu Help)
  if (key === '/' && mods.has('Shift')) {
    mods.delete('Shift')
    return MODIFIERS.filter(([name]) => mods.has(name)).map(([, symbol]) => symbol).join('') + '?'
  }
  const prefix = MODIFIERS.filter(([name]) => mods.has(name)).map(([, symbol]) => symbol).join('')
  return prefix + (KEYS[key] ?? key.toUpperCase())
}

/** Atalhos do menu: [{ section, label, keys }] na ordem do arquivo */
export function extractShortcuts(source) {
  const entries = []
  let section = null
  for (const line of source.split('\n')) {
    for (const [pattern, name] of SECTIONS) if (pattern.test(line)) section = name
    if (!section) continue

    const add = (label, accelerator) => {
      if (accelerator && !entries.some((e) => e.section === section && e.label === label)) {
        entries.push({ section, label, keys: formatAccelerator(accelerator) })
      }
    }
    // item('Label', 'ação', 'Atalho') / findItem('Label', 'ação', 'Atalho', …)
    for (const m of line.matchAll(/\b(?:item|findItem)\('([^']+)',\s*'[^']*',\s*'([^']+)'/g)) add(m[1], m[2])
    // { label: 'Label', … accelerator: 'Atalho' } na mesma linha
    const label = line.match(/label: '([^']+)'/)?.[1]
    const accelerator = line.match(/accelerator: '([^']+)'/)?.[1]
    if (label && accelerator) add(label, accelerator)
    // { ...closeItem, accelerator: '…' }: Close Window com outro atalho
    if (/\.\.\.closeItem/.test(line) && accelerator) add('Close Window', accelerator)
    // roles com atalho padrão
    for (const m of line.matchAll(/role: '([a-zA-Z]+)'/g)) {
      const known = ROLE_SHORTCUTS[m[1]]
      if (known && !/\.\.\.closeItem/.test(line)) add(known[0], known[1])
    }
  }
  return entries
}

// Itens com label e accelerator em linhas diferentes (ex.: AI Chat): segunda passada por bloco
export function extractMultiline(source) {
  const entries = []
  for (const m of source.matchAll(/label: '([^']+)',[^{}]*?accelerator: '([^']+)'/gs)) {
    entries.push({ label: m[1], keys: formatAccelerator(m[2]) })
  }
  return entries
}

/** Tabela em markdown, uma por seção */
export function renderTables(entries) {
  const sections = [...new Set(entries.map((e) => e.section))]
  return sections
    .map((section) => {
      const rows = entries.filter((e) => e.section === section).map((e) => `| ${e.label} | <kbd>${e.keys}</kbd> |`)
      return [`### ${section}`, '', '| Command | Shortcut |', '| --- | --- |', ...rows].join('\n')
    })
    .join('\n\n')
}

/** Troca o que está entre os marcadores da página pela tabela nova */
export function replaceBetweenMarkers(page, content) {
  const start = page.indexOf(START)
  const end = page.indexOf(END)
  if (start === -1 || end === -1 || end < start) throw new Error(`Markers ${START} / ${END} not found`)
  return `${page.slice(0, start + START.length)}\n\n${content}\n\n${page.slice(end)}`
}

export function generate(source) {
  const entries = extractShortcuts(source)
  // Completa com os de várias linhas (label numa linha, accelerator em outra), na seção certa
  for (const { label, keys } of extractMultiline(source)) {
    if (entries.some((e) => e.label === label)) continue
    // A seção é a do último marcador antes do item no arquivo
    const index = source.indexOf(`label: '${label}'`)
    let section = null
    let lastPos = -1
    for (const [pattern, name] of SECTIONS) {
      const re = new RegExp(pattern.source, 'g')
      let mm
      while ((mm = re.exec(source)) && mm.index < index) {
        if (mm.index > lastPos) {
          lastPos = mm.index
          section = name
        }
      }
    }
    if (section) entries.push({ section, label, keys })
  }
  // Ordem das seções como no menu
  const order = SECTIONS.map(([, name]) => name).filter(Boolean)
  return entries.sort((a, b) => order.indexOf(a.section) - order.indexOf(b.section))
}

// Rodando direto: atualiza a página da ajuda
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  if (!existsSync(MENU)) {
    console.log('Shortcuts: app menu not found (help-only repository); keeping the committed table.')
    process.exit(0)
  }
  const entries = generate(readFileSync(MENU, 'utf-8'))
  const page = readFileSync(PAGE, 'utf-8')
  writeFileSync(PAGE, replaceBetweenMarkers(page, renderTables(entries)))
  console.log(`Shortcuts: ${entries.length} entries written to ${path.relative(DOCS, PAGE)}`)
}
