---
# 🏎️ F1 Multiplier Tool

Een webtool voor Fantasy Formule 1-spelers waarmee je eenvoudig multipliers toewijst aan je team op basis van verwachte eindposities en klasse-afhankelijke puntentabellen.

## ✨ Functionaliteiten

- ✅ **Gekleurde Class Columns:** Selecteer coureurs in een overzichtelijk, kleurgecodeerd dashboard (A t/m E).
- 💰 **Budgetbeheer:** Houd je team binnen het budget van 100M met live tracking.
- 📋 **Selectieregels:** Directe feedback of je voldoet aan de team-samenstelling (2A, 2B, 2C, 1D, 1E).
- 🔢 **Uitgebreide Eindposities:** Voer posities in van 1 t/m 22 (nu met volledige grid-ondersteuning).
- 📊 **Automatische berekening:** Verwachte punten per klasse, inclusief gemiddelden bij ranges.
- 🏆 **Multiplier Toekenning:** Automatische multipliers x8 t/m x1 op basis van berekende punten.
- 🔁 **Tie-breaker:** Gelijke scores? Multipliers worden eerlijk gedeeld (bijv. `x6/x5`).
- 📲 **Team Delen:** Kopieer je selectie en multipliers met één klik naar je klembord om te delen via WhatsApp of Discord.
- 💾 **Auto-save:** Je selectie wordt onthouden via `localStorage`.

## 📂 Bestanden

| Bestand       | Functie                                                |
|---------------|---------------------------------------------------------|
| `index.html`  | De basisstructuur van de app                           |
| `style.css`   | Premium styling, grid-layouts en klasse-kleuren         |
| `data.js`     | Coureurs (naam, prijs, klasse) & puntentabel           |
| `script.js`   | Logica voor selectie, budget, rules en multipliers     |

## 🔧 Zelf aanpassen

### ➕ Coureurs toevoegen of namen corrigeren
Open `data.js` en voeg toe aan de `drivers` array:

```js
{ name: "Pérez", class: "E", price: 4 }
```

### 🧮 Punten aanpassen
Wijzig de arrays in `pointsTable` (nu ondersteund tot positie 22):

```js
pointsTable = {
  A: [120, 100, ..., 0, 0], // positie 1 t/m 22
  ...
}
```

## 🚀 Installatie

Geen installatie nodig — gewoon openen in je browser:

```bash
git clone https://github.com/jouw-gebruikersnaam/f1-multiplier-tool.git
cd f1-multiplier-tool
open index.html  # of dubbelklik het bestand
```

## 🔒 Opslag

De tool gebruikt `localStorage` om jouw geselecteerde coureurs te onthouden tussen sessies. Alles blijft lokaal — geen gegevens worden verstuurd.

## 📌 Roadmap (mogelijk later)

- [x] Extend points table to 22 positions
- [x] Correct driver names with proper accents
- [x] Update README.md with new features and instructions
- [x] Add simplified 'Copy Team' functionality
- [ ] Handmatige toekenning bij ties (drag & drop of dropdown)
- [ ] Opslaan en herstellen van verwachte posities
- [ ] Export naar CSV of PDF

## 📄 Licentie

MIT-licentie. Gebruik het vrij voor je eigen fantasy plezier!