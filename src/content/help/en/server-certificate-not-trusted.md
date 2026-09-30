---
title: 'Server certificate is not trusted'
description: 'Getting “Server certificate is not trusted” when connecting to a self-hosted Komunikator server? Check the address, the certificate and add your own CA file.'
category: selfhost
translationKey: cert-not-trusted
updatedDate: 2026-09-20
appliesTo: '0.9+'
popular: 5
---

This error means the app couldn’t confirm the identity of the server you’re connecting to. It usually happens with **self-hosted servers**.

1. **Check the server address**

   On the login screen, open **Advanced** and look at **Server address**. A typo, a missing port or the wrong domain is the most common cause. The address should match the name on the server’s certificate.

2. **Check that the certificate is valid**

   An expired certificate, or one issued for a different domain, is rejected. If you run the server, renew it — a free, automatically renewed certificate (for example from Let’s Encrypt) is the easiest option.

3. **Using your own certificate authority? Add the CA file**

   If the server uses a certificate signed by your own CA (common on a home network), choose the CA file in **Advanced › CA certificate (optional)** on the login screen.

> **Never ignore this warning on a public network.** An untrusted certificate can mean someone is intercepting the connection. Your messages stay end-to-end encrypted, but you might be talking to the wrong server.

Setting up your own server? The example configuration is on the [Download](/download/#self-hosting) page.
