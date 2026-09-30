---
title: 'Encrypted terminal chat client (TUI) — Komunikator in your terminal'
description: 'Komunikator’s terminal client: end-to-end encrypted chat with MLS in any terminal and over SSH. Groups, reactions, voice, safety numbers and keyboard shortcuts.'
heading: 'Encrypted chat in your terminal'
eyebrow: 'Terminal client'
lead: 'A full Komunikator client that runs in any terminal — and over SSH. The same MLS encryption, the same servers and conversations as the desktop app.'
updatedDate: 2026-09-30
route: tui
schema: app
---

![Komunikator terminal client: the conversation list, a group chat with reactions and read receipts, and the member list](../../../assets/app-tui.png)

## What it can do

- **1:1 conversations and groups**, end-to-end encrypted with MLS (RFC 9420). Create groups, add and remove members, rename groups and contacts.
- **Chat like you’re used to:** replies, editing, deleting, reactions, ✓ sent / ✓✓ read, “typing…”, unread counts, search and older history. **Bold**, `code`, links and emoji (`:fire:` is replaced when you send).
- **Voice:** **F7** joins or leaves a call, **F8** mutes, and push-to-talk works as a toggle key.
- **Security:** every request is signed with the device key, safety numbers to verify contacts, a warning when a key changes, a PIN that encrypts secrets in the system keychain and backups protected with a phrase.
- **Reliability:** an offline outbox, resuming without duplicates and server modes. Your clock can be off — requests use server time.
- **Looks:** warm, light and AMOLED themes, compact view, mouse support and notifications without message content when a PIN is set.

## Keyboard shortcuts

| Shortcut | Action |
| --- | --- |
| `Ctrl+N` / `Ctrl+G` | new conversation / new group |
| `↑` in an empty field | select a message: `r` reply, `e` edit, `d` delete, `1`–`6` react |
| `Ctrl+E` | emoji |
| `Ctrl+F` | search in the conversation |
| `Ctrl+R` | rename a conversation or contact |
| `Ctrl+S` | safety numbers |
| `Ctrl+Y` | copy my device ID |
| `Ctrl+,` | settings |
| `Ctrl+K` | menu: group members, PIN, backup and more |
| `Ctrl+L` | log out (removes keys and history from this computer) |

## Requirements

- Windows, macOS or Linux — one executable, about 22 MB
- About 50 MB of RAM
- A system keychain: Windows Credential Manager, macOS Keychain or Linux Secret Service

On Windows, double-clicking the file opens it in Windows Terminal if it’s installed.

## Why a terminal client?

Because some of us live in the terminal. It’s light, works over SSH on a server or a Raspberry Pi, and makes a good second window while you play. Want the full graphical app instead? [Download the desktop app](/download/).
