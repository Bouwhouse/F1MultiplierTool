// data.js

// Coureurs + klasse (gesorteerd op klasse)
const drivers = [
  { name: "Verstappen", class: "A", price: 19 },
  { name: "Russell", class: "A", price: 19 },
  { name: "Norris", class: "A", price: 18 },
  { name: "Piastri", class: "A", price: 17 },

  { name: "Antonelli", class: "B", price: 15 },
  { name: "Leclerc", class: "B", price: 15 },
  { name: "Hamilton", class: "B", price: 14 },
  { name: "Hadjar", class: "B", price: 13 },

  { name: "Sainz", class: "C", price: 12 },
  { name: "Bearman", class: "C", price: 12 },
  { name: "Albon", class: "C", price: 11 },
  { name: "Ocon", class: "C", price: 11 },
  { name: "Gasly", class: "C", price: 11 },
  { name: "Lawson", class: "C", price: 10 },

  { name: "Alonso", class: "D", price: 9 },
  { name: "Lindblad", class: "D", price: 8 },
  { name: "Colapinto", class: "D", price: 8 },
  { name: "Stroll", class: "D", price: 7 },

  { name: "Bortoleto", class: "E", price: 5 },
  { name: "Hülkenberg", class: "E", price: 5 },
  { name: "Bottas", class: "E", price: 4 },
  { name: "Pérez", class: "E", price: 4 }
];

// Puntentabel per klasse (positie 1 t/m 20)
const pointsTable = {
  A: [120, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0],
  B: [160, 140, 120, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
  C: [240, 220, 200, 180, 160, 140, 120, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5],
  D: [300, 280, 260, 240, 220, 200, 180, 160, 140, 120, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8],
  E: [340, 320, 300, 280, 260, 240, 220, 200, 180, 160, 140, 120, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10]
};



