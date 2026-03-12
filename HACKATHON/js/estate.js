// Estate Management
function addAsset(type, value, nominee) {
  let assets = JSON.parse(localStorage.getItem("assets")) || [];
  assets.push({ type, value, nominee });
  localStorage.setItem("assets", JSON.stringify(assets));
}

function showAssets() {
  let list = JSON.parse(localStorage.getItem("assets")) || [];
  let output = "<h3>Estate Records</h3><ul>";
  list.forEach(a => {
    output += `<li>${a.type}: Value ₹${a.value}, Nominee: ${a.nominee}</li>`;
  });
  output += "</ul>";
  document.getElementById("content").innerHTML = output;
}
