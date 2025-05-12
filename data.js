// data.js

// Coureurs + klasse
const drivers = [
  { name: "Piastri", class: "A" },
  { name: "Norris", class: "A" },
  { name: "Verstappen", class: "A" },
  { name: "Russel", class: "B" },
  { name: "Leclerc", class: "B" },
  { name: "Antonelli", class: "B" },
  { name: "Hamilton", class: "B" },
  { name: "Albon", class: "C" },
  { name: "Sainz", class: "C" },
  { name: "Tsunoda", class: "C" },
  { name: "Ocon", class: "D" },
  { name: "Stroll", class: "D" },
  { name: "Gasly", class: "D" },
  { name: "Bearman", class: "D" },
  { name: "Hadjar", class: "D" },
  { name: "Alonso", class: "D" },
  { name: "Hülkenberg", class: "E" },
  { name: "Lawson", class: "E" },
  { name: "Doohan", class: "E" },
  { name: "Bortoleto", class: "E" }
];

// Puntentabel per klasse
const pointsTable = {
  A: [120, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
  B: [160, 140, 120, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3],
  C: [240, 220, 200, 180, 160, 140, 120, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7],
  D: [300, 280, 260, 240, 220, 200, 180, 160, 140, 120, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10],
  E: [340, 320, 300, 280, 260, 240, 220, 200, 180, 160, 140, 120, 100, 90, 80, 70, 60, 50, 40, 30]
};
