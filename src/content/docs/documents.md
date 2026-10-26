---
title: Documents and tabs
description: Create, open, rename and organize documents, and work with tabs.
---

## .mdoc or .md?

When you create a document (<kbd>⌘N</kbd> or the **+** card in the grid), MarkPlus asks for a format:

| | `.mdoc` (recommended) | `.md` |
| --- | --- | --- |
| What it is | MarkPlus's own format | Plain Markdown text |
| Keeps | Everything: image sizes and borders, columns, colors, highlights, underline, embeds, attachments, link views, links to paragraphs | Only what Markdown can express |
| Images | Stored inside the document | In an `assets/` folder next to the file |
| Opens in other apps | No (it's a package for MarkPlus) | Yes, any text editor |

In a `.md` document, features that Markdown can't store are hidden or disabled, and their tooltip says **Only available in .mdoc documents**.

:::tip
To upgrade a `.md` file, use **File › Convert to .mdoc** (or right-click its card in the grid). The `.md` goes to the Trash only after the new `.mdoc` is saved.
:::

A `.mdoc` is a **package**: a folder that Finder shows as a single file. Moving, copying or deleting it takes its images and attachments along. To send one by email or through a website, zip it first.

## Open documents

- **The grid** shows every document in the active workspace with a preview, newest first. Click a card to open it.
- **File › Open…** (<kbd>⌘O</kbd>), **Open Recent**, double-clicking a file in Finder or dragging it onto the Dock icon opens any `.md` or `.mdoc`, even outside the workspace. These *external* documents are edited in place and don't appear in the grid.
- **New Window** (<kbd>⇧⌘N</kbd>) opens another window on the same workspace.

## Tabs

Every document you open gets a tab below the toolbar.

- **Switch**: click a tab, or use <kbd>⇧⌘]</kbd> / <kbd>⇧⌘[</kbd> (also <kbd>⌃⇥</kbd> / <kbd>⌃⇧⇥</kbd>).
- **Close**: the **×**, a middle-click, or <kbd>⌘W</kbd>. Closing the last tab returns to the grid. <kbd>⇧⌘W</kbd> closes the window.
- **Reorder**: drag a tab.
- **Rename**: double-click the name in the tab. The extension can't be changed this way.
- **More** (right-click a tab): **Move to New Window**, **Rename…**, **Copy Link**, **Close Tab**, **Close Other Tabs**.

Each tab keeps its own undo history and scroll position. Your open tabs are remembered per workspace.

## Rename and delete

- The **file name is the document title**. Renaming in MarkPlus renames the file; renaming in Finder changes the title.
- Right-click a card in the grid for **Edit**, **Rename…**, **Convert to .mdoc** (`.md` only) and **Delete**.
- **Delete** moves the document to the Trash. For external documents it only removes them from MarkPlus — the file stays where it is.

## Saving

There's no need to save: changes are written automatically two seconds after you stop typing, and before you switch documents, close the window or quit. <kbd>⌘S</kbd> saves right away.

If a document changes outside MarkPlus (Finder, iCloud, another editor) and you have no unsaved edits, it reloads automatically.

## Footer

At the bottom of the window (turn each side on or off in **View › Path Bar** / **View › Status Bar**):

- **Path bar** — where the document lives, Finder style. Click the last folder to open it.
- **Status bar** — file size, then characters • words • paragraphs, and the **● AI** indicator (see [AI](../ai/)).
