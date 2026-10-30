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

## Step 3: Link to one exact paragraph

Links don't have to go to a title. Any paragraph, list item, quote, table or image works.

**Example:** the *Cappuccino* recipe has a paragraph about milk temperature. Point at that paragraph, click **⋮ › Copy link** and paste it in the *Cleaning* page next to "Clean the steam wand after every drink". The reader lands exactly on the sentence that explains why.

## Step 4: Link a whole document

On the *Start here* page, list all the documents so new team members know where to go:

1. Right-click the tab of a document and choose **Copy Link**.
2. Paste it in *Start here*.
3. Repeat for each document.

Links to other documents appear as a small **badge** with a page icon, so readers can tell at a glance that they lead somewhere else.

**Example of a home page:**

> **Welcome**
> New here? Read these in order:
> 1. 📄 Opening and closing
> 2. 📄 Coffee recipes
> 3. 📄 Glossary

## Step 5: Add "See also" and a glossary

Two habits that make documentation easy to navigate:

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

## Bonus: mention people with @

Keep the team in a [database](../databases/) (name, photo, email, role). Then write "Ask @Rodrigo" anywhere in the handbook: pointing at the name shows his photo and email, and clicking shows everything. When his email changes, you update it once in the database.

## Keeping links healthy

- **Rename freely.** Renaming a document, or changing the text of a title, doesn't break links to it.
- **Same workspace only.** Links and @ mentions work between documents in the same workspace. If you paste a link to a document in another workspace, MarkPlus keeps the text and removes the link. A mention becomes plain text, like "@Name".
- **Moved or deleted?** If a link points to something that no longer exists, clicking it shows a message telling you so. Copy a fresh link and paste it over the old one.
- **One-page-at-a-time reading.** In [Single Page view](../appearance/#pages-continuous-or-one-at-a-time), a link takes you to the right page automatically.

## Sharing the whole set

To send all the documents at once, with every link still working, use **Export as Web Page…**. The other person opens the file in any web browser and can jump between documents just like you. See [Share a whole workspace](../export/#share-a-whole-workspace).

## Sharing it as a PDF

When you export a document to PDF (<kbd>⌥⌘E</kbd>):

- links to sections **in the same document** still work: clicking jumps to that page of the PDF;
- links to **other documents** become a note such as "(See: Coffee recipes › Espresso)", so readers know where to look.

:::tip
Want a single PDF with everything clickable? Put the whole handbook in one document, with each subject as a big title (a page). All links between pages then keep working in the PDF.
:::

:::note
Cross-references work best in `.mdoc` documents. In a `.md` document, a link can only point to a title, not to a single paragraph.
:::
