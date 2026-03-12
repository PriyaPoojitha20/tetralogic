function calculateTax(){

let income = document.getElementById("income").value;
let deduction = document.getElementById("deduction").value;

income = Number(income);
deduction = Number(deduction);

let taxableIncome = income - deduction;

let tax = taxableIncome * 0.1;

alert("Estimated Tax: ₹" + tax);

}
async function calculateTax(){

let income=document.getElementById("income").value;
let deduction=document.getElementById("deduction").value;

let response=await fetch(
"http://localhost:5000/api/tax/calculate",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
income:income,
deduction:deduction
})
}
);

let data=await response.json();

alert("Tax: ₹"+data.tax);

}