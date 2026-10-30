---
title: Links
description: Links to websites, links to any paragraph, and how links look.
---

MarkPlus has two kinds of links:

- **Web links** open a website in your browser.
- **Cross-references** take you to a place in your documents: a page, a section or a single paragraph.

## Add a web link

1. Select the text that should become the link.
2. Press <kbd>⌘K</kbd> and paste the address.

Or just paste an address into the text.

## Link to a paragraph or a title

1. Point at the paragraph or title you want to link to. A **⋮** appears on its left.
2. Click **⋮** and choose **Copy link**. Or put the cursor in it and press <kbd>⌃⌘L</kbd>.
3. Go where you want the link, in the same document or another one, and paste (<kbd>⌘V</kbd>).

The link already shows the paragraph's text. Click it and MarkPlus opens the document, scrolls to that spot and highlights it for a moment.

**To link to a whole document**, right-click its tab and choose **Copy Link**.

:::tip
Want to build a whole set of documents that point to each other? Follow the guide [Documentation with cross-references](../cross-references/).
:::

## Change a link

A link works as one piece: you can't type inside it by accident. To change it, right-click the link and choose **Edit Link…**, or put the cursor next to it and press <kbd>⌘K</kbd>.

- **Text**: what the reader sees
- **Link**: where it goes
- **View**: how it looks (see below)
- **Remove**: keep the text, remove the link

Press <kbd>↩</kbd> to save or <kbd>⎋</kbd> to cancel.

## Link views

The same link can look different depending on what it's for:

<!-- illustration:link-views -->

<svg class="illo" viewBox="0 0 520 256" width="520" role="img" aria-label="The same link shown as Title, Label, URL, Card and Small">
<text x="108" y="28" text-anchor="end" class="sub">Title</text>
<text x="124" y="28" text-anchor="start" class="link accent">Espresso guide</text>
<path class="accent" d="M124 31H204"/>
<text x="108" y="62" text-anchor="end" class="sub">Label</text>
<rect class="paper" x="124" y="49" width="104" height="19" rx="9.5"/>
<g transform="translate(132 53)"><path class="paper" d="M0 0H6.8L9 2.3V11H0Z"/><path d="M6.8 0V2.3H9"/></g>
<text x="148" y="62" text-anchor="start" class="t">Espresso guide</text>
<text x="108" y="96" text-anchor="end" class="sub">URL</text>
<text x="124" y="96" text-anchor="start" class="link accent">https://cafehandbook.example/espresso</text>
<path class="accent" d="M124 99H330"/>
<text x="108" y="144" text-anchor="end" class="sub">Card</text>
<rect class="paper" x="124" y="116" width="300" height="66" rx="8"/>
<g transform="translate(130 122)"><rect class="paper" x="0" y="0" width="84" height="54" rx="3"/><circle cx="58.8" cy="16.2" r="5.4"/><path d="M8.4 45.9L31.9 24.3L48.7 37.8L60.5 29.7L75.6 45.9"/></g>
<text x="226" y="136" text-anchor="start" class="h">Pulling the perfect espresso</text>
<path class="line" d="M226 150H396"/>
<path class="line" d="M226 159H328"/>
<text x="226" y="177" text-anchor="start" class="t">cafehandbook.example</text>
<text x="108" y="222" text-anchor="end" class="sub">Small</text>
<rect class="paper" x="124" y="200" width="220" height="36" rx="8"/>
<circle cx="142" cy="218" r="7"/>
<text x="156" y="215" text-anchor="start" class="t">Pulling the perfect espresso</text>
<text x="156" y="228" text-anchor="start" class="t">cafehandbook.example</text>
</svg>

<!-- /illustration -->

| View | What it looks like | Good for |
| --- | --- | --- |
| **Title** | Just the text, underlined | Links in the middle of a sentence |
| **Label** | A small badge with an icon | Pointing to another document, or a well-known site |
| **URL** | The full web address | When the address itself matters |
| **Card** | A preview with picture, title and description | Recommending an article or a video |
| **Small** | A compact card with the site's icon | A list of useful links |

<img class="shot shot-light" src="../screenshots/link-views-light.webp" width="770" alt="Links to other documents shown as labels, with the document icon" />
<img class="shot shot-dark" src="../screenshots/link-views-dark.webp" width="770" alt="Links to other documents shown as labels, with the document icon" />

<img class="shot shot-light" src="../screenshots/link-card-light.webp" width="788" alt="A web link shown as a card with picture, title and site" />
<img class="shot shot-dark" src="../screenshots/link-card-dark.webp" width="788" alt="A web link shown as a card with picture, title and site" />

**Examples:**

- **Title** in the middle of a sentence: "follow the *espresso guide* before opening".
- **Label** for a list of related documents on a home page, each with its icon.
- **URL** when people need to type or check the address, such as the Wi-Fi setup page.
- **Card** in a reading list: readers see the cover picture and a short description before clicking.
- **Small** for a tidy list of tools: each site with its icon and name, one per line.

To change the view, right-click the link, choose **Edit Link…** and pick one.

- Cards are saved inside the document, so they still look right without internet and don't change if the site changes.
- **Card** and **Small** are for web links.
- Click a card to select it. Double-click it, or use its **↗** button, to open the page.

:::note
Link views, and links to a single paragraph, need a `.mdoc` document. In a `.md` document, links point to the nearest title.
:::
