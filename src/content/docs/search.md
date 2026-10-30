---
title: Search
description: Find and replace in a document, or search all your documents at once.
---

## Find in a document

Press <kbd>⌘F</kbd>, or click the magnifying glass at the top. Every match is highlighted, and a counter shows how many there are.

<img class="shot shot-light" src="../screenshots/find-bar-light.webp" width="680" alt="The find bar with the replace field open" />
<img class="shot shot-dark" src="../screenshots/find-bar-dark.webp" width="680" alt="The find bar with the replace field open" />

- Press <kbd>↩</kbd> to go to the next match and <kbd>⇧↩</kbd> to go back.
- Press <kbd>⎋</kbd> to close.

:::tip
You don't need to type accents. Searching **acao** also finds **ação**.
:::

## Replace

Press <kbd>⌥⌘F</kbd>, or click the arrow on the left of the search field.

- **Replace** changes the current match.
- **Replace All** changes every match at once.

Bold, links and other formatting are kept. Changed your mind? One <kbd>⌘Z</kbd> undoes it all.

**Example:** the shop changed its name from *Bean There* to *Bean Here*. Search for *Bean There*, type *Bean Here* as the replacement and click **Replace All**.

## Search options

The buttons in the search field:

| Button | What it does | Example |
| --- | --- | --- |
| **Aa** | Match upper and lower case | **Apple** doesn't find *apple* |
| **Whole word** | Only whole words | **cat** doesn't find *category* |
| **á** | Ignore accents (on by default) | **cafe** finds *café* |

## Ready-made searches

Click the **wand** button to find things by their kind, without knowing exactly what they say:

- **Numbers**, **percentages**, **money**, **dates** and **times**
- **Emails**, **links**, **phone numbers** and **hashtags**
- **Text in quotes** or **in parentheses**
- **Repeated words** ("the the") and **double spaces**
- **Words starting with…** or **ending with…**: you type the beginning or the end

**Example:** before sending a report, pick **Repeated word** and **Double spaces** to catch small typos.

## Search all documents

Press <kbd>⇧⌘F</kbd> to search every document in the workspace at once. Results are grouped by document, with a short preview of each match.

<!-- illustration:search-workspace -->

<svg class="illo" viewBox="0 0 520 206" width="520" role="img" aria-label="Search all documents for a word; clicking a result opens the document right at the match">
<rect class="paper" x="30" y="18" width="210" height="30" rx="15"/>
<circle cx="50" cy="32" r="6"/>
<path d="M54 36L59 41"/>
<text x="68" y="37" text-anchor="start" class="t">espresso</text>
<rect class="paper accent" x="30" y="64" width="210" height="30" rx="6"/>
<g transform="translate(40 71)"><path class="paper" d="M0 0H9L12 3V16H0Z"/><path d="M9 0V3H12"/></g>
<path class="line" d="M62 75H150"/>
<rect class="soft-accent" x="62" y="81" width="48" height="8" rx="3"/>
<path class="line" d="M116 85H200"/>
<rect class="paper" x="30" y="102" width="210" height="30" rx="6"/>
<g transform="translate(40 109)"><path class="paper" d="M0 0H9L12 3V16H0Z"/><path d="M9 0V3H12"/></g>
<path class="line" d="M62 113H150"/>
<rect class="soft-accent" x="62" y="119" width="48" height="8" rx="3"/>
<path class="line" d="M116 123H200"/>
<rect class="paper" x="30" y="140" width="210" height="30" rx="6"/>
<g transform="translate(40 147)"><path class="paper" d="M0 0H9L12 3V16H0Z"/><path d="M9 0V3H12"/></g>
<path class="line" d="M62 151H150"/>
<rect class="soft-accent" x="62" y="157" width="48" height="8" rx="3"/>
<path class="line" d="M116 161H200"/>
<path class="accent" d="M242 79Q284 79 330 100"/>
<path class="accent" d="M324 100.4L330 100L326.4 95.2"/>
<g transform="translate(330 14)"><path class="paper" d="M0 0H148L160 12V176H0Z"/><path d="M148 0V12H160"/><path class="line" d="M14 22H132"/>,<path class="line" d="M14 33H132"/>,<path class="line" d="M14 44H132"/>,<path class="line" d="M14 55H84.8"/><rect class="soft-accent pulse" x="12" y="74" width="136" height="26" rx="4"/><path class="accent" d="M18 82H120"/><path class="accent" d="M18 92H90"/><path class="line" d="M14 120H132"/>,<path class="line" d="M14 131H132"/>,<path class="line" d="M14 142H132"/>,<path class="line" d="M14 153H84.8"/></g>
<text x="135" y="200" text-anchor="middle" class="sub">Search all documents</text>
<text x="410" y="200" text-anchor="middle" class="sub">Opens at the match</text>
</svg>

<!-- /illustration -->

<img class="shot shot-light" src="../screenshots/search-workspace-light.webp" width="672" alt="Results of a search in every document of the workspace" />
<img class="shot shot-dark" src="../screenshots/search-workspace-dark.webp" width="672" alt="Results of a search in every document of the workspace" />

Click a result and the document opens right on that spot, with the search already filled in.

:::note
To replace text, open the document and use <kbd>⌥⌘F</kbd>. Replacing in all documents at once isn't available.
:::
