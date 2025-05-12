document.addEventListener("DOMContentLoaded", () => {
  const selectionDiv = document.getElementById("driver-selection");
  const resultsBody = document.getElementById("results-body");

  const STORAGE_KEY = "selectedDrivers";

  // ░░ Toon checkboxes voor alle coureurs ░░
  drivers.forEach((driver, index) => {
    const label = document.createElement("label");
    label.innerHTML = `
      <input type="checkbox" data-index="${index}" />
      ${driver.name} (${driver.class})
    `;
    selectionDiv.appendChild(label);
  });

  // ░░ Herstel selectie uit localStorage ░░
  const savedSelection = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  savedSelection.forEach(index => {
    const checkbox = selectionDiv.querySelector(`input[data-index='${index}']`);
    if (checkbox) checkbox.checked = true;
  });

  // ░░ Toon bijbehorende rijen in de tabel ░░
  updateResultsTable();

  // ░░ Event: checkbox gewijzigd ░░
  selectionDiv.addEventListener("change", () => {
    const selected = Array.from(selectionDiv.querySelectorAll("input[type='checkbox']:checked"))
      .map(cb => parseInt(cb.getAttribute("data-index")));

    // sla op in localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(selected));

    updateResultsTable();
  });

  // ░░ Functie: maak resultaten-tabel op basis van selectie ░░
  function updateResultsTable() {
    resultsBody.innerHTML = "";

    const checkedBoxes = selectionDiv.querySelectorAll("input[type='checkbox']:checked");
    const selectedDrivers = Array.from(checkedBoxes).map(cb => {
      const index = parseInt(cb.getAttribute("data-index"));
      return { ...drivers[index], index };
    });

    selectedDrivers.forEach(driver => {
      const row = document.createElement("tr");
      row.dataset.index = driver.index;
      row.innerHTML = `
        <td>${driver.name}</td>
        <td>${driver.class}</td>
        <td><input type="number" min="1" max="20" class="position-input" data-index="${driver.index}" /></td>
        <td class="points-cell" data-index="${driver.index}">-</td>
        <td class="multiplier-cell" data-index="${driver.index}">-</td>
      `;
      resultsBody.appendChild(row);
    });
  }

  // ░░ Event: bij positie-invoer ░░
  resultsBody.addEventListener("input", () => {
    const rows = Array.from(resultsBody.querySelectorAll("tr"));
    const results = [];

    rows.forEach(row => {
      const index = parseInt(row.dataset.index);
      const input = row.querySelector(".position-input");
      const pointsCell = row.querySelector(".points-cell");

      const pos = parseInt(input.value);
      let points = null;
      if (!isNaN(pos) && pos >= 1 && pos <= 20) {
        const klasse = drivers[index].class;
        points = pointsTable[klasse][pos - 1];
        pointsCell.textContent = points;
      } else {
        pointsCell.textContent = "-";
      }

      results.push({
        index,
        name: drivers[index].name,
        class: drivers[index].class,
        position: pos,
        points: points
      });
    });

    // Sorteer op punten en ken multipliers toe
    const validResults = results.filter(r => r.points !== null);
    validResults.sort((a, b) => b.points - a.points);

// Groepeer coureurs met gelijke punten
let multiplier = 8;
let i = 0;
while (i < validResults.length) {
  const group = [validResults[i]];
  let j = i + 1;
  while (j < validResults.length && validResults[j].points === validResults[i].points) {
    group.push(validResults[j]);
    j++;
  }

  // Wijs multipliers toe (bijv. x8/x7 bij 2 gelijke)
  const multipliers = [];
  for (let k = 0; k < group.length; k++) {
    multipliers.push(`x${Math.max(multiplier - k, 1)}`);
  }
  const multiStr = multipliers.join("/");

  group.forEach((driver, idx) => {
    const cell = document.querySelector(`.multiplier-cell[data-index='${driver.index}']`);
    cell.textContent = multiStr;
  });

  i = j;
  multiplier -= group.length;
}

  });
});
