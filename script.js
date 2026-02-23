document.addEventListener("DOMContentLoaded", () => {
  const selectionDiv = document.getElementById("driver-selection");
  const resultsBody = document.getElementById("results-body");
  const STORAGE_KEY = "selectedDrivers";

  const categories = ["A", "B", "C", "D", "E"];
  const rules = { A: 2, B: 2, C: 2, D: 1, E: 1 };

  categories.forEach(cat => {
    const column = document.createElement("div");
    column.className = `driver-column cat-${cat}`;
    column.innerHTML = `<h3>${cat} (Pick ${rules[cat]})</h3>`;

    drivers.forEach((driver, index) => {
      if (driver.class === cat) {
        const label = document.createElement("label");
        label.className = `driver-label cat-${cat}`;
        label.innerHTML = `
          <input type="checkbox" data-index="${index}" />
          <span>${driver.name}</span>
          <span class="price">${driver.price}M</span>
        `;
        column.appendChild(label);
      }
    });
    selectionDiv.appendChild(column);
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
          <input type="number" min="1" max="22" class="range-start" data-index="${driver.index}" placeholder="van" />
          –
          <input type="number" min="1" max="22" class="range-end" data-index="${driver.index}" placeholder="tot" />
        </td>
        <td class="points-cell" data-index="${driver.index}">-</td>
        <td class="multiplier-cell" data-index="${driver.index}">-</td>
      `;
      resultsBody.appendChild(row);
    });

    updateBudgetAndRules(selectedDrivers);
  }

  function updateBudgetAndRules(selectedDrivers) {
    const totalPrice = selectedDrivers.reduce((sum, d) => sum + d.price, 0);
    const priceSpan = document.getElementById("total-price");
    priceSpan.textContent = totalPrice;
    priceSpan.style.color = totalPrice > 100 ? "#f5222d" : "#0050b3";

    const counts = { A: 0, B: 0, C: 0, D: 0, E: 0 };
    selectedDrivers.forEach(d => counts[d.class]++);

    const rules = { A: 2, B: 2, C: 2, D: 1, E: 1 };
    Object.keys(rules).forEach(klasse => {
      const span = document.getElementById(`rule-${klasse}`);
      span.textContent = counts[klasse];
      if (counts[klasse] === rules[klasse]) {
        span.className = "valid";
      } else if (counts[klasse] > rules[klasse]) {
        span.className = "invalid";
      } else {
        span.className = "";
      }
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
        end <= 22 &&
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
