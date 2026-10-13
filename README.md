# TOP 10 GIER — Hall of Fame 🏆

Projekt zaliczeniowy z przedmiotu **Technologie Webowe**.

👉 **[69inoi69.github.io/top10gier](https://69inoi69.github.io/top10gier/)**

Mój osobisty ranking dziesięciu najlepszych gier. Kod w dużej mierze napisało AI, ale lista i recenzje to w 100% moje zdanie — i będę go bronić do końca.

> Rzeczywistość ma kiepską fabułę, straszny grind i jest pay-to-win.
> Dlatego wybrałem inną drogę.

## Ranking

| Poziom | Gry |
| --- | --- |
| **Szmaragdowy** 🟢 | F.E.A.R., Dark Souls: Remastered |
| **Diamentowy** 💎 | SOMA, Neon White, Hades, Metro Exodus |
| **Złoty** 🟡 | Silent Hill 2, Darkwood, Fallout: New Vegas, Half-Life |

Kliknij kartę gry, a otworzy się podgląd z recenzją (trochę mniej poważną, niż powinna być), zaletami, wadami, oceną i linkiem do Steam.

## Co jest na stronie

- ⌨️ Efekt maszynopisu w intro
- 🃏 Karty gier z podglądem w oknie modalnym (zamyka się krzyżykiem, kliknięciem obok albo `Esc`)
- 📧 Newsletter, który dziękuje za zapis, ale nigdzie niczego nie wysyła — backendu nie ma, to projekt zaliczeniowy
- ⬆️ Przycisk „do góry” i nagłówek chowający się przy przewijaniu
- 🎨 Logo zrobione ręcznie, leży w `grafika/samodzielna_grafika/`
- 🐈 Kot Schrödingera — w kodzie jest, na stronie go nie ma. Jednocześnie istnieje i nie istnieje

## Tech

Bez frameworków, bez builda, bez `node_modules` — czysty HTML, CSS i JavaScript.

```
index.html   — cała strona (one-page)
style.css    — style
script.js    — dane gier (obiekt GAMES) i cała logika
grafika/
  glowna/               — avatar i ikony poziomów
  karteczki/            — obrazki na kartach gier
  gry/                  — okładki w podglądzie gry
  samodzielna_grafika/  — logo
```

Żeby uruchomić, wystarczy otworzyć `index.html` w przeglądarce. Wersja na żywo stoi na GitHub Pages.

## Jak to powstało

- **Na początku** — stronę wygenerował Gemini, ja delegowałem i dobierałem gry.
- **Styczeń–luty 2026** — ręczne poprawki: polskie nazwy poziomów, skalowanie kart i newslettera na telefonach, strzałka przewijania.
- **Wrzesień 2026** — porządki przez agenta Mistral Vibe: osobne podstrony gier zamienione na jedno okno modalne, poprawiony link do Steam, usunięte prawdziwe imię i nazwisko.

Czysty artefakt ery vibecodingu.

## Autor

**69Inoi69** — [Steam](https://steamcommunity.com/id/69inoi69/)

---

*© 2026 Projekt zaliczeniowy. Wygenerowane z vibem, scalone z sercem.*
