---
title: 'Privacy policy — Komunikator'
description: 'What data the Komunikator server processes, what it can’t see because of end-to-end encryption, how long data is kept and what rights you have.'
heading: 'Privacy policy'
eyebrow: 'Legal'
lead: 'Draft. Because of end-to-end encryption, we can’t read your messages. Here is exactly what the server does process.'
updatedDate: 2026-09-30
route: privacy
cta: false
---

> **Draft for review.** Fields marked [TBD] must be completed, and the whole document reviewed by a lawyer, before publication.

## Who we are

The controller of your data is **[TBD — company name, address, registration number]**. Contact: **[TBD — privacy e-mail]**.

## What we can’t see

Messages, files, reactions, voice and video are encrypted on your devices with MLS and SFrame. Group, server and channel names are sent in encrypted messages too. The server stores and delivers ciphertext and **has no keys to decrypt it**.

## What the server processes

| Data | Why | How long |
| --- | --- | --- |
| Username and password hash (Argon2id) | to log you in | until you delete your account |
| Devices and their public keys | to deliver messages and let contacts verify keys | until the device is logged out |
| Encrypted messages and control messages | to deliver them to recipients | delivered ones are deleted after 30 days |
| Encrypted attachments | to deliver files | within the retention period, up to 512 MiB per account |
| Metadata: who is in which group, when devices were online | required to route messages | [TBD] |
| Technical logs (e.g. IP address, time of request) | security and troubleshooting | [TBD] |

Voice goes through a LiveKit media server. It forwards encrypted frames and sees your IP address and a room name derived from a hash of the group ID — not the group name or anything you say.

## Updates

The app checks for updates every 6 hours by downloading a signed file from the server. That request reveals your IP address and nothing else.

## This website

The website doesn’t use cookies, analytics or ads. Our hosting provider may keep standard server logs: **[TBD — hosting provider and log retention]**.

## Your rights

You can access, correct and delete your data, restrict or object to processing, and lodge a complaint with a data protection authority **[TBD — e.g. the President of the Personal Data Protection Office (UODO) in Poland]**. To delete your account, write to **[TBD — e-mail]**. Logging out on a device removes the keys and history stored on that computer.

## Self-hosted servers

If you use a server run by someone else (for example your clan’s), that operator is responsible for the data on their server.

## Changes

We’ll publish changes to this policy on this page and update the date above.
