// data.js

// Coureurs + klasse (gesorteerd op klasse)
const drivers = [
  { name: "Verstappen", class: "A", price: 19, team: "Red Bull" },
  { name: "Russell", class: "A", price: 19, team: "Mercedes" },
  { name: "Norris", class: "A", price: 18, team: "McLaren" },
  { name: "Piastri", class: "A", price: 17, team: "McLaren" },

  { name: "Antonelli", class: "B", price: 15, team: "Mercedes" },
  { name: "Leclerc", class: "B", price: 15, team: "Ferrari" },
  { name: "Hamilton", class: "B", price: 14, team: "Ferrari" },
  { name: "Hadjar", class: "B", price: 13, team: "Red Bull" },

  { name: "Sainz", class: "C", price: 12, team: "Williams" },
  { name: "Bearman", class: "C", price: 12, team: "Haas" },
  { name: "Albon", class: "C", price: 11, team: "Williams" },
  { name: "Ocon", class: "C", price: 11, team: "Haas" },
  { name: "Gasly", class: "C", price: 11, team: "Alpine" },
  { name: "Lawson", class: "C", price: 10, team: "Racing Bulls" },

  { name: "Alonso", class: "D", price: 9, team: "Aston Martin" },
  { name: "Lindblad", class: "D", price: 8, team: "Racing Bulls" },
  { name: "Colapinto", class: "D", price: 8, team: "Alpine" },
  { name: "Stroll", class: "D", price: 7, team: "Aston Martin" },

  { name: "Bortoleto", class: "E", price: 5, team: "Audi" },
  { name: "Hülkenberg", class: "E", price: 5, team: "Audi" },
  { name: "Bottas", class: "E", price: 4, team: "Cadillac" },
  { name: "Pérez", class: "E", price: 4, team: "Cadillac" }
];

// Puntentabel per klasse (positie 1 t/m 22)
const pointsTable = {
  A: [120, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0],
  B: [160, 140, 120, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
  C: [240, 220, 200, 180, 160, 140, 120, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5],
  D: [300, 280, 260, 240, 220, 200, 180, 160, 140, 120, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8],
  E: [340, 320, 300, 280, 260, 240, 220, 200, 180, 160, 140, 120, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10]
};



