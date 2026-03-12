function addTransaction(){

let type = document.getElementById("type").value;
let amount = document.getElementById("amount").value;

console.log("Type:", type);
console.log("Amount:", amount);

alert("Transaction added successfully");

}
async function addTransaction(){

let type=document.getElementById("type").value;
let amount=document.getElementById("amount").value;

let url="";

if(type==="Income"){
url="http://localhost:5000/api/income/add";
}else{
url="http://localhost:5000/api/expense/add";
}

let response=await fetch(url,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
type:type,
amount:amount
})
});

let data=await response.json();

alert(data.message);

}