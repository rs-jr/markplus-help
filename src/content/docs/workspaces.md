---
title: Workspaces
description: Keep each project in its own place and switch between them.
---

A **workspace** is a project. Each one is a folder on your Mac, and MarkPlus shows the documents of one workspace at a time.

**Example:** a *Work* workspace for meeting notes and reports, and a *Personal* one for recipes and trips. When you're in *Work*, your recipes stay out of the way.

<img class="shot shot-light" src="../screenshots/workspace-home-light.webp" width="1280" alt="A workspace home page: cover, icon, name, description and pinned documents" />
<img class="shot shot-dark" src="../screenshots/workspace-home-dark.webp" width="1280" alt="A workspace home page: cover, icon, name, description and pinned documents" />

## Create a workspace

1. Click the workspace name at the top of the document list.
2. Choose **New Workspace…**.
3. Give it a name and choose where to keep it (the Documents folder is suggested).

Want to use a folder you already have? Choose **Open Folder…** instead.

:::tip
The workspace has the same name as its folder. Rename one and the other changes too.
:::

## Switch between workspaces

Click the workspace name at the top of the list and pick another one. MarkPlus saves everything first, so you never lose a change.

Each window has its own workspace, like projects in VS Code. Switching changes only the window you're in, and its tabs are documents from that workspace. To work on two workspaces side by side, open a new window (**File › New Window**, <kbd>⇧⌘N</kbd>) and switch it to the other one. If the workspace you pick is already open in another window, MarkPlus takes you to that window.

Opening a document from Finder or with **File › Open…** follows the same idea: it opens in the window of its workspace, or in a new window for that workspace.

The same menu also has:

- **Rename…**: change the name. The folder in Finder is renamed too.
- **Show in Finder**: open the folder.

## Add a cover

Each workspace can have a picture at the top, like the cover of a notebook. Point at the cover to see the buttons:

- **Add cover** or **Change cover**: pick a picture on your Mac.
- **Unsplash**: opens a free photo site in your browser. Download a photo you like, then use **Add cover**.
- **Hide cover**: makes more room for your documents. **Show cover** brings it back.
- **Remove**: goes back to the default color gradient.

To make the cover taller or shorter, drag the handle at the bottom of the cover. It keeps that shape when you resize the window. Double-click the handle to go back to the original height.

## Add an icon

Give each workspace its own picture, like a logo. It sits at the top of the document list, next to the cover, and shows up wherever the workspace is listed.

1. Point at the cover and click **Add icon**. If the cover is hidden, the button is at the top right.
2. Choose a picture. A square one works best: MarkPlus crops it to a square.

To change or remove it, click the icon.

:::tip
When you [export the workspace](../export/#share-a-whole-workspace), the exported file uses this icon in Finder, so it's easy to recognize.
:::

## Add a description

Write what the workspace is about right below its name: the goal of the project, who it's for, what to read first. Click **Add a description…** and type. MarkPlus saves it as you go.

The description is the project's context:

- it shows on the [web page](../export/#share-a-whole-workspace) you export, below the workspace name;
- the [AI](../ai/) reads it too, so Claude and other assistants know what the project is about when they work on your documents.

**Example:** "Handbook for new baristas at the Main Street café. Start with Opening. Recipes use grams." Ask Claude to "add a recipe for a flat white" and it follows the same style.

## Pin documents

Keep the documents you open most at hand. Right-click a document in the list and choose **Pin**. It appears in a bar below the workspace description, highlighted, and stays in the list too (with a small pin next to its name).

<img class="shot shot-light" src="../screenshots/workspace-pinned-light.webp" width="1256" alt="The workspace name and description with a pinned document below" />
<img class="shot shot-dark" src="../screenshots/workspace-pinned-dark.webp" width="1256" alt="The workspace name and description with a pinned document below" />

- Click a pinned document to open it.
- To unpin, right-click it (in the bar or in the list) and choose **Unpin**.
- Databases can't be pinned.

Pins are saved in the workspace folder, so they travel with it. The [web page](../export/#share-a-whole-workspace) you export shows them too.

## "Folder not found"

If you move, rename or delete a workspace folder in Finder, or unplug the drive it's on, MarkPlus marks the workspace as **folder not found**. Your files aren't lost. You have two buttons:

- **Locate…**: show MarkPlus where the folder is now.
- **Remove** (trash icon): take the workspace off the list. Your files are not touched.

If you plug the drive back in, the workspace comes back on its own.

:::note
MarkPlus never deletes a workspace folder. To delete one with its documents, delete the folder in Finder.
:::

## Good to know

- Only documents directly inside the folder are listed. Subfolders aren't shown.
- To use your documents on another Mac, keep the workspace folder in iCloud Drive or Dropbox.
