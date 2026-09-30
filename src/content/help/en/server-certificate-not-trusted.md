---
title: 'Server certificate is not trusted'
description: 'Getting “server certificate is not trusted” when connecting to a Komunikator server? Check the gateway address and point the app to the server’s CA file.'
category: selfhost
translationKey: cert-not-trusted
updatedDate: 2026-09-30
appliesTo: '0.1+'
popular: 5
---

This error means the app couldn’t confirm the identity of the server you’re connecting to. It usually happens with **self-hosted servers**, because a fresh server uses a self-signed certificate.

The certificate of the default server is built into the app, so there you leave the CA field empty.

1. **Check the gateway address**

   On the login screen, open the advanced options and look at the **gateway address**, for example `wss://example.com:443`. A typo or the wrong port is the most common cause.

2. **Point the app to the server’s certificate**

   Copy the server’s `var/secrets/gate_cert.pem` file to your computer and choose it in **CA certificate (optional)** on the login screen.

3. **Or use a certificate for a domain**

   If you run the server, you can replace the self-signed certificate with one issued for your domain — then nobody needs to add a CA file.

> **Never ignore this warning on a public network.** An untrusted certificate can mean someone is intercepting the connection. Your messages stay end-to-end encrypted, but you might be talking to the wrong server.

Setting up your own server? See the [self-hosting guide](/self-hosting/).
