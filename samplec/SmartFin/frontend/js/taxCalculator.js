/* Tax Calculator - Indian FY 2024-25 Old Regime */

async function calculateTax() {
  const income          = Number(document.getElementById("annualSalary").value);
  const deduction80C    = Number(document.getElementById("deduction80C").value) || 0;
  const insurancePremium = Number(document.getElementById("insurancePremium").value) || 0;
  const homeLoanInterest = Number(document.getElementById("homeLoanInterest").value) || 0;

  if (!income) return showResult("result", "Please enter your annual salary.", true);

  let taxableIncome, tax, cess, totalTax, totalDeductions;

  try {
    const data = await apiFetch("/tax/calculate", "POST",
      { income, deduction80C, insurancePremium, homeLoanInterest });
    taxableIncome  = data.taxableIncome;
    tax            = data.tax;
    cess           = data.cess;
    totalTax       = data.totalTax;
    totalDeductions = data.totalDeductions;
  } catch {
    // Offline calculation (Indian Old Regime slabs)
    const d80C    = Math.min(deduction80C, 150000);
    const d80D    = Math.min(insurancePremium, 25000);
    const d24B    = Math.min(homeLoanInterest, 200000);
    totalDeductions = 50000 + d80C + d80D + d24B; // 50k standard deduction
    taxableIncome   = Math.max(0, income - totalDeductions);

    if (taxableIncome > 1000000)
      tax = 112500 + (taxableIncome - 1000000) * 0.30;
    else if (taxableIncome > 500000)
      tax = 12500 + (taxableIncome - 500000) * 0.20;
    else if (taxableIncome > 250000)
      tax = (taxableIncome - 250000) * 0.05;
    else
      tax = 0;

    cess     = tax * 0.04;
    totalTax = (tax + cess).toFixed(2);
    tax      = tax.toFixed(2);
    cess     = cess.toFixed(2);
  }

  const effectiveRate = income > 0 ? ((totalTax / income) * 100).toFixed(2) : 0;
  const monthlTax     = (totalTax / 12).toFixed(2);

  showResult("result",
    `<p>💵 Gross Income: ${fmt(income)}</p>
     <p>🔽 Total Deductions: ${fmt(totalDeductions)}</p>
     <p>📊 Taxable Income: ${fmt(taxableIncome)}</p>
     <hr style="border:none;border-top:1px solid #ccc;margin:10px 0;">
     <p>🧾 Base Tax: ${fmt(tax)}</p>
     <p>➕ Education Cess (4%): ${fmt(cess)}</p>
     <p>💳 Total Tax Payable: <strong>${fmt(totalTax)}</strong></p>
     <p>📅 Monthly TDS: ${fmt(monthlTax)}</p>
     <p>📉 Effective Tax Rate: ${effectiveRate}%</p>`
  );
}
