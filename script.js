document.addEventListener("DOMContentLoaded", () => {
  const selectionDiv = document.getElementById("driver-selection");
  const resultsBody = document.getElementById("results-body");
  const STORAGE_KEY = "selectedDrivers";

  drivers.forEach((driver, index) => {
    const label = document.createElement("label");
    label.innerHTML = `
      <input type="checkbox" data-index="${index}" />
      ${driver.name} (${driver.class})
    `;
    selectionDiv.appendChild(label);
  });

  const savedSelection = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  savedSelection.forEach(index => {
    const checkbox = selectionDiv.querySelector(`input[data-index='${index}']`);
    if (checkbox) checkbox.checked = true;
  });

  updateResultsTable();

  selectionDiv.addEventListener("change", () => {
    const selected = Array.from(selectionDiv.querySelectorAll("input[type='checkbox']:checked"))
      .map(cb => parseInt(cb.getAttribute("data-index")));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(selected));
    updateResultsTable();
  });

  function updateResultsTable() {
    resultsBody.innerHTML = "";

    const checkedBoxes = selectionDiv.querySelectorAll("input[type='checkbox']:checked");
const selectedDrivers = Array.from(checkedBoxes)
  .map(cb => {
    const index = parseInt(cb.getAttribute("data-index"));
    return { ...drivers[index], index };
  })
  .sort((a, b) => a.class.localeCompare(b.class));


    selectedDrivers.forEach(driver => {
      const row = document.createElement("tr");
      row.dataset.index = driver.index;
      row.innerHTML = `
        <td>${driver.name}</td>
        <td>${driver.class}</td>
        <td>
          <input type="number" min="1" max="20" class="range-start" data-index="${driver.index}" placeholder="van" />
          –
          <input type="number" min="1" max="20" class="range-end" data-index="${driver.index}" placeholder="tot" />
        </td>
        <td class="points-cell" data-index="${driver.index}">-</td>
        <td class="multiplier-cell" data-index="${driver.index}">-</td>
      `;
      resultsBody.appendChild(row);
    });
  }

  resultsBody.addEventListener("input", () => {
    const rows = Array.from(resultsBody.querySelectorAll("tr"));
    const results = [];

    rows.forEach(row => {
      const index = parseInt(row.dataset.index);
      const startInput = row.querySelector(".range-start");
      const endInput = row.querySelector(".range-end");
      const pointsCell = row.querySelector(".points-cell");

      const start = parseInt(startInput.value);
      const end = parseInt(endInput.value);
      let points = null;

      if (
        !isNaN(start) &&
        !isNaN(end) &&
        start >= 1 &&
        end <= 20 &&
        start <= end
      ) {
        const klasse = drivers[index].class;
        points = calculateAveragePoints(klasse, start, end);
        pointsCell.textContent = points;
      } else {
        pointsCell.textContent = "-";
      }

      results.push({
        index,
        name: drivers[index].name,
        class: drivers[index].class,
        range: `${start || "?"}–${end || "?"}`,
        points
      });
    });

    const validResults = results.filter(r => r.points !== null);
    validResults.sort((a, b) => b.points - a.points);

    // Verwerk ties en multipliers
    let multiplier = 8;
    let i = 0;
    while (i < validResults.length) {
      const group = [validResults[i]];
      let j = i + 1;
      while (j < validResults.length && validResults[j].points === validResults[i].points) {
        group.push(validResults[j]);
        j++;
      }

      const multipliers = [];
      for (let k = 0; k < group.length; k++) {
        multipliers.push(`x${Math.max(multiplier - k, 1)}`);
      }
      const multiStr = multipliers.join("/");

      group.forEach(driver => {
        const cell = document.querySelector(`.multiplier-cell[data-index='${driver.index}']`);
        cell.textContent = multiStr;
      });

      i = j;
      multiplier -= group.length;
    }
  });

  function calculateAveragePoints(driverClass, start, end) {
    const pointsList = pointsTable[driverClass];
    const slice = pointsList.slice(start - 1, end);
    const sum = slice.reduce((a, b) => a + b, 0);
    return Math.round(sum / slice.length);
  }
});
