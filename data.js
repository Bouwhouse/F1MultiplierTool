// data.js

// Coureurs + klasse (gesorteerd op klasse)
const drivers = [
  { name: "Norris", class: "A" },
  { name: "Piastri", class: "A" },
  { name: "Verstappen", class: "A" },
  
  { name: "Russell", class: "B" },
  { name: "Leclerc", class: "B" },
  { name: "Hamilton", class: "B" },
  
  { name: "Antonelli", class: "C" },
  { name: "Hadjar", class: "C" },
  
  { name: "Sainz", class: "D" },
  { name: "Hülkenberg", class: "D" },
  { name: "Alonso", class: "D" },
  { name: "Albon", class: "D" },
  
  { name: "Bearman", class: "E" },
  { name: "Tsunoda", class: "E" },
  { name: "Ocon", class: "E" },
  { name: "Lawson", class: "E" },
  { name: "Bortoleto", class: "E" },
  { name: "Gasly", class: "E" },
  { name: "Colapinto", class: "E" },
  { name: "Stroll", class: "E" }
];

// Puntentabel per klasse (positie 1 t/m 20)
const pointsTable = {
  A: [120, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
  B: [160, 140, 120, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3],
  C: [240, 220, 200, 180, 160, 140, 120, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7],
  D: [300, 280, 260, 240, 220, 200, 180, 160, 140, 120, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10],
  E: [340, 320, 300, 280, 260, 240, 220, 200, 180, 160, 140, 120, 100, 90, 80, 70, 60, 50, 40, 30]
};



