/* Insurance Advisor */

async function analyzeInsurance() {
  const policyType = document.getElementById("policyType").value || "Policy";
  const premium    = Number(document.getElementById("premium").value);
  const coverage   = Number(document.getElementById("coverage").value);
  const members    = Number(document.getElementById("members").value) || 1;

  if (!premium || !coverage) return showResult("result", "Please enter premium and coverage amount.", true);

  const ratio           = coverage / premium;
  const perMember       = coverage / members;
  const isGoodCoverage  = coverage >= premium * 10;
  const coverageLabel   = isGoodCoverage ? "✅ Good Coverage" : "⚠️ Coverage may be insufficient";

  let tip = "";
  if (policyType.toLowerCase().includes("health"))
    tip = "💡 For health insurance, aim for at least ₹5–10 lakh cover per person.";
  else if (policyType.toLowerCase().includes("life") || policyType.toLowerCase().includes("term"))
    tip = "💡 For life/term insurance, target 10–15× your annual income as cover.";
  else if (policyType.toLowerCase().includes("vehicle"))
    tip = "💡 Third-party vehicle insurance is mandatory in India.";

  // Save for health score
  saveData("insurance", coverage);

  try {
    await apiFetch("/insurance/add", "POST", { type: policyType, premium, coverage, members });
  } catch { /* offline */ }

  showResult("result",
    `<p>🛡️ Policy: ${policyType}</p>
     <p>💰 Premium: ${fmt(premium)} / year</p>
     <p>📋 Coverage: ${fmt(coverage)}</p>
     <p>👨‍👩‍👧 Members Covered: ${members}</p>
     <p>👤 Cover per Member: ${fmt(perMember.toFixed(0))}</p>
     <p>📊 Coverage Ratio: ${ratio.toFixed(1)}×</p>
     <p>${coverageLabel}</p>
     ${tip ? `<p>${tip}</p>` : ""}`
  );
}
