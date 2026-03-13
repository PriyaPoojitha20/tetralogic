/* Investment Planner */

function analyzeInvestment() {
  const type   = document.getElementById("investType").value || "General";
  const amount = Number(document.getElementById("investAmount").value);
  const years  = Number(document.getElementById("investYears").value);
  const rate   = Number(document.getElementById("investRate").value);
  const risk   = document.getElementById("riskLevel").value;

  if (!amount || !years) return showResult("result", "Please enter amount and duration.", true);

  // Use entered rate or default by risk
  const r = rate || (risk === "Low" ? 7 : risk === "Medium" ? 12 : 18);
  const futureValue = amount * Math.pow(1 + r / 100, years);
  const totalInvested = amount;
  const gains = futureValue - totalInvested;

  let suggestion = "";
  if (risk === "Low")        suggestion = "📌 Suggested: PPF, FD, NSC — Safe &amp; stable returns";
  else if (risk === "Medium") suggestion = "📌 Suggested: ELSS Mutual Funds, Balanced Funds — Good growth";
  else                        suggestion = "📌 Suggested: Direct Stocks, SIP, Index Funds — High growth potential";

  // Save for health score
  saveData("investment", amount);

  showResult("result",
    `<p>📦 Type: ${type} | Risk: ${risk}</p>
     <p>💰 Invested: ${fmt(totalInvested)}</p>
     <p>📅 Duration: ${years} Years @ ${r}% p.a.</p>
     <p>📈 Future Value: <strong>${fmt(futureValue.toFixed(2))}</strong></p>
     <p>🎯 Estimated Gain: ${fmt(gains.toFixed(2))}</p>
     <p>${suggestion}</p>`
  );
}
