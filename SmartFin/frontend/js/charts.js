const ctx = document.getElementById("chart");

if(ctx){

new Chart(ctx,{
type:"pie",

data:{
labels:["Income","Expenses"],

datasets:[{
data:[50000,30000]
}]
}

});

}