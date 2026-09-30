---
title: 'How to restore your account from a backup'
description: 'Restore your Komunikator keys and chat history from an encrypted .zip backup and your backup phrase. Backups are available in the terminal client.'
category: backup
translationKey: restore-backup
updatedDate: 2026-09-30
appliesTo: '0.1+'
popular: 1
---

A backup is an encrypted .zip file with your keys and history. Only the phrase you set when creating it can open it. The server has neither the file nor the phrase — that’s why an account can’t be recovered by email.

> **Backups are currently available in the terminal client.** They’re coming to the desktop app — see the [changelog](/changelog/).

## Create a backup

1. **Open the menu**

   In the terminal client press **Ctrl+K** and choose **Backup**.

2. **Choose where to save it**

   Enter the path of the .zip file, for example on a USB drive.

3. **Set a backup phrase**

   At least 12 characters. Without it, nobody can read the backup — including you.

## Restore from a backup

1. **Install the terminal client on the new computer**

   See the [Download](/download/) page.

2. **Choose “Restore from backup”**

   The button is on the login screen.

3. **Enter the path to the .zip file and your phrase**

   The phrase is case-sensitive. After that, your conversations are back.

> **Forgot the phrase?** Without it, the backup can’t be opened — not even by us. If you still have another device logged in, create a new backup from it.
