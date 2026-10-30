---
title: Databases
description: Keep people, products or anything else in a table, mention them with @ and show them in your documents.
---

A **database** is a table where each column holds one kind of information: a name, an email, a photo, a number… Each row is one thing: a person, a product, a supplier.

The best part: you can **mention any row in your text with `@`**, and **show the database inside a document** as cards, a list, a chart or a detail view. Change the database and every mention and view updates on its own.

**Example:** a coffee shop keeps a *Team* database with each barista's name, photo, email and role. In the handbook, "Ask @Rodrigo before changing the grinder" shows Rodrigo's photo and email when you point at his name.

## Create a database

- Click **New database** above the document list.
- Or choose **File › New Database** (<kbd>⌥⌘N</kbd>).
- While writing a document, click the **database** button at the end of the toolbar: the new database opens in a new tab, and your document stays as it was.

<img class="shot shot-light" src="../screenshots/database-table-light.webp" width="1260" alt="A database open as a table" />
<img class="shot shot-dark" src="../screenshots/database-table-dark.webp" width="1260" alt="A database open as a table" />

The database starts with three columns: **Name**, **Email** and **Notes**. To rename it, double-click its title (or its tab).

## Columns

Click a column title to rename it, change its type, move it or delete it. Click **+** at the end of the titles to add a column.

| Type | What it holds |
| --- | --- |
| **Text** | A short line of text |
| **Rich text** | Longer notes with bold, lists and links |
| **Number** | A number (for totals and charts) |
| **Date** | A day, picked on a calendar or typed (*3 Nov 2026*, *2026-11-03*). Sorts by date |
| **Select** | One option from a list, with a color (e.g. *Barista*, *Manager*) |
| **Person** | A name and an optional photo |
| **Email** | An email address (click to write) |
| **Link** | A web address |
| **Image** | A picture |

One column is the **label** of each row, marked with a tag next to its name. It's what `@` searches, what a mention shows and the title of each card. A database always has one. To pick another, point at a column's title and click its tag, **Use as label** (or click the title and choose **Use as Label**). Picture columns can't be the label.

To reorder the columns, drag a column's title left or right. The label column can move too.

:::tip
Changing a column to **Select** turns the text already in it into options.
:::

## Rows

- **New row** adds one at the end. Type the name, then click the other cells to fill them in.
- A **Date** cell opens a calendar. Type a date in the field on top or click a day; **Today** fills in today and **Clear** empties the cell.
- A **Rich text** cell opens a bigger editor with a formatting toolbar: titles, bold, italic, lists, to-dos, quotes, code and links. Click **Done** (or press <kbd>⌘↩</kbd>) when you're finished.
- Point at a row and click **Open** to see and edit all its fields in a bigger window.
- Drag the handle on the left to reorder rows.
- The **⋯** button (or a right-click) copies the row's link, duplicates it or deletes it.
- **Search database** (or <kbd>⌘F</kbd>) shows only the rows that contain what you type, in any field. Nothing is deleted: clear the search to see every row again. <kbd>⌘Z</kbd> undoes the last change.

Photos and pictures can be dragged in, pasted or chosen from your Mac. They're saved inside the database.

## Mention a row with @

A mention always shows the row as it is now: change the row once and every mention follows.

<!-- illustration:database-mention -->

<svg class="illo" viewBox="0 0 520 182" width="520" role="img" aria-label="A row of the People database, Ana, mentioned as @Ana in two documents">
<path class="accent dash" d="M86 88Q132 88 178 88"/>
<path class="accent dash" d="M342 88Q370 88 392 108"/>
<g transform="translate(30 40)"><path class="paper" d="M0 0H98L110 12V104H0Z"/><path d="M98 0V12H110"/><path class="line" d="M12 24H92"/>,<path class="line" d="M12 34H60"/><rect class="soft-accent accent" x="12" y="40" width="44" height="16" rx="8"/><text x="34" y="51.5" text-anchor="middle" class="t accent">@Ana</text><path class="line" d="M12 72H92"/>,<path class="line" d="M12 82H60"/></g>
<g transform="translate(380 40)"><path class="paper" d="M0 0H98L110 12V104H0Z"/><path d="M98 0V12H110"/><path class="line" d="M12 24H92"/>,<path class="line" d="M12 34H92"/>,<path class="line" d="M12 44H60"/><rect class="soft-accent accent" x="12" y="60" width="44" height="16" rx="8"/><text x="34" y="71.5" text-anchor="middle" class="t accent">@Ana</text><path class="line" d="M12 90H48"/></g>
<rect class="paper" x="180" y="30" width="160" height="120" rx="6"/>
<rect class="soft-accent" x="181" y="77" width="158" height="22" rx="0"/>
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

In any document, type **@**. A small menu walks you through three steps:

1. **Database**: pick one, for example *People*.
2. **Row**: pick the person or item. Type to filter the list.
3. **What to show**: the name, the email, the phone… The mention shows the field you pick.

<img class="shot shot-light" src="../screenshots/mention-menu-light.webp" width="776" alt="The @ menu listing the databases of the workspace" />
<img class="shot shot-dark" src="../screenshots/mention-menu-dark.webp" width="776" alt="The @ menu listing the databases of the workspace" />

Use <kbd>↑</kbd> <kbd>↓</kbd> and <kbd>Enter</kbd>, or click. <kbd>←</kbd> goes back a step.

**Example:** `@` › *People* › *Ana Ribeiro* › *ana@cafehandbook.example* writes **@ana@cafehandbook.example** in your text.

- **Shortcut:** type a few letters right after `@` (like `@ana`). Matching rows from any database appear under **Rows**, and choosing one jumps straight to step 3.
- Nobody with that name yet? In step 2, type the name and choose **Create "…"** to add the row on the spot.

Then:

- **Point at a mention** to see a card with the photo and a few fields.

  <img class="shot shot-light" src="../screenshots/mention-hover-light.webp" width="336" alt="A mention with its card: photo and fields of the row" />
  <img class="shot shot-dark" src="../screenshots/mention-hover-dark.webp" width="336" alt="A mention with its card: photo and fields of the row" />
- **Click it** to see every field. **Open database** takes you to the row.

  <img class="shot shot-light" src="../screenshots/row-detail-light.webp" width="576" alt="All the fields of a row, after clicking a mention" />
  <img class="shot shot-dark" src="../screenshots/row-detail-dark.webp" width="576" alt="All the fields of a row, after clicking a mention" />
- To change the field later, point at the mention and use **Show: Name ▾**.

If someone's email changes in the database, every mention of it changes too. A mention to a deleted row is shown crossed out.

## Show a database in a document

Type **/** and choose **Data view**, then pick the database and a view. A view shows a database that already exists; to make a new one, use the toolbar button or **File › New Database** first.

<img class="shot shot-light" src="../screenshots/database-views-cards-light.webp" width="742" alt="A database shown as cards in a document" />
<img class="shot shot-dark" src="../screenshots/database-views-cards-dark.webp" width="742" alt="A database shown as cards in a document" />

<img class="shot shot-light" src="../screenshots/database-views-detail-light.webp" width="742" alt="A database shown in the Detail view: list on the left, the selected row on the right" />
<img class="shot shot-dark" src="../screenshots/database-views-detail-dark.webp" width="742" alt="A database shown in the Detail view: list on the left, the selected row on the right" />

| View | What you see |
| --- | --- |
| **Cards** | A card for each row, with its picture |
| **List** | A compact table |
| **Chart** | Bars, pie, line or a single bar (one horizontal bar split by each group's share, like the pie). Count the rows, or add up / average a Number column, grouped by a column (e.g. hours by role). **Show** picks one value of that column: *All* counts every role, *Designer* counts only the designers. Turn on **Show legend** to list each group with its color and value under the chart. **Colors** › *Shades of one color* uses light to dark tones of a single color (the biggest value is the darkest), easier to tell apart if you are color-blind. To change its width, click the chart and drag the handle on either side |
| **Detail** | Names on the left, every field of the selected row on the right. **Menu title** picks what each row shows in that list (the name, another text or a date) and **Description** adds a smaller line under it, up to 2 lines. To make it taller or shorter, point at it and drag the handle at the bottom. Double-click the handle to go back to the original height |

Click the gear on the view to change it later. In **Fields**:

- tick the fields to show. At least one stays ticked;
- drag the handle on the left to change the order. You can also focus the handle and press <kbd>↑</kbd> or <kbd>↓</kbd>.

In a **List**, the [label column](#columns) is a column like any other: put it anywhere (for example, *Command* first and the label after it) or untick it to hide it. In **Cards** and **Detail**, it's always the title of each row, so it isn't in the list.

**Group by** (List and Cards): pick a column, such as *Status* or *Owner*, and the rows are split into groups, each with a heading and how many rows it has. Groups follow the order of the options (for a Select column), the dates or the numbers, or go A to Z; rows without a value go last, under *No …*. The grouped column isn't repeated in the rows: its value is the heading. The label, Rich text and Image columns can't group. Click a group's heading to collapse it, and click again to open it. Collapsed groups open again the next time you open the document.

**Example:** a **List** of *Features* grouped by *Status* shows *Shipped*, *In progress* and *Planned*, each with its features below.

You can also sort the rows (inside each group) and show only the rows with one option (e.g. only *Baristas*).

<img class="shot shot-light" src="../screenshots/database-view-settings-light.webp" width="672" alt="The Data view settings, with the fields in a list to drag into order" />
<img class="shot shot-dark" src="../screenshots/database-view-settings-dark.webp" width="672" alt="The Data view settings, with the fields in a list to drag into order" />

**Cover** (Cards and Detail): turn on **Show an image on top** to use a picture column as the cover of each row, and pick which one if the database has more than one (e.g. *Photo* or *Logo*). The chosen column isn't repeated in the fields. Turn it off for cards and details without a picture on top.

Views are **read only**: to change the data, click **Open**.

**Example:** in the handbook's *Start here*, a **Cards** view of *Team* shows everyone's face, role and email. A **Chart** of *Hours* by *Role* sits in the manager's report.

:::note
Data views only exist in `.mdoc` documents. In a `.md` document, mentions are kept as links.
:::

## Sharing

- **PDF**: mentions print as **@Name**, and views print as a table (a chart prints its numbers).
- **Web page** (Export as Web Page…): databases, mentions and views all work in the browser, read only. See [Share a whole workspace](../export/#share-a-whole-workspace).
- **File › Export JSON…** saves the database's data as a JSON file.

## With AI

AI apps connected to MarkPlus can read databases, add and update rows, write mentions and add [data views](#show-a-database-in-a-document) to your documents. For example:

- *"Add Bia, bia@cafe.com, Barista, to the Team database and mention her in the Opening checklist."*
- *"Create a Suppliers database with name, phone and city, and show it as a list at the end of this document, sorted by city."*
- *"Add a pie chart of the Team database by role below the Staff title."*
- *"Show the Features database as cards grouped by status."*

Data views only fit in `.mdoc` documents: in a `.md` document, the AI adds a link to the database instead. See [Writing with AI](../ai/).
