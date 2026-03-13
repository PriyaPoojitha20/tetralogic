function checkInsurance(){

let premium = Number(document.getElementById("premium").value);
let coverage = Number(document.getElementById("coverage").value);

if(coverage >= premium * 10){
result = "Good insurance coverage";
}
else{
result = "Coverage may be insufficient";
}

document.getElementById("result").innerHTML = result;

}
function saveInsurance(){

let coverage =
Number(document.getElementById("coverage").value);

localStorage.setItem("insurance", coverage);

}