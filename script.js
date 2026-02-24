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
          <div class="driver-info">
            <input type="checkbox" data-index="${index}" />
            <div class="name-team">
              <span class="name">${driver.name}</span>
              <span class="team" data-team="${driver.team}">${driver.team}</span>
            </div>
          </div>
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
    if (checkbox) {
      checkbox.checked = true;
      checkbox.closest(".driver-label").classList.add("selected");
    }
  });

  updateResultsTable();

  selectionDiv.addEventListener("change", (e) => {
    if (e.target.tagName === "INPUT" && e.target.type === "checkbox") {
      const label = e.target.closest(".driver-label");
      if (e.target.checked) {
        label.classList.add("selected");
      } else {
        label.classList.remove("selected");
      }
    }

    const selected = Array.from(selectionDiv.querySelectorAll("input[type='checkbox']:checked"))
      .map(cb => parseInt(cb.getAttribute("data-index")));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(selected));
    updateResultsTable();
  });

  document.getElementById("reset-btn").addEventListener("click", () => {
    selectionDiv.querySelectorAll("input[type='checkbox']").forEach(cb => {
      cb.checked = false;
      cb.closest(".driver-label").classList.remove("selected");
    });
    localStorage.removeItem(STORAGE_KEY);
    updateResultsTable();
  });


  function updateResultsTable() {
    // Preserve existing position inputs before rebuilding
    const savedRanges = new Map();
    resultsBody.querySelectorAll("tr").forEach(row => {
      const idx = parseInt(row.dataset.index);
      savedRanges.set(idx, {
        start: row.querySelector(".range-start").value,
        end: row.querySelector(".range-end").value
      });
    });

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

      // Restore saved range values for this driver
      if (savedRanges.has(driver.index)) {
        const { start, end } = savedRanges.get(driver.index);
        if (start) row.querySelector(".range-start").value = start;
        if (end) row.querySelector(".range-end").value = end;
      }
    });

    updateBudgetAndRules(selectedDrivers);
    resultsBody.dispatchEvent(new Event("input"));
  }

  function getTeamOnly() {
    const rows = Array.from(resultsBody.querySelectorAll("tr"));
    if (rows.length === 0) return "Geen team geselecteerd.";
    let lines = ["🏎️ Mijn F1 Team 🏎️", ""];
    rows.forEach(row => {
      const name = row.cells[0].textContent.trim();
      const classLetter = row.cells[1].textContent.trim();
      lines.push(`• ${name} (${classLetter})`);
    });
    const totalPrice = document.getElementById("total-price").textContent;
    lines.push(`\n💰 Budget: ${totalPrice}/100M`);
    return lines.join("\n");
  }

  function getTeamWithMultipliers() {
    const rows = Array.from(resultsBody.querySelectorAll("tr"));
    if (rows.length === 0) return "Geen team geselecteerd.";
    let lines = ["🏎️ Mijn F1 Team & Multipliers 🏎️", ""];
    rows.forEach(row => {
      const name = row.cells[0].textContent.trim();
      const classLetter = row.cells[1].textContent.trim();
      const multiplier = row.querySelector(".multiplier-cell").textContent.trim();
      const multiplierText = multiplier === "-" ? "(geen positie ingevoerd)" : `**${multiplier}**`;
      lines.push(`• ${name} (${classLetter}): ${multiplierText}`);
    });
    const totalPrice = document.getElementById("total-price").textContent;
    lines.push(`\n💰 Budget: ${totalPrice}/100M`);
    return lines.join("\n");
  }

  function fallbackCopy(text) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.cssText = "position:fixed;opacity:0;top:0;left:0";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  }

  function copyToClipboard(text, btn) {
    const originalText = btn.textContent;
    const onSuccess = () => {
      btn.textContent = "Gekopieerd! ✅";
      setTimeout(() => btn.textContent = originalText, 2000);
    };
    const onFail = () => {
      btn.textContent = "Mislukt ❌";
      setTimeout(() => btn.textContent = originalText, 2000);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(onSuccess).catch(() => {
        fallbackCopy(text) ? onSuccess() : onFail();
      });
    } else {
      fallbackCopy(text) ? onSuccess() : onFail();
    }
  }

  document.getElementById("copy-team-only").addEventListener("click", function () {
    copyToClipboard(getTeamOnly(), this);
  });

  document.getElementById("copy-team-multipliers").addEventListener("click", function () {
    copyToClipboard(getTeamWithMultipliers(), this);
  });

  function updateBudgetAndRules(selectedDrivers) {
    const totalPrice = selectedDrivers.reduce((sum, d) => sum + d.price, 0);
    const priceSpan = document.getElementById("total-price");
    priceSpan.textContent = totalPrice;
    priceSpan.style.color = totalPrice > 100 ? "#f5222d" : "#0050b3";

    const counts = { A: 0, B: 0, C: 0, D: 0, E: 0 };
    selectedDrivers.forEach(d => counts[d.class]++);

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

      const isValid = !isNaN(start) && !isNaN(end) && start >= 1 && end <= 22 && start <= end;
      const bothFilled = startInput.value !== "" && endInput.value !== "";

      if (isValid) {
        startInput.classList.remove("range-invalid");
        endInput.classList.remove("range-invalid");
        const klasse = drivers[index].class;
        points = calculateAveragePoints(klasse, start, end);
        pointsCell.textContent = points;
      } else {
        if (bothFilled) {
          startInput.classList.add("range-invalid");
          endInput.classList.add("range-invalid");
        } else {
          startInput.classList.remove("range-invalid");
          endInput.classList.remove("range-invalid");
        }
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

    // Sort rows by multiplier value (highest first, unset rows to bottom)
    const allRows = Array.from(resultsBody.querySelectorAll("tr"));
    allRows.sort((a, b) => {
      const aText = a.querySelector(".multiplier-cell").textContent;
      const bText = b.querySelector(".multiplier-cell").textContent;
      const aVal = aText === "-" ? -1 : parseInt(aText.split("/")[0].replace("x", ""));
      const bVal = bText === "-" ? -1 : parseInt(bText.split("/")[0].replace("x", ""));
      return bVal - aVal;
    });
    allRows.forEach(row => resultsBody.appendChild(row));
  });

  function calculateAveragePoints(driverClass, start, end) {
    const pointsList = pointsTable[driverClass];
    const slice = pointsList.slice(start - 1, end);
    const sum = slice.reduce((a, b) => a + b, 0);
    return Math.round(sum / slice.length);
  }
});
