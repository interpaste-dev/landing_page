---
title: 'What SAFE mode in the status bar means'
description: 'Komunikator servers switch between NOMINAL, DEGRADED, CORE_ONLY and SAFE modes to protect your messages under load. Here is what each mode means for you.'
category: servers
translationKey: safe-mode
updatedDate: 2026-09-30
appliesTo: '0.1+'
popular: 6
---

The status bar at the bottom of the app shows the **server mode**. The server switches it on its own — for example when it’s short on memory or one of its modules stops responding — so that the most important thing, your messages, keeps working.

| Mode | What it means |
| --- | --- |
| `NOMINAL` | Everything works normally. |
| `DEGRADED` | One of the server modules (for example voice) isn’t responding. That feature may not work; messages do. |
| `CORE_ONLY` | The server is under heavy load. Login, attachments and voice pause; messages keep flowing. |
| `SAFE` | Only messages work. Attachments and voice are temporarily turned off. |

## What you’ll notice in SAFE mode

- **Text messages work.** Anything that can’t be sent right away waits in your outbox and goes out automatically.
- **Voice doesn’t connect.**
- **Attachments are turned off.**

You don’t need to do anything. When the server recovers, the status bar switches back and everything is available again.

> **Encryption is the same in every mode.** Server modes only limit features. Your messages are always end-to-end encrypted with MLS, whatever the status bar says.
