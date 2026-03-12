function getInvestmentSuggestion(){

let savings = document.getElementById("savings").value;
let risk = document.getElementById("risk").value;

let suggestion;

if(risk === "Low"){
    suggestion = "FD or PPF";
}
else if(risk === "Medium"){
    suggestion = "Mutual Funds";
}
else{
    suggestion = "Stocks or SIP";
}

alert("Suggested Investment: " + suggestion);

}