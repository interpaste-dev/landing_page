---
title: 'Certyfikat serwera nie jest zaufany'
description: 'Widzisz „certyfikat serwera nie jest zaufany” przy łączeniu z serwerem Komunikatora? Sprawdź adres bramy i wskaż aplikacji plik CA serwera.'
category: selfhost
translationKey: cert-not-trusted
updatedDate: 2026-09-30
appliesTo: '0.1+'
popular: 5
---

Ten błąd oznacza, że aplikacja nie mogła potwierdzić tożsamości serwera, z którym się łączysz. Najczęściej zdarza się przy **własnych serwerach**, bo świeżo postawiony serwer ma certyfikat samopodpisany.

Certyfikat domyślnego serwera jest wbudowany w aplikację, więc tam pole CA zostawiasz puste.

1. **Sprawdź adres bramy**

   Na ekranie logowania otwórz opcje zaawansowane i sprawdź **adres bramy**, np. `wss://example.com:443`. Literówka albo zły port to najczęstsze przyczyny.

2. **Wskaż aplikacji certyfikat serwera**

   Skopiuj z serwera plik `var/secrets/gate_cert.pem` na swój komputer i wybierz go w polu **certyfikat CA (opcjonalnie)** na ekranie logowania.

3. **Albo użyj certyfikatu dla domeny**

   Jeśli prowadzisz serwer, możesz podmienić certyfikat samopodpisany na wystawiony dla Twojej domeny — wtedy nikt nie musi dodawać pliku CA.

> **Nie ignoruj tego ostrzeżenia w publicznej sieci.** Niezaufany certyfikat może oznaczać, że ktoś przechwytuje połączenie. Wiadomości dalej są szyfrowane end-to-end, ale możesz rozmawiać z niewłaściwym serwerem.

Stawiasz własny serwer? Zobacz [instrukcję własnego serwera](/pl/wlasny-serwer/).
