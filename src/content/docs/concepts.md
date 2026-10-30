---
title: How it fits together
description: Workspaces, documents and databases, what each one is for, and how to combine them.
---

MarkPlus has three building blocks. Once you know them, everything else is a way of combining them.

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

| | What it is | Use it for |
| --- | --- | --- |
| **[Workspace](../workspaces/)** | A folder on your Mac with everything about one project | One per project or area: *Coffee shop*, *Thesis*, *Home* |
| **[Document](../documents/)** | Writing: titles, text, pictures, videos, files. Each big title is a page | Anything you read from top to bottom: a handbook, a plan, meeting notes |
| **[Database](../databases/)** | A table of things of the same kind: people, tasks, suppliers. Each row is one thing | Anything you look up, count or reuse: who does what, what's left to do |

- A workspace holds documents and databases. Each window shows one workspace.
- A document can **mention** a row of a database (*@Ana*) and **show** a database as cards, a list, a chart or a detail view.
- Documents link to each other, down to a single paragraph, with [cross-references](../cross-references/).
- When the database changes, every mention and view follows. You update it once.

## Table or database?

Both look like rows and columns, but they do different jobs.

<!-- illustration:table-vs-database -->

<svg class="illo" viewBox="0 0 520 214" width="520" role="img" aria-label="A table lives inside one document; a database is one source shown in many documents">
<g transform="translate(30 14)"><path class="paper" d="M0 0H168L180 12V150H0Z"/><path d="M168 0V12H180"/><path class="line" d="M14 22H144"/>,<path class="line" d="M14 32H92"/><rect class="paper accent" x="14" y="46" width="150" height="66" rx="4"/><path class="accent" d="M14 68H164"/><path class="accent" d="M14 90H164"/><path class="accent" d="M64 46L64 112"/><path class="accent" d="M114 46L114 112"/><path class="line" d="M14 126H144"/>,<path class="line" d="M14 136H92"/></g>
<text x="120" y="190" text-anchor="middle" class="label">Table</text>
<text x="120" y="206" text-anchor="middle" class="sub">Lives inside one document</text>
<path class="accent" d="M392 70Q410 50 436 46"/>
<path class="accent" d="M431.2 49.6L436 46L430.4 44"/>
<path class="accent" d="M392 104Q410 124 436 128"/>
<path class="accent" d="M430.4 130L436 128L431.2 124.4"/>
<g transform="translate(282 44)"><rect class="paper" x="0" y="0" width="110" height="86" rx="6"/><text x="12" y="15.5" text-anchor="start" class="t">Suppliers</text><path class="line" d="M0 24H110"/>,<circle cx="14" cy="34.3" r="4.5"/>,<path class="line" d="M26 34.3H61.6"/>,<path class="line" d="M72.6 34.3H98"/>,<circle cx="14" cy="55" r="4.5"/>,<path class="line" d="M26 55H61.6"/>,<path class="line" d="M72.6 55H98"/>,<circle cx="14" cy="75.7" r="4.5"/>,<path class="line" d="M26 75.7H61.6"/>,<path class="line" d="M72.6 75.7H98"/></g>
<g transform="translate(438 14)"><path class="paper" d="M0 0H50L62 12V70H0Z"/><path d="M50 0V12H62"/><path class="line" d="M9 18H34.2"/><rect class="soft-accent accent" x="8" y="30" width="34" height="16" rx="8"/>,<text x="25" y="41.5" text-anchor="middle" class="t accent">@Lia</text><path class="line" d="M9 58H34.2"/></g>
<g transform="translate(438 94)"><path class="paper" d="M0 0H50L62 12V70H0Z"/><path d="M50 0V12H62"/><path class="line" d="M9 18H34.2"/><rect class="paper accent" x="7" y="30" width="13" height="18" rx="3"/>,<path class="accent" d="M12 40H13"/>,<rect class="paper accent" x="24" y="30" width="13" height="18" rx="3"/>,<path class="accent" d="M29 40H30"/>,<rect class="paper accent" x="41" y="30" width="13" height="18" rx="3"/>,<path class="accent" d="M46 40H47"/></g>
<text x="390" y="190" text-anchor="middle" class="label">Database</text>
<text x="390" y="206" text-anchor="middle" class="sub">One source, shown in many places</text>
</svg>

<!-- /illustration -->

| | [Table](../tables/) | [Database](../databases/) |
| --- | --- | --- |
| Where it lives | Inside one document | In its own file in the workspace |
| What a cell holds | Any text, formatted freely | One kind of value per column: text, number, date, option, person, photo, link… |
| Reuse | Copy and paste | Mention any row with **@**, show it in many documents |
| Views | The table itself | Cards, list, chart or detail, with filters, sorting and groups |
| Best for | A small grid that belongs to the text: a schedule, a comparison, prices | A list that keeps growing or is used in several places: team, tasks, clients, recipes |

**Rule of thumb:** if you'd copy the same rows into a second document, or you want to count, sort or group them, make it a database. If it only makes sense next to the paragraph around it, a table is simpler.

**Example:** the opening hours of the café go in a **table** on the *Opening* page. The **People** of the team go in a **database**: the handbook mentions them, a cards view shows their faces, and a chart counts hours by role.

## Combine the tools

MarkPlus is at its best when the pieces work together. Some ideas:

### Team handbook

- A **People** database with photo, role, email and phone.
- In the handbook, "Ask @Ana about the grinder": pointing at the name shows her photo and email.
- On the *Start here* page, a **Cards** view of *People*, [grouped by](../databases/#show-a-database-in-a-document) role.
- Each recipe links to the [exact paragraph](../cross-references/) in the glossary that explains a term.
- [Export it as a web page](../export/#share-a-whole-workspace) and send it to every new hire.

### Product plan with designs

- A **Features** database with status, owner and release.
- In the plan, a **List** view grouped by *Status*, and a **Chart** of features by release.
- Under each feature, the Figma frame [embedded](../blocks/#videos-maps-figma-and-websites), so the design is right there, always up to date.
- Links to research articles shown as [Cards](../links/#link-views), with picture and description.
- Present it in a meeting with [Single Page](../appearance/#pages-continuous-or-one-at-a-time) view, one topic at a time.

### From a meeting to a plan, with Claude

Turn on the [connectors](../ai/#connectors-read-your-other-apps) for your meeting notes app and Figma, then ask Claude in the chat:

> *"Read the transcript of yesterday's design meeting. Create a Tasks database with task, owner, status and Figma link. Show it as cards grouped by status at the end of this document, and for each task add the link to the Figma frame where it has to be done."*

<!-- illustration:meeting-workflow -->

<svg class="illo" viewBox="0 0 520 200" width="520" role="img" aria-label="Four steps: read the meeting transcript, write the tasks in a database, show them as cards in a document, link each task to its Figma frame">
<path class="accent" d="M112 92Q131 92 150 92"/>
<path class="accent" d="M144.7 94.9L150 92L144.7 89.1"/>
<path class="accent" d="M242 92Q261 92 280 92"/>
<path class="accent" d="M274.7 94.9L280 92L274.7 89.1"/>
<path class="accent" d="M372 92Q391 92 410 92"/>
<path class="accent" d="M404.7 94.9L410 92L404.7 89.1"/>
<circle class="fill-accent step" cx="66" cy="16" r="9"/>
<text x="66" y="19.5" text-anchor="middle" class="t on-accent">1</text>
<text x="66" y="172" text-anchor="middle" class="sub">Meeting transcript</text>
<circle class="fill-accent step" style="animation-delay:0.6s" cx="196" cy="16" r="9"/>
<text x="196" y="19.5" text-anchor="middle" class="t on-accent">2</text>
<text x="196" y="172" text-anchor="middle" class="sub">Tasks database</text>
<circle class="fill-accent step" style="animation-delay:1.2s" cx="326" cy="16" r="9"/>
<text x="326" y="19.5" text-anchor="middle" class="t on-accent">3</text>
<text x="326" y="172" text-anchor="middle" class="sub">Cards in the plan</text>
<circle class="fill-accent step" style="animation-delay:1.7999999999999998s" cx="456" cy="16" r="9"/>
<text x="456" y="19.5" text-anchor="middle" class="t on-accent">4</text>
<text x="456" y="172" text-anchor="middle" class="sub">Figma frames</text>
<g transform="translate(30 40)"><path class="paper" d="M0 0H60L72 12V104H0Z"/><path d="M60 0V12H72"/><path d="M12 20.9L12 27.2"/>,<path d="M18 17.7L18 30.3"/>,<path d="M24 19.5L24 28.5"/>,<path d="M30 15L30 33"/>,<path d="M36 18.6L36 29.4"/>,<path d="M42 16.4L42 31.7"/>,<path d="M48 20.4L48 27.6"/>,<path d="M54 17.3L54 30.8"/>,<path d="M60 21.3L60 26.7"/><path class="line" d="M10 52H62"/>,<path class="line" d="M10 62H62"/>,<path class="line" d="M10 72H62"/>,<path class="line" d="M10 82H41.2"/></g>
<g transform="translate(150 50)"><rect class="paper" x="0" y="0" width="92" height="84" rx="6"/><text x="12" y="15.5" text-anchor="start" class="t">Tasks</text><path class="line" d="M0 24H92"/><rect class="soft-accent pulse" x="1" y="24" width="90" height="20" rx="0"/>,<circle class="accent" cx="14" cy="34" r="4.5"/>,<path class="accent" d="M26 34H51.5"/>,<path class="line" d="M60.7 34H80"/>,<circle cx="14" cy="54" r="4.5"/>,<path class="line" d="M26 54H51.5"/>,<path class="line" d="M60.7 54H80"/>,<circle cx="14" cy="74" r="4.5"/>,<path class="line" d="M26 74H51.5"/>,<path class="line" d="M60.7 74H80"/></g>
<g transform="translate(290 40)"><path class="paper" d="M0 0H60L72 12V104H0Z"/><path d="M60 0V12H72"/><path class="line" d="M10 18H41.2"/><rect class="paper accent" x="8" y="32" width="24" height="28" rx="3"/>,<path class="accent" d="M13 52H25"/>,<rect class="paper accent" x="40" y="32" width="24" height="28" rx="3"/>,<path class="accent" d="M45 52H57"/><rect class="paper accent" x="8" y="66" width="24" height="28" rx="3"/>,<path class="accent" d="M13 86H25"/>,<rect class="paper accent" x="40" y="66" width="24" height="28" rx="3"/>,<path class="accent" d="M45 86H57"/></g>
<rect class="paper" x="414" y="44" width="84" height="96" rx="6"/>
<rect x="424" y="58" width="30" height="24" rx="3"/>
<rect x="460" y="58" width="28" height="24" rx="3"/>
<rect x="424" y="92" width="64" height="36" rx="3"/>
<circle class="fill-accent" cx="454" cy="58" r="4"/>
<circle class="fill-accent" cx="488" cy="92" r="4"/>
</svg>

<!-- /illustration -->

Claude reads the meeting and the Figma file, creates the database and fills it, adds the cards view, and puts the link to the right frame in each task. Then you can mention a task anywhere (*@Update the menu board*) and follow its status.

:::note
In MarkPlus, Claude only **reads** your other apps. It writes in your documents and databases, never in Figma or Drive. To have notes written on the Figma canvas too, use an AI app that is allowed to change Figma, with MarkPlus connected to it as well (see [Use other AI apps](../ai/#use-other-ai-apps)).
:::

### Research notes

- Ask Claude to search the web about a topic and write a summary with the sources as links.
- Show the most useful sources as **Cards**, the rest as **Small** links.
- Keep the papers you read in a **Reading list** database (title, author, link, status, rating) and show a **List** of the ones still *To read*.

### Meeting minutes

- A **Meeting minutes** database with date, type, owner, attendees (mentions of *People*) and the recording link.
- In the project document, a **Detail** view: the meetings on the left, the full minutes on the right.
- Attach the audio recording to the document, so it [plays right there](../blocks/#audio-and-video).
