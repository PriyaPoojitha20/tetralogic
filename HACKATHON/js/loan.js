// Loan EMI Calculator
function calculateEMI(principal, rate, months) {
  let monthlyRate = rate / 12 / 100;
  let emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
  return emi.toFixed(2);
}

function showLoan(principal, rate, months) {
  let emi = calculateEMI(principal, rate, months);
  document.getElementById("content").innerHTML = `<h3>Loan Planning</h3><p>Loan: ₹${principal}<br>Rate: ${rate}%<br>Months: ${months}<br>EMI: ₹${emi}</p>`;
}
