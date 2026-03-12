// Dashboard summary example

let income = 50000;
let expenses = 30000;

let netWorth = income - expenses;

console.log("Net Worth:", netWorth);
async function loadIncome(){

let response=await fetch(
"http://localhost:5000/api/income"
);

let data=await response.json();

let total=0;

data.forEach(i=>{
total+=Number(i.amount);
});

document.getElementById("incomeCard").innerText="₹"+total;

}

loadIncome();