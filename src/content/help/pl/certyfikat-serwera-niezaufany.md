---
title: 'Certyfikat serwera nie jest zaufany'
description: 'Widzisz „Certyfikat serwera nie jest zaufany” przy łączeniu z własnym serwerem Komunikatora? Sprawdź adres i certyfikat albo wskaż własny plik CA.'
category: selfhost
translationKey: cert-not-trusted
updatedDate: 2026-09-20
appliesTo: '0.9+'
popular: 5
---

Ten błąd oznacza, że aplikacja nie mogła potwierdzić tożsamości serwera, z którym się łączysz. Najczęściej zdarza się przy **własnych serwerach**.

1. **Sprawdź adres serwera**

   Na ekranie logowania otwórz **Zaawansowane** i sprawdź **Adres serwera**. Literówka, brak portu albo zła domena to najczęstsze przyczyny. Adres powinien zgadzać się z nazwą w certyfikacie serwera.

2. **Sprawdź, czy certyfikat jest ważny**

   Certyfikat, który wygasł albo został wystawiony dla innej domeny, zostanie odrzucony. Jeśli prowadzisz serwer, odnów go — najprościej użyć darmowego, automatycznie odnawianego certyfikatu (np. z Let’s Encrypt).

3. **Masz własny urząd certyfikacji? Wskaż plik CA**

   Jeśli serwer używa certyfikatu podpisanego przez Twoje własne CA (częste w sieci domowej), wybierz plik CA w **Zaawansowane › Certyfikat CA (opcjonalnie)** na ekranie logowania.

> **Nie ignoruj tego ostrzeżenia w publicznej sieci.** Niezaufany certyfikat może oznaczać, że ktoś przechwytuje połączenie. Wiadomości dalej są szyfrowane end-to-end, ale możesz rozmawiać z niewłaściwym serwerem.

Stawiasz własny serwer? Przykładowa konfiguracja jest na stronie [Pobierz](/pl/pobierz/#self-hosting).
