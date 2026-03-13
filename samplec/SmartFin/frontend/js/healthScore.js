/* Financial Health Score - merged best logic from both projects */

document.addEventListener("DOMContentLoaded", () => {
  // Auto-fill from localStorage if modules were used
  const fill = (id, key) => {
    const val = getData(key);
    if (val) document.getElementById(id).value = val;
  };
  fill("hIncome",     "income");
  fill("hExpense",    "expenses");
  fill("hSavings",    "savings");
  fill("hInvestment", "investment");
  fill("hLoan",       "loan");
  fill("hInsurance",  "insurance");
});

async function generateScore() {
  const income     = Number(document.getElementById("hIncome").value);
  const expense    = Number(document.getElementById("hExpense").value);
  const savings    = Number(document.getElementById("hSavings").value);
  const investment = Number(document.getElementById("hInvestment").value);
  const loan       = Number(document.getElementById("hLoan").value);
  const insurance  = Number(document.getElementById("hInsurance").value);

  if (!income || !expense || !savings || !investment || !loan || !insurance)
    return showResult("result", "⚠️ Please complete all 6 financial fields to generate your score.", true);

  let score = 0;

  // 1. Income stability (15 pts)
  if (income > 50000)      score += 15;
  else if (income > 25000) score += 10;
  else                     score += 5;

  // 2. Expense control (20 pts)
  const expRatio = expense / income;
  if (expRatio < 0.5)      score += 20;
  else if (expRatio < 0.7) score += 10;
  else                     score += 5;

  // 3. Savings ratio (20 pts)
  const savRatio = savings / income;
  if (savRatio >= 0.30)    score += 20;
  else if (savRatio >= 0.15) score += 10;
  else                     score += 5;

  // 4. Investment discipline (15 pts)
  if (investment >= income * 0.2) score += 15;
  else                            score += 8;

  // 5. Loan burden (15 pts)
  if (loan <= income * 0.3) score += 15;
  else                      score += 5;

  // 6. Insurance coverage (15 pts)
  if (insurance >= income * 10) score += 15;
  else                          score += 8;

  // Update circle meter
  const circle = document.getElementById("scoreCircle");
  const degree = score * 3.6;
  const color  = score >= 80 ? "#4ecca3" : score >= 60 ? "#f39c12" : "#e74c3c";
  circle.style.background = `conic-gradient(${color} ${degree}deg, #e0e0e0 ${degree}deg)`;
  document.getElementById("scoreValue").textContent = score;

  // Status & suggestion
  let status, suggestion;
  if (score >= 80) {
    status     = "🏆 Excellent Financial Health";
    suggestion = "Strong savings and investment discipline. Continue building your portfolio and stay debt-light.";
  } else if (score >= 60) {
    status     = "✅ Good Financial Health";
    suggestion = "Finances are stable. Increasing investments and reducing loan burden will push your score higher.";
  } else {
    status     = "⚠️ Needs Improvement";
    suggestion = "Focus on controlling expenses, growing savings, and reducing your debt-to-income ratio.";
  }

  document.getElementById("scoreStatus").textContent     = status;
  document.getElementById("scoreSuggestion").textContent = suggestion;

  // Breakdown in result box
  showResult("result",
    `<p><strong>Score Breakdown (out of 100)</strong></p>
     <p>💵 Income Stability: ${income > 50000 ? 15 : income > 25000 ? 10 : 5}/15</p>
     <p>💸 Expense Control: ${expRatio < 0.5 ? 20 : expRatio < 0.7 ? 10 : 5}/20</p>
     <p>💰 Savings Ratio: ${savRatio >= 0.3 ? 20 : savRatio >= 0.15 ? 10 : 5}/20</p>
     <p>📈 Investment Discipline: ${investment >= income * 0.2 ? 15 : 8}/15</p>
     <p>🏦 Loan Burden: ${loan <= income * 0.3 ? 15 : 5}/15</p>
     <p>🛡️ Insurance Coverage: ${insurance >= income * 10 ? 15 : 8}/15</p>`
  );

  // Try API too
  try {
    await apiFetch("/health/score", "POST", { income, expense, savings, investment, loan, insurance });
  } catch { /* offline */ }
}
