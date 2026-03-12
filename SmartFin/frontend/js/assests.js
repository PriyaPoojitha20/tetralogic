function addAsset(){

let assetType = document.getElementById("assetType").value;
let value = document.getElementById("assetValue").value;

console.log(assetType, value);

alert("Asset added successfully");

}
async function addAsset(){

let type=document.getElementById("assetType").value;
let value=document.getElementById("assetValue").value;

let response=await fetch(
"http://localhost:5000/api/assets/add",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
type:type,
value:value
})
}
);

let data=await response.json();

alert(data.message);

}