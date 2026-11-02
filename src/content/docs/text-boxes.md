---
title: Text boxes
description: Put text in a colored box with an icon, to make a tip or a warning stand out.
---

A text box puts a few lines in a colored box with an icon. Use it for what the reader must not miss: a warning, a tip, a requirement.

**Example:** a yellow box with ⚠️ that says "Important: you need Android 5.0 or later".

## Add a text box

- **From selected text:** select the lines, open the first button of the formatting bar (text styles) and click **Text Box**. The selected paragraphs go into one box.
- **From scratch:** type `/text box` and press <kbd>⏎</kbd>.

<img class="shot shot-light" src="../screenshots/text-box-light.webp" width="788" alt="A blue text box with a light bulb icon, and its color menu above" />
<img class="shot shot-dark" src="../screenshots/text-box-dark.webp" width="788" alt="A blue text box with a light bulb icon, and its color menu above" />

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
  - **with icons**: 1,000 colorful icons that can move, in seven styles: **Glass**, **Clay**, **Soft 3D**, **Suite**, **Bento**, **Dock** and **Chrome**. Pick the style above the icons; switching it also changes the icon already in the box.

  In a library, type to search, for example `warning`, `info` or `check`. In **with icons** the search also understands related words and typos: `notification` finds the bell, `throw away` finds the trash.
- **Remove** leaves the box without an icon.

### Icons that move

Each **with icons** icon has a movement of its own, drawn for it: the bell, for example, rings. Choose it with the three buttons below the styles:

- 🚫 **No motion**: the icon stays still.
- 👆 **Move on hover**: it moves while you point at it.
- 🔄 **Always moving**: it keeps moving.

Point at an icon in the picker to preview its movement before you choose.

**Example:** in an onboarding guide, a ringing bell in a yellow box draws the eye to the one step nobody should skip, while the rest of the page stays calm.

Icons move only in the document itself: in the box and above the title. In tabs, the document list and links they stay still, and in a PDF they're printed still. On the [exported web page](../export/) they move the same way as in the app. If **Reduce motion** is on in macOS (System Settings › Accessibility › Display), every icon stays still.

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
