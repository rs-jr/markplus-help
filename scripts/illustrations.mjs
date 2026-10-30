// Ilustrações conceituais da ajuda: SVGs desenhados aqui e colados nas páginas, entre
// <!-- illustration:<nome> --> e <!-- /illustration -->. Inline (não <img>) para seguir o tema de
// quem lê: os traços usam os cinzas do Starlight e o destaque usa --sl-color-accent (classes em
// src/styles/theme.css, `.illo`). Roda no prebuild; para ver uma mudança, `node scripts/illustrations.mjs`.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const pagesDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '../src/content/docs')

// ---------- Peças ----------

const n = (v) => Math.round(v * 10) / 10
const cls = (...names) => {
  const list = names.filter(Boolean).join(' ')
  return list ? ` class="${list}"` : ''
}

function group(x, y, children, { rotate = 0, cx = 0, cy = 0 } = {}) {
  const r = rotate ? ` rotate(${rotate} ${n(cx)} ${n(cy)})` : ''
  return `<g transform="translate(${n(x)} ${n(y)})${r}">${children.flat().filter(Boolean).join('')}</g>`
}

function text(x, y, value, kind = 'label', { anchor = 'middle', accent = false } = {}) {
  return `<text x="${n(x)}" y="${n(y)}" text-anchor="${anchor}"${cls(kind, accent && 'accent')}>${value}</text>`
}

const line = (x1, y1, x2, y2, kind = 'line') =>
  `<path${cls(kind)} d="M${n(x1)} ${n(y1)}${y1 === y2 ? `H${n(x2)}` : `L${n(x2)} ${n(y2)}`}"/>`

const rect = (x, y, w, h, rx, kind) => `<rect${cls(kind)} x="${n(x)}" y="${n(y)}" width="${n(w)}" height="${n(h)}" rx="${n(rx)}"/>`

/** Linhas de texto (barras), a última mais curta */
function textLines(x, y, width, count, gap = 9) {
  return Array.from({ length: count }, (_, i) => line(x, y + i * gap, x + (i === count - 1 ? width * 0.6 : width), y + i * gap))
}

/** Folha com o canto dobrado; `inner` é desenhado por cima, em coordenadas da folha */
function sheet(x, y, w, h, { accent = false, lines = 0, rotate = 0, inner = [] } = {}) {
  const f = Math.min(12, w * 0.25)
  return group(
    x,
    y,
    [
      `<path${cls('paper', accent && 'accent')} d="M0 0H${n(w - f)}L${n(w)} ${n(f)}V${n(h)}H0Z"/>`,
      `<path${cls(accent && 'accent')} d="M${n(w - f)} 0V${n(f)}H${n(w)}"/>`,
      lines ? textLines(w * 0.16, Math.max(f + 4, h * 0.3), w * 0.62, lines, Math.max(6, h * 0.14)) : [],
      inner,
    ],
    { rotate, cx: w / 2, cy: h / 2 },
  )
}

/** Pasta: fundo, o que está dentro (`inner`) e a frente */
function folder(x, y, w, h, { accent = false, inner = [] } = {}) {
  const tab = w * 0.34
  const front = 14
  const k = cls('paper', accent && 'accent')
  return group(x, y, [
    `<path${k} d="M4 0H${n(tab)}l6 6H${n(w - 4)}a4 4 0 0 1 4 4V${n(h - 4)}a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4Z"/>`,
    inner,
    `<path${k} d="M0 ${front + 4}a4 4 0 0 1 4-4H${n(w - 4)}a4 4 0 0 1 4 4V${n(h - 4)}a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4Z"/>`,
  ])
}

/** Miniatura de imagem: moldura, sol e montanhas */
function picture(x, y, w, h, { dashed = false } = {}) {
  return group(x, y, [
    rect(0, 0, w, h, 3, dashed ? 'paper dash' : 'paper'),
    `<circle${cls(dashed && 'dash')} cx="${n(w * 0.7)}" cy="${n(h * 0.3)}" r="${n(h * 0.1)}"/>`,
    `<path${cls(dashed && 'dash')} d="M${n(w * 0.1)} ${n(h * 0.85)}L${n(w * 0.38)} ${n(h * 0.45)}L${n(w * 0.58)} ${n(h * 0.7)}L${n(w * 0.72)} ${n(h * 0.55)}L${n(w * 0.9)} ${n(h * 0.85)}"/>`,
  ])
}

function person(cx, cy) {
  return [`<circle class="paper" cx="${n(cx)}" cy="${n(cy - 9)}" r="7"/>`, `<path d="M${n(cx - 12)} ${n(cy + 13)}a12 12 0 0 1 24 0"/>`]
}

/** Janela do macOS: barra com os três pontos */
function appWindow(x, y, w, h, { dashed = false, inner = [] } = {}) {
  return group(x, y, [
    rect(0, 0, w, h, 8, dashed ? 'paper dash' : 'paper'),
    line(0, 18, w, 18, dashed ? 'dash' : ''),
    [0, 1, 2].map((i) => `<circle class="dot" cx="${12 + i * 8}" cy="9" r="2.5"/>`),
    inner,
  ])
}

/** Estrela de quatro pontas (o ✦ da IA) */
function sparkle(cx, cy, s = 8) {
  const p = (dx, dy) => `${n(cx + dx * s)} ${n(cy + dy * s)}`
  return `<path class="fill-accent" d="M${p(0, -1)}C${p(0.12, -0.25)} ${p(0.25, -0.12)} ${p(1, 0)}C${p(0.25, 0.12)} ${p(0.12, 0.25)} ${p(0, 1)}C${p(-0.12, 0.25)} ${p(-0.25, 0.12)} ${p(-1, 0)}C${p(-0.25, -0.12)} ${p(-0.12, -0.25)} ${p(0, -1)}Z"/>`
}

function arrowHead(x, y, angle, kind) {
  const s = 6
  const a1 = angle + Math.PI - 0.5
  const a2 = angle + Math.PI + 0.5
  return `<path${cls(kind)} d="M${n(x + s * Math.cos(a1))} ${n(y + s * Math.sin(a1))}L${n(x)} ${n(y)}L${n(x + s * Math.cos(a2))} ${n(y + s * Math.sin(a2))}"/>`
}

/** Curva (quadrática) de (x1,y1) a (x2,y2), com ponta de seta opcional no fim */
function curve(x1, y1, qx, qy, x2, y2, { kind = 'accent', dashed = false, arrow = true } = {}) {
  const path = `<path${cls(kind, dashed && 'dash')} d="M${n(x1)} ${n(y1)}Q${n(qx)} ${n(qy)} ${n(x2)} ${n(y2)}"/>`
  return arrow ? [path, arrowHead(x2, y2, Math.atan2(y2 - qy, x2 - qx), kind)] : [path]
}

function svg(width, height, label, body) {
  return [
    `<svg class="illo" viewBox="0 0 ${width} ${height}" width="${width}" role="img" aria-label="${label}">`,
    ...body.flat(Infinity).filter(Boolean),
    '</svg>',
  ].join('\n')
}

// ---------- Ilustrações ----------

const illustrations = {
  // Export as Web Page: o workspace vira um pacote (um .html) que vai para várias pessoas
  'share-workspace': () => {
    const rows = [44, 112, 180]
    return svg(520, 224, 'The documents of a workspace packed into one .html file, sent to people on a laptop, a tablet and a phone', [
      folder(24, 74, 112, 80, {
        inner: [
          sheet(14, -22, 38, 48, { lines: 3, rotate: -8 }),
          sheet(37, -30, 38, 48, { lines: 3 }),
          sheet(60, -22, 38, 48, { lines: 3, rotate: 8 }),
        ],
      }),
      curve(128, 56, 180, 10, 240, 64, { kind: '', dashed: true, arrow: false }),
      sheet(174, 24, 16, 20, { rotate: -12 }),
      // Caixa aberta, com um documento entrando
      `<path class="paper accent" d="M232 96L220 78H258L270 96"/>`,
      `<path class="paper accent" d="M308 96L320 78H282L270 96"/>`,
      sheet(250, 62, 30, 40, { lines: 2, rotate: 10 }),
      rect(232, 96, 76, 56, 3, 'paper accent'),
      `<circle class="accent" cx="270" cy="124" r="11"/>`,
      `<ellipse class="accent" cx="270" cy="124" rx="4.5" ry="11"/>`,
      line(259, 124, 281, 124, 'accent'),
      rows.map((y) => curve(314, 124, 350, y, 384, y)),
      // Laptop, tablet e celular, cada um com uma pessoa
      rect(400, rows[0] - 16, 46, 30, 3, 'paper'),
      textLines(407, rows[0] - 6, 30, 2, 8),
      line(394, rows[0] + 18, 452, rows[0] + 18, ''),
      rect(408, rows[1] - 20, 30, 40, 4, 'paper'),
      textLines(414, rows[1] - 9, 18, 3, 8),
      rect(413, rows[2] - 18, 20, 36, 4, 'paper'),
      textLines(418, rows[2] - 7, 10, 3, 7),
      rows.map((y) => person(486, y)),
      text(80, 214, 'Workspace'),
      text(270, 214, 'One .html file', 'label', { accent: true }),
      text(442, 214, 'Any browser'),
    ])
  },

  // .mdoc: tudo dentro de um arquivo; .md: texto, com as imagens numa pasta ao lado
  'mdoc-vs-md': () =>
    svg(520, 214, 'A .mdoc file with text, a picture and an attachment inside; a .md file whose pictures are in an assets folder next to it', [
      sheet(60, 18, 120, 150, {
        accent: true,
        inner: [
          textLines(14, 22, 80, 3, 9),
          picture(14, 52, 64, 42),
          rect(14, 106, 92, 24, 6, 'paper'),
          `<path d="M24 123V112a3.5 3.5 0 0 1 7 0v10a2 2 0 0 1-4 0v-9"/>`,
          line(40, 118, 90, 118),
        ],
      }),
      text(120, 192, '.mdoc'),
      text(120, 208, 'Everything in one file', 'sub'),
      sheet(296, 28, 100, 130, { inner: [textLines(14, 24, 62, 3, 9), picture(14, 56, 50, 34, { dashed: true }), textLines(14, 106, 62, 2, 9)] }),
      curve(364, 101, 392, 101, 420, 108, { kind: '', dashed: true }),
      folder(424, 80, 76, 60, { inner: [picture(10, -4, 30, 24), picture(34, -8, 30, 24)] }),
      text(462, 128, 'assets', 'sub'),
      text(398, 192, '.md'),
      text(398, 208, 'Pictures in a folder next to it', 'sub'),
    ]),

  // Workspace = pasta; cada janela tem o seu
  workspaces: () => {
    const cards = [30, 72].flatMap((y) => [0, 1, 2].map((i) => [rect(16 + i * 60, y, 48, 34, 4, 'paper'), line(23 + i * 60, y + 24, 50 + i * 60, y + 24)]))
    return svg(520, 214, 'Two windows, each showing the documents of its own workspace folder: Work and Personal', [
      [30, 290].map((x) => [
        appWindow(x, 8, 200, 116, { inner: cards }),
        line(x + 100, 128, x + 100, 146, 'accent dash'),
        folder(x + 68, 150, 64, 44, { accent: true }),
      ]),
      text(130, 210, 'Work'),
      text(390, 210, 'Personal'),
    ])
  },

  // Referência cruzada: o link num documento leva a uma seção exata de outro
  'cross-reference': () =>
    svg(520, 204, 'A link in the Opening and closing document goes straight to the Espresso section of the Coffee recipes document', [
      sheet(30, 16, 190, 160, {
        inner: [
          text(14, 28, 'Opening', 'h', { anchor: 'start' }),
          textLines(14, 46, 150, 2, 12),
          text(14, 83, 'Make a test', 't', { anchor: 'start' }),
          rect(72, 71, 58, 16, 8, 'soft-accent accent'),
          text(101, 82.5, 'Espresso', 't', { accent: true }),
          textLines(14, 104, 150, 3, 12),
        ],
      }),
      sheet(300, 16, 190, 160, {
        inner: [
          rect(8, 12, 166, 56, 5, 'soft-accent'),
          line(8, 16, 8, 64, 'accent'),
          text(16, 30, 'Espresso', 'h', { anchor: 'start' }),
          textLines(16, 46, 140, 2, 12),
          textLines(14, 88, 150, 2, 12),
          text(14, 126, 'Cappuccino', 'h', { anchor: 'start' }),
          textLines(14, 140, 140, 2, 12),
        ],
      }),
      curve(166, 95, 262, 95, 304, 52),
      text(125, 198, 'Opening and closing', 'sub'),
      text(395, 198, 'Coffee recipes', 'sub'),
    ]),

  // Outros apps de IA leem e escrevem nos arquivos, mesmo com o MarkPlus fechado
  'ai-apps': () => {
    const apps = [
      ['Claude Desktop', 46],
      ['Cursor', 104],
      ['VS Code', 162],
    ]
    return svg(520, 196, 'Claude Desktop, Cursor and VS Code work directly with the documents in the workspace folder, even while MarkPlus is closed', [
      apps.map(([name, y]) => [
        curve(152, y, 192, y, 222, 104 + (y - 104) * 0.25, { arrow: false }),
        rect(114, y - 18, 36, 36, 9, 'paper'),
        sparkle(132, y, 8),
        text(102, y + 4, name, 'sub', { anchor: 'end' }),
      ]),
      folder(224, 72, 92, 64, {
        inner: [sheet(16, -20, 30, 40, { lines: 2, rotate: -6 }), sheet(48, -24, 30, 40, { lines: 2, rotate: 5 })],
      }),
      text(270, 176, 'Workspace folder', 'sub'),
      curve(320, 104, 340, 104, 356, 104, { kind: '', dashed: true, arrow: false }),
      appWindow(360, 60, 130, 90, { dashed: true, inner: textLines(16, 36, 90, 4, 12).map((l) => l.replace('class="line"', 'class="line dash"')) }),
      text(425, 176, 'MarkPlus can be closed', 'sub'),
    ])
  },

  // Menção: a mesma linha do database aparece em vários documentos, sempre com o valor atual
  'database-mention': () => {
    const rows = [0, 1, 2, 3]
    return svg(520, 182, 'A row of the People database, Ana, mentioned as @Ana in two documents', [
      curve(86, 88, 132, 88, 178, 88, { dashed: true, arrow: false }),
      curve(342, 88, 370, 88, 392, 108, { dashed: true, arrow: false }),
      sheet(30, 40, 110, 104, {
        inner: [textLines(12, 24, 80, 2, 10), rect(12, 40, 44, 16, 8, 'soft-accent accent'), text(34, 51.5, '@Ana', 't', { accent: true }), textLines(12, 72, 80, 2, 10)],
      }),
      sheet(380, 40, 110, 104, {
        inner: [textLines(12, 24, 80, 3, 10), rect(12, 60, 44, 16, 8, 'soft-accent accent'), text(34, 71.5, '@Ana', 't', { accent: true }), textLines(12, 90, 60, 1, 10)],
      }),
      rect(180, 30, 160, 120, 6, 'paper'),
      rect(181, 77, 158, 22, 0, 'soft-accent'),
      line(180, 52, 340, 52),
      text(194, 45, 'People', 't', { anchor: 'start' }),
      rows.map((i) => {
        const y = 64 + i * 24
        const on = i === 1
        return [
          `<circle${cls(on ? 'accent' : '')} cx="198" cy="${y}" r="6"/>`,
          on ? text(212, y + 3.5, 'Ana Ribeiro', 't', { anchor: 'start', accent: true }) : line(212, y, 262, y),
          line(282, y, 326, y),
        ]
      }),
      text(85, 172, 'Meeting notes', 'sub'),
      text(260, 172, 'Database', 'sub'),
      text(435, 172, 'Handbook', 'sub'),
    ])
  },

  // Continuous (rolagem) e Single Page (uma página por vez, com ‹ 3 / 12 ›)
  'page-view': () => {
    const page = (x, y) => [line(x, y, x + 56, y, 'bar'), textLines(x, y + 13, 80, 3, 9)]
    return svg(520, 200, 'Continuous shows all the pages one after another; Single Page shows one page at a time with a page control', [
      rect(60, 14, 116, 150, 6, 'paper'),
      page(74, 32),
      line(74, 78, 162, 78, 'rule'),
      page(74, 94),
      line(74, 140, 162, 140, 'rule'),
      line(74, 154, 130, 154, 'bar'),
      line(192, 30, 192, 148, ''),
      arrowHead(192, 30, -Math.PI / 2, ''),
      arrowHead(192, 148, Math.PI / 2, ''),
      text(118, 190, 'Continuous'),
      rect(342, 10, 120, 146, 6, 'paper'),
      rect(336, 16, 120, 146, 6, 'paper'),
      rect(330, 22, 120, 146, 6, 'paper'),
      page(344, 40),
      textLines(344, 90, 80, 3, 9),
      rect(384, 142, 56, 17, 8.5, 'soft-accent accent'),
      text(412, 153.5, '‹ 3 / 12 ›', 't', { accent: true }),
      text(396, 190, 'Single Page'),
    ])
  },
}

// ---------- Páginas ----------

const marker = /(<!-- illustration:([\w-]+) -->)[\s\S]*?(<!-- \/illustration -->)/g
let count = 0
for (const file of fs.readdirSync(pagesDir)) {
  if (!file.endsWith('.md')) continue
  const target = path.join(pagesDir, file)
  const source = fs.readFileSync(target, 'utf-8')
  const result = source.replace(marker, (_, start, name, end) => {
    const draw = illustrations[name]
    if (!draw) throw new Error(`${file}: unknown illustration "${name}"`)
    count++
    // Linhas em branco em volta: o markdown trata o SVG como um bloco de HTML
    return `${start}\n\n${draw()}\n\n${end}`
  })
  if (result !== source) fs.writeFileSync(target, result)
}
console.log(`illustrations: ${count} drawn`)
