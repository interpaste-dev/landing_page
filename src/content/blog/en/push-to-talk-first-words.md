---
title: 'Why push-to-talk cuts off your first words'
description: 'Why push-to-talk clips the start of your sentence, how a pre-roll buffer fixes it, and how to keep clean comms in competitive games today.'
pubDate: 2026-09-08
updatedDate: 2026-09-30
category: gaming
translationKey: push-to-talk
keywords: ['push to talk cuts off first word', 'push to talk settings', 'best push to talk key', 'voice chat for gamers', 'low latency voice chat']
---

You press your push-to-talk key, shout “**one** on B!” — and your team hears “…on B”. The most important word is gone. It is one of the most common complaints about voice chat in competitive games, and it is usually not your fault.

## Why push-to-talk clips the first word

When you press the key, a few things have to happen before your voice reaches anyone:

1. The app detects the key press.
2. The audio pipeline “opens the gate” and starts capturing.
3. The first audio frames are encoded and sent.

Each step takes a few milliseconds. On top of that, most people **start speaking at the same moment they press the key** — or slightly before. Put together, the first 100–300 ms of speech often never makes it into the stream. That is exactly one short word.

## The fix: a pre-roll buffer

The standard fix is a **short rolling buffer of microphone audio** kept while push-to-talk is idle. It is never sent anywhere — it sits in memory and is constantly overwritten. When you press the key, the app sends that buffer first and then continues live, so your team hears the whole sentence.

A good implementation keeps the buffer local, encrypts it like the rest of the stream, and catches up to real time almost immediately.

## Where Komunikator is today

We want push-to-talk in Komunikator to work exactly like that. Today:

- **The desktop app** doesn’t have push-to-talk yet. A global push-to-talk key with a pre-roll buffer is on the roadmap. Until then, mute with **Ctrl+Shift+M** or the microphone button in the voice panel.
- **The terminal client** has push-to-talk as a toggle key (**F12** by default) while its window is focused.

Details are in the help article [Push-to-talk and muting while you play](/help/push-to-talk-and-mute/).

## Clean comms today

A clean setup is mostly about habits:

- **Use a mouse side button or a key you never use in game** for push-to-talk. Avoid keys next to movement or ability bindings.
- **Turn on noise suppression** if you play with a mechanical keyboard or a fan nearby. In Komunikator it runs locally, before encryption.
- **Pause for a beat** after pressing the key, until the app supports a pre-roll buffer.
- **Check your input level once.** Say a sentence at normal volume in the microphone test and make sure it doesn’t clip.

Komunikator is a [private Discord alternative](/blog/private-discord-alternative/) with end-to-end encrypted voice — [download it](/download/) and try it with your team.
