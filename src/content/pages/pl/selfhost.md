---
title: 'Własny serwer szyfrowanego komunikatora — Komunikator self-hosting'
description: 'Postaw własny serwer Komunikatora z szyfrowaniem end-to-end w Dockerze: wymagania, szybki start, porty, głos przez LiveKit i certyfikaty. Serwer nie widzi wiadomości.'
heading: 'Postaw własny serwer'
eyebrow: 'Własny serwer'
lead: 'Hostuj Komunikator dla klanu, firmy albo znajomych. Szyfrowanie działa tak samo — serwer tylko przekazuje szyfrogramy i nigdy nie ma kluczy.'
updatedDate: 2026-09-30
route: selfhost
---

## Co dostajesz

- **Cały stos w Dockerze:** mały rdzeń, bramę TLS 1.3 i osobne moduły kont, załączników i głosu, każdy we własnym kontenerze.
- **To samo szyfrowanie end-to-end.** Wiadomości są szyfrowane MLS na urządzeniach; Twój serwer przechowuje i dostarcza wyłącznie szyfrogramy.
- **Ochronę przy obciążeniu.** Serwer sam przechodzi w tryby ograniczone (np. gdy brakuje mu pamięci), żeby wiadomości szły dalej — zobacz, [co znaczą tryby serwera](/pl/pomoc/tryb-safe-na-pasku-stanu/).

## Wymagania

- Docker 24+ z `docker compose`
- Host z Linuksem (na start wystarczy mały VPS)
- Domena jest opcjonalna — bez niej klienci potrzebują pliku certyfikatu serwera

> **Skąd wziąć serwer:** [DO USTALENIA — publiczne repozytorium albo obraz]

## Szybki start

```bash
./scripts/stack.sh up        # tworzy .env, generuje klucz, buduje i uruchamia
./scripts/stack.sh status    # stan rdzenia
./scripts/stack.sh logs      # logi na bieżąco
./scripts/stack.sh down      # zatrzymanie
```

Pierwsze uruchomienie tworzy `.env` z `.env.example` i generuje klucz podpisujący. Brama nasłuchuje na `https://localhost:8443` (WebSocket + `/healthz`).

## Porty

| Port | Do czego |
| --- | --- |
| `8443` (dev) / `443` (produkcja) | brama TLS — klienci łączą się tu przez `wss://` |
| TCP `7880–7881` | sygnalizacja głosu (LiveKit), tylko z włączonym głosem |
| UDP `50000–50200` | dźwięk i obraz (LiveKit), tylko z włączonym głosem |

## Przydatne ustawienia

Wszystkie ustawienia są w `.env`. Te, które najczęściej zmienisz:

| Zmienna | Domyślnie | Znaczenie |
| --- | --- | --- |
| `CORE_RETENTION_DAYS` | 30 | po tylu dniach dostarczone szyfrogramy są kasowane |
| `MEDIA_QUOTA_BYTES` | 512 MiB | suma załączników jednego konta w okresie retencji |
| `CORE_MEMORY_LIMIT` | 300 MB | budżet pamięci; powyżej 80% rdzeń ogranicza funkcje, powyżej 90% przechodzi w SAFE |
| `VOICE_URL`, `VOICE_API_KEY` | puste | adres i klucz LiveKit; puste = głos wyłączony |

## Głos

Głos działa przez serwer LiveKit. Dźwięk i obraz są szyfrowane end-to-end przez SFrame na urządzeniach, więc LiveKit przekazuje tylko zaszyfrowane ramki i nie zna nazw Waszych grup. Otwórz na zaporze porty głosu z tabeli powyżej. Z domeną postaw przed LiveKitem TLS i użyj adresu `wss://`.

## Certyfikaty

Świeży serwer ma certyfikat samopodpisany. Klienci potrzebują wtedy pliku `var/secrets/gate_cert.pem` — wskazują go w polu **certyfikat CA (opcjonalnie)** na ekranie logowania. Z domeną użyj zwykłego certyfikatu, a nikt nie musi niczego dodawać. Jeśli aplikacja mówi, że certyfikat nie jest zaufany, zobacz [ten artykuł pomocy](/pl/pomoc/certyfikat-serwera-niezaufany/).

## Wdrożenie na serwer

```bash
DEPLOY_HOST=admin@twoj-serwer ./scripts/deploy.sh deploy
```

Jedno polecenie sprawdza hosta, instaluje Dockera, generuje klucz i certyfikat **na hoście** (nigdy nie są nigdzie wysyłane), wdraża, czeka na testy zdrowia i zachowuje poprzednią wersję do `rollback`.

## Kopie zapasowe

Wolumen `core-data` zawiera bazę i dziennik awaryjny. Rób jego kopie — i sprawdzaj odtwarzanie na czystej maszynie. Nietestowana kopia nie jest kopią.
