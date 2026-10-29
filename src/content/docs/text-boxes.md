---
title: Text boxes
description: Put text in a colored box with an icon, to make a tip or a warning stand out.
---

A text box puts a few lines in a colored box with an icon. Use it for what the reader must not miss: a warning, a tip, a requirement.

**Example:** a yellow box with ⚠️ that says "Important: you need Android 5.0 or later".

## Add a text box

- **From selected text:** select the lines, open the first button of the formatting bar (text styles) and click **Text Box**. The selected paragraphs go into one box.
- **From scratch:** type `/text box` and press <kbd>⏎</kbd>.

A new box is gray with 💡. Inside it you can write anything: paragraphs, titles, lists, images.

## Color and icon

Click inside the box. A small bar appears above it, on the left:

- **Color**: gray, cyan, orange, yellow, green, blue, purple, pink, red or dark. Each color has its own shade in light and dark mode. **Dark** is a very dark gray box with light text, in both modes.
- **⋯**: remove or delete the box (see below). A box without an icon also has **Add Icon** here.

To change the icon, click it in the box. You can pick an emoji or an icon:

- **Emoji** shows common emoji. Type to search, or paste any emoji in the search field. **More emoji…** opens the macOS emoji picker.
- **Icons** first lists the icon libraries. Pick one to see its icons, and click **Libraries** to go back:
  - **Phosphor**: about 1,500 icons in the color of the text, in three styles: **Regular** (outline), **Fill** and **Duotone** (two tones). Switching the style also changes the icon already in the box, and the app remembers your choice.
  - **Fluent Color**: about 200 colorful icons by Microsoft, like calendars, folders and alerts.

  In a library, type to search, for example `warning`, `info` or `check`.
- **Remove** leaves the box without an icon.

:::tip
Color alone is hard to tell apart for color-blind readers. Pair the color with an icon that says the same thing, like ⚠️ for a warning.
:::

## Leave or remove the box

- **Leave the box:** press <kbd>⏎</kbd> on an empty line at the end of the box.
- **Remove the box, keep the text:** press <kbd>⌫</kbd> at the start of the box, or use **⋯ › Remove Box (Keep Text)**. You can also click **Text Box** again in the text styles.
- **Delete the box and its text:** **⋯ › Delete Box**.

## In PDF and with AI

Text boxes keep their color and icon when you export to PDF. AI clients see them as HTML (`<div data-type="text-box">`) and keep them when they edit the document.

:::note
Text boxes need a `.mdoc` document. Pasted into a `.md` document, the box goes away and the text stays.
:::
