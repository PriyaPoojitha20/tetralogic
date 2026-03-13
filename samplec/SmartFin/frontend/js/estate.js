/* Estate Planning */

async function generateEstatePlan() {
  const totalAssets      = Number(document.getElementById("totalAssets").value) || 0;
  const propertyValue    = Number(document.getElementById("propertyValue").value) || 0;
  const totalLiabilities = Number(document.getElementById("totalLiabilities").value) || 0;
  const nomineeName      = document.getElementById("nomineeName").value;
  const relationship     = document.getElementById("relationship").value;

  if (!totalAssets && !propertyValue)
    return showResult("result", "Please enter your asset or property value.", true);

  const grossEstate = totalAssets + propertyValue;
  const netEstate   = grossEstate - totalLiabilities;

  try {
    await apiFetch("/estate/add", "POST",
      { assets: totalAssets, property: propertyValue, nominee: nomineeName, relationship });
  } catch { /* offline */ }

  showResult("result",
    `<p>🏠 Property Value: ${fmt(propertyValue)}</p>
     <p>💼 Total Assets: ${fmt(totalAssets)}</p>
     <p>📊 Gross Estate: ${fmt(grossEstate)}</p>
     <p>💳 Liabilities: ${fmt(totalLiabilities)}</p>
     <p>✅ Net Estate Value: <strong>${fmt(netEstate)}</strong></p>
     <hr style="border:none;border-top:1px solid #ccc;margin:10px 0;">
     ${nomineeName ? `<p>👤 Nominee: ${nomineeName} (${relationship || "—"})</p>` : ""}
     <p>📌 Tip: Consider creating a registered Will and nominating beneficiaries in all accounts and policies to avoid legal disputes.</p>`
  );
}
