/* Loan & EMI Calculator */

async function calculateEMI() {
  const loanType = document.getElementById("loanType").value || "Loan";
  const principal = Number(document.getElementById("loanAmount").value);
  const annualRate = Number(document.getElementById("interestRate").value);
  const tenure = Number(document.getElementById("tenure").value);

  if (!principal || !annualRate || !tenure)
    return showResult("result", "Please fill in all loan details.", true);

  let emi, totalPayment, totalInterest;

  try {
    const data = await apiFetch("/loans/emi", "POST", { principal, rate: annualRate, tenure });
    emi = data.emi;
    totalPayment = data.totalPayment;
    totalInterest = data.totalInterest;
  } catch {
    // Offline calculation
    const r = annualRate / 100 / 12;
    const e = (principal * r * Math.pow(1 + r, tenure)) / (Math.pow(1 + r, tenure) - 1);
    emi = e.toFixed(2);
    totalPayment = (e * tenure).toFixed(2);
    totalInterest = (e * tenure - principal).toFixed(2);
  }

  // Save EMI for dashboard
  saveData("lastEMI", emi);
  saveData("loan", principal);

  showResult("result",
    `<p>🏷️ Type: ${loanType}</p>
     <p>💵 Principal: ${fmt(principal)}</p>
     <p>📅 Monthly EMI: <strong>${fmt(emi)}</strong></p>
     <p>💳 Total Payment: ${fmt(totalPayment)}</p>
     <p>📈 Total Interest: ${fmt(totalInterest)}</p>
     <p>⏱️ Tenure: ${tenure} months (${(tenure/12).toFixed(1)} years)</p>`
  );
}
