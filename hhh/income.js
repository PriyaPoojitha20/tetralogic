function calculate(){

let salary = document.getElementById("salary").value;
let otherIncome = document.getElementById("otherIncome").value;
let expense = document.getElementById("expense").value;

let totalIncome = Number(salary) + Number(otherIncome);
let savings = totalIncome - expense;

alert("Your monthly savings: ₹ " + savings);

}
function calculateIncome(){

let salary = Number(document.getElementById("salary").value);
let otherIncome = Number(document.getElementById("otherIncome").value);
let expense = Number(document.getElementById("expense").value);

let income = salary + otherIncome;
let savings = income - expense;

document.getElementById("result").innerHTML =
"Income: ₹" + income + " Savings: ₹" + savings;

/* STORE DATA */

localStorage.setItem("income", income);
localStorage.setItem("expense", expense);
localStorage.setItem("savings", savings);

}