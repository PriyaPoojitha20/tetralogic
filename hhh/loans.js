function calculateEMI(){

let loan = Number(document.getElementById("loan").value);
let rate = Number(document.getElementById("rate").value)/100/12;
let months = Number(document.getElementById("years").value)*12;

let emi = (loan * rate * Math.pow(1+rate,months)) /
          (Math.pow(1+rate,months)-1);

document.getElementById("result").innerHTML =
"Monthly EMI: ₹ " + emi.toFixed(2);

}
function saveLoan(){

let loanAmount =
Number(document.getElementById("loanAmount").value);

localStorage.setItem("loan", loanAmount);

}