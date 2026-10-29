// Atualiza o width dos prints nas páginas (metade da largura do arquivo, que é 2x). Roda depois
// do screenshots.mjs: node docs/scripts/shot-widths.mjs
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const docs = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const pages = path.join(docs, 'src/content/docs')

// Largura de um WebP (VP8, VP8L ou VP8X), sem dependências
function webpWidth(buf) {
  const chunk = buf.toString('ascii', 12, 16)
  if (chunk === 'VP8X') return 1 + buf.readUIntLE(24, 3)
  if (chunk === 'VP8L') return 1 + (buf.readUInt16LE(21) & 0x3fff)
  return buf.readUInt16LE(26) & 0x3fff
}

let changed = 0
for (const file of await fs.readdir(pages)) {
  if (!file.endsWith('.md')) continue
  const target = path.join(pages, file)
  const text = await fs.readFile(target, 'utf-8')
  const parts = []
  for (const match of text.matchAll(/src="\.\.\/screenshots\/([\w-]+\.webp)" width="\d+"/g)) parts.push(match)
  let next = text
  for (const [whole, image] of parts) {
    const width = Math.round(webpWidth(await fs.readFile(path.join(docs, 'public/screenshots', image))) / 2)
    next = next.replace(whole, `src="../screenshots/${image}" width="${width}"`)
  }
  if (next !== text) {
    await fs.writeFile(target, next)
    changed++
  }
}
console.log(`widths updated in ${changed} pages`)
