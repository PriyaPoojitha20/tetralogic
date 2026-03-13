function calculateInvestment(){

let amount = Number(document.getElementById("amount").value);
let years = Number(document.getElementById("years").value);
let rate = Number(document.getElementById("rate").value);

let futureValue = amount * Math.pow((1 + rate/100), years);

document.getElementById("result").innerHTML =
"Future Investment Value: ₹ " + futureValue.toFixed(2);

}
function saveInvestment(){

let investmentAmount =
Number(document.getElementById("investmentAmount").value);

localStorage.setItem("investment", investmentAmount);

alert("Investment data saved");

}