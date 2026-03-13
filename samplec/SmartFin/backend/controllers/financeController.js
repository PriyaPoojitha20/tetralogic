/* ============================================================
   SmartFin - Unified Finance Controller
   Handles: income, expenses, assets, investments, insurance,
            loans, estate, financial health score
   ============================================================ */

const store = {
  incomes:     [],
  expenses:    [],
  assets:      [],
  investments: [],
  insurance:   [],
  loans:       [],
  estates:     [],
};

/* ── Income ── */
exports.getIncome  = (req, res) => res.json(store.incomes);
exports.addIncome  = (req, res) => {
  store.incomes.push(req.body);
  res.json({ message: "Income added", data: req.body });
};

/* ── Expenses ── */
exports.getExpenses = (req, res) => res.json(store.expenses);
exports.addExpense  = (req, res) => {
  store.expenses.push(req.body);
  res.json({ message: "Expense added", data: req.body });
};

/* ── Assets ── */
exports.getAssets = (req, res) => res.json(store.assets);
exports.addAsset  = (req, res) => {
  store.assets.push(req.body);
  res.json({ message: "Asset added", data: req.body });
};

/* ── Investments ── */
exports.getInvestments = (req, res) => res.json(store.investments);
exports.addInvestment  = (req, res) => {
  store.investments.push(req.body);
  res.json({ message: "Investment added", data: req.body });
};

/* ── Insurance ── */
exports.getInsurance = (req, res) => res.json(store.insurance);
exports.addInsurance = (req, res) => {
  store.insurance.push(req.body);
  res.json({ message: "Insurance policy added", data: req.body });
};

/* ── Loans / EMI ── */
exports.getLoans     = (req, res) => res.json(store.loans);
exports.calculateEMI = (req, res) => {
  let { principal, rate, tenure } = req.body;
  principal = Number(principal);
  rate      = Number(rate) / 100 / 12;
  tenure    = Number(tenure);
  const emi = (principal * rate * Math.pow(1 + rate, tenure)) /
              (Math.pow(1 + rate, tenure) - 1);
  const totalPayment = emi * tenure;
  const totalInterest = totalPayment - principal;
  store.loans.push({ principal, rate: req.body.rate, tenure, emi: emi.toFixed(2) });
  res.json({ emi: emi.toFixed(2), totalPayment: totalPayment.toFixed(2), totalInterest: totalInterest.toFixed(2) });
};

/* ── Tax ── */
exports.calculateTax = (req, res) => {
  let { income, deduction80C = 0, insurancePremium = 0, homeLoanInterest = 0 } = req.body;
  income           = Number(income);
  deduction80C     = Math.min(Number(deduction80C), 150000);
  insurancePremium = Math.min(Number(insurancePremium), 25000);
  homeLoanInterest = Math.min(Number(homeLoanInterest), 200000);
  const totalDeductions = 50000 + deduction80C + insurancePremium + homeLoanInterest; // 50k standard
  const taxableIncome   = Math.max(0, income - totalDeductions);

  // FY 2024-25 Old Regime Slabs
  let tax = 0;
  if (taxableIncome > 1000000)      tax = 112500 + (taxableIncome - 1000000) * 0.30;
  else if (taxableIncome > 500000)  tax = 12500  + (taxableIncome - 500000)  * 0.20;
  else if (taxableIncome > 250000)  tax = (taxableIncome - 250000) * 0.05;

  const cess     = tax * 0.04;
  const totalTax = tax + cess;
  res.json({ taxableIncome, tax: tax.toFixed(2), cess: cess.toFixed(2), totalTax: totalTax.toFixed(2), totalDeductions });
};

/* ── Estate ── */
exports.getEstates  = (req, res) => res.json(store.estates);
exports.addEstate   = (req, res) => {
  store.estates.push(req.body);
  const total = Number(req.body.assets || 0) + Number(req.body.property || 0);
  res.json({ message: "Estate plan generated", totalEstate: total, data: req.body });
};

/* ── Financial Health Score ── */
exports.getHealthScore = (req, res) => {
  let { income, expense, savings, investment, loan, insurance } = req.body;
  income = Number(income); expense = Number(expense); savings = Number(savings);
  investment = Number(investment); loan = Number(loan); insurance = Number(insurance);

  if (!income || !expense || !savings || !investment || !loan || !insurance) {
    return res.status(400).json({ message: "Please provide all 6 financial values." });
  }

  let score = 0;

  // Income stability
  if (income > 50000) score += 15;
  else if (income > 25000) score += 10;
  else score += 5;

  // Expense control
  const expRatio = expense / income;
  if (expRatio < 0.5) score += 20;
  else if (expRatio < 0.7) score += 10;
  else score += 5;

  // Savings ratio
  const savRatio = savings / income;
  if (savRatio >= 0.3) score += 20;
  else if (savRatio >= 0.15) score += 10;
  else score += 5;

  // Investment
  if (investment >= income * 0.2) score += 15;
  else score += 8;

  // Loan burden
  if (loan <= income * 0.3) score += 15;
  else score += 5;

  // Insurance coverage
  if (insurance >= income * 10) score += 15;
  else score += 8;

  let status, suggestion;
  if (score >= 80) {
    status = "Excellent Financial Health 🏆";
    suggestion = "Strong stability. Keep investing and maintain savings discipline.";
  } else if (score >= 60) {
    status = "Good Financial Health ✅";
    suggestion = "Finances are stable. Increasing investments can improve your score.";
  } else {
    status = "Needs Improvement ⚠️";
    suggestion = "Focus on reducing expenses, increasing savings, and clearing loan burden.";
  }

  res.json({ score, status, suggestion });
};
