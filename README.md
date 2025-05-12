---
# 🏎️ F1 Multiplier Tool

Een webtool voor Fantasy Formule 1-spelers waarmee je eenvoudig multipliers toewijst aan je team op basis van verwachte eindposities en klasse-afhankelijke puntentabellen.

## ✨ Functionaliteiten

- ✅ Selecteer coureurs uit je fantasyteam (A t/m E-klassen)
- 🔢 Voer verwachte eindposities in (1 t/m 20)
- 📊 Automatische berekening van verwachte punten (per klasse)
- 🏆 Toekenning van multipliers x8 t/m x1 op basis van punten
- 🔁 Gelijke scores? → multipliers worden gedeeld (`x6/x5`)
- 💾 Automatische opslag van coureurselectie in `localStorage`

## 📂 Bestanden

| Bestand       | Functie                                                |
|---------------|---------------------------------------------------------|
| `index.html`  | HTML-structuur van de app                              |
| `style.css`   | Styling van de layout en tabel                         |
| `data.js`     | Coureurs & puntentabel per klasse                      |
| `script.js`   | Alle interactie: selectie, input, berekening, opslag   |

## 🔧 Zelf aanpassen

### ➕ Coureurs toevoegen
Open `data.js` en voeg toe aan de `drivers` array:

```js
{ name: \"NieuweCoureur\", class: \"B\" }
````

### 🧮 Punten aanpassen

Wijzig per klasse in `pointsTable`:

```js
pointsTable = {
  A: [120, 100, ...], // per positie
  B: [160, 140, ...],
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

* [ ] Handmatige toekenning bij ties (drag & drop of dropdown)
* [ ] Opslaan en herstellen van verwachte posities
* [ ] Export naar CSV of PDF

## 📄 Licentie

MIT-licentie. Gebruik het vrij voor je eigen fantasy plezier!

```

---

Laat me weten of je ook een favicon, deploy via GitHub Pages of zip-bestand wilt genereren voor snelle deling.
```
