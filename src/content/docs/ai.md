---
title: AI
description: Connect AI apps to your documents and chat with Claude inside MarkPlus.
---

MarkPlus works with AI in two ways: AI apps you already use can read and edit your documents, and you can chat with Claude in a panel next to the editor.

## Connect an AI app

Open **MarkPlus › Connect to AI…**. For each app — **Claude Desktop**, **Claude Code**, **Cursor**, **VS Code** — choose a permission and click **Connect**:

- **Read only** — the AI can list, read and search your documents.
- **Read & write** — it can also create, edit, rename and delete them (deleting moves to the Trash).

**Disconnect** removes MarkPlus from that app. **Copy config** gives you the configuration to paste by hand into any other app that supports MCP.

The AI can work even when MarkPlus is closed — it edits the files directly.

## Watching the AI work

With the document open, edits from AI appear live:

- A cursor with the app's name (**✦ Claude Code**) shows where it's writing — in Claude's orange for Claude, violet for other apps.
- Changed blocks are highlighted for a few seconds.
- If the edit is outside the visible area, a notice offers **View**.
- One <kbd>⌘Z</kbd> undoes the whole edit.

When a document is edited while closed, its card in the grid shows **Edited by …** until you open it. The **● AI** dot in the status bar turns violet when an AI app is connected; hover to see which, click to open **Connect to AI…**.

## Chat with Claude

Click the **Claude** button in the header (next to the magnifying glass) or press <kbd>⌃⌘I</kbd> to open the chat panel.

- It needs **Claude Code connected** in **Connect to AI…** and signed in with your Claude account. The panel explains what's missing if it isn't.
- Each message includes the open document and your selection (remove the selection chip if you don't want to send it).
- Choose the **model** below the message box.
- Claude edits with the same tools as the apps above, so you see the same live cursor and can undo with <kbd>⌘Z</kbd>.
- Deleting a document always asks for your confirmation in the chat.

Drag the panel's edge to resize it; its width is remembered.
