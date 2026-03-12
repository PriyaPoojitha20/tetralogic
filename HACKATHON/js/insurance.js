// Insurance Planning
function addPolicy(type, premium, coverage, renewalDate) {
  let policies = JSON.parse(localStorage.getItem("policies")) || [];
  policies.push({ type, premium, coverage, renewalDate });
  localStorage.setItem("policies", JSON.stringify(policies));
}

function showPolicies() {
  let list = JSON.parse(localStorage.getItem("policies")) || [];
  let output = "<h3>Insurance Policies</h3><ul>";
  list.forEach(p => {
    output += `<li>${p.type}: Premium ₹${p.premium}, Coverage ₹${p.coverage}, Renewal ${p.renewalDate}</li>`;
  });
  output += "</ul>";
  document.getElementById("content").innerHTML = output;
}


