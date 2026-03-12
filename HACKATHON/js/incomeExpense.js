// Income & Expense Tracker
function addTransaction(type, amount, category) {
  let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
  transactions.push({ type, amount, category, date: new Date().toLocaleDateString() });
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

function getTransactions() {
  return JSON.parse(localStorage.getItem("transactions")) || [];
}

function showTransactions() {
  let list = getTransactions();
  let output = "<h3>Transactions</h3><ul>";
  list.forEach(t => {
    output += `<li>${t.date} - ${t.type}: ₹${t.amount} (${t.category})</li>`;
  });
  output += "</ul>";
  document.getElementById("content").innerHTML = output;
}