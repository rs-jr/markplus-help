// Cenas dos prints da ajuda (screenshots.mjs). `run` deixa a tela pronta e devolve o que fotografar:
// um elemento, { clip } (área da janela, em px CSS) ou nada (a janela inteira, 1280×800)

const WIDTH = 1280
const HEIGHT = 800

/** Documento novo (.mdoc), vazio e com o cursor nele */
async function newDocument(page) {
  await page.getByRole('button', { name: 'New document' }).click()
  await page.getByRole('dialog').getByRole('button').filter({ hasText: 'MarkPlus document' }).click()
  await page.waitForSelector('.ProseMirror')
  await page.locator('.ProseMirror').click()
}

async function openDocument(page, title) {
  await page.locator('h3, span').filter({ hasText: new RegExp(`^${title}$`) }).first().click()
  await page.waitForSelector('.ProseMirror, [data-database-editor], table', { timeout: 10000 })
  await page.waitForTimeout(900)
}


/** Ação do menu nativo (os atalhos do menu não chegam pela página) */
async function menu(app, action) {
  await app.evaluate(({ BrowserWindow }, a) => BrowserWindow.getAllWindows()[0].webContents.send('app:menu-action', a), action)
  await new Promise((r) => setTimeout(r, 600))
}

/** Recorte com margens diferentes em cada lado */
async function frame(locator, { top = 24, right = 24, bottom = 24, left = 24 } = {}) {
  const box = await locator.boundingBox()
  const HEIGHT = await locator.page().evaluate(() => innerHeight)
  const x = Math.max(0, box.x - left)
  const y = Math.max(0, box.y - top)
  return { clip: { x, y, width: Math.min(WIDTH, box.x + box.width + right) - x, height: Math.min(HEIGHT, box.y + box.height + bottom) - y } }
}

/** Janela mais alta, para blocos grandes (imagem, anexos) */
async function tall(page, app, height = 1150) {
  await app.evaluate(({ BrowserWindow }, h) => BrowserWindow.getAllWindows()[0].setSize(1280, h), height)
  await page.waitForTimeout(500)
}

async function scrollTo(page, locator) {
  await locator.scrollIntoViewIfNeeded()
  await page.evaluate(() => document.getElementById('editor-scroll-container')?.scrollBy(0, -120))
  await page.waitForTimeout(500)
}

/** Área em volta de vários elementos, com margem, dentro da janela */
async function around(locators, pad = 24) {
  const HEIGHT = await locators[0].page().evaluate(() => innerHeight)
  const boxes = []
  for (const locator of locators) {
    const box = await locator.boundingBox()
    if (box) boxes.push(box)
  }
  if (!boxes.length) throw new Error('nothing to frame')
  const x = Math.max(0, Math.min(...boxes.map((b) => b.x)) - pad)
  const y = Math.max(0, Math.min(...boxes.map((b) => b.y)) - pad)
  const right = Math.min(WIDTH, Math.max(...boxes.map((b) => b.x + b.width)) + pad)
  const bottom = Math.min(HEIGHT, Math.max(...boxes.map((b) => b.y + b.height)) + pad)
  return { clip: { x, y, width: right - x, height: bottom - y } }
}


export const scenes = [
  // Workspaces
  { name: 'workspace-home', run: async () => null },
  {
    name: 'workspace-pinned',
    run: async (page) => around([page.getByText('Cafe Handbook', { exact: true }).first(), page.locator('[aria-label="Pinned documents"]')], 20),
  },
  {
    name: 'document-list',
    run: async (page) => {
      await page.getByLabel('View as list').click()
      await page.waitForTimeout(600)
      return null
    },
  },

  // Documents
  {
    name: 'new-document-dialog',
    settle: 2000,
    run: async (page) => {
      await page.getByRole('button', { name: 'New document' }).click()
      return page.getByRole('dialog')
    },
  },
  {
    name: 'editor',
    run: async (page) => {
      await openDocument(page, 'Start Here')
      return null
    },
  },
  {
    name: 'tabs',
    run: async (page) => {
      for (const title of ['Start Here', 'Product Overview', 'Kickoff Meeting']) {
        await page.locator('[aria-label="Grid"], button:has(svg.lucide-layout-grid)').first().click().catch(() => {})
        await page.waitForTimeout(500)
        await openDocument(page, title)
      }
      // Só as abas e o header, sem a barra lateral
      return { clip: { x: 256, y: 0, width: WIDTH - 256, height: 88 } }
    },
  },
  {
    name: 'document-icon',
    run: async (page) => {
      await openDocument(page, 'Start Here')
      await page.locator('.document-icon-button').click()
      await page.waitForTimeout(600)
      return around([page.locator('.document-icon-button'), page.locator('[data-radix-popper-content-wrapper]').last()], 24)
    },
  },
  {
    name: 'add-icon',
    run: async (page) => {
      // Todo documento do DEMO tem ícone: um novo, sem ícone
      await newDocument(page)
      await page.keyboard.type('Opening checklist')
      await page.keyboard.press('Enter')
      await page.keyboard.type('Before the first customer, check the grinder, the milk and the pastries.')
      await page.locator('.notion-editor-wrapper').hover({ position: { x: 300, y: 60 } })
      await page.waitForTimeout(500)
      const frame = await around([page.locator('.document-icon-add'), page.locator('.ProseMirror')], 32)
      // Em cima, só até o botão (sem as abas)
      const add = await page.locator('.document-icon-add').boundingBox()
      const y = add.y - 16
      return { clip: { ...frame.clip, y, height: frame.clip.y + frame.clip.height - y } }
    },
  },

  // Databases
  {
    name: 'database-table',
    run: async (page) => {
      await page.locator('h3, span').filter({ hasText: /^Features$/ }).first().click()
      await page.waitForSelector('[data-row-id]', { timeout: 10000 })
      await page.mouse.move(5, 790)
      await page.waitForTimeout(300)
      // Só o título e a tabela: a janela inteira fica pequena demais na coluna da ajuda
      return around([page.locator('h1, h2, input').filter({ hasText: /Features/ }).first(), page.locator('[data-column-header]').first(), page.locator('[data-row-id]').last()], 20)
    },
  },
  {
    name: 'database-views-cards',
    run: async (page) => {
      await openDocument(page, 'Product Overview')
      const view = page.locator('.node-databaseView').first()
      await view.scrollIntoViewIfNeeded()
      await page.waitForTimeout(800)
      return view
    },
  },
  {
    name: 'database-views-detail',
    run: async (page) => {
      await openDocument(page, 'Release Notes')
      const view = page.locator('.node-databaseView').filter({ has: page.locator('img, h2, h3') }).first()
      await view.scrollIntoViewIfNeeded()
      await page.waitForTimeout(800)
      return view
    },
  },
  {
    name: 'mention-hover',
    run: async (page) => {
      await openDocument(page, 'Kickoff Meeting')
      const mention = page.locator('.node-databaseMention').first()
      await mention.scrollIntoViewIfNeeded()
      await mention.hover()
      await page.waitForTimeout(1200)
      return around([mention, page.locator('[data-radix-popper-content-wrapper]').last()], 24)
    },
  },
  {
    name: 'mention-menu',
    run: async (page) => {
      await newDocument(page)
      await page.keyboard.type('Ask ')
      await page.keyboard.type('@')
      await page.waitForTimeout(800)
      return around([page.locator('.ProseMirror p').first(), page.locator('div.w-80.bg-popover').last()], 18)
    },
  },
  {
    name: 'row-detail',
    run: async (page) => {
      await openDocument(page, 'Kickoff Meeting')
      await page.locator('.node-databaseMention').first().click()
      await page.waitForTimeout(700)
      return page.getByRole('dialog')
    },
  },

  // Text boxes
  {
    name: 'text-box',
    run: async (page) => {
      await openDocument(page, 'Start Here')
      const box = page.locator('.node-textBox').first()
      await box.locator('p').first().click()
      await page.waitForTimeout(500)
      return frame(box, { top: 64 })
    },
  },

  // Columns, tables, blocks
  {
    name: 'columns',
    run: async (page) => {
      await openDocument(page, 'Product Overview')
      const columns = page.locator('[data-type="flex-columns"]').first()
      await scrollTo(page, columns)
      return frame(columns)
    },
  },
  {
    name: 'table',
    run: async (page) => {
      await openDocument(page, 'Start Here')
      const table = page.locator('.ProseMirror table').first()
      await scrollTo(page, table)
      return frame(table, { bottom: 24 })
    },
  },
  {
    name: 'code-block',
    run: async (page) => {
      await openDocument(page, 'Architecture')
      const code = page.locator('.ProseMirror pre').first()
      await scrollTo(page, code)
      return frame(code)
    },
  },
  {
    name: 'image',
    run: async (page, { app }) => {
      await tall(page, app)
      await openDocument(page, 'Product Overview')
      const image = page.locator('.ProseMirror img').first()
      await scrollTo(page, image)
      await image.click()
      await page.waitForTimeout(500)
      return frame(image, { bottom: 40 })
    },
  },
  {
    name: 'file-attachments',
    run: async (page, { app }) => {
      await tall(page, app)
      await openDocument(page, 'Recipe Cards')
      const files = page.locator('.node-fileAttachment')
      await scrollTo(page, files.first())
      return around([files.first(), files.nth(1)], 24)
    },
  },

  // Links
  {
    name: 'link-views',
    run: async (page) => {
      await openDocument(page, 'Start Here')
      const rows = page.locator('.ProseMirror table tr')
      await scrollTo(page, rows.nth(1))
      return around([rows.nth(1), rows.nth(3)], 16)
    },
  },
  {
    name: 'link-card',
    run: async (page) => {
      await openDocument(page, 'Recipe Cards')
      const card = page.locator('.node-linkCard').first()
      await scrollTo(page, card)
      return frame(card)
    },
  },

  // Search
  {
    name: 'find-bar',
    run: async (page, { app }) => {
      await openDocument(page, 'Kickoff Meeting')
      await menu(app, 'find-replace')
      await page.keyboard.type('video')
      await page.waitForTimeout(800)
      // Só a barra (a ocorrência fica selecionada e abriria a barra de formatação no recorte)
      return { clip: { x: 600, y: 84, width: WIDTH - 600, height: 104 } }
    },
  },
  {
    name: 'search-workspace',
    settle: 1500,
    run: async (page, { app }) => {
      await menu(app, 'search-workspace')
      await page.keyboard.type('brew timer')
      await page.waitForTimeout(1500)
      return page.getByRole('dialog')
    },
  },

  // Export
  {
    name: 'export-pdf',
    settle: 1500,
    run: async (page, { app }) => {
      await openDocument(page, 'Start Here')
      await menu(app, 'export-pdf')
      return page.getByRole('dialog')
    },
  },

  // Appearance
  {
    name: 'header-controls',
    run: async (page) => {
      await openDocument(page, 'Start Here')
      return { clip: { x: 760, y: 0, width: WIDTH - 760, height: 56 } }
    },
  },
  {
    name: 'single-page',
    run: async (page, { app }) => {
      await openDocument(page, 'Product Overview')
      await menu(app, 'page-view-single')
      await page.waitForTimeout(800)
      return null
    },
  },

  // Writing
  {
    name: 'formatting-menu',
    run: async (page) => {
      await openDocument(page, 'Kickoff Meeting')
      const paragraph = page.locator('.ProseMirror > p').filter({ hasText: 'two weeks' }).first()
      await scrollTo(page, paragraph)
      // Seleciona "two weeks" pelo teclado (clicar perto de uma menção abriria a linha)
      await page.evaluate(() => {
        const editor = window.__tiptapEditor
        let from = null
        editor.state.doc.descendants((node, pos) => {
          const at = node.isText ? node.text.indexOf('two weeks') : -1
          if (from === null && at >= 0) from = pos + at
        })
        editor.chain().focus().setTextSelection({ from, to: from + 'two weeks'.length }).run()
      })
      await page.waitForTimeout(800)
      return frame(paragraph, { top: 80, right: 24, left: 40 })
    },
  },
  {
    name: 'slash-menu',
    run: async (page) => {
      await newDocument(page)
      await page.keyboard.type('/')
      await page.waitForTimeout(800)
      const p = await page.locator('.ProseMirror p').first().boundingBox()
      return { clip: { x: p.x - 40, y: p.y - 16, width: 420, height: 440 } }
    },
  },

  // Página inicial da ajuda: a janela inteira, com o chat do Claude aberto
  {
    name: 'hero',
    settle: 1500,
    run: async (page, { app }) => {
      await menu(app, 'width-wide')
      await openDocument(page, 'Product Overview')
      // A página "Team": cards com fotos e colunas (mais variado que a capa do documento)
      await page.getByText('Pilot cafés', { exact: true }).first().click()
      await page.waitForTimeout(1200)
      await menu(app, 'toggle-ai-chat')
      await page.waitForTimeout(1000)
      // Um pedido escrito no campo do chat (não é enviado)
      await page.getByPlaceholder(/^Ask about/).fill('Add a table comparing the two pilot cafés: shops, city and start date')
      // Botões da janela (a captura é só da página, sem a barra de título do macOS)
      await page.addStyleTag({
        content: `body::after { content: ""; position: fixed; z-index: 9999; top: 18px; left: 20px; width: 12px; height: 12px;
          border-radius: 50%; background: #ff5f57; box-shadow: 20px 0 0 #febc2e, 40px 0 0 #28c840; }`,
      })
      await page.mouse.move(640, 790)
      return null
    },
  },
]
