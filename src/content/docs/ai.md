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

**Read from your other apps:** click the plug button at the top of the chat to open **Connectors**. It lists the apps connected to your Claude account (Figma, Google Drive, Atlassian and others). Turn on the ones Claude may read.

- Claude only **reads** them: tools that change data in those apps are never available in MarkPlus.
- An app that says **Sign in on claude.ai** needs to be connected there first. **Manage connectors on claude.ai** opens the page.
- The number on the plug button shows how many apps are on.

**Example:** turn on Figma and ask *"Describe the screens in this Figma file and write a summary here."*

- Below the message box you can choose which Claude **model** to use.
- Before deleting a document, Claude always asks you first.
- Drag the edge of the panel to make it wider or narrower.

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
<path class="fill-accent" d="M132 38C133 44 134 45 140 46C134 47 133 48 132 54C131 48 130 47 124 46C130 45 131 44 132 38Z"/>
<text x="102" y="50" text-anchor="end" class="sub">Claude Desktop</text>
<path class="accent" d="M152 104Q192 104 222 104"/>
<rect class="paper" x="114" y="86" width="36" height="36" rx="9"/>
<path class="fill-accent" d="M132 96C133 102 134 103 140 104C134 105 133 106 132 112C131 106 130 105 124 104C130 103 131 102 132 96Z"/>
<text x="102" y="108" text-anchor="end" class="sub">Cursor</text>
<path class="accent" d="M152 162Q192 162 222 118.5"/>
<rect class="paper" x="114" y="144" width="36" height="36" rx="9"/>
<path class="fill-accent" d="M132 154C133 160 134 161 140 162C134 163 133 164 132 170C131 164 130 163 124 162C130 161 131 160 132 154Z"/>
<text x="102" y="166" text-anchor="end" class="sub">VS Code</text>
<g transform="translate(224 72)"><path class="paper" d="M4 0H31.3l6 6H88a4 4 0 0 1 4 4V60a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4Z"/><g transform="translate(16 -20) rotate(-6 15 20)"><path class="paper" d="M0 0H22.5L30 7.5V40H0Z"/><path d="M22.5 0V7.5H30"/><path class="line" d="M4.8 12H23.4"/><path class="line" d="M4.8 18H16"/></g><g transform="translate(48 -24) rotate(5 15 20)"><path class="paper" d="M0 0H22.5L30 7.5V40H0Z"/><path d="M22.5 0V7.5H30"/><path class="line" d="M4.8 12H23.4"/><path class="line" d="M4.8 18H16"/></g><path class="paper" d="M0 18a4 4 0 0 1 4-4H88a4 4 0 0 1 4 4V60a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4Z"/></g>
<text x="270" y="176" text-anchor="middle" class="sub">Workspace folder</text>
<path class="dash" d="M320 104Q340 104 356 104"/>
<g transform="translate(360 60)"><rect class="paper dash" x="0" y="0" width="130" height="90" rx="8"/><path class="dash" d="M0 18H130"/><circle class="dot" cx="12" cy="9" r="2.5"/><circle class="dot" cx="20" cy="9" r="2.5"/><circle class="dot" cx="28" cy="9" r="2.5"/><path class="line dash" d="M16 36H106"/><path class="line dash" d="M16 48H106"/><path class="line dash" d="M16 60H106"/><path class="line dash" d="M16 72H70"/></g>
<text x="425" y="176" text-anchor="middle" class="sub">MarkPlus can be closed</text>
</svg>

<!-- /illustration -->

:::note
The chat, **Ask Claude** and the suggestions need **Claude Code** to be connected. The other apps work from their own window.
:::

## Links made by Claude

Claude can add links between your documents for you, such as *"Link every recipe name in the menu to its recipe."* See [Documentation with cross-references](../cross-references/#step-6-let-claude-add-links-for-you).
