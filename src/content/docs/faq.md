---
title: FAQ and troubleshooting
description: Answers to common questions.
---

## Why are some options disabled or missing?

You're probably in a `.md` document. Markdown can't store things like image sizes, colors, columns, embeds, attachments or link views, so MarkPlus hides or disables them and their tooltip says **Only available in .mdoc documents**. Use **File › Convert to .mdoc** to get every feature. See [.mdoc or .md?](../documents/#mdoc-or-md).

## A file doesn't show up in the grid

The grid lists only documents at the **top level** of the active workspace's folder. Files in subfolders aren't listed, and documents opened from elsewhere (<kbd>⌘O</kbd>, Finder) open in a tab but don't join the grid. Check that the file is a `.md` or `.mdoc`.

## My workspace says "folder not found"

The folder was moved, renamed in Finder, deleted, or is on a drive that isn't connected. Use **Locate…** to point to it again, or reconnect the drive. See [Workspaces](../workspaces/#folder-not-found).

## How do I send a .mdoc to someone?

A `.mdoc` is a package (a folder Finder shows as one file). Email and websites see it as a folder, so **zip it first** (right-click › Compress). Or export to [PDF](../export/#pdf) or [Markdown](../export/#markdown).

## The AI app can't find my documents

- Open **MarkPlus › Connect to AI…** and check that the app shows as connected, then restart the AI app.
- Choose **Read & write** if you want it to edit, not just read.
- Without a workspace parameter, the AI uses the workspace active in MarkPlus.

## The Claude chat says to connect or sign in

The chat runs on **Claude Code**. Connect Claude Code in **Connect to AI…** and sign in with your Claude account (the panel's **Sign in…** button opens the Terminal for you). Other apps don't enable the chat.

## Will I lose changes if the app quits?

No. Changes are saved two seconds after you stop typing, and again before you switch documents, close the window or quit (<kbd>⌘Q</kbd>).

## Where did my deleted document go?

To the **Trash**. Put it back from there. Removing an external document only removes it from MarkPlus; the file is not touched.

## Spell checking is in the wrong language

MarkPlus uses the macOS spell checker. Go to **System Settings › Keyboard › Text Input › Edit… › Spelling** and choose a language, or **Automatic by Language**.

## The first time I open MarkPlus, macOS won't let me

If your copy isn't signed, right-click the app and choose **Open**, then confirm.
