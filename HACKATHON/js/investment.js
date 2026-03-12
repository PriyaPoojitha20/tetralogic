// Investment Management
function addInvestment(type, amount, rate, years) {
  let investments = JSON.parse(localStorage.getItem("investments")) || [];
  investments.push({ type, amount, rate, years });
  localStorage.setItem("investments", JSON.stringify(investments));
}

function calculateReturns(amount, rate, years) {
  return (amount * Math.pow((1 + rate/100), years)).toFixed(2);
}

function showInvestments() {
  let list = JSON.parse(localStorage.getItem("investments")) || [];
  let output = "<h3>Investments</h3><ul>";
  list.forEach(inv => {
    let returns = calculateReturns(inv.amount, inv.rate, inv.years);
    output += `<li>${inv.type}: Invested ₹${inv.amount}, Expected Return ₹${returns}</li>`;
  });
  output += "</ul>";
  document.getElementById("content").innerHTML = output;
}

