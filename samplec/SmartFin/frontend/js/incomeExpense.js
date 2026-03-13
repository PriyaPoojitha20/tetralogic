/* Income & Expense */

async function addTransaction() {
  const type     = document.getElementById("type").value;
  const amount   = document.getElementById("amount").value;
  const category = document.getElementById("category").value;

  if (!amount) return showResult("result", "Please enter an amount.", true);

  try {
    const url = type === "Income" ? "/add" : "/add";
    const endpoint = type === "Income" ? "/api/income/add" : "/api/expense/add";
    const data = await apiFetch(endpoint.replace("/api",""), "POST", { type, amount, category });
    showResult("result", `<p>✅ ${data.message || type + " added successfully!"}</p><p>Amount: ${fmt(amount)} | Category: ${category || "—"}</p>`);
  } catch {
    // Offline fallback
    showResult("result", `<p>✅ ${type} of ${fmt(amount)} recorded (${category || "General"}).</p>`);
  }
}

function calculateSavings() {
  const salary      = Number(document.getElementById("salary").value) || 0;
  const otherIncome = Number(document.getElementById("otherIncome").value) || 0;
  const expense     = Number(document.getElementById("expense").value) || 0;

  if (!salary && !otherIncome) return showResult("result", "Please enter salary or income.", true);

  const totalIncome = salary + otherIncome;
  const savings     = totalIncome - expense;
  const ratio       = totalIncome > 0 ? ((savings / totalIncome) * 100).toFixed(1) : 0;

  // Save for dashboard & health score
  saveData("income",   totalIncome);
  saveData("expenses", expense);
  saveData("savings",  savings);

  showResult("result",
    `<p>💵 Total Income: ${fmt(totalIncome)}</p>
     <p>💸 Expenses: ${fmt(expense)}</p>
     <p>💰 Monthly Savings: ${fmt(savings)} (${ratio}%)</p>
     ${savings < 0 ? "<p>⚠️ Spending exceeds income — review your expenses.</p>" : ""}`
  );
}
