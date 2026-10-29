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

/** Área em volta de vários elementos, com margem, dentro da janela */
async function around(locators, pad = 24) {
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
]
