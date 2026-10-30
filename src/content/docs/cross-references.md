---
title: Documentation with cross-references
description: A step-by-step guide to building a set of documents that point to each other.
---

Good documentation lets readers jump straight to what they need: "see the *Refunds* section", "this word is explained in the *Glossary*". In MarkPlus, these jumps are **cross-references**, links that go to an exact paragraph or section, even in another document.

<!-- illustration:cross-reference -->

<svg class="illo" viewBox="0 0 520 204" width="520" role="img" aria-label="A link in the Opening and closing document goes straight to the Espresso section of the Coffee recipes document">
<g transform="translate(30 16)"><path class="paper" d="M0 0H178L190 12V160H0Z"/><path d="M178 0V12H190"/><text x="14" y="28" text-anchor="start" class="h">Opening</text><path class="line" d="M14 46H164"/>,<path class="line" d="M14 58H104"/><text x="14" y="83" text-anchor="start" class="t">Make a test</text><rect class="soft-accent accent" x="72" y="71" width="58" height="16" rx="8"/><text x="101" y="82.5" text-anchor="middle" class="t accent">Espresso</text><path class="line" d="M14 104H164"/>,<path class="line" d="M14 116H164"/>,<path class="line" d="M14 128H104"/></g>
<g transform="translate(300 16)"><path class="paper" d="M0 0H178L190 12V160H0Z"/><path d="M178 0V12H190"/><rect class="soft-accent pulse" x="8" y="12" width="166" height="56" rx="5"/><path class="accent" d="M8 16L8 64"/><text x="16" y="30" text-anchor="start" class="h">Espresso</text><path class="line" d="M16 46H156"/>,<path class="line" d="M16 58H100"/><path class="line" d="M14 88H164"/>,<path class="line" d="M14 100H104"/><text x="14" y="126" text-anchor="start" class="h">Cappuccino</text><path class="line" d="M14 140H154"/>,<path class="line" d="M14 152H98"/></g>
<path class="accent" d="M166 95Q262 95 304 52"/>
<path class="accent" d="M302.4 57.8L304 52L298.3 53.8"/>
<text x="125" y="198" text-anchor="middle" class="sub">Opening and closing</text>
<text x="395" y="198" text-anchor="middle" class="sub">Coffee recipes</text>
</svg>

<!-- /illustration -->

This guide builds a small example from scratch: a **handbook for a coffee shop team**.

## The plan

One workspace, a few documents, each about one subject:

<!-- illustration:xref-plan -->

<svg class="illo" viewBox="0 0 520 226" width="520" role="img" aria-label="Four documents of a coffee shop handbook, each split into pages, with Start here linking to the others">
<path class="accent dash flow" d="M110 62Q154 40 198 60"/>
<path class="accent" d="M192 60.4L198 60L194.4 55.2"/>
<path class="accent dash flow" d="M82 62Q204 24 326 60"/>
<path class="accent" d="M320.1 61.3L326 60L321.8 55.8"/>
<path class="accent dash flow" d="M54 62Q254 8 454 60"/>
<path class="accent" d="M448.2 61.5L454 60L449.6 55.9"/>
<g transform="translate(20 64)"><path class="paper" d="M0 0H88L100 12V130H0Z"/><path d="M88 0V12H100"/><path class="bar" d="M10 20H52"/>,<path class="line" d="M10 31H84"/>,<path class="line" d="M10 39H54.4"/><path class="bar" d="M10 56H52"/>,<path class="line" d="M10 67H84"/>,<path class="line" d="M10 75H54.4"/></g>
<g transform="translate(148 64)"><path class="paper" d="M0 0H88L100 12V130H0Z"/><path d="M88 0V12H100"/><path class="bar" d="M10 20H52"/>,<path class="line" d="M10 31H84"/>,<path class="line" d="M10 39H54.4"/><path class="bar" d="M10 56H52"/>,<path class="line" d="M10 67H84"/>,<path class="line" d="M10 75H54.4"/><path class="bar" d="M10 92H52"/>,<path class="line" d="M10 103H84"/>,<path class="line" d="M10 111H54.4"/></g>
<g transform="translate(276 64)"><path class="paper" d="M0 0H88L100 12V130H0Z"/><path d="M88 0V12H100"/><path class="bar" d="M10 20H52"/>,<path class="line" d="M10 31H84"/>,<path class="line" d="M10 39H54.4"/><path class="bar" d="M10 56H52"/>,<path class="line" d="M10 67H84"/>,<path class="line" d="M10 75H54.4"/><path class="bar" d="M10 92H52"/>,<path class="line" d="M10 103H84"/>,<path class="line" d="M10 111H54.4"/></g>
<g transform="translate(404 64)"><path class="paper" d="M0 0H88L100 12V130H0Z"/><path d="M88 0V12H100"/><path class="bar" d="M10 20H52"/>,<path class="line" d="M10 31H84"/>,<path class="line" d="M10 39H54.4"/></g>
<text x="70" y="214" text-anchor="middle" class="sub">Start here</text>
<text x="198" y="214" text-anchor="middle" class="sub">Opening and closing</text>
<text x="326" y="214" text-anchor="middle" class="sub">Coffee recipes</text>
<text x="454" y="214" text-anchor="middle" class="sub">Glossary</text>
</svg>

<!-- /illustration -->

| Document | Pages (big titles) inside it |
| --- | --- |
| **Start here** | Welcome · Who to call |
| **Opening and closing** | Opening · Closing · Cleaning |
| **Coffee recipes** | Espresso · Cappuccino · Iced latte |
| **Glossary** | Terms used in the shop |

:::tip
Keep each document about one subject, and use big titles (`# `) to split it into pages. Short, focused documents are easier to link to and easier to keep up to date.
:::

## Step 1: Create the workspace and documents

1. Create a workspace called **Coffee Handbook**. See [Workspaces](../workspaces/).
2. Press <kbd>⌘N</kbd> for each document and choose **.mdoc**.
3. Write the titles first, then fill in the text. For example, in *Coffee recipes*:

```text
# Espresso
18 g of ground coffee, 25 to 30 seconds.

# Cappuccino
One espresso, then steamed milk with a thick foam.
```

## Step 2: Link to a section

In *Opening and closing*, the opening checklist says "Make a test espresso". Let's link that to the recipe:

1. Open **Coffee recipes** and point at the **Espresso** title.
2. Click the **⋮** on its left and choose **Copy link** (or press <kbd>⌃⌘L</kbd>).
3. Open **Opening and closing**, click at the end of "Make a test espresso" and paste (<kbd>⌘V</kbd>).

The link appears with the title's text: **Espresso**. Click it and MarkPlus opens *Coffee recipes* right on that section.

<!-- illustration:xref-copy-link -->

<svg class="illo" viewBox="0 0 520 200" width="520" role="img" aria-label="Click the handle next to a title, choose Copy link, then paste it in another document: the link appears with the title as its text">
<g transform="translate(20 14)"><path class="paper" d="M0 0H148L160 12V160H0Z"/><path d="M148 0V12H160"/><circle class="fill-accent" cx="10" cy="22" r="1.6"/>,<circle class="fill-accent" cx="10" cy="27" r="1.6"/>,<circle class="fill-accent" cx="10" cy="32" r="1.6"/><text x="20" y="32" text-anchor="start" class="h">Espresso</text><path class="line" d="M20 46H86"/><rect class="paper" x="26" y="56" width="112" height="54" rx="8"/><rect class="soft-accent" x="30" y="60" width="104" height="20" rx="5"/><text x="40" y="74" text-anchor="start" class="t accent">Copy link</text><path class="line" d="M40 94H110"/><path class="line" d="M20 128H130"/>,<path class="line" d="M20 138H86"/></g>
<path class="accent" d="M186 94Q210 94 232 94"/>
<path class="accent" d="M226.7 96.9L232 94L226.7 91.1"/>
<rect class="paper" x="240" y="66" width="44" height="56" rx="6"/>
<rect class="paper" x="252" y="60" width="20" height="12" rx="3"/>
<path class="line" d="M250 86H274"/>
<path class="line" d="M250 95H274"/>
<path class="line" d="M250 104H264.4"/>
<path class="accent" d="M292 94Q316 94 338 94"/>
<path class="accent" d="M332.7 96.9L338 94L332.7 91.1"/>
<g transform="translate(344 14)"><path class="paper" d="M0 0H148L160 12V160H0Z"/><path d="M148 0V12H160"/><path class="line" d="M14 24H134"/>,<path class="line" d="M14 34H86"/><text x="14" y="70" text-anchor="start" class="t">Make a test</text><rect class="soft-accent accent" x="72" y="59" width="56" height="16" rx="8"/>,<text x="100" y="70.5" text-anchor="middle" class="t accent">Espresso</text><path class="line" d="M14 100H134"/>,<path class="line" d="M14 110H134"/>,<path class="line" d="M14 120H86"/></g>
<text x="100" y="194" text-anchor="middle" class="sub">⋮ › Copy link</text>
<text x="262" y="146" text-anchor="middle" class="sub">Copied</text>
<text x="424" y="194" text-anchor="middle" class="sub">Paste anywhere</text>
</svg>

<!-- /illustration -->

## Step 3: Link to one exact paragraph

Links don't have to go to a title. Any paragraph, list item, quote, table or image works.

**Example:** the *Cappuccino* recipe has a paragraph about milk temperature. Point at that paragraph, click **⋮ › Copy link** and paste it in the *Cleaning* page next to "Clean the steam wand after every drink". The reader lands exactly on the sentence that explains why.

## Step 4: Link a whole document

On the *Start here* page, list all the documents so new team members know where to go:

1. Right-click the tab of a document and choose **Copy Link**.
2. Paste it in *Start here*.
3. Repeat for each document.

Links to other documents appear as a small **badge** with a page icon, so readers can tell at a glance that they lead somewhere else.

<!-- illustration:xref-home -->

<svg class="illo" viewBox="0 0 520 210" width="520" role="img" aria-label="A Start here page lists the other documents as link badges, each opening its document">
<g transform="translate(30 12)"><path class="paper" d="M0 0H208L220 12V186H0Z"/><path d="M208 0V12H220"/><text x="16" y="30" text-anchor="start" class="h">Welcome</text><text x="16" y="50" text-anchor="start" class="t">New here? Read these in order:</text><text x="16" y="75.5" text-anchor="start" class="t">1.</text>,<rect class="paper accent" x="30" y="64" width="140" height="19" rx="9.5"/>,<g transform="translate(38 68)"><path class="paper" d="M0 0H6L8 2V11H0Z"/><path d="M6 0V2H8"/></g>,<text x="52" y="77" text-anchor="start" class="t accent">Opening and closing</text>,<text x="16" y="107.5" text-anchor="start" class="t">2.</text>,<rect class="paper accent" x="30" y="96" width="140" height="19" rx="9.5"/>,<g transform="translate(38 100)"><path class="paper" d="M0 0H6L8 2V11H0Z"/><path d="M6 0V2H8"/></g>,<text x="52" y="109" text-anchor="start" class="t accent">Coffee recipes</text>,<text x="16" y="139.5" text-anchor="start" class="t">3.</text>,<rect class="paper accent" x="30" y="128" width="140" height="19" rx="9.5"/>,<g transform="translate(38 132)"><path class="paper" d="M0 0H6L8 2V11H0Z"/><path d="M6 0V2H8"/></g>,<text x="52" y="141" text-anchor="start" class="t accent">Glossary</text><path class="line" d="M16 168H118"/></g>
<path class="accent" d="M204 86Q300 86 380 42"/>
<path class="accent" d="M376.8 47.1L380 42L374 42"/>
<path class="accent" d="M204 118Q300 118 380 100"/>
<path class="accent" d="M375.5 104L380 100L374.2 98.3"/>
<path class="accent" d="M204 150Q300 150 380 158"/>
<path class="accent" d="M374.5 160.3L380 158L375 154.6"/>
<g transform="translate(384 18)"><path class="paper" d="M0 0H44L56 12V48H0Z"/><path d="M44 0V12H56"/><path class="line" d="M9 16H43.7"/><path class="line" d="M9 22.7H29.8"/></g>
<g transform="translate(384 76)"><path class="paper" d="M0 0H44L56 12V48H0Z"/><path d="M44 0V12H56"/><path class="line" d="M9 16H43.7"/><path class="line" d="M9 22.7H29.8"/></g>
<g transform="translate(384 134)"><path class="paper" d="M0 0H44L56 12V48H0Z"/><path d="M44 0V12H56"/><path class="line" d="M9 16H43.7"/><path class="line" d="M9 22.7H29.8"/></g>
</svg>

<!-- /illustration -->

**Example of a home page:**

> **Welcome**
> New here? Read these in order:
> 1. 📄 Opening and closing
> 2. 📄 Coffee recipes
> 3. 📄 Glossary

## Step 5: Add "See also" and a glossary

Two habits that make documentation easy to navigate:

<!-- illustration:xref-glossary -->

<svg class="illo" viewBox="0 0 520 214" width="520" role="img" aria-label="A word in a recipe links to its entry in the Glossary, and a See also line links to related recipes">
<g transform="translate(24 12)"><path class="paper" d="M0 0H202L214 12V180H0Z"/><path d="M202 0V12H214"/><text x="14" y="30" text-anchor="start" class="h">Espresso</text><path class="line" d="M14 46H116"/><text x="14" y="66" text-anchor="start" class="t">Level the grounds by</text><text x="117" y="66" text-anchor="start" class="t accent">tamping</text><path class="accent" d="M117 69H155"/><path class="line" d="M14 86H184"/>,<path class="line" d="M14 97H184"/>,<path class="line" d="M14 108H116"/><text x="14" y="140" text-anchor="start" class="t">See also:</text><text x="62" y="140" text-anchor="start" class="t accent">Cappuccino</text><path class="accent" d="M62 143H114"/><text x="122" y="140" text-anchor="start" class="t accent">Cleaning</text><path class="accent" d="M122 143H162"/></g>
<path class="accent" d="M181 78Q250 40 300 92"/>
<path class="accent" d="M294.3 90.2L300 92L298.4 86.2"/>
<g transform="translate(300 12)"><path class="paper" d="M0 0H184L196 12V180H0Z"/><path d="M184 0V12H196"/><text x="14" y="30" text-anchor="start" class="h">Glossary</text><text x="14" y="56" text-anchor="start" class="t">Bloom</text><path class="line" d="M14 68H104"/><rect class="soft-accent pulse" x="8" y="76" width="170" height="42" rx="5"/><text x="14" y="94" text-anchor="start" class="t accent">Tamping</text><path class="line" d="M14 108H104"/><text x="14" y="140" text-anchor="start" class="t">Crema</text><path class="line" d="M14 152H104"/></g>
<text x="131" y="208" text-anchor="middle" class="sub">Coffee recipes</text>
<text x="398" y="208" text-anchor="middle" class="sub">Glossary</text>
</svg>

<!-- /illustration -->

- **See also**: at the end of a section, link to related ones. Under *Iced latte*: "See also: *Espresso*, *Cleaning*".
- **Glossary**: explain each term once in the *Glossary* and link to it the first time a word shows up. In *Espresso*, link the word "tamping" to its glossary entry.

:::tip
To make a link fit into a sentence, change its text: right-click the link, choose **Edit Link…** and type, for example, *see how to clean it*. The link still goes to the same place.
:::

## Step 6: Let Claude add links for you

With [Claude connected](../ai/), ask in the chat:

- *"In Opening and closing, link every drink name to its recipe in Coffee recipes."*
- *"Add a See also line at the end of each recipe, linking to related recipes."*
- *"Find terms in Coffee recipes that are explained in the Glossary and link them."*

Claude creates the same kind of links you make by hand. Links also keep working when Claude rewrites a section, as long as the text is still recognizable.

<!-- illustration:xref-claude -->

<svg class="illo" viewBox="0 0 520 208" width="520" role="img" aria-label="Ask Claude to link every drink name to its recipe, and the names in your document become links">
<rect class="paper" x="20" y="46" width="150" height="96" rx="12"/>
<path class="fill-accent twinkle" d="M42 61C43.1 67.8 44.3 68.9 51 70C44.3 71.1 43.1 72.3 42 79C40.9 72.3 39.8 71.1 33 70C39.8 68.9 40.9 67.8 42 61Z"/>
<rect class="soft" x="58" y="62" width="98" height="14" rx="7"/>
<rect class="soft" x="36" y="88" width="120" height="14" rx="7"/>
<rect class="soft" x="36" y="110" width="90" height="14" rx="7"/>
<path class="accent" d="M174 94Q196 94 216 94"/>
<path class="accent" d="M210.7 96.9L216 94L210.7 91.1"/>
<g transform="translate(220 12)"><path class="paper" d="M0 0H268L280 12V170H0Z"/><path d="M268 0V12H280"/><text x="14" y="30" text-anchor="start" class="h">Opening checklist</text><path class="line" d="M14 54H74"/>,<path class="accent twinkle" d="M82 54H136"/>,<path class="line" d="M144 54H184"/>,<path class="line" d="M14 76H54"/>,<path class="accent twinkle" style="animation-delay:0.4s" d="M62 76H158"/>,<path class="line" d="M166 76H218"/>,<path class="line" d="M14 98H90"/>,<path class="accent twinkle" style="animation-delay:0.8s" d="M98 98H138"/>,<path class="line" d="M146 98H210"/>,<path class="line" d="M14 120H44"/>,<path class="accent twinkle" style="animation-delay:1.2000000000000002s" d="M52 120H122"/>,<path class="line" d="M130 120H176"/>,<path class="line" d="M14 142H78"/>,<path class="accent twinkle" style="animation-delay:1.6s" d="M86 142H136"/>,<path class="line" d="M144 142H214"/></g>
<text x="95" y="162" text-anchor="middle" class="sub">Ask Claude</text>
<text x="360" y="202" text-anchor="middle" class="sub">The names become links</text>
</svg>

<!-- /illustration -->

## Bonus: mention people with @

<!-- illustration:database-mention -->

<svg class="illo" viewBox="0 0 520 182" width="520" role="img" aria-label="A row of the People database, Ana, mentioned as @Ana in two documents">
<path class="accent dash flow" d="M86 88Q132 88 178 88"/>
<path class="accent dash flow" d="M342 88Q370 88 392 108"/>
<g transform="translate(30 40)"><path class="paper" d="M0 0H98L110 12V104H0Z"/><path d="M98 0V12H110"/><path class="line" d="M12 24H92"/>,<path class="line" d="M12 34H60"/><rect class="soft-accent accent" x="12" y="40" width="44" height="16" rx="8"/><text x="34" y="51.5" text-anchor="middle" class="t accent">@Ana</text><path class="line" d="M12 72H92"/>,<path class="line" d="M12 82H60"/></g>
<g transform="translate(380 40)"><path class="paper" d="M0 0H98L110 12V104H0Z"/><path d="M98 0V12H110"/><path class="line" d="M12 24H92"/>,<path class="line" d="M12 34H92"/>,<path class="line" d="M12 44H60"/><rect class="soft-accent accent" x="12" y="60" width="44" height="16" rx="8"/><text x="34" y="71.5" text-anchor="middle" class="t accent">@Ana</text><path class="line" d="M12 90H48"/></g>
<rect class="paper" x="180" y="30" width="160" height="120" rx="6"/>
<rect class="soft-accent pulse" x="181" y="77" width="158" height="22" rx="0"/>
<path class="line" d="M180 52H340"/>
<text x="194" y="45" text-anchor="start" class="t">People</text>
<circle cx="198" cy="64" r="6"/>
<path class="line" d="M212 64H262"/>
<path class="line" d="M282 64H326"/>
<circle class="accent" cx="198" cy="88" r="6"/>
<text x="212" y="91.5" text-anchor="start" class="t accent">Ana Ribeiro</text>
<path class="line" d="M282 88H326"/>
<circle cx="198" cy="112" r="6"/>
<path class="line" d="M212 112H262"/>
<path class="line" d="M282 112H326"/>
<circle cx="198" cy="136" r="6"/>
<path class="line" d="M212 136H262"/>
<path class="line" d="M282 136H326"/>
<text x="85" y="172" text-anchor="middle" class="sub">Meeting notes</text>
<text x="260" y="172" text-anchor="middle" class="sub">Database</text>
<text x="435" y="172" text-anchor="middle" class="sub">Handbook</text>
</svg>

<!-- /illustration -->

Keep the team in a [database](../databases/) (name, photo, email, role). Then write "Ask @Rodrigo" anywhere in the handbook: pointing at the name shows his photo and email, and clicking shows everything. When his email changes, you update it once in the database.

## Keeping links healthy

<!-- illustration:xref-rename -->

<svg class="illo" viewBox="0 0 520 190" width="520" role="img" aria-label="Renaming a document or a title does not break the links that point to it">
<g transform="translate(24 16)"><path class="paper" d="M0 0H168L180 12V150H0Z"/><path d="M168 0V12H180"/><path class="line" d="M14 24H154"/>,<path class="line" d="M14 34H98"/><text x="14" y="70" text-anchor="start" class="t">See the</text><rect class="soft-accent accent" x="56" y="59" width="56" height="16" rx="8"/>,<text x="84" y="70.5" text-anchor="middle" class="t accent">Espresso</text><path class="line" d="M14 100H154"/>,<path class="line" d="M14 110H154"/>,<path class="line" d="M14 120H98"/></g>
<path class="accent" d="M140 83Q230 40 312 70"/>
<path class="accent" d="M306.1 70.9L312 70L308 65.5"/>
<circle class="paper accent" cx="232" cy="56" r="10"/>
<path class="accent" d="M227 56l3.5 3.5L237 52.5"/>
<g transform="translate(316 16)"><path class="paper" d="M0 0H168L180 12V150H0Z"/><path d="M168 0V12H180"/><text x="14" y="30" text-anchor="start" class="t">Espresso</text><path d="M12 26.5H60"/><text x="14" y="54" text-anchor="start" class="h accent">Espresso, step by step</text><path class="line" d="M14 74H154"/>,<path class="line" d="M14 86H154"/>,<path class="line" d="M14 98H154"/>,<path class="line" d="M14 110H154"/>,<path class="line" d="M14 122H98"/></g>
<text x="114" y="184" text-anchor="middle" class="sub">The link</text>
<text x="406" y="184" text-anchor="middle" class="sub">Title renamed</text>
</svg>

<!-- /illustration -->

- **Rename freely.** Renaming a document, or changing the text of a title, doesn't break links to it.
- **Same workspace only.** Links and @ mentions work between documents in the same workspace. If you paste a link to a document in another workspace, MarkPlus keeps the text and removes the link. A mention becomes plain text, like "@Name".
- **Moved or deleted?** If a link points to something that no longer exists, clicking it shows a message telling you so. Copy a fresh link and paste it over the old one.
- **One-page-at-a-time reading.** In [Single Page view](../appearance/#pages-continuous-or-one-at-a-time), a link takes you to the right page automatically.

## Sharing the whole set

<!-- illustration:share-workspace -->

<svg class="illo" viewBox="0 0 520 224" width="520" role="img" aria-label="The documents of a workspace packed into one .html file, sent to people on a laptop, a tablet and a phone">
<g transform="translate(24 74)"><path class="paper" d="M4 0H38.1l6 6H108a4 4 0 0 1 4 4V76a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4Z"/><g transform="translate(14 -22) rotate(-8 19 24)"><path class="paper" d="M0 0H28.5L38 9.5V48H0Z"/><path d="M28.5 0V9.5H38"/><path class="line" d="M6.1 14.4H29.6"/><path class="line" d="M6.1 21.1H29.6"/><path class="line" d="M6.1 27.8H20.2"/></g><g transform="translate(37 -30)"><path class="paper" d="M0 0H28.5L38 9.5V48H0Z"/><path d="M28.5 0V9.5H38"/><path class="line" d="M6.1 14.4H29.6"/><path class="line" d="M6.1 21.1H29.6"/><path class="line" d="M6.1 27.8H20.2"/></g><g transform="translate(60 -22) rotate(8 19 24)"><path class="paper" d="M0 0H28.5L38 9.5V48H0Z"/><path d="M28.5 0V9.5H38"/><path class="line" d="M6.1 14.4H29.6"/><path class="line" d="M6.1 21.1H29.6"/><path class="line" d="M6.1 27.8H20.2"/></g><path class="paper" d="M0 18a4 4 0 0 1 4-4H108a4 4 0 0 1 4 4V76a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4Z"/></g>
<path class="dash flow" d="M128 56Q180 10 240 64"/>
<g class="bob" style="animation-delay:-1s"><g transform="translate(174 24) rotate(-12 8 10)"><path class="paper" d="M0 0H12L16 4V20H0Z"/><path d="M12 0V4H16"/></g></g>
<path class="paper accent" d="M232 96L220 78H258L270 96"/>
<path class="paper accent" d="M308 96L320 78H282L270 96"/>
<g class="bob"><g transform="translate(250 62) rotate(10 15 20)"><path class="paper" d="M0 0H22.5L30 7.5V40H0Z"/><path d="M22.5 0V7.5H30"/><path class="line" d="M4.8 12H23.4"/><path class="line" d="M4.8 18H16"/></g></g>
<rect class="paper accent" x="232" y="96" width="76" height="56" rx="3"/>
<circle class="accent" cx="270" cy="124" r="11"/>
<ellipse class="accent" cx="270" cy="124" rx="4.5" ry="11"/>
<path class="accent" d="M259 124H281"/>
<path class="accent" d="M314 124Q350 44 384 44"/>
<path class="accent" d="M378.7 46.9L384 44L378.7 41.1"/>
<path class="accent" d="M314 124Q350 112 384 112"/>
<path class="accent" d="M378.7 114.9L384 112L378.7 109.1"/>
<path class="accent" d="M314 124Q350 180 384 180"/>
<path class="accent" d="M378.7 182.9L384 180L378.7 177.1"/>
<rect class="paper" x="400" y="28" width="46" height="30" rx="3"/>
<path class="line" d="M407 38H437"/>
<path class="line" d="M407 46H425"/>
<path d="M394 62H452"/>
<rect class="paper" x="408" y="92" width="30" height="40" rx="4"/>
<path class="line" d="M414 103H432"/>
<path class="line" d="M414 111H432"/>
<path class="line" d="M414 119H424.8"/>
<rect class="paper" x="413" y="162" width="20" height="36" rx="4"/>
<path class="line" d="M418 173H428"/>
<path class="line" d="M418 180H428"/>
<path class="line" d="M418 187H424"/>
<circle class="paper" cx="486" cy="35" r="7"/>
<path d="M474 57a12 12 0 0 1 24 0"/>
<circle class="paper" cx="486" cy="103" r="7"/>
<path d="M474 125a12 12 0 0 1 24 0"/>
<circle class="paper" cx="486" cy="171" r="7"/>
<path d="M474 193a12 12 0 0 1 24 0"/>
<text x="80" y="214" text-anchor="middle" class="label">Workspace</text>
<text x="270" y="214" text-anchor="middle" class="label accent">One .html file</text>
<text x="442" y="214" text-anchor="middle" class="label">Any browser</text>
</svg>

<!-- /illustration -->

To send all the documents at once, with every link still working, use **Export as Web Page…**. The other person opens the file in any web browser and can jump between documents just like you. See [Share a whole workspace](../export/#share-a-whole-workspace).

## Sharing it as a PDF

<!-- illustration:pdf-links -->

<svg class="illo" viewBox="0 0 520 214" width="520" role="img" aria-label="In the PDF, a link to the same document still jumps to its page; a link to another document becomes a note like (See: Recipes › Espresso)">
<g transform="translate(20 20)"><path class="paper" d="M0 0H144L156 12V164H0Z"/><path d="M144 0V12H156"/><path class="line" d="M12 20H132"/>,<path class="line" d="M12 30H84"/><text x="12" y="58" text-anchor="start" class="t">Make a</text><rect class="soft-accent accent" x="50" y="47" width="54" height="16" rx="8"/>,<text x="77" y="58.5" text-anchor="middle" class="t accent">Espresso</text><path class="line" d="M12 82H132"/>,<path class="line" d="M12 92H84"/><text x="12" y="120" text-anchor="start" class="t">Grind as in</text><rect class="paper" x="70" y="108" width="66" height="17" rx="8.5"/><g transform="translate(76 112)"><path class="paper" d="M0 0H5.3L7 1.8V9H0Z"/><path d="M5.3 0V1.8H7"/></g><text x="88" y="120" text-anchor="start" class="t">Recipes</text><path class="line" d="M12 144H84"/></g>
<path class="accent" d="M184 102Q200 102 214 102"/>
<path class="accent" d="M208.7 104.9L214 102L208.7 99.1"/>
<rect class="paper" x="224" y="20" width="146" height="164" rx="4"/>
<rect class="paper" x="384" y="20" width="116" height="164" rx="4"/>
<text x="236" y="36" text-anchor="start" class="t">PDF · page 1</text>
<text x="396" y="36" text-anchor="start" class="t">page 3</text>
<path class="line" d="M236 52H302"/>
<text x="236" y="76" text-anchor="start" class="t">Make a</text>
<text x="274" y="76" text-anchor="start" class="link accent">Espresso</text>
<path class="accent" d="M274 79H320"/>
<path class="line" d="M236 98H302"/>
<text x="236" y="122" text-anchor="start" class="t">Grind as in Recipes</text>
<text x="236" y="136" text-anchor="start" class="t">(See: Recipes › Espresso)</text>
<path class="line" d="M236 158H302"/>
<text x="396" y="62" text-anchor="start" class="h">Espresso</text>
<path class="line" d="M396 78H486"/>
<path class="line" d="M396 89H486"/>
<path class="line" d="M396 100H486"/>
<path class="line" d="M396 111H450"/>
<path class="accent" d="M322 70Q352 40 392 56"/>
<path class="accent" d="M386 56.7L392 56L388.2 51.4"/>
<text x="98" y="206" text-anchor="middle" class="sub">Document</text>
<text x="362" y="206" text-anchor="middle" class="sub">PDF</text>
</svg>

<!-- /illustration -->

When you export a document to PDF (<kbd>⌥⌘E</kbd>):

- links to sections **in the same document** still work: clicking jumps to that page of the PDF;
- links to **other documents** become a note such as "(See: Coffee recipes › Espresso)", so readers know where to look.

:::tip
Want a single PDF with everything clickable? Put the whole handbook in one document, with each subject as a big title (a page). All links between pages then keep working in the PDF.
:::

:::note
Cross-references work best in `.mdoc` documents. In a `.md` document, a link can only point to a title, not to a single paragraph.
:::
