// Tax Calculator (basic Indian slabs)
function calculateTax(income) {
  let tax = 0;
  if (income <= 250000) tax = 0;
  else if (income <= 500000) tax = (income - 250000) * 0.05;
  else if (income <= 1000000) tax = (250000 * 0.05) + (income - 500000) * 0.2;
  else tax = (250000 * 0.05) + (500000 * 0.2) + (income - 1000000) * 0.3;
  return tax;
}

function showTax(income) {
  let tax = calculateTax(income);
  document.getElementById("content").innerHTML = `<h3>Tax Liability</h3><p>Income: ₹${income}<br>Tax: ₹${tax}</p>`;
}
