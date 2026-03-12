function calculateEMI(){

let P = document.getElementById("loanAmount").value;
let r = document.getElementById("interestRate").value;
let n = document.getElementById("tenure").value;

P = Number(P);
r = Number(r)/100/12;
n = Number(n);

let emi = (P*r*Math.pow((1+r),n))/(Math.pow((1+r),n)-1);

emi = emi.toFixed(2);

alert("Monthly EMI: ₹" + emi);

}
async function calculateEMI(){

let principal=document.getElementById("loanAmount").value;
let rate=document.getElementById("interestRate").value;
let tenure=document.getElementById("tenure").value;

let response=await fetch(
"http://localhost:5000/api/loans/emi",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
principal:principal,
rate:rate,
tenure:tenure
})
}
);

let data=await response.json();

alert("EMI: ₹"+data.emi);

}