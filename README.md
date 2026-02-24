---
# 🏁 F1 Multiplier Tool

Een webtool voor Fantasy Formule 1-spelers (Scorito) waarmee je eenvoudig multipliers toewijst aan je team op basis van verwachte eindposities en klasse-afhankelijke puntentabellen.

Gemaakt met ❤️ door **Bouwhouse** · Team Triumph — voor de Scorito community.

## ✨ Functionaliteiten

- ✅ **Gekleurde Class Columns:** Selecteer coureurs in een overzichtelijk, kleurgecodeerd dashboard (A t/m E).
- 🎨 **Team Livery Kleuren:** Teamnamen worden weergegeven in de officiële 2025 F1 teamkleuren (Ferrari rood, McLaren oranje, enz.).
- 💰 **Budgetbeheer:** Houd je team binnen het budget van 100M met live tracking.
- 📋 **Selectieregels:** Directe feedback of je voldoet aan de team-samenstelling (2A, 2B, 2C, 1D, 1E).
- 🔢 **Volledige Grid-ondersteuning:** Voer positieranges in van 1 t/m 22.
- 📊 **Automatische berekening:** Verwachte punten per klasse, inclusief gemiddelden bij positieranges.
- 🏆 **Multiplier Toekenning:** Automatische multipliers x8 t/m x1 op basis van berekende punten.
- 🔁 **Tie-breaker:** Gelijke scores? Multipliers worden eerlijk gedeeld (bijv. `x6/x5`).
- 📲 **Team Delen:** Kopieer je selectie en/of multipliers met één klik naar het klembord (WhatsApp, Discord, enz.).
- 💾 **Auto-save:** Je coureursselectie wordt automatisch onthouden via `localStorage`.

## 📂 Bestanden

| Bestand       | Functie                                                         |
|---------------|-----------------------------------------------------------------|
| `index.html`  | HTML-structuur van de app                                       |
| `style.css`   | Racing-thema: Rajdhani/Inter fonts, F1-rood, gouden multipliers |
| `data.js`     | Coureurs (naam, klasse, prijs, team) & puntentabel per klasse   |
| `script.js`   | Logica voor selectie, budget, regels, berekening en multipliers  |

## 🔧 Zelf aanpassen

### ➕ Coureurs toevoegen of aanpassen

Open `data.js` en voeg toe aan de `drivers` array:

```js
{ name: "Pérez", class: "E", price: 4, team: "Cadillac" }
```

Het `team`-veld is nodig voor de juiste teamkleur in de UI.

### 🧮 Puntentabel aanpassen

Wijzig de arrays in `pointsTable` (positie 1 t/m 22):

```js
const pointsTable = {
  A: [120, 100, 90, ..., 0, 0], // positie 1 t/m 22
  E: [340, 320, 300, ..., 10],  // hogere klasse = meer punten
}
```

### 🎨 Teamkleuren aanpassen

In `style.css`, zoek het blok `/* Team Colors */` en pas de hex-waarden aan:

```css
.team[data-team="Ferrari"] { color: #DC0000; font-weight: 600; }
```

## 🚀 Gebruik

Geen installatie nodig — open gewoon in je browser:

```bash
git clone https://github.com/Bouwhouse/F1MultiplierTool.git
cd F1MultiplierTool
# Dubbelklik index.html, of start een lokale server:
python3 -m http.server 8000
```

## 🔒 Privacy

De tool gebruikt `localStorage` om je coureursselectie te onthouden. Er worden geen gegevens verstuurd — alles blijft lokaal in je browser.

## 📌 Roadmap

- [x] Puntentabel uitgebreid naar 22 posities
- [x] Coureursnamen met juiste accenten
- [x] Vereenvoudigde "Kopieer Team" functionaliteit
- [x] Modern racing-thema (Rajdhani font, F1-rood, gouden multipliers)
- [x] Officiële F1 teamkleuren in coureursselectie
- [x] Positie-invoer behouden bij her-selectie van coureurs
- [ ] Handmatige toekenning bij ties (drag & drop of dropdown)
- [ ] Export naar CSV of PDF

## 📄 Licentie

MIT-licentie. Gebruik het vrij voor je eigen fantasy plezier!
