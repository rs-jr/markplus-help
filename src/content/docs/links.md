---
title: Links
description: Web links, cross-references between documents, and link views.
---

## Add a link

- Select text and click **Link** in the formatting menu, then paste the address.
- Or paste a URL directly.

Click a web link to open it in your browser.

## Link to a paragraph or heading

Cross-references take you to an exact place, in the same document or another one:

1. Click the **⋮** handle next to the block and choose **Copy link** — or put the cursor in it and press <kbd>⌃⌘L</kbd>.
2. Paste where you want the link.

Clicking the link opens the document (if needed), scrolls to the block and briefly highlights it. To link to a whole document, right-click its tab and choose **Copy Link**.

:::note
In `.md` documents, links can point to headings only (Markdown can't store an ID for a paragraph). MarkPlus tells you when it links to the nearest heading instead.
:::

## Edit a link

Right-click a link (or a link card) and choose **Edit Link…**:

- **Text** — what the link shows.
- **Link** — the address.
- **View** — how the link looks (see below).
- **Remove** — keeps the text, removes the link.

Press <kbd>↩</kbd> to save, <kbd>⎋</kbd> to cancel.

## Link views

| View | Looks like | Default for |
| --- | --- | --- |
| **Title** | The link text | Web links and links within the same document |
| **Label** | A small badge with an icon — a page icon for MarkPlus documents, the site's favicon for web links | Links to other documents |
| **URL** | The full address | — |
| **Card** | A preview card with the page's image, title, description and site | — |
| **Small** | A compact card with the site's favicon, like a file attachment | — |

- **Card** and **Small** work with web links (`http`/`https`). They become their own block below the paragraph (or replace the paragraph if it only had the link).
- The preview image and favicon are **saved in the document**, so cards work offline and don't change if the site does. If the site doesn't respond, the card shows just the address.
- Click a card to select it; use its **↗** button or double-click to open the link. Right-click it for **Edit Link…**, **Open Link** and **Copy Link**.
- Link views are `.mdoc` only.
