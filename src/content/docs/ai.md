---
title: Writing with AI
description: Ask Claude to rewrite text, chat about your documents and connect your AI apps.
---

Claude can help you right inside your documents: rewrite a paragraph, translate it, summarize a long text, or turn messy notes into a neat table. You always see what changed, and one <kbd>⌘Z</kbd> undoes it.

<!-- illustration:ai-ways -->

<svg class="illo" viewBox="0 0 520 214" width="520" role="img" aria-label="Three ways to work with Claude: ask about a selection with Command-J, let it continue your sentence with Shift-Space, or chat with Control-Command-I">
<rect class="paper" x="20" y="14" width="140" height="150" rx="12"/>
<text x="34" y="34" text-anchor="start" class="t">A selection</text>
<rect class="paper" x="55" y="178" width="70" height="24" rx="6"/>
<path class="line" d="M59 199H121"/>
<text x="90" y="193.5" text-anchor="middle" class="t">⌘J</text>
<rect class="paper" x="190" y="14" width="140" height="150" rx="12"/>
<text x="204" y="34" text-anchor="start" class="t">Continue</text>
<rect class="paper" x="225" y="178" width="70" height="24" rx="6"/>
<path class="line" d="M229 199H291"/>
<text x="260" y="193.5" text-anchor="middle" class="t">⇧Space</text>
<rect class="paper" x="360" y="14" width="140" height="150" rx="12"/>
<text x="374" y="34" text-anchor="start" class="t">Chat</text>
<rect class="paper" x="395" y="178" width="70" height="24" rx="6"/>
<path class="line" d="M399 199H461"/>
<text x="430" y="193.5" text-anchor="middle" class="t">⌃⌘I</text>
<path class="line" d="M34 52H94"/>
<rect class="soft-accent" x="30" y="60" width="118" height="22" rx="4"/>
<path class="accent" d="M34 66H140"/>
<path class="accent" d="M34 76H110"/>
<rect class="paper accent" x="36" y="92" width="110" height="22" rx="11"/>
<path class="fill-accent twinkle" d="M48 98C48.6 101.8 49.3 102.4 53 103C49.3 103.6 48.6 104.3 48 108C47.4 104.3 46.8 103.6 43 103C46.8 102.4 47.4 101.8 48 98Z"/>
<path class="line" d="M58 103H120"/>
<path class="line" d="M34 130H134"/>
<path class="line" d="M34 140H94"/>
<path class="line" d="M204 56H308"/>
<path class="line" d="M204 68H266.4"/>
<path class="line" d="M204 82H248"/>
<path class="accent" d="M252 76L252 88"/>
<path class="dash" d="M258 82H304"/>
<path class="dash" d="M204 96H300"/>
<path class="line" d="M204 122H308"/>
<path class="line" d="M204 134H266.4"/>
<rect class="soft" x="420" y="48" width="66" height="18" rx="9"/>
<path class="fill-accent twinkle" d="M382 79C382.6 82.8 383.3 83.4 387 84C383.3 84.6 382.6 85.3 382 89C381.4 85.3 380.8 84.6 377 84C380.8 83.4 381.4 82.8 382 79Z"/>
<path class="line" d="M392 82H470"/>
<path class="line" d="M392 92H450"/>
<path class="line" d="M392 102H462"/>
<rect class="paper accent" x="372" y="132" width="116" height="22" rx="11"/>
</svg>

<!-- /illustration -->

| Way | Press | Best for |
| --- | --- | --- |
| [Ask about a selection](#ask-claude-about-a-selection) | <kbd>⌘J</kbd> | Changing a piece of text you're looking at |
| [Continue your sentence](#let-claude-continue-your-sentence) | <kbd>⇧Space</kbd> | Getting unstuck while you write |
| [Chat](#chat-with-claude) | <kbd>⌃⌘I</kbd> | Bigger jobs: whole documents, several documents, databases, the web and your other apps |

## Before you start: connect Claude

1. Open **MarkPlus › Connect to AI…**.
2. Next to **Claude Code**, choose **Read & write** and click **Connect**.
3. If MarkPlus asks you to sign in, click **Sign in…** and use your Claude account.

That's it. The **● AI** dot at the bottom right turns violet when an AI is connected.

<!-- illustration:ai-connect -->

<svg class="illo" viewBox="0 0 520 186" width="520" role="img" aria-label="In MarkPlus › Connect to AI, connect Claude Code with Read & write; the AI dot at the bottom right lights up">
<g transform="translate(20 14)"><rect class="paper" x="0" y="0" width="270" height="140" rx="8"/><path d="M0 18H270"/><circle class="dot" cx="12" cy="9" r="2.5"/><circle class="dot" cx="20" cy="9" r="2.5"/><circle class="dot" cx="28" cy="9" r="2.5"/><text x="16" y="40" text-anchor="start" class="h">Connect to AI</text><rect class="paper" x="12" y="54" width="246" height="36" rx="8"/><path class="fill-accent twinkle" d="M30 66C30.7 70.5 31.5 71.3 36 72C31.5 72.7 30.7 73.5 30 78C29.3 73.5 28.5 72.7 24 72C28.5 71.3 29.3 70.5 30 66Z"/><text x="44" y="76" text-anchor="start" class="t">Claude Code</text><rect class="soft-accent accent" x="112" y="62" width="78" height="20" rx="10"/><text x="151" y="75.5" text-anchor="middle" class="t accent">Read & write</text><rect class="fill-accent" x="196" y="62" width="56" height="20" rx="6"/><text x="224" y="75.5" text-anchor="middle" class="t on-accent">Connect</text><circle class="fill-accent pulse" cx="214" cy="124" r="4"/><text x="222" y="128" text-anchor="start" class="t accent">AI</text></g>
<path class="accent" d="M294 84Q330 84 364 84"/>
<path class="accent" d="M358.7 86.9L364 84L358.7 81.1"/>
<rect class="paper" x="370" y="44" width="120" height="80" rx="14"/>
<path class="fill-accent twinkle" d="M430 60C431.2 67.5 432.5 68.8 440 70C432.5 71.2 431.2 72.5 430 80C428.8 72.5 427.5 71.2 420 70C427.5 68.8 428.8 67.5 430 60Z"/>
<text x="430" y="104" text-anchor="middle" class="label">Claude</text>
<text x="155" y="178" text-anchor="middle" class="sub">MarkPlus › Connect to AI…</text>
<text x="430" y="146" text-anchor="middle" class="sub">Your Claude account</text>
</svg>

<!-- /illustration -->

## What to ask

Talk to Claude the way you'd ask a colleague: say what you want and, if it helps, for whom. You don't need special words.

<!-- illustration:ai-requests -->

<svg class="illo" viewBox="0 0 520 196" width="520" role="img" aria-label="Things to ask Claude: rewrite, shorten, translate, make a table, create a document, add links, search the web, read your other apps">
<rect class="paper" x="20" y="12" width="110" height="80" rx="10"/>
<path d="M63 54L83 34L87 38L67 58Z"/>
<path class="accent" d="M61 60H89"/>
<text x="75" y="80" text-anchor="middle" class="t">Rewrite</text>
<rect class="paper" x="143" y="12" width="110" height="80" rx="10"/>
<path class="line" d="M180 36H216"/>
<path class="line" d="M180 44H206"/>
<path class="accent" d="M180 52H194"/>
<text x="198" y="80" text-anchor="middle" class="t">Shorten</text>
<rect class="paper" x="266" y="12" width="110" height="80" rx="10"/>
<text x="321" y="49" text-anchor="middle" class="link accent">EN → PT</text>
<text x="321" y="80" text-anchor="middle" class="t">Translate</text>
<rect class="paper" x="389" y="12" width="110" height="80" rx="10"/>
<rect class="accent" x="426" y="32" width="36" height="24" rx="3"/>
<path class="accent" d="M426 44H462"/>
<path class="accent" d="M438 32L438 56"/>
<path class="accent" d="M450 32L450 56"/>
<text x="444" y="80" text-anchor="middle" class="t">Make a table</text>
<rect class="paper" x="20" y="104" width="110" height="80" rx="10"/>
<g transform="translate(62 120)"><path class="paper" d="M0 0H19.5L26 6.5V32H0Z"/><path d="M19.5 0V6.5H26"/></g>
<path class="accent" d="M79 144H89"/>
<path class="accent" d="M84 139L84 149"/>
<text x="75" y="172" text-anchor="middle" class="t">New document</text>
<rect class="paper" x="143" y="104" width="110" height="80" rx="10"/>
<rect class="accent" x="180" y="129" width="22" height="14" rx="7"/>
<rect x="194" y="129" width="22" height="14" rx="7"/>
<text x="198" y="172" text-anchor="middle" class="t">Add links</text>
<rect class="paper" x="266" y="104" width="110" height="80" rx="10"/>
<circle cx="321" cy="136" r="14"/>
<ellipse cx="321" cy="136" rx="5.9" ry="14"/>
<path d="M307 136H335"/>
<text x="321" y="172" text-anchor="middle" class="t">Search the web</text>
<rect class="paper" x="389" y="104" width="110" height="80" rx="10"/>
<rect x="434" y="130" width="20" height="16" rx="4"/>
<path d="M440 124L440 130"/>
<path d="M448 124L448 130"/>
<path class="accent" d="M444 146L444 152"/>
<text x="444" y="172" text-anchor="middle" class="t">Read other apps</text>
</svg>

<!-- /illustration -->

| Kind | Try asking |
| --- | --- |
| **Ask a question** | *"When did we decide to change the coffee supplier, and why?"* · *"Who is in charge of the opening checklist?"* |
| **Rewrite** | *"Make this friendlier."* · *"Rewrite for a new barista on their first day."* |
| **Shorten or expand** | *"Summarize in three bullet points."* · *"Add an example to each step."* |
| **Translate** | *"Translate this page to Spanish, keeping the formatting."* |
| **Organize** | *"Turn these notes into a table with date, task and owner."* · *"Split this into pages by topic."* |
| **Create** | *"Create a document with a packing list for a beach trip."* · *"Create a Suppliers database from this list."* |
| **Connect** | *"Link every recipe name to its recipe."* · *"Mention the owner of each task with @."* |
| **Research** | *"Find the opening hours of the Louvre and add them with the source."* |
| **Bring in other apps** | *"Read the transcript of today's meeting and write the decisions here."* |

### Ask questions about your work

You don't have to remember where things are. Ask in the chat, the way you'd ask someone who read everything:

<!-- illustration:ai-question -->

<svg class="illo" viewBox="0 0 520 300" width="520" role="img" aria-label="Ask a question in the chat; Claude looks through your documents and databases, and through your other apps with connectors, then answers, explains and tells you where it found it">
<rect class="paper" x="20" y="20" width="210" height="200" rx="12"/>
<rect class="soft" x="54" y="32" width="164" height="38" rx="10"/>
<text x="64" y="48" text-anchor="start" class="t">When did we decide to</text>
<text x="64" y="61" text-anchor="start" class="t">change the coffee supplier?</text>
<path class="fill-accent twinkle" d="M66 91C66.8 96.3 67.8 97.2 73 98C67.8 98.8 66.8 99.8 66 105C65.2 99.8 64.3 98.8 59 98C64.3 97.2 65.2 96.3 66 91Z"/>
<path class="line" d="M80 98H210"/>
<path class="line" d="M54 112H204"/>
<path class="line" d="M54 126H196"/>
<path class="line" d="M54 140H170"/>
<rect class="paper accent" x="54" y="158" width="156" height="20" rx="10"/>
<g transform="translate(62 162)"><path class="paper" d="M0 0H6L8 2V11H0Z"/><path d="M6 0V2H8"/></g>
<text x="76" y="172" text-anchor="start" class="t accent">Meeting minutes · Mar 12</text>
<circle class="fill-accent step" cx="38" cy="51" r="9"/>
<text x="38" y="54.5" text-anchor="middle" class="t on-accent">1</text>
<circle class="fill-accent step" style="animation-delay:1.2s" cx="38" cy="118" r="9"/>
<text x="38" y="121.5" text-anchor="middle" class="t on-accent">3</text>
<path class="accent dash flow" d="M296 110Q262 116 234 128"/>
<path class="accent" d="M237.7 123.3L234 128L240 128.6"/>
<path class="dash flow" d="M300 246Q262 230 234 176"/>
<path d="M239 179.4L234 176L233.9 182"/>
<circle class="fill-accent step" style="animation-delay:0.6s" cx="400" cy="14" r="9"/>
<text x="400" y="17.5" text-anchor="middle" class="t on-accent">2</text>
<g transform="translate(300 40)"><rect class="paper" x="0" y="0" width="128" height="96" rx="6"/><text x="12" y="15.5" text-anchor="start" class="t">Meeting minutes</text><path class="line" d="M0 24H128"/>,<circle cx="14" cy="36" r="4.5"/>,<path class="line" d="M26 36H71.7"/>,<path class="line" d="M84.5 36H116"/><rect class="soft-accent pulse" x="1" y="48" width="126" height="24" rx="0"/>,<circle class="accent" cx="14" cy="60" r="4.5"/>,<path class="accent" d="M26 60H71.7"/>,<path class="line" d="M84.5 60H116"/>,<circle cx="14" cy="84" r="4.5"/>,<path class="line" d="M26 84H71.7"/>,<path class="line" d="M84.5 84H116"/></g>
<g transform="translate(440 34)"><path class="paper" d="M0 0H48L60 12V76H0Z"/><path d="M48 0V12H60"/><path class="line" d="M9.6 22.8H46.8"/><path class="line" d="M9.6 33.4H46.8"/><path class="line" d="M9.6 44.1H31.9"/></g>
<g transform="translate(440 120)"><path class="paper" d="M0 0H48L60 12V76H0Z"/><path d="M48 0V12H60"/><path class="line" d="M9.6 22.8H46.8"/><path class="line" d="M9.6 33.4H46.8"/><path class="line" d="M9.6 44.1H31.9"/></g>
<g class="bob"><circle class="paper accent" cx="420" cy="150" r="18"/><path class="accent" d="M433 163L446 176"/></g>
<text x="400" y="214" text-anchor="middle" class="sub">Your documents and databases</text>
<rect class="paper" x="296" y="230" width="44" height="36" rx="9"/>
<text x="318" y="282" text-anchor="middle" class="t">Meetings</text>
<rect class="paper" x="362" y="230" width="44" height="36" rx="9"/>
<text x="384" y="282" text-anchor="middle" class="t">Drive</text>
<rect class="paper" x="428" y="230" width="44" height="36" rx="9"/>
<text x="450" y="282" text-anchor="middle" class="t">Figma</text>
<path d="M306 245.2L306 250.8"/>
<path d="M309 242.4L309 253.6"/>
<path d="M312 244L312 252"/>
<path d="M315 240L315 256"/>
<path d="M318 243.2L318 252.8"/>
<path d="M321 241.2L321 254.8"/>
<path d="M324 244.8L324 251.2"/>
<path d="M327 242L327 254"/>
<path d="M330 245.6L330 250.4"/>
<g transform="translate(376 238)"><path class="paper" d="M0 0H12L16 4V20H0Z"/><path d="M12 0V4H16"/><path class="line" d="M2.6 8H12.5"/><path class="line" d="M2.6 14H8.5"/></g>
<rect x="438" y="239" width="9" height="9" rx="2"/>
<circle cx="458" cy="243.5" r="4.5"/>
<path d="M440 260L444.5 252L449 260Z"/>
<rect x="453" y="252" width="8" height="8" rx="4"/>
<text x="400" y="298" text-anchor="middle" class="sub">Your other apps, with connectors (read only)</text>
<text x="125" y="240" text-anchor="middle" class="sub">Ask, get the answer and the source</text>
</svg>

<!-- /illustration -->

Claude looks through the documents and databases of the workspace and, with [connectors](#connectors-read-your-other-apps) on, through your other apps too: your meeting notes app, Google Drive, Figma, Jira. Then it answers, explains how it got there and tells you where it found it. Ask it to open that document and it does.

- *"When did we decide to change the coffee supplier, and why?"* Claude finds the meeting in *Meeting minutes*, gives you the date and the reasons discussed, and who was there.
- *"What did Ana promise to do at the last design meeting?"*
- *"Which features are still in progress for v2.0, and who owns them?"* (from a *Features* database)
- *"Is there anything in the handbook about cleaning the grinder? Summarize it."*
- *"Compare what the Loyalty program spec says about points with what we decided in the March meetings."*

With connectors, questions can reach outside the workspace:

- *"What did the client say about the menu board in yesterday's call?"* (meeting notes app)
- *"Which screens in the Figma file still use the old logo?"* (Figma)
- *"Is the Loyalty program spec in Drive in line with what we wrote here?"* (Google Drive)
- *"Which Jira issues about the menu redesign are still open?"* (Atlassian)

:::tip
Keep meeting minutes in a [database](../databases/#ideas-for-databases) or in documents in the workspace: everything Claude can read, it can answer about.
:::

:::tip
The more context, the better the result. "Rewrite this" works; "Rewrite this for customers, shorter, without jargon" works better.
:::

## Ask Claude about a selection

The fastest way to improve a piece of text:

1. Select the text.
2. Click the **Claude** button at the end of the formatting menu, or press <kbd>⌘J</kbd>.
3. Type what you want and press <kbd>↩</kbd>.

<!-- illustration:ai-selection -->

<svg class="illo" viewBox="0 0 520 196" width="520" role="img" aria-label="Select text, press Command-J and type what you want: Claude rewrites the selection in place">
<rect class="paper" x="20" y="16" width="216" height="150" rx="10"/>
<path class="line" d="M34 36H204"/>
<path class="line" d="M34 47H136"/>
<rect class="soft-accent" x="30" y="54" width="196" height="30" rx="4"/>
<path class="accent" d="M36 62H210"/>
<path class="accent" d="M36 75H170"/>
<rect class="paper accent" x="40" y="94" width="178" height="26" rx="13"/>
<path class="fill-accent twinkle" d="M54 101C54.7 105.5 55.5 106.3 60 107C55.5 107.7 54.7 108.5 54 113C53.3 108.5 52.5 107.7 48 107C52.5 106.3 53.3 105.5 54 101Z"/>
<text x="66" y="111" text-anchor="start" class="t">Make it friendlier</text>
<path class="line" d="M34 138H204"/>
<path class="line" d="M34 149H136"/>
<path class="accent" d="M242 92Q262 92 282 92"/>
<path class="accent" d="M276.7 94.9L282 92L276.7 89.1"/>
<rect class="paper" x="286" y="16" width="216" height="150" rx="10"/>
<path class="line" d="M300 36H470"/>
<path class="line" d="M300 47H402"/>
<rect class="soft-accent pulse" x="296" y="54" width="196" height="42" rx="4"/>
<path class="line" d="M302 64H478"/>
<path class="line" d="M302 76H478"/>
<path class="line" d="M302 88H407.6"/>
<path class="line" d="M300 120H470"/>
<path class="line" d="M300 131H470"/>
<path class="line" d="M300 142H402"/>
<text x="128" y="188" text-anchor="middle" class="sub">Select, ⌘J, ask</text>
<text x="394" y="188" text-anchor="middle" class="sub">The new text takes its place</text>
</svg>

<!-- /illustration -->

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

<!-- illustration:ai-continue -->

<svg class="illo" viewBox="0 0 520 166" width="520" role="img" aria-label="Press Shift-Space and Claude suggests how to continue your sentence in gray; Tab accepts it, Escape dismisses it">
<rect class="paper" x="20" y="20" width="480" height="64" rx="10"/>
<text x="40" y="56" text-anchor="start" class="link">The grinder needs cleaning every</text>
<path class="accent" d="M222 44L222 62"/>
<text x="228" y="56" text-anchor="start" class="link ghost">Friday, before the evening rush.</text>
<rect class="paper" x="165" y="104" width="70" height="24" rx="6"/>
<path class="line" d="M169 125H231"/>
<text x="200" y="119.5" text-anchor="middle" class="t">⇥ Tab</text>
<text x="200" y="150" text-anchor="middle" class="sub">Accept</text>
<rect class="paper" x="285" y="104" width="70" height="24" rx="6"/>
<path class="line" d="M289 125H351"/>
<text x="320" y="119.5" text-anchor="middle" class="t">Esc</text>
<text x="320" y="150" text-anchor="middle" class="sub">Dismiss</text>
</svg>

<!-- /illustration -->

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

<!-- illustration:ai-chat-context -->

<svg class="illo" viewBox="0 0 520 224" width="520" role="img" aria-label="In the chat, Claude already knows the open document, your selection and the workspace description, and can read files you attach and search the web">
<path class="dash flow" d="M110 40Q160 40 206 84.4"/>
<path d="M200.2 82.8L206 84.4L204.2 78.7"/>
<path class="dash flow" d="M110 104Q160 104 206 110"/>
<path d="M200.4 112.2L206 110L201.2 106.5"/>
<path class="dash flow" d="M110 168Q160 168 206 135.6"/>
<path d="M203.4 141L206 135.6L200 136.3"/>
<path class="dash flow" d="M414 62Q360 62 316 93.2"/>
<path d="M318.6 87.8L316 93.2L322 92.5"/>
<path class="dash flow" d="M414 146Q360 146 316 126.8"/>
<path d="M322 126.3L316 126.8L319.7 131.5"/>
<g transform="translate(70 20)"><path class="paper" d="M0 0H22.5L30 7.5V36H0Z"/><path d="M22.5 0V7.5H30"/><path class="line" d="M4.8 11.5H23.4"/><path class="line" d="M4.8 17.5H16"/></g>
<rect class="paper" x="66" y="90" width="40" height="26" rx="4"/>
<rect class="soft-accent" x="70" y="96" width="32" height="8" rx="2"/>
<path class="line" d="M72 110H98"/>
<rect class="paper" x="64" y="152" width="44" height="30" rx="6"/>
<rect class="soft" x="65" y="153" width="42" height="8" rx="0"/>
<path class="accent" d="M70 170H100"/>
<path class="accent" d="M70 176H90"/>
<text x="86" y="72" text-anchor="middle" class="t">Open document</text>
<text x="86" y="136" text-anchor="middle" class="t">Your selection</text>
<text x="86" y="200" text-anchor="middle" class="t">Workspace description</text>
<g transform="translate(420 42)"><rect class="paper" x="0" y="0" width="34" height="26" rx="3"/><circle cx="23.8" cy="7.8" r="2.6"/><path d="M3.4 22.1L12.9 11.7L19.7 18.2L24.5 14.3L30.6 22.1"/></g>
<g transform="translate(458 40)"><path class="paper" d="M0 0H16.5L22 5.5V30H0Z"/><path d="M16.5 0V5.5H22"/><path class="line" d="M3.5 9.5H17.2"/><path class="line" d="M3.5 15.5H11.7"/></g>
<circle cx="448" cy="146" r="16"/>
<ellipse cx="448" cy="146" rx="6.7" ry="16"/>
<path d="M432 146H464"/>
<text x="448" y="96" text-anchor="middle" class="t">Files you attach</text>
<text x="448" y="180" text-anchor="middle" class="t">The web</text>
<rect class="paper" x="210" y="24" width="102" height="176" rx="12"/>
<path class="fill-accent twinkle" d="M261 43C262.1 49.8 263.3 50.9 270 52C263.3 53.1 262.1 54.3 261 61C259.9 54.3 258.8 53.1 252 52C258.8 50.9 259.9 49.8 261 43Z"/>
<text x="261" y="80" text-anchor="middle" class="label">Claude</text>
<rect class="soft" x="226" y="96" width="70" height="14" rx="7"/>
<rect class="soft" x="226" y="118" width="56" height="14" rx="7"/>
<rect class="paper accent" x="220" y="168" width="82" height="20" rx="10"/>
</svg>

<!-- /illustration -->

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
<g transform="translate(30 40)"><path class="paper" d="M0 0H60L72 12V104H0Z"/><path d="M60 0V12H72"/><path d="M12 20.9L12 27.2"/>,<path d="M17.3 17.7L17.3 30.3"/>,<path d="M22.7 19.5L22.7 28.5"/>,<path d="M28 15L28 33"/>,<path d="M33.3 18.6L33.3 29.4"/>,<path d="M38.7 16.4L38.7 31.7"/>,<path d="M44 20.4L44 27.6"/>,<path d="M49.3 17.3L49.3 30.8"/>,<path d="M54.7 21.3L54.7 26.7"/>,<path d="M60 20.9L60 27.2"/><path class="line" d="M10 52H62"/>,<path class="line" d="M10 62H62"/>,<path class="line" d="M10 72H62"/>,<path class="line" d="M10 82H41.2"/></g>
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

<!-- illustration:ai-live-edit -->

<svg class="illo" viewBox="0 0 520 200" width="520" role="img" aria-label="While Claude edits a document you have open, a cursor labeled Claude shows where it writes, the changed part glows, and one Command-Z undoes it">
<g transform="translate(40 12)"><path class="paper" d="M0 0H278L290 12V176H0Z"/><path d="M278 0V12H290"/><path class="line" d="M18 24H248"/>,<path class="line" d="M18 35H156"/><rect class="soft-accent pulse" x="12" y="50" width="262" height="64" rx="6"/><path class="line" d="M20 64H240"/>,<path class="line" d="M20 76H240"/>,<path class="line" d="M20 88H240"/>,<path class="line" d="M20 100H152"/><path class="accent" d="M156 96L156 110"/><rect class="fill-accent" x="156" y="112" width="68" height="18" rx="9"/><text x="190" y="124.5" text-anchor="middle" class="t on-accent">✦ Claude</text><path class="line" d="M18 146H248"/>,<path class="line" d="M18 157H156"/></g>
<rect class="paper" x="388" y="74" width="80" height="52" rx="10"/>
<path class="line" d="M392 120H464"/>
<text x="428" y="106" text-anchor="middle" class="label">⌘Z</text>
<text x="428" y="152" text-anchor="middle" class="sub">Undoes it all</text>
</svg>

<!-- /illustration -->

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

<!-- illustration:xref-claude -->

<svg class="illo" viewBox="0 0 520 208" width="520" role="img" aria-label="Ask Claude to link every drink name to its recipe, and the names in your document become links">
<rect class="paper" x="20" y="46" width="150" height="96" rx="12"/>
<path class="fill-accent twinkle" d="M42 61C43.1 67.8 44.3 68.9 51 70C44.3 71.1 43.1 72.3 42 79C40.9 72.3 39.8 71.1 33 70C39.8 68.9 40.9 67.8 42 61Z"/>
<rect class="soft" x="58" y="62" width="98" height="14" rx="7"/>
<rect class="soft" x="36" y="88" width="120" height="14" rx="7"/>
<rect class="soft" x="36" y="110" width="90" height="14" rx="7"/>
<path class="accent" d="M174 94Q196 94 216 94"/>
<path class="accent" d="M210.7 96.9L216 94L210.7 91.1"/>
<g transform="translate(220 12)"><path class="paper" d="M0 0H268L280 12V170H0Z"/><path d="M268 0V12H280"/><text x="14" y="30" text-anchor="start" class="h">Opening checklist</text><path class="line" d="M14 54H74"/>,<path class="accent twinkle" d="M82 54H136"/>,<path class="line" d="M144 54H184"/>,<path class="line" d="M14 76H54"/>,<path class="accent twinkle" style="animation-delay:0.4s" d="M62 76H158"/>,<path class="line" d="M166 76H218"/>,<path class="line" d="M14 98H90"/>,<path class="accent twinkle" style="animation-delay:0.8s" d="M98 98H138"/>,<path class="line" d="M146 98H210"/>,<path class="line" d="M14 120H44"/>,<path class="accent twinkle" style="animation-delay:1.2000000000000002s" d="M52 120H122"/>,<path class="line" d="M130 120H176"/>,<path class="line" d="M14 142H78"/>,<path class="accent twinkle" style="animation-delay:1.6s" d="M86 142H136"/>,<path class="line" d="M144 142H214"/></g>
<text x="95" y="162" text-anchor="middle" class="sub">Ask Claude</text>
<text x="360" y="202" text-anchor="middle" class="sub">The names become links</text>
</svg>

<!-- /illustration -->

Claude can add links between your documents for you, such as *"Link every recipe name in the menu to its recipe."* See [Documentation with cross-references](../cross-references/#step-6-let-claude-add-links-for-you).
