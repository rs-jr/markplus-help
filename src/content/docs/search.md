---
title: Search
description: Find and replace in a document, search the whole workspace, and use ready-made patterns.
---

## Find in the document

Press <kbd>⌘F</kbd> (or click the magnifying glass in the header). Matches are highlighted and the counter shows where you are.

- <kbd>↩</kbd> or <kbd>⌘G</kbd> — next match. <kbd>⇧↩</kbd> or <kbd>⇧⌘G</kbd> — previous.
- <kbd>⎋</kbd> closes the find bar and clears the highlights.
- **Edit › Find › Use Selection for Find** searches for the selected text.

## Replace

Press <kbd>⌥⌘F</kbd> or click the arrow on the left of the find bar.

- **Replace** changes the current match and moves to the next.
- **Replace All** (or <kbd>⌘↩</kbd>) changes every match. One <kbd>⌘Z</kbd> undoes it all.

Bold, links and other formatting are kept.

## Options

| Button | What it does |
| --- | --- |
| **Aa** | Match case |
| **Whole word** | Only whole words: `cat` won't match `category` |
| **á** | Ignore accents — on by default. `acao` finds `ação`, and `ação` finds `acao` |
| **.\*** | Regular expression |

Your choices are remembered.

## Patterns

Don't know regular expressions? Click the **wand** button and pick a pattern. It shows as a label in the search field; hover over it to see the expression.

Any number · Percentage · Money · Date · Time · Email · Link · Phone · Hashtag · Text in quotes · Text in parentheses · Repeated word · Double spaces

Some patterns ask for a word: **Word starting with…**, **Word ending with…**, **Start of paragraph…**, **End of paragraph…**.

:::tip
With regular expressions, use `$1`, `$2`… in the replacement to reuse the parts matched by each `( )` group, and `$&` for the whole match. Accents from the original text are kept.
:::

Searches run within each paragraph, table cell or code line, so `^` and `$` mean the start and end of a paragraph.

## Search the workspace

Press <kbd>⇧⌘F</kbd> (or the magnifying glass while the grid is showing) to search every document in the active workspace. The same options and patterns are available.

Results are grouped by document with a snippet of each match. Use the arrow keys and <kbd>↩</kbd>, or click, to open the document at that exact match — with the search already in the find bar.

Workspace search only finds; to replace, open the document and use <kbd>⌥⌘F</kbd>.
