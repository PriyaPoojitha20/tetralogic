function calculateTax(){

let salary = Number(document.getElementById("salary").value);
let deduction = Number(document.getElementById("deduction").value);

let taxableIncome = salary - deduction;
let tax = taxableIncome * 0.1;

document.getElementById("result").innerHTML =
"Estimated Tax: ₹ " + tax;

}