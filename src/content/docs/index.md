---
title: MarkPlus Help
description: Learn how to write, organize and share documents with MarkPlus.
template: splash
hero:
  tagline: Write clearly, find anything and share easily. Everything stays on your Mac.
  image:
    file: ../../assets/markplus.png
  actions:
    - text: See a live example
      link: demo/
      icon: external
      attrs:
        target: _blank
    - text: Start here
      link: getting-started/
      icon: right-arrow
      variant: secondary
    - text: Keyboard shortcuts
      link: shortcuts/
      variant: minimal
---

<img class="shot shot-hero shot-light" src="screenshots/hero-light.webp" width="1280" alt="MarkPlus window: a document with its pages in the sidebar and the Claude chat on the right" />
<img class="shot shot-hero shot-dark" src="screenshots/hero-dark.webp" width="1280" alt="MarkPlus window: a document with its pages in the sidebar and the Claude chat on the right" />

## More than a text editor

MarkPlus brings your writing, your data and your other apps together in one place, on your Mac. Documents hold the story, databases hold the facts, and Claude connects it all.

<!-- illustration:building-blocks -->

<svg class="illo" viewBox="0 0 520 252" width="520" role="img" aria-label="A workspace is a folder with documents and databases; a database row appears in documents as a mention and as a view">
<text x="20" y="16" text-anchor="start" class="label">Workspace</text>
<text x="96" y="16" text-anchor="start" class="sub">a folder on your Mac</text>
<rect class="dash" x="20" y="26" width="480" height="178" rx="14"/>
<path class="accent dash flow" d="M188 120Q140 120 98 120"/>
<path class="accent" d="M103.3 117.1L98 120L103.3 122.9"/>
<path class="accent dash flow" d="M332 120Q356 120 384 128"/>
<path class="accent" d="M378.1 129.3L384 128L379.7 123.8"/>
<g transform="translate(40 52)"><path class="paper" d="M0 0H92L104 12V128H0Z"/><path d="M92 0V12H104"/><path class="line" d="M12 22H86"/>,<path class="line" d="M12 32H56.4"/><rect class="soft-accent accent" x="10" y="60" width="44" height="16" rx="8"/>,<text x="32" y="71.5" text-anchor="middle" class="t accent">@Ana</text><path class="line" d="M12 92H86"/>,<path class="line" d="M12 102H86"/>,<path class="line" d="M12 112H56.4"/></g>
<g transform="translate(376 52)"><path class="paper" d="M0 0H92L104 12V128H0Z"/><path d="M92 0V12H104"/><path class="line" d="M12 22H86"/>,<path class="line" d="M12 32H56.4"/><rect class="paper accent" x="10" y="58" width="24" height="28" rx="3"/>,<path class="accent" d="M15 78H27"/>,<rect class="paper accent" x="40" y="58" width="24" height="28" rx="3"/>,<path class="accent" d="M45 78H57"/>,<rect class="paper accent" x="70" y="58" width="24" height="28" rx="3"/>,<path class="accent" d="M75 78H87"/><path class="line" d="M12 104H86"/>,<path class="line" d="M12 114H56.4"/></g>
<g transform="translate(190 62)"><rect class="paper" x="0" y="0" width="140" height="112" rx="6"/><text x="12" y="15.5" text-anchor="start" class="t">People</text><path class="line" d="M0 24H140"/>,<circle cx="14" cy="35" r="4.5"/>,<path class="line" d="M26 35H78.4"/>,<path class="line" d="M92.4 35H128"/><rect class="soft-accent pulse" x="1" y="46" width="138" height="22" rx="0"/>,<circle class="accent" cx="14" cy="57" r="4.5"/>,<path class="accent" d="M26 57H78.4"/>,<path class="line" d="M92.4 57H128"/>,<circle cx="14" cy="79" r="4.5"/>,<path class="line" d="M26 79H78.4"/>,<path class="line" d="M92.4 79H128"/>,<circle cx="14" cy="101" r="4.5"/>,<path class="line" d="M26 101H78.4"/>,<path class="line" d="M92.4 101H128"/></g>
<text x="92" y="224" text-anchor="middle" class="label">Document</text>
<text x="92" y="240" text-anchor="middle" class="sub">Text, pictures, files</text>
<text x="260" y="224" text-anchor="middle" class="label">Database</text>
<text x="260" y="240" text-anchor="middle" class="sub">Rows of the same kind</text>
<text x="428" y="224" text-anchor="middle" class="label">Document</text>
<text x="428" y="240" text-anchor="middle" class="sub">Shows the database</text>
</svg>

<!-- /illustration -->

## What you can build

**A team handbook people actually use.** Keep the team in a database and write "Ask @Ana" anywhere: pointing at the name shows her photo and phone. A page of cards shows everyone by role. Send the whole handbook as [one web page](export/#share-a-whole-workspace) that opens on any phone.

**A product plan that stays up to date.** Features in a database, shown as a list grouped by status and a chart by release. The Figma frame of each screen [embedded](blocks/#videos-maps-figma-and-websites) right under its description: when the design changes, the plan shows it.

**A plan straight out of a meeting.** Ask Claude to read the meeting transcript, list the tasks in a database, show them as cards on your project page and link each one to its Figma frame. [See how](ai/#putting-it-all-together).

**Documentation that links itself together.** Every link can point to an exact paragraph, even in another document. A glossary term, a "see also", a step in another manual: one click and you're there. [Cross-references](cross-references/).

**Research that keeps its sources.** Claude searches the web and writes the summary with the sources. The best articles show up as cards with picture and description; the papers you're reading live in a reading list database.

**Meeting minutes with everything in them.** Date, attendees, decisions and the recording link in a database; the audio of the meeting [plays in the document](blocks/#audio-and-video).

**See it live:** [Cafe Handbook](demo/) is a sample workspace made in MarkPlus and exported as a web page: a handbook, a product plan, release notes, meeting minutes and the databases behind them, with mentions, cards, charts and cross-references. It opens in your browser, read only, like the pages you'll send to others.

More ideas, and how the pieces fit, in [How it fits together](concepts/).

## Everything you'd expect, too

- **Write comfortably.** What you see is what you get. Select a word to format it, or type <kbd>/</kbd> to add anything.
- **Long documents as pages.** Every big title is a page in the sidebar. Read it all at once or [one page at a time](appearance/#pages-continuous-or-one-at-a-time).
- **Find anything.** Search one document or all of them, without worrying about accents.
- **Share any way.** PDF, Markdown, the `.mdoc` file itself, or the whole workspace as a web page.
- **Your files, your Mac.** Plain files in a folder you choose. No account, no cloud of ours.

## Where to begin

- New here? Follow [Start here](getting-started/). It takes five minutes.
- Want the big picture? [How it fits together](concepts/) explains workspaces, documents and databases, and how to combine them.
- Using AI? [Writing with AI](ai/) shows what Claude can do inside your documents and with your other apps.
- Looking for a shortcut? See [Keyboard shortcuts](shortcuts/).
- Something isn't working? Check [Questions and answers](faq/).
