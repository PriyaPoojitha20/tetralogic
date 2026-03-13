function generateScore(){

let income = Number(localStorage.getItem("income"));
let expense = Number(localStorage.getItem("expense"));
let savings = Number(localStorage.getItem("savings"));
let investment = Number(localStorage.getItem("investment"));
let loan = Number(localStorage.getItem("loan"));
let insurance = Number(localStorage.getItem("insurance"));

/* Check if user entered all data */

if(!income || !expense || !savings || !investment || !loan || !insurance){

document.getElementById("score").innerHTML =
"⚠ Please complete all 6 financial services before generating the Financial Health Score.";

return;

}

let score = 0;

/* Income Stability */

if(income > 50000){
score += 15;
}
else if(income > 25000){
score += 10;
}
else{
score += 5;
}

/* Expense Control */

let expenseRatio = expense/income;

if(expenseRatio < 0.5){
score += 20;
}
else if(expenseRatio < 0.7){
score += 10;
}
else{
score += 5;
}

/* Savings Ratio */

let savingsRatio = savings/income;

if(savingsRatio >= 0.3){
score += 20;
}
else if(savingsRatio >= 0.15){
score += 10;
}
else{
score += 5;
}

/* Investment Score */

if(investment >= income*0.2){
score += 15;
}
else{
score += 8;
}

/* Loan Burden */

if(loan <= income*0.3){
score += 15;
}
else{
score += 5;
}

/* Insurance Protection */

if(insurance >= income*10){
score += 15;
}
else{
score += 8;
}

/* Display Result */

document.getElementById("score").innerHTML =
"Financial Health Score : " + score + " / 100";

let status="";
let suggestion="";

if(score >= 80){

status="Status: Excellent Financial Health";

suggestion="You have strong financial stability. Continue investing and maintain savings discipline.";

}

else if(score >= 60){

status="Status: Good Financial Health";

suggestion="Your finances are stable but increasing investments and reducing expenses can improve your score.";

}

else{

status="Status: Financial Risk";

suggestion="Your financial condition requires improvement. Focus on saving more and reducing loan burden.";

}

document.getElementById("status").innerHTML = status;
document.getElementById("suggestion").innerHTML = suggestion;

}
function generateScore(){

let income = Number(localStorage.getItem("income"));
let expense = Number(localStorage.getItem("expense"));
let savings = Number(localStorage.getItem("savings"));
let investment = Number(localStorage.getItem("investment"));
let loan = Number(localStorage.getItem("loan"));
let insurance = Number(localStorage.getItem("insurance"));

if(!income || !expense || !savings || !investment || !loan || !insurance){

alert("Please complete all 6 financial sections before generating score");
return;

}

let score = 0;

/* Expense control */

let expenseRatio = expense/income;

if(expenseRatio < 0.5){
score += 20;
}else if(expenseRatio < 0.7){
score += 10;
}else{
score += 5;
}

/* Savings */

let savingsRatio = savings/income;

if(savingsRatio >= 0.3){
score += 20;
}else if(savingsRatio >= 0.15){
score += 10;
}else{
score += 5;
}

/* Investment */

if(investment >= income*0.2){
score += 20;
}else{
score += 10;
}

/* Loan */

if(loan <= income*0.3){
score += 20;
}else{
score += 10;
}

/* Insurance */

if(insurance >= income*10){
score += 20;
}else{
score += 10;
}

document.getElementById("scoreValue").innerHTML = score;

/* Update circle meter */

let degree = score * 3.6;

document.querySelector(".circle").style.background =
"conic-gradient(#2ecc71 "+degree+"deg,#e0e0e0 "+degree+"deg)";

/* Status */

let status="";
let suggestion="";

if(score >= 80){

status="Excellent Financial Health";
suggestion="You have strong savings and investment discipline.";

}
else if(score >= 60){

status="Good Financial Health";
suggestion="Your finances are stable but increasing savings will improve your score.";

}
else{

status="Financial Risk";
suggestion="Try reducing expenses and increasing savings.";

}

document.getElementById("status").innerHTML = status;
document.getElementById("suggestion").innerHTML = suggestion;

}