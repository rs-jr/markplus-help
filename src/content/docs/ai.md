---
title: Writing with AI
description: Ask Claude to rewrite text, chat about your documents and connect your AI apps.
---

Claude can help you right inside your documents: rewrite a paragraph, translate it, summarize a long text, or turn messy notes into a neat table. You always see what changed, and one <kbd>⌘Z</kbd> undoes it.

## Before you start: connect Claude

1. Open **MarkPlus › Connect to AI…**.
2. Next to **Claude Code**, choose **Read & write** and click **Connect**.
3. If MarkPlus asks you to sign in, click **Sign in…** and use your Claude account.

That's it. The **● AI** dot at the bottom right turns violet when an AI is connected.

## Ask Claude about a selection

The fastest way to improve a piece of text:

1. Select the text.
2. Click the **Claude** button at the end of the formatting menu, or press <kbd>⌘J</kbd>.
3. Type what you want and press <kbd>↩</kbd>.

**Things you can ask:**

- *Make it shorter*
- *Make it friendlier*
- *Translate to Spanish*
- *Turn this into a checklist*
- *Explain this for someone who has never used the product*

Not sure what to ask? Click the **⌄** button at the end of the field for ready-made actions, grouped by kind:

| Group | Actions |
| --- | --- |
| Edit | Improve Writing · Fix Spelling & Grammar · Rewrite |
| Length | Make Shorter · Make Longer · Summarize |
| Tone | Simplify Language · Make More Formal · Make More Casual |
| Format | Turn into a List · Convert to Table |
| Translate | English · Portuguese · Spanish |

The new text replaces the selection right away. Press <kbd>⎋</kbd> to stop while Claude is writing.

:::tip
Pasted a list of prices from an email? Select it and choose **Convert to Table**. Claude picks the columns for you.
:::

## Let Claude continue your sentence

Stuck in the middle of a paragraph? Press <kbd>⇧Space</kbd> (or choose **Edit › Suggest Continuation**). A **✦** appears at the cursor while Claude thinks, then the suggestion shows up in gray, right after what you wrote.

| To | Press |
| --- | --- |
| Accept the suggestion | <kbd>⇥</kbd> Tab |
| Dismiss it | <kbd>⎋</kbd>, or click somewhere else |

If you keep typing and your words match the start of the suggestion, it stays and gets shorter. Type something else and it goes away. Accepting works like any edit: one <kbd>⌘Z</kbd> undoes it.

:::tip
Pressed <kbd>⇧Space</kbd> by accident while typing a capital letter? Just keep typing: the space comes back and nothing is suggested.
:::

## Chat with Claude

For bigger jobs, open the chat: click the **Claude** button at the top (next to the magnifying glass) or press <kbd>⌃⌘I</kbd>.

Claude already knows which document you have open, what text you selected and the [workspace description](../workspaces/#add-a-description), so you can just ask:

- *"Add a summary at the top of this document."*
- *"Check the Prices section for mistakes."*
- *"Create a new document with a packing list for a beach trip."*
- *"In the Glossary, add an entry for every term used in Recipes."*

**Send files too:** paste a screenshot (<kbd>⌘V</kbd>), drag files onto the chat, or click 📎. Claude reads pictures, PDFs and text files.

**Example:** attach the PDF of a contract and ask *"Create a document with the main dates and obligations from this contract."*

**Search the web:** Claude can look things up online and read web pages, then cite the sources as links. The chat shows what it is searching for.

**Example:** *"Find the opening hours of the Louvre and add them to my Paris trip."*

**Read from your other apps:** with [connectors](#connectors-read-your-other-apps), Claude can also read Figma, Google Drive, your meeting notes and other apps.

- Below the message box you can choose which Claude **model** to use.
- Before deleting a document, Claude always asks you first.
- Drag the edge of the panel to make it wider or narrower.

## Connectors: read your other apps

Connectors let Claude read the apps connected to your Claude account, such as Figma, Google Drive, Atlassian (Jira, Confluence) or a meeting notes app, and bring what it finds into your documents.

<!-- illustration:ai-connectors -->

<svg class="illo" viewBox="0 0 520 214" width="520" role="img" aria-label="Claude reads Figma, Google Drive and meeting notes through connectors, read only, and writes in your MarkPlus documents">
<path class="dash flow" d="M140 52Q180 52 206 92.6"/>
<path d="M200.7 89.7L206 92.6L205.6 86.6"/>
<path class="dash flow" d="M140 110Q180 110 206 110"/>
<path d="M200.7 112.9L206 110L200.7 107.1"/>
<path class="dash flow" d="M140 168Q180 168 206 127.4"/>
<path d="M205.6 133.4L206 127.4L200.7 130.3"/>
<rect class="paper" x="104" y="36" width="34" height="32" rx="8"/>
<text x="92" y="56" text-anchor="end" class="sub">Figma</text>
<rect class="paper" x="104" y="94" width="34" height="32" rx="8"/>
<text x="92" y="114" text-anchor="end" class="sub">Google Drive</text>
<rect class="paper" x="104" y="152" width="34" height="32" rx="8"/>
<text x="92" y="172" text-anchor="end" class="sub">Meeting notes</text>
<rect x="110" y="38" width="10" height="10" rx="2"/>
<circle cx="129" cy="47" r="5"/>
<path d="M112 63L117 55L122 63Z"/>
<g transform="translate(113 96)"><path class="paper" d="M0 0H12L16 4V20H0Z"/><path d="M12 0V4H16"/><path class="line" d="M2.6 8H12.5"/><path class="line" d="M2.6 14H8.5"/></g>
<path d="M110 165.2L110 170.8"/>
<path d="M112.8 162.4L112.8 173.6"/>
<path d="M115.5 164L115.5 172"/>
<path d="M118.3 160L118.3 176"/>
<path d="M121 163.2L121 172.8"/>
<path d="M123.8 161.2L123.8 174.8"/>
<path d="M126.5 164.8L126.5 171.2"/>
<path d="M129.3 162L129.3 174"/>
<path d="M132 165.6L132 170.4"/>
<text x="160" y="196" text-anchor="middle" class="sub">read only</text>
<rect class="paper" x="210" y="46" width="108" height="128" rx="10"/>
<path class="fill-accent twinkle" d="M264 64C265.2 71.5 266.5 72.8 274 74C266.5 75.2 265.2 76.5 264 84C262.8 76.5 261.5 75.2 254 74C261.5 72.8 262.8 71.5 264 64Z"/>
<text x="264" y="102" text-anchor="middle" class="label">Claude</text>
<rect class="soft" x="226" y="116" width="76" height="14" rx="7"/>
<rect class="soft" x="240" y="138" width="62" height="14" rx="7"/>
<path class="accent" d="M322 92Q352 70 382 64"/>
<path class="accent" d="M377.4 67.9L382 64L376.3 62.2"/>
<path class="accent" d="M322 128Q352 140 382 146"/>
<path class="accent" d="M376.3 147.8L382 146L377.4 142.1"/>
<g transform="translate(386 30)"><path class="paper" d="M0 0H72L84 12V74H0Z"/><path d="M72 0V12H84"/><path class="line" d="M10 18H44.8"/><rect class="paper accent" x="8" y="30" width="18" height="22" rx="3"/>,<path class="accent" d="M13 44H19"/>,<rect class="paper accent" x="31" y="30" width="18" height="22" rx="3"/>,<path class="accent" d="M36 44H42"/>,<rect class="paper accent" x="54" y="30" width="18" height="22" rx="3"/>,<path class="accent" d="M59 44H65"/></g>
<g transform="translate(386 118)"><rect class="paper" x="0" y="0" width="110" height="58" rx="6"/><text x="12" y="15.5" text-anchor="start" class="t">Tasks</text><path class="line" d="M0 24H110"/>,<circle cx="14" cy="32.5" r="4.5"/>,<path class="line" d="M26 32.5H61.6"/>,<path class="line" d="M72.6 32.5H98"/>,<circle cx="14" cy="49.5" r="4.5"/>,<path class="line" d="M26 49.5H61.6"/>,<path class="line" d="M72.6 49.5H98"/></g>
<text x="440" y="196" text-anchor="middle" class="sub">writes in MarkPlus</text>
</svg>

<!-- /illustration -->

**Turn them on:**

1. In the chat, click the plug button at the top. **Connectors** lists the apps connected to your Claude account.
2. Turn on the ones Claude may read. The number on the plug button shows how many are on.
3. An app that says **Sign in on claude.ai** needs to be connected there first. **Manage connectors on claude.ai** opens the page.

**Good to know:**

- Claude only **reads** those apps. Tools that change data in them are never available in MarkPlus.
- Claude writes only in MarkPlus: documents, databases, mentions and views.
- The chat shows what Claude is reading, for example *Reading Figma · get screenshot*.
- Turn on only the apps the task needs.

**Things to ask:**

- *"Describe the screens in this Figma file and write a summary here, with a link to each frame."* (paste the Figma link)
- *"Read the spec in Google Drive called Loyalty program and turn it into a checklist on this page."*
- *"Read the transcript of today's meeting and write the minutes: decisions, open questions and who does what."*
- *"Find the Jira issues for the menu redesign and add them to the Tasks database, with status and owner."*

### Putting it all together

The real power comes from combining a connector with what MarkPlus already does. For example:

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

In one go, Claude:

1. reads the meeting in your notes app;
2. creates the **Tasks** [database](../databases/) and fills one row per task;
3. adds a **Cards** view, [grouped by](../databases/#show-a-database-in-a-document) status, to your document;
4. reads the Figma file and puts the link to the right frame in each task.

Afterwards, mention a task anywhere (*@Update the menu board*) and its status is always current. To see the designs in the document too, [embed the Figma frames](../blocks/#videos-maps-figma-and-websites).

:::note
To write notes on the Figma canvas itself, use an AI app that is allowed to change Figma, with MarkPlus connected to it too (see [Use other AI apps](#use-other-ai-apps)). In MarkPlus, other apps are always read only.
:::

More ideas in [How it fits together](../concepts/#combine-the-tools).

## Watch Claude work

When Claude edits a document you have open:

- a cursor labeled **✦ Claude** shows where it's writing;
- the changed parts glow for a few seconds;
- if the change is out of view, a message offers **View** to take you there.

Don't like the result? <kbd>⌘Z</kbd> undoes the whole change in one go.

## Use other AI apps

You can also let other AI apps work with your documents: **Claude Desktop**, **Cursor** and **VS Code**. In **MarkPlus › Connect to AI…**, choose for each app:

- **Read only**: it can read and search your documents.
- **Read & write**: it can also create and change them.

These apps can work even when MarkPlus is closed. When a document was changed that way, its card shows **Edited by…** until you open it.

<!-- illustration:ai-apps -->

<svg class="illo" viewBox="0 0 520 196" width="520" role="img" aria-label="Claude Desktop, Cursor and VS Code work directly with the documents in the workspace folder, even while MarkPlus is closed">
<path class="accent" d="M152 46Q192 46 222 89.5"/>
<rect class="paper" x="114" y="28" width="36" height="36" rx="9"/>
<path class="fill-accent twinkle" d="M132 38C133 44 134 45 140 46C134 47 133 48 132 54C131 48 130 47 124 46C130 45 131 44 132 38Z"/>
<text x="102" y="50" text-anchor="end" class="sub">Claude Desktop</text>
<path class="accent" d="M152 104Q192 104 222 104"/>
<rect class="paper" x="114" y="86" width="36" height="36" rx="9"/>
<path class="fill-accent twinkle" style="animation-delay:0.48333333333333334s" d="M132 96C133 102 134 103 140 104C134 105 133 106 132 112C131 106 130 105 124 104C130 103 131 102 132 96Z"/>
<text x="102" y="108" text-anchor="end" class="sub">Cursor</text>
<path class="accent" d="M152 162Q192 162 222 118.5"/>
<rect class="paper" x="114" y="144" width="36" height="36" rx="9"/>
<path class="fill-accent twinkle" style="animation-delay:0.9666666666666667s" d="M132 154C133 160 134 161 140 162C134 163 133 164 132 170C131 164 130 163 124 162C130 161 131 160 132 154Z"/>
<text x="102" y="166" text-anchor="end" class="sub">VS Code</text>
<g transform="translate(224 72)"><path class="paper" d="M4 0H31.3l6 6H88a4 4 0 0 1 4 4V60a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4Z"/><g transform="translate(16 -20) rotate(-6 15 20)"><path class="paper" d="M0 0H22.5L30 7.5V40H0Z"/><path d="M22.5 0V7.5H30"/><path class="line" d="M4.8 12H23.4"/><path class="line" d="M4.8 18H16"/></g><g transform="translate(48 -24) rotate(5 15 20)"><path class="paper" d="M0 0H22.5L30 7.5V40H0Z"/><path d="M22.5 0V7.5H30"/><path class="line" d="M4.8 12H23.4"/><path class="line" d="M4.8 18H16"/></g><path class="paper" d="M0 18a4 4 0 0 1 4-4H88a4 4 0 0 1 4 4V60a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4Z"/></g>
<text x="270" y="176" text-anchor="middle" class="sub">Workspace folder</text>
<path class="dash flow" d="M320 104Q340 104 356 104"/>
<g transform="translate(360 60)"><rect class="paper dash" x="0" y="0" width="130" height="90" rx="8"/><path class="dash" d="M0 18H130"/><circle class="dot" cx="12" cy="9" r="2.5"/><circle class="dot" cx="20" cy="9" r="2.5"/><circle class="dot" cx="28" cy="9" r="2.5"/><path class="line dash" d="M16 36H106"/><path class="line dash" d="M16 48H106"/><path class="line dash" d="M16 60H106"/><path class="line dash" d="M16 72H70"/></g>
<text x="425" y="176" text-anchor="middle" class="sub">MarkPlus can be closed</text>
</svg>

<!-- /illustration -->

:::note
The chat, **Ask Claude** and the suggestions need **Claude Code** to be connected. The other apps work from their own window.
:::

## Links made by Claude

Claude can add links between your documents for you, such as *"Link every recipe name in the menu to its recipe."* See [Documentation with cross-references](../cross-references/#step-6-let-claude-add-links-for-you).
