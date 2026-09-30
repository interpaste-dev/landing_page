---
title: 'Numery bezpieczeństwa: kiedy i po co je porównywać'
description: 'Czym są numery bezpieczeństwa, jak ich porównanie chroni przed podszyciem się w szyfrowanym czacie i co zrobić, gdy klucz znajomego się zmieni.'
pubDate: 2026-09-01
category: security
translationKey: safety-numbers
keywords: ['numery bezpieczeństwa', 'weryfikacja kluczy', 'zmiana klucza ostrzeżenie', 'weryfikacja szyfrowania end-to-end', 'bezpieczny komunikator']
---

Szyfrowanie end-to-end gwarantuje, że wiadomość przeczyta tylko posiadacz właściwego klucza. Ale skąd wiesz, że klucz należy do Twojego znajomego, a nie do kogoś, kto się pod niego podszywa? Od tego są **numery bezpieczeństwa**.

## Czym jest numer bezpieczeństwa?

Numer bezpieczeństwa to krótki kod — ciąg cyfr albo kod QR — wyliczony z **Twoich kluczy i kluczy rozmówcy**. Oboje widzicie ten sam numer wtedy i tylko wtedy, gdy naprawdę rozmawiacie ze swoimi urządzeniami.

Gdyby ktoś wcisnął się pośrodku (atak man-in-the-middle), klucze byłyby inne, a więc i numer.

## Dlaczego warto go porównać

Szyfrowanie nie ochroni Cię przed rozmową z niewłaściwą osobą. Bez weryfikacji przejęty albo nieuczciwy serwer mógłby teoretycznie podsunąć Ci fałszywy klucz rozmówcy. Porównanie numerów zamyka tę lukę: po weryfikacji nawet serwer nie podmieni kluczy bez Twojej wiedzy.

W Komunikatorze zweryfikowane kontakty mają znaczek, a kanały grupowe pokazują, ilu członków zweryfikowałeś — np. „Zweryfikowano 4 z 5 osób”.

## Kiedy porównywać numery

Nie musisz weryfikować każdego, z kim kiedykolwiek pisałeś. Zrób to, gdy:

- **zaczynasz regularnie z kimś rozmawiać**, np. z nowym członkiem drużyny albo znajomym, z którym dzielisz plany,
- **rozmowa jest wrażliwa** — dane kont, informacje osobiste, wszystko, czego nie wrzuciłbyś publicznie,
- **dostajesz ostrzeżenie o zmianie klucza**, którego nie umiesz wytłumaczyć.

## Jak je porównać

Są dwa proste sposoby:

1. **Na żywo:** otwórz profil kontaktu, wybierz *Zweryfikuj* i zeskanujcie nawzajem kody QR. Zajmuje to około dziesięciu sekund.
2. **Przez rozmowę głosową:** przeczytajcie sobie numery na kanale głosowym. Głos też jest szyfrowany end-to-end, a atakującemu trudno byłoby na żywo podrobić głos znajomego, więc to wygodna opcja dla drużyn grających zdalnie.

Nie porównuj numerów wiadomością tekstową w tym samym czacie, który próbujesz zweryfikować — to niczego nie dowodzi.

## Co oznacza ostrzeżenie o zmianie klucza

Gdy klucz kontaktu się zmieni, Komunikator pokaże ostrzeżenie w rodzaju „Klucz się zmienił — sprawdź”. Zwykle powód jest niewinny:

- zainstalował aplikację na nowym urządzeniu,
- przeinstalował ją albo przywrócił z kopii,
- wylogował zgubiony telefon.

Zapytaj go innym kanałem albo na głosowym, czy zrobił któreś z powyższych. Jeśli tak — porównajcie nowy numer i gotowe. Jeśli nie — nie wysyłaj nic wrażliwego, dopóki się nie wyjaśni.

## W skrócie

- Numery bezpieczeństwa potwierdzają, że rozmawiasz z właściwymi urządzeniami.
- Porównaj je raz z ważnymi dla Ciebie osobami, na żywo albo przez głos.
- Traktuj ostrzeżenia o zmianie klucza poważnie, ale bez paniki — większość ma niewinne wyjaśnienie.

Dopiero zaczynasz z szyfrowaniem? Przeczytaj najpierw, [czym jest szyfrowanie end-to-end i MLS](/pl/blog/czym-jest-szyfrowanie-end-to-end-mls/).
