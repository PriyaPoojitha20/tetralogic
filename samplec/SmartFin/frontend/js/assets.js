/* Asset Tracker */

const assetList = [];

async function addAsset() {
  const assetType  = document.getElementById("assetType").value;
  const assetValue = Number(document.getElementById("assetValue").value);
  const assetDate  = document.getElementById("assetDate").value;
  const assetNotes = document.getElementById("assetNotes").value;

  if (!assetType || !assetValue)
    return showResult("result", "Please enter asset type and value.", true);

  assetList.push({ type: assetType, value: assetValue, date: assetDate });

  const totalAssets = assetList.reduce((sum, a) => sum + a.value, 0);

  try {
    await apiFetch("/assets/add", "POST", { type: assetType, value: assetValue, date: assetDate, notes: assetNotes });
  } catch { /* offline */ }

  showResult("result",
    `<p>✅ Asset Added!</p>
     <p>🏷️ Type: ${assetType}</p>
     <p>💰 Value: ${fmt(assetValue)}</p>
     ${assetDate ? `<p>📅 Date: ${assetDate}</p>` : ""}
     ${assetNotes ? `<p>📝 Notes: ${assetNotes}</p>` : ""}
     <hr style="border:none;border-top:1px solid #ccc;margin:10px 0;">
     <p>📊 Total Assets Tracked: ${assetList.length}</p>
     <p>💎 Total Portfolio Value: <strong>${fmt(totalAssets)}</strong></p>`
  );
}
