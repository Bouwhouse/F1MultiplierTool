// data.js

// Coureurs + klasse (gesorteerd op klasse)
const drivers = [
  { name: "Antonelli", class: "A", price: 22, team: "Mercedes", flag: "it" },
  { name: "Russell", class: "A", price: 21, team: "Mercedes", flag: "gb" },

  { name: "Leclerc", class: "B", price: 18, team: "Ferrari", flag: "mc" },
  { name: "Norris", class: "B", price: 17, team: "McLaren", flag: "gb" },
  { name: "Hamilton", class: "B", price: 17, team: "Ferrari", flag: "gb" },
  { name: "Verstappen", class: "B", price: 16, team: "Red Bull", flag: "nl" },
  { name: "Piastri", class: "B", price: 16, team: "McLaren", flag: "au" },

  { name: "Hadjar", class: "C", price: 14, team: "Red Bull", flag: "fr" },
  { name: "Gasly", class: "C", price: 14, team: "Alpine", flag: "fr" },
  { name: "Lawson", class: "C", price: 13, team: "Racing Bulls", flag: "nz" },

  { name: "Bearman", class: "D", price: 11, team: "Haas", flag: "gb" },
  { name: "Colapinto", class: "D", price: 11, team: "Alpine", flag: "ar" },
  { name: "Lindblad", class: "D", price: 10, team: "Racing Bulls", flag: "gb" },
  { name: "Ocon", class: "D", price: 10, team: "Haas", flag: "fr" },
  { name: "Bortoleto", class: "D", price: 10, team: "Audi", flag: "br" },

  { name: "Sainz", class: "E", price: 6, team: "Williams", flag: "es" },
  { name: "Hülkenberg", class: "E", price: 6, team: "Audi", flag: "de" },
  { name: "Albon", class: "E", price: 5, team: "Williams", flag: "th" },
  { name: "Bottas", class: "E", price: 5, team: "Cadillac", flag: "fi" },
  { name: "Pérez", class: "E", price: 5, team: "Cadillac", flag: "mx" },
  { name: "Stroll", class: "E", price: 5, team: "Aston Martin", flag: "ca" },
  { name: "Alonso", class: "E", price: 5, team: "Aston Martin", flag: "es" }
];

// Puntentabel per klasse (positie 1 t/m 22)
const pointsTable = {
  A: [120, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0],
  B: [160, 140, 120, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
  C: [240, 220, 200, 180, 160, 140, 120, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5],
  D: [300, 280, 260, 240, 220, 200, 180, 160, 140, 120, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8],
  E: [340, 320, 300, 280, 260, 240, 220, 200, 180, 160, 140, 120, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10]
};



