---
title: Workspaces
description: Organize documents in folders and switch between projects.
---

A **workspace** is a project area linked to a folder on your Mac, much like a project in VS Code. You can have several workspaces; one is active at a time, and the grid shows only its documents.

## Create or open a workspace

- **Create a workspace**: name + location. MarkPlus creates `<location>/<name>`.
- **Open folder…**: turn an existing folder into a workspace.

Both are available on the start screen, in the workspace menu (click the workspace name above the grid) and in the **Workspace** menu (when the grid is showing).

## Switch, rename and reveal

Click the workspace name at the top of the grid to open the workspace menu:

- Pick another workspace to switch to it. Pending changes are saved first, and you return to the grid.
- **Rename…** renames the folder on disk. If it's the workspace you have open, your document stays open.
- **Show in Finder** opens the folder.

The same actions are in the **Workspace** menu, plus **Switch Workspace** and **New Workspace…**.

:::note
To delete a workspace and its files, delete the folder in Finder. MarkPlus never deletes a workspace folder for you.
:::

## Folder not found

If a workspace's folder was moved, deleted or is on a disconnected drive, it stays in the list marked **folder not found**:

- **Locate…** links it to a folder again (any folder — the workspace takes the new folder's name).
- **Remove** takes it off the list. No files are touched.

If the folder comes back (for example, you reconnect the drive), the workspace returns to normal on its own.

## Cover

The grid shows a cover at the top of each workspace. Hover over it to **Add cover** / **Change cover** (pick any image) or **Remove cover**. The image is stored inside the workspace folder (`.markplus/cover`), so it travels with it.

## What's in a workspace folder

```text
My workspace/
├── Meeting notes.mdoc/   ← a MarkPlus document (a package: Finder shows it as one file)
├── README.md             ← a plain Markdown file, edited in place
└── assets/               ← images used by the .md files in this folder
```

Only files at the top level of the folder are listed — subfolders are not shown in the grid.
