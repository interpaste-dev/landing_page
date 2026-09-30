---
title: 'Co oznacza tryb SAFE na pasku stanu'
description: 'Serwer Komunikatora przełącza się między trybami NOMINAL, DEGRADED, CORE_ONLY i SAFE, żeby chronić wiadomości przy obciążeniu. Zobacz, co każdy tryb dla Ciebie znaczy.'
category: servers
translationKey: safe-mode
updatedDate: 2026-09-30
appliesTo: '0.1+'
popular: 6
---

Pasek stanu na dole aplikacji pokazuje **tryb serwera**. Serwer przełącza go sam — np. gdy brakuje mu pamięci albo któryś moduł przestaje odpowiadać — tak, żeby najważniejsze, czyli wiadomości, działało dalej.

| Tryb | Co oznacza |
| --- | --- |
| `NOMINAL` | Wszystko działa normalnie. |
| `DEGRADED` | Któryś moduł serwera (np. głos) nie odpowiada. Ta funkcja może nie działać; wiadomości działają. |
| `CORE_ONLY` | Serwer jest mocno obciążony. Logowanie, załączniki i głos czekają; wiadomości idą dalej. |
| `SAFE` | Działają tylko wiadomości. Załączniki i głos są chwilowo wyłączone. |

## Co zauważysz w trybie SAFE

- **Wiadomości tekstowe działają.** To, czego nie da się wysłać od razu, czeka w kolejce i wyjdzie samo.
- **Głos się nie łączy.**
- **Załączniki są wyłączone.**

Nie musisz nic robić. Gdy serwer wróci do normy, pasek stanu się przełączy i wszystko znów będzie dostępne.

> **Szyfrowanie działa tak samo w każdym trybie.** Tryby serwera ograniczają tylko funkcje. Wiadomości zawsze są szyfrowane end-to-end protokołem MLS, niezależnie od tego, co pokazuje pasek stanu.
