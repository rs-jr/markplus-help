---
title: Pages, images and more
description: Titles and pages, lists, code, images, videos and attached files.
---

## Titles and pages

Each **big title** (Heading 1) starts a new page. Smaller titles (Heading 2 to 4) are sections inside that page.

<!-- illustration:titles-pages -->

<svg class="illo" viewBox="0 0 520 206" width="520" role="img" aria-label="Each big title (#) in a document becomes a page in the sidebar, with smaller titles inside it">
<g transform="translate(30 10)"><path class="paper" d="M0 0H178L190 12V172H0Z"/><path d="M178 0V12H190"/><text x="14" y="34" text-anchor="start" class="h"># Pancakes</text>,<path class="line" d="M14 45H104"/><text x="14" y="70" text-anchor="start" class="t">## Ingredients</text>,<path class="line" d="M14 81H104"/><text x="14" y="100" text-anchor="start" class="t">## Steps</text>,<path class="line" d="M14 111H104"/><text x="14" y="136" text-anchor="start" class="h"># Lemon cake</text>,<path class="line" d="M14 147H104"/></g>
<path class="accent dash flow" d="M186 40Q260 40 318 54"/>
<path class="accent" d="M312.2 55.6L318 54L313.6 50"/>
<path class="accent dash flow" d="M186 142Q260 142 318 126"/>
<path class="accent" d="M313.7 130.2L318 126L312.2 124.6"/>
<rect class="paper" x="310" y="20" width="180" height="150" rx="10"/>
<text x="324" y="40" text-anchor="start" class="t">Pages</text>
<path d="M326 50l4 4l-4 4"/>
<text x="338" y="58" text-anchor="start" class="h accent">Pancakes</text>
<text x="352" y="82" text-anchor="start" class="t">Ingredients</text>
<text x="352" y="106" text-anchor="start" class="t">Steps</text>
<path d="M326 122l4 4l-4 4"/>
<text x="338" y="130" text-anchor="start" class="h accent">Lemon cake</text>
<text x="125" y="200" text-anchor="middle" class="sub">Document</text>
<text x="400" y="200" text-anchor="middle" class="sub">Sidebar</text>
</svg>

<!-- /illustration -->

**Example:** a recipe book where each recipe is a page:

```text
# Pancakes
## Ingredients
## Steps
# Lemon cake
## Ingredients
## Steps
```

The sidebar (<kbd>⌘\</kbd>) shows these titles as a table of contents:

- Click a title to jump to it. The one you're reading is highlighted.
- Click the small arrow to open or close a page's sections.

:::tip
Prefer to see one page at a time, like a book? See [Pages: continuous or one at a time](../appearance/#pages-continuous-or-one-at-a-time).
:::

## Lists and to-dos

- **Bullet** and **numbered** lists
- **To-dos** with checkboxes: click the box to tick it

Press <kbd>Tab</kbd> to indent an item and <kbd>⇧Tab</kbd> to move it back.

## Code

For snippets of code or commands, add a **Code Block** (type `/code`). Click inside it to:

- choose the **language**, which colors the code;
- **copy** all of it in one click;
- turn **word wrap** on or off for long lines.

<img class="shot shot-light" src="../screenshots/code-block-light.webp" width="788" alt="A code block with colored syntax" />
<img class="shot shot-dark" src="../screenshots/code-block-dark.webp" width="788" alt="A code block with colored syntax" />

## Images

- **Drag** a picture into the document, or **paste** it (<kbd>⌘V</kbd>). A screenshot works too.
- To add a picture from the web, click the image button in the toolbar and paste its address.

<img class="shot shot-light" src="../screenshots/image-light.webp" width="788" alt="A selected image with the resize handles on the sides" />
<img class="shot shot-dark" src="../screenshots/image-dark.webp" width="788" alt="A selected image with the resize handles on the sides" />

Click an image to:

- **resize** it by dragging its corner;
- **add or remove a border**;
- **view it full screen** or **download** a copy.

## Videos, maps, Figma and websites

Show a video, a map, a design or another website **inside** your document, working: the video plays, the map moves, the Figma file can be zoomed.

<!-- illustration:embeds -->

<svg class="illo" viewBox="0 0 520 204" width="520" role="img" aria-label="Videos, maps, Figma and FigJam files and music shown inside a document">
<path class="dash flow" d="M96 58Q260 58 184 98"/>
<path class="dash flow" d="M96 140Q260 140 184 98"/>
<path class="dash flow" d="M424 58Q260 58 336 98"/>
<path class="dash flow" d="M424 140Q260 140 336 98"/>
<g transform="translate(170 14)"><path class="paper" d="M0 0H168L180 12V170H0Z"/><path d="M168 0V12H180"/><path class="line" d="M14 24H144"/>,<path class="line" d="M14 34H92"/><rect class="paper accent" x="14" y="46" width="152" height="88" rx="6"/><circle class="accent pulse" cx="90" cy="90" r="16"/><path class="fill-accent" d="M85 81L99 90L85 99Z"/><path class="line" d="M14 148H144"/>,<path class="line" d="M14 158H92"/></g>
<rect class="paper" x="52" y="40" width="40" height="36" rx="8"/>
<path d="M67 50L80 58L67 66Z"/>
<text x="72" y="92" text-anchor="middle" class="sub">Videos</text>
<rect class="paper" x="52" y="122" width="40" height="36" rx="8"/>
<path d="M72 150C63 140, 63 137, 63 137a9 9 0 0 1 18 0C81 137, 81 140 72 150Z"/>
<circle cx="72" cy="137" r="3"/>
<text x="72" y="174" text-anchor="middle" class="sub">Maps</text>
<rect class="paper" x="428" y="40" width="40" height="36" rx="8"/>
<rect x="437" y="49" width="9" height="9" rx="2"/>
<circle cx="454" cy="53.5" r="4.5"/>
<path d="M442 68L447 60L452 68Z"/>
<rect x="452" y="61" width="7" height="7" rx="3.5"/>
<text x="448" y="92" text-anchor="middle" class="sub">Figma, FigJam</text>
<rect class="paper" x="428" y="122" width="40" height="36" rx="8"/>
<path d="M444 147V131L456 128V144"/>
<circle cx="441" cy="147" r="3.5"/>
<circle cx="453" cy="144" r="3.5"/>
<text x="448" y="174" text-anchor="middle" class="sub">Music, slides…</text>
</svg>

<!-- /illustration -->

1. Type `/iframe` or use the toolbar button.
2. Paste the **embed address** of the video or page.

Most sites give you a special address for this, under **Share › Embed**. When they give you a piece of code that starts with `<iframe`, copy only the address inside `src="…"`.

| What | Where to find the address |
| --- | --- |
| **YouTube** | **Share › Embed**. The address looks like `https://www.youtube.com/embed/…` |
| **Vimeo** | **Share › Embed**. Looks like `https://player.vimeo.com/video/…` |
| **Loom** | **Share › Embed**. Looks like `https://www.loom.com/embed/…` |
| **Google Maps** | **Share › Embed a map** |
| **Google Docs, Sheets and Slides** | **File › Share › Publish to web › Embed** |
| **Figma and FigJam** | In the file's **Share** window, **Get embed code**. Works for designs, prototypes and FigJam boards |
| **Spotify** | **⋯ › Share › Embed** on a song, album, playlist or podcast |
| **CodePen, Miro, Canva and others** | Look for **Embed** in their share menu |

To change it, point at it and click **Resize** (top right). A small toolbar appears above it:

- **Change URL…** shows something else in the same place, keeping the size;
- the arrow opens the page in your browser;
- the trash can removes it.

Drag the handles on the right and at the bottom to change its size. It never gets wider than the document.

**Example:** in a product plan, embed the Figma frame of each screen right below its description. When the designer changes the design, the document shows the new version.

:::note
Embedded content comes from the internet, so it needs a connection, and private files (a Figma file only your team can see) may ask the reader to sign in. In a PDF, an embed becomes a link to it. In an [exported web page](../export/#share-a-whole-workspace), it keeps working.
:::

## Audio and video

To have the file itself in the document, instead of a link to a site, drag it in: a song, a voice memo, a meeting recording, a screen recording. It plays right there, with its own player.

- Common formats work: **MP3, M4A and WAV** for audio, **MP4** (and most **MOV**) for video.
- The file goes inside the `.mdoc`, so it works offline and travels with the document. Long videos make the document big: for those, an embed from YouTube, Vimeo or Loom is lighter.

**Example:** attach the recording of the meeting at the top of the minutes, so anyone can listen to the part they missed.

## Attached files

Drag any file into the document, such as a PDF, a spreadsheet, a song or a video. It shows up as a small card.

<img class="shot shot-light" src="../screenshots/file-attachments-light.webp" width="788" alt="An audio file with a player and a PDF attachment" />
<img class="shot shot-dark" src="../screenshots/file-attachments-dark.webp" width="788" alt="An audio file with a player and a PDF attachment" />

- Click it to choose a size: **Small**, **Regular** or **Square** (with a preview).
- Point at it for **Open**, **Download** and **Delete**.
- Songs and videos play right in the document.

The file is kept inside the document, so it goes along when you move or send it.

:::note
Resized images, borders, videos and attached files need a `.mdoc` document.
:::
