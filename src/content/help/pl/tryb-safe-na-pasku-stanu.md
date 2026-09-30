---
title: 'Co oznacza tryb SAFE na pasku stanu'
description: 'Tryb SAFE w Komunikatorze oznacza, że działają tylko wiadomości, dopóki serwer nie wróci do normy. Zobacz, co znaczą tryby serwera i dlaczego szyfrowanie się nie zmienia.'
category: servers
translationKey: safe-mode
updatedDate: 2026-09-20
appliesTo: '0.9+'
popular: 6
---

Pasek stanu na dole aplikacji pokazuje **tryb serwera**. Ustawia go serwer — np. przy dużym obciążeniu albo w trakcie prac — tak, żeby najważniejsze, czyli wiadomości, działało dalej.

| Tryb | Co oznacza |
| --- | --- |
| `NOMINAL` | Wszystko działa normalnie. |
| `DEGRADED` | [DO USTALENIA — opis] |
| `CORE_ONLY` | [DO USTALENIA — opis] |
| `SAFE` | Działają tylko wiadomości. |

## Co się zmienia w trybie SAFE

- **Wiadomości tekstowe działają** jak zwykle.
- **Głos się nie łączy** — przycisk „Dołącz do głosu” jest niedostępny, dopóki tryb się nie zmieni.
- **Załączniki są wyłączone.**

Nie musisz nic robić. Gdy serwer wróci do normy, pasek stanu się przełączy, a głos i załączniki znów będą dostępne.

> **Szyfrowanie działa tak samo w każdym trybie.** Tryby serwera ograniczają tylko funkcje. Wiadomości zawsze są szyfrowane end-to-end protokołem MLS, niezależnie od tego, co pokazuje pasek stanu.
