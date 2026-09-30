---
title: 'Polityka prywatności — Komunikator'
description: 'Jakie dane przetwarza serwer Komunikatora, czego nie widzi dzięki szyfrowaniu end-to-end, jak długo przechowujemy dane i jakie masz prawa.'
heading: 'Polityka prywatności'
eyebrow: 'Informacje prawne'
lead: 'Wersja robocza. Dzięki szyfrowaniu end-to-end nie możemy czytać Twoich wiadomości. Oto dokładnie to, co przetwarza serwer.'
updatedDate: 2026-09-30
route: privacy
cta: false
---

> **Wersja robocza do weryfikacji.** Pola oznaczone [DO UZUPEŁNIENIA] trzeba wypełnić, a cały dokument przejrzeć z prawnikiem przed publikacją.

## Kim jesteśmy

Administratorem Twoich danych jest **[DO UZUPEŁNIENIA — nazwa firmy, adres, NIP/KRS]**. Kontakt: **[DO UZUPEŁNIENIA — e-mail w sprawie prywatności]**.

## Czego nie widzimy

Wiadomości, pliki, reakcje, głos i obraz są szyfrowane na Twoich urządzeniach protokołami MLS i SFrame. Nazwy grup, serwerów i kanałów też idą w zaszyfrowanych wiadomościach. Serwer przechowuje i dostarcza szyfrogramy i **nie ma kluczy, żeby je odszyfrować**.

## Co przetwarza serwer

| Dane | Po co | Jak długo |
| --- | --- | --- |
| Login i skrót hasła (Argon2id) | logowanie | do usunięcia konta |
| Urządzenia i ich klucze publiczne | dostarczanie wiadomości i weryfikacja kluczy przez rozmówców | do wylogowania urządzenia |
| Zaszyfrowane wiadomości i wiadomości sterujące | dostarczenie ich odbiorcom | dostarczone kasujemy po 30 dniach |
| Zaszyfrowane załączniki | dostarczenie plików | w okresie retencji, do 512 MiB na konto |
| Metadane: kto jest w której grupie, kiedy urządzenia były online | niezbędne do kierowania wiadomości | [DO UZUPEŁNIENIA] |
| Logi techniczne (np. adres IP, czas żądania) | bezpieczeństwo i diagnostyka | [DO UZUPEŁNIENIA] |

Głos idzie przez serwer mediów LiveKit. Przekazuje on zaszyfrowane ramki i widzi Twój adres IP oraz nazwę pokoju wyliczoną ze skrótu identyfikatora grupy — nie nazwę grupy ani to, co mówisz.

## Aktualizacje

Aplikacja co 6 godzin sprawdza aktualizacje, pobierając podpisany plik z serwera. To żądanie ujawnia Twój adres IP i nic więcej.

## Ta strona

Strona nie używa ciasteczek, analityki ani reklam. Dostawca hostingu może przechowywać standardowe logi serwera: **[DO UZUPEŁNIENIA — dostawca hostingu i czas przechowywania logów]**.

## Twoje prawa

Masz prawo dostępu do danych, ich sprostowania i usunięcia, ograniczenia przetwarzania, sprzeciwu oraz skargi do Prezesa Urzędu Ochrony Danych Osobowych. Aby usunąć konto, napisz na **[DO UZUPEŁNIENIA — e-mail]**. Wylogowanie na urządzeniu usuwa klucze i historię zapisane na tym komputerze.

## Własne serwery

Jeśli korzystasz z serwera prowadzonego przez kogoś innego (np. przez Twój klan), za dane na tym serwerze odpowiada jego operator.

## Zmiany

Zmiany tej polityki opublikujemy na tej stronie i zaktualizujemy datę powyżej.
