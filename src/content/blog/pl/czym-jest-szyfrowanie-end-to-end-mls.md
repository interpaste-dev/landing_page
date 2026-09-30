---
title: 'Czym jest szyfrowanie end-to-end? MLS w prostych słowach'
description: 'Szyfrowanie end-to-end i protokół MLS (RFC 9420) bez żargonu: jak działają klucze grupy, co widzi serwer i dlaczego to działa także w dużych grupach.'
pubDate: 2026-09-22
category: security
translationKey: e2ee-mls
keywords: ['szyfrowanie end-to-end', 'czym jest szyfrowanie e2e', 'protokół mls', 'messaging layer security', 'szyfrowany czat grupowy']
---

„Szyfrowanie end-to-end” pojawia się na stronie niemal każdego komunikatora. To realna i ważna gwarancja — ale tylko wtedy, gdy wiesz, co obejmuje. Ten poradnik tłumaczy ją bez żargonu, a potem pokazuje, jak **MLS**, protokół używany w Komunikatorze, sprawia, że działa to w dużych grupach.

## Szyfrowanie end-to-end w jednym zdaniu

**Szyfrowanie end-to-end (E2EE) oznacza, że wiadomość jest zamykana na urządzeniu nadawcy i można ją otworzyć tylko na urządzeniach odbiorców.** Nikt po drodze — ani dostawca internetu, ani firma hostingowa, ani serwer samej aplikacji — nie ma klucza.

Porównaj to z dwoma słabszymi rozwiązaniami, które często spotkasz:

- **Szyfrowanie w transporcie (TLS/HTTPS):** wiadomość jest chroniona w drodze do serwera, ale serwer ją odszyfrowuje i może przeczytać.
- **Szyfrowanie „w spoczynku”:** serwer trzyma wiadomość zaszyfrowaną na dysku, ale ma klucz, więc może ją przeczytać, kiedy chce.

Przy E2EE serwer ma w rękach tylko **szyfrogram** — losowo wyglądające dane w rodzaju `8f3a·c21e·9b07·44d1…`.

## Dlaczego grupy są trudne

Szyfrowanie rozmowy dwóch osób to rozwiązany problem. Z grupami jest trudniej:

- Serwer klanu może mieć setki członków, każdy z kilkoma urządzeniami.
- Ludzie cały czas dołączają i wychodzą.
- Ktoś, kto wyszedł, **nie** może czytać przyszłych wiadomości. Ktoś nowy zwykle **nie** powinien czytać starych.

Naiwne podejście — szyfrowanie każdej wiadomości osobno dla każdego urządzenia — szybko staje się wolne i kosztowne. Dokładnie ten problem rozwiązuje MLS.

## Czym jest MLS?

**MLS (Messaging Layer Security)** to otwarty standard opublikowany przez IETF jako **RFC 9420** w 2023 roku. Zaprojektowali go kryptografowie i inżynierowie z całej branży specjalnie z myślą o bezpiecznych rozmowach grupowych.

Najważniejsze założenia w uproszczeniu:

### 1. Wspólny klucz grupy, odświeżany w „epokach”

Wszyscy w grupie dzielą sekret, z którego wyprowadza się klucze do wiadomości. Za każdym razem, gdy grupa się zmienia — ktoś dołącza, wychodzi albo odświeża klucze — grupa przechodzi do nowej **epoki** z zupełnie nowym sekretem. W aplikacji zobaczysz to np. jako „Klucze grupy odświeżone · epoka 14”.

### 2. Drzewo zamiast listy

MLS układa klucze członków w **drzewo** (ratchet tree). Odświeżenie sekretu grupy wymaga pracy proporcjonalnej do *logarytmu* liczby członków, a nie do całej liczby. W praktyce zmiany są szybkie nawet w dużych grupach.

### 3. Poufność przyszła i bezpieczeństwo po włamaniu

- **Poufność przyszła (forward secrecy):** jeśli urządzenie zostanie dziś przejęte, atakujący i tak nie przeczyta wiadomości z wcześniejszych epok.
- **Bezpieczeństwo po włamaniu (post-compromise security):** gdy klucze przejętego urządzenia zostaną odświeżone, atakujący traci dostęp do kolejnych wiadomości.

Te dwie cechy sprawiają, że MLS świetnie pasuje do długo działających serwerów dla graczy, w których skład zmienia się co tydzień.

## Co serwer nadal widzi

Szyfrowanie end-to-end chroni **treść**. Nie ukrywa wszystkiego. Nasz serwer nie widzi tekstu wiadomości, plików, głosu ani nazw kanałów — ale widzi **metadane**, np. kto jest w grupie i kiedy był online. Mówimy o tym otwarcie na stronie głównej, a jeśli chcesz to ograniczyć, możesz postawić własny serwer.

## Jak sprawdzić, że rozmowa jest naprawdę szyfrowana

Szyfrowanie chroni Cię tylko wtedy, gdy rozmawiasz z właściwą osobą. Do tego służą **numery bezpieczeństwa**: krótki kod wyliczony z kluczy, który porównujesz ze znajomym na żywo albo przez telefon. Kiedy i po co to robić, wyjaśniamy w [poradniku o numerach bezpieczeństwa](/pl/blog/numery-bezpieczenstwa-kiedy-porownywac/).

## W skrócie

- E2EE oznacza, że klucze mają tylko uczestnicy rozmowy.
- MLS (RFC 9420) sprawia, że działa to w praktyce w dużych, zmieniających się grupach.
- Serwer przekazuje szyfrogramy; nie przeczyta wiadomości ani nie usłyszy rozmów głosowych.

Chcesz zobaczyć to w działaniu? Komunikator to [prywatna alternatywa dla Discorda](/pl/blog/prywatna-alternatywa-dla-discorda/) oparta na MLS — i jest za darmo.
