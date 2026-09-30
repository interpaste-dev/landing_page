---
title: 'Safety numbers explained: when and why to compare them'
description: 'What safety numbers are, how comparing them protects you from impersonation in end-to-end encrypted chats, and what to do when a contact’s key changes.'
pubDate: 2026-09-01
category: security
translationKey: safety-numbers
keywords: ['safety numbers explained', 'verify encryption keys', 'key change warning', 'end-to-end encryption verification', 'secure messaging']
---

End-to-end encryption guarantees that only the holder of the right key can read your messages. But how do you know the key belongs to your friend and not to someone pretending to be them? That is the job of **safety numbers**.

## What is a safety number?

A safety number is a short code — a string of digits, or a QR code — calculated from **your keys and your contact’s keys**. You both see the same number if, and only if, you are really talking to each other’s devices.

If someone managed to insert themselves in the middle (a so-called man-in-the-middle attack), the keys would be different, and so would the number.

## Why comparing it matters

Encryption can’t protect you from talking to the wrong person. Without verification, a compromised or malicious server could, in theory, hand you a fake key for a contact. Comparing safety numbers closes that gap: once verified, even the server can’t swap keys without you noticing.

In Komunikator, verified contacts get a check mark, and group channels show how many members you have verified — for example, “4 of 5 people verified”.

## When to compare safety numbers

You don’t need to verify everyone you ever chat with. Do it when:

- **You start talking to someone regularly**, like a new teammate or a friend you’ll share plans with.
- **The conversation is sensitive** — account details, personal information, anything you wouldn’t post publicly.
- **You get a key change warning** you can’t explain.

## How to compare them

There are two easy ways:

1. **In person:** open the contact’s profile, tap *Verify*, and scan each other’s QR codes. It takes about ten seconds.
2. **Over a call:** read the numbers to each other in a voice call. Because voice is end-to-end encrypted too, and an attacker would struggle to fake your friend’s voice in real time, this is a practical option for remote teams.

Don’t compare numbers over a text message in the same chat you are trying to verify — that proves nothing.

## What a key change warning means

When a contact’s key changes, Komunikator shows a warning such as “Key changed — check it”. Usually the explanation is harmless:

- they installed the app on a new device,
- they reinstalled it or restored from a backup,
- they logged out a lost phone.

Ask them through another channel, or in a voice call, whether they did any of the above. If they did, compare the new safety number and move on. If they didn’t, don’t share anything sensitive until you’ve figured it out.

## The short version

- Safety numbers prove you are talking to the right devices.
- Compare them once with the people who matter, in person or over voice.
- Take key change warnings seriously, but don’t panic — most have an innocent explanation.

New to encryption? Start with [what end-to-end encryption and MLS actually do](/blog/end-to-end-encryption-mls-explained/).
