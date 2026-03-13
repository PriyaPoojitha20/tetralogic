function calculateEstate(){

let assets = Number(document.getElementById("assets").value);
let property = Number(document.getElementById("property").value);

let total = assets + property;

document.getElementById("result").innerHTML =
"Total Estate Value: ₹ " + total;

}