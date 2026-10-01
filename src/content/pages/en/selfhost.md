---
title: 'Self-hosted encrypted chat server — Komunikator self-hosting'
description: 'Run your own end-to-end encrypted Komunikator server with Docker: requirements, quick start, ports, voice with LiveKit and certificates. It never sees messages.'
heading: 'Run your own server'
eyebrow: 'Self-hosting'
lead: 'Host Komunikator for your clan, company or friends. Encryption works exactly the same — the server only relays ciphertext and never has the keys.'
updatedDate: 2026-10-01
route: selfhost
---

## What you get

- **The whole stack in Docker:** a small core, a TLS 1.3 gateway and separate modules for accounts, attachments and voice, each in its own container.
- **The same end-to-end encryption.** Messages are encrypted with MLS on devices; your server stores and delivers ciphertext only.
- **Protection under load.** The server switches to limited modes on its own (for example when it’s short on memory) so that messages keep flowing — see [what server modes mean](/help/safe-mode-status-bar/).

## Requirements

- Docker 24+ with `docker compose`
- A Linux host (a small VPS is enough to start)
- A domain is optional — without one, clients need the server’s certificate file

> **Where to get the server:** [TBD — public repository or image]

## Quick start

```bash
./scripts/stack.sh up        # creates .env, generates the signing key, builds and starts
./scripts/stack.sh status    # core status
./scripts/stack.sh logs      # live logs
./scripts/stack.sh down      # stop
```

The first run creates `.env` from `.env.example` and generates the signing key. The gateway listens on `https://localhost:8443` (WebSocket + `/healthz`).

## Ports

| Port | What for |
| --- | --- |
| `8443` (dev) / `443` (production) | TLS gateway — clients connect here over `wss://` |
| TCP `7880` | voice signalling (LiveKit) over TLS — `wss://` |
| TCP `7881`, UDP `50000–50200` | voice media (LiveKit) |

## Useful settings

All settings live in `.env`. The ones you’re most likely to change:

| Variable | Default | Meaning |
| --- | --- | --- |
| `CORE_RETENTION_DAYS` | 30 | delivered ciphertext is deleted after this many days |
| `MEDIA_QUOTA_BYTES` | 512 MiB | total attachments per account within the retention period |
| `CORE_MEMORY_LIMIT` | 300 MB | memory budget; above 80% the core limits features, above 90% it switches to SAFE |
| `AUTH_SIGNUPS_PER_DAY` | 5 | new accounts allowed from one IP address per day |
| `VOICE_URL`, `VOICE_API_KEY` | empty | LiveKit address and key; empty means voice is off (the deploy script fills them in) |

## Voice

Voice uses a LiveKit server. Audio and video are end-to-end encrypted with SFrame on devices, so LiveKit only forwards encrypted frames and never knows your group names. Open the voice ports above on your firewall.

The deploy script turns voice on by default (`DEPLOY_VOICE=0` turns it off). Signalling runs over TLS on port 7880, with a certificate signed by your gateway certificate — clients don’t need any extra file. One voice channel handles 100 people in a load test (rooms take up to 150).

## Certificates

A fresh server uses a self-signed certificate. Clients then need its `var/secrets/gate_cert.pem` file — they select it under **CA certificate (optional)** on the login screen. With a domain, use a regular certificate and nobody has to add anything. If the app says the certificate isn’t trusted, see [this help article](/help/server-certificate-not-trusted/).

`/healthz` starts returning 503 thirty days before the gateway certificate expires, so your monitoring catches it in time.

## Deploying to a server

```bash
DEPLOY_HOST=admin@your-server ./scripts/deploy.sh deploy
```

One command checks the host, installs Docker, generates the key and certificate **on the host** (they’re never sent anywhere), deploys, waits for health checks and keeps the previous version for `rollback`.

## Backups

The `core-data` volume holds the database and the crash journal. Back it up — and test restoring on a clean machine. An untested backup isn’t a backup.
