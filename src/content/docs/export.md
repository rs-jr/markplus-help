---
title: Export
description: Export to PDF and Markdown, and copy in other formats.
---

## PDF

**File › Export as PDF…** (<kbd>⌥⌘E</kbd>) lets you choose:

- **Paper** — A4 or Letter.
- **Orientation** — Portrait or Landscape.
- **Page numbers** — "page / total" in the footer.
- **Bookmarks** — a table of contents in the PDF's sidebar, built from your headings.

Then pick where to save. Your choices are remembered.

### What changes on paper

| In the document | In the PDF |
| --- | --- |
| Links to a section of the same document | Still clickable: they jump to that page of the PDF |
| Links to another document | Text with the name: "(See: Notes › Introduction)" |
| Web links | Clickable, open in the browser |
| Embeds (iframes) | "▶ YouTube video: https://…", with a working link |
| Attachments | "📎 file.pdf (2 KB)" |
| Link cards | "🔗 Title — Site", with a working link |
| Code blocks | Long lines wrap so nothing is cut off |

The PDF always uses a light theme, includes edits you haven't saved yet, and avoids breaking headings, images and tables across pages.

:::tip
For lines that break in the same places as the PDF, write with the **Narrow (A4)** or **Wide (A4 - landscape)** width. See [Appearance](../appearance/#width).
:::

## Markdown

**File › Export Markdown…** (<kbd>⇧⌘E</kbd>) saves a `.md` copy. Elements Markdown can't express (columns, colors, embeds, attachments) are written as HTML so they aren't lost; attachments themselves aren't included.

## Copy and paste

- **File › Copy as Markdown** (<kbd>⌥⌘C</kbd>) copies the whole document as Markdown. **File › Paste Markdown** (<kbd>⌥⌘V</kbd>) replaces it with Markdown from the clipboard.
- To copy just the selection, right-click and choose **Copy as Markdown**, **Copy as Rich Text** or **Copy as HTML**.
