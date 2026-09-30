---
title: 'What SAFE mode in the status bar means'
description: 'SAFE mode in Komunikator means only messages work while the server recovers. Learn what each server mode means and why encryption stays the same in all of them.'
category: servers
translationKey: safe-mode
updatedDate: 2026-09-20
appliesTo: '0.9+'
popular: 6
---

The status bar at the bottom of the app shows the **server mode**. The server sets it — for example when it’s under heavy load or during maintenance — so that the most important thing, your messages, keeps working.

| Mode | What it means |
| --- | --- |
| `NOMINAL` | Everything works normally. |
| `DEGRADED` | [TBD — description] |
| `CORE_ONLY` | [TBD — description] |
| `SAFE` | Only messages work. |

## What changes in SAFE mode

- **Text messages work** as usual.
- **Voice doesn’t connect** — the “Join voice” button is unavailable until the mode changes.
- **Attachments are turned off.**

You don’t need to do anything. When the server returns to normal, the status bar switches back and voice and attachments become available again.

> **Encryption is the same in every mode.** Server modes only limit features. Your messages are always end-to-end encrypted with MLS, whatever the status bar says.
