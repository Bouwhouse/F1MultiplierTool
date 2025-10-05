// data.js

// Coureurs + klasse (gesorteerd op klasse)
const drivers = [
  { name: "Norris", class: "A" },
  { name: "Piastri", class: "A" },
  
  { name: "Verstappen", class: "B" },
  { name: "Russell", class: "B" },
  { name: "Leclerc", class: "B" },
  { name: "Hamilton", class: "B" },
  
  { name: "Antonelli", class: "C" },
  { name: "Albon", class: "C" },
  { name: "Sainz", class: "C" },
  
  { name: "Tsunoda", class: "D" },
  { name: "Hadjar", class: "D" },
  { name: "Ocon", class: "D" },
  { name: "Alonso", class: "D" },
  { name: "Lawson", class: "D" },
  
  { name: "Gasly", class: "E" },
  { name: "Bearman", class: "E" },
  { name: "Stroll", class: "E" },
  { name: "Hülkenberg", class: "E" },
  { name: "Colapinto", class: "E" },
  { name: "Bortoleto", class: "E" }
];

// Puntentabel per klasse (positie 1 t/m 20)
const pointsTable = {
  A: [120, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
  B: [160, 140, 120, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3],
  C: [240, 220, 200, 180, 160, 140, 120, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7],
  D: [300, 280, 260, 240, 220, 200, 180, 160, 140, 120, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10],
  E: [340, 320, 300, 280, 260, 240, 220, 200, 180, 160, 140, 120, 100, 90, 80, 70, 60, 50, 40, 30]
};

