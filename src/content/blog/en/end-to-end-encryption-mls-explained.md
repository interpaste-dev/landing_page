---
title: 'What is end-to-end encryption? MLS explained simply'
description: 'End-to-end encryption and the MLS protocol (RFC 9420) explained without jargon: how group keys work, what the server sees, and why it scales to large groups.'
pubDate: 2026-09-22
category: security
translationKey: e2ee-mls
keywords: ['what is end-to-end encryption', 'mls protocol explained', 'messaging layer security', 'rfc 9420', 'encrypted group chat']
---

“End-to-end encrypted” shows up on almost every messaging app’s homepage. It is a real, meaningful guarantee — but only if you know what it covers. This guide explains it without jargon, and then shows how **MLS**, the protocol Komunikator uses, makes it work for big groups.

## End-to-end encryption in one sentence

**End-to-end encryption (E2EE) means a message is locked on the sender’s device and can only be unlocked on the recipients’ devices.** Nobody in between — not the internet provider, not the hosting company, not the app’s own server — has the key.

Compare that with the two weaker setups you will often see:

- **Encryption in transit (TLS/HTTPS):** the message is protected on its way to the server, but the server decrypts it and can read it.
- **Encryption at rest:** the server stores the message encrypted on disk, but it holds the key, so it can still read it whenever it wants.

With E2EE, the server only ever handles **ciphertext** — random-looking data like `8f3a·c21e·9b07·44d1…`.

## Why groups make encryption hard

Encrypting a message between two people is a solved problem. Groups are harder:

- A clan server can have hundreds of members, each with several devices.
- People join and leave all the time.
- When someone leaves, they must **not** be able to read future messages. When someone joins, they usually should **not** be able to read old ones.

The naive approach — encrypt every message separately for every device — gets slow and expensive fast. That is exactly the problem MLS was designed to solve.

## What is MLS?

**MLS (Messaging Layer Security)** is an open standard published by the IETF as **RFC 9420** in 2023. It was designed by cryptographers and engineers from across the industry specifically for secure group messaging.

The core ideas, simplified:

### 1. A shared group key, updated in “epochs”

Everyone in the group shares a secret that is used to derive the keys for messages. Every time the group changes — someone joins, leaves or refreshes their keys — the group moves to a new **epoch** with a brand-new secret. In the app you might see something like “Group keys rotated · epoch 14”.

### 2. A tree instead of a list

MLS arranges members’ keys in a **ratchet tree**. Updating the group secret only requires work proportional to the *logarithm* of the group size, not the full size. In practice, that means changes stay fast even in large groups.

### 3. Forward secrecy and post-compromise security

- **Forward secrecy:** if a device is compromised today, the attacker still can’t read messages from earlier epochs.
- **Post-compromise security:** once the compromised device’s keys are updated, the attacker is locked out of future messages again.

These two properties are what make MLS a strong fit for long-lived gaming servers where membership changes every week.

## What the server still sees

End-to-end encryption protects **content**. It does not magically hide everything. Our server can’t see message text, files, voice or channel names — but it does see **metadata**, such as who is in a group and when they were online. We are upfront about that on our homepage, and you can reduce it further by running your own server.

## How to check that you are really encrypted

Encryption only protects you if you are talking to the right person. That is what **safety numbers** are for: a short code derived from your keys that you can compare with a friend in person or over a call. We explain when and why to do it in [our safety numbers guide](/blog/safety-numbers-explained/).

## The short version

- E2EE means only the people in the conversation hold the keys.
- MLS (RFC 9420) makes that practical for large, changing groups.
- The server relays ciphertext; it can’t read your messages or hear your voice calls.

Want to see it in action? Komunikator is a [private Discord alternative](/blog/private-discord-alternative/) built on MLS — free and open source.
