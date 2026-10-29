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

:::note
The chat, **Ask Claude** and the suggestions need **Claude Code** to be connected. The other apps work from their own window.
:::

## Links made by Claude

Claude can add links between your documents for you, such as *"Link every recipe name in the menu to its recipe."* See [Documentation with cross-references](../cross-references/#step-6-let-claude-add-links-for-you).
