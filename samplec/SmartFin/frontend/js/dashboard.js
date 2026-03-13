/* Dashboard - loads stats from localStorage + API and renders chart */

document.addEventListener("DOMContentLoaded", async () => {
  checkLogin();

  // Read stored summary values from localStorage (set by individual pages)
  const income   = Number(getData("income")   || 0);
  const expenses = Number(getData("expenses") || 0);
  const savings  = Number(getData("savings")  || 0);
  const emi      = Number(getData("lastEMI")  || 0);

  document.getElementById("statIncome").textContent   = fmt(income);
  document.getElementById("statExpenses").textContent = fmt(expenses);
  document.getElementById("statSavings").textContent  = fmt(savings);
  document.getElementById("statEMI").textContent      = emi ? fmt(emi) : "—";

  // Chart
  const ctx = document.getElementById("financeChart");
  if (ctx) {
    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Income", "Expenses", "Savings"],
        datasets: [{
          data: [income || 50000, expenses || 30000, savings || 20000],
          backgroundColor: ["#4ecca3", "#e74c3c", "#3498db"],
          borderWidth: 2,
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { position: "bottom" } }
      }
    });
  }
});
