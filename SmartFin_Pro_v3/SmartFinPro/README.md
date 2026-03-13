# SmartFin Pro v3.0 — Personal Finance Platform

## 🚀 How to Run (No installation needed)

### Option 1 — Python (Recommended)
```bash
cd SmartFin_Pro/frontend
python -m http.server 8080
# Open http://localhost:8080/login.html
```

### Option 2 — Node.js
```bash
npx serve SmartFin_Pro/frontend
```

### Option 3 — Direct (some pages may have limitations)
Double-click `frontend/login.html` → Open with Chrome/Edge

**Demo Login:** demo@smartfin.in / password123

---

## 📦 All 9 Modules

| Module | File | Features |
|---|---|---|
| Income & Expenses | pages/income.html | Add income/expense, savings calculator, tax deduction tagging, live chart |
| Tax Optimizer | pages/tax.html | Old vs New regime FY 2024-25, 80C/D/E/G deductions, slab breakdown, return summary |
| Loans & EMI | pages/loans.html | EMI calc, amortization 36 months, loan comparison, portfolio tracker |
| Insurance Manager | pages/insurance.html | Policy tracker, coverage adequacy, govt schemes (PMJJBY, PMSBY, PMJAY) |
| Investment Advisor | pages/investments.html | Risk profiling (0-12 score), radar chart, allocation donut, SIP projections |
| Asset Tracker | pages/assets.html | Track property/gold/equity, CAGR, net worth = assets − loans |
| Returns Filing | pages/returns.html | ITR checklist, deadlines, form guide, refund estimator |
| Gov Schemes | pages/schemes.html | 75+ central schemes — search, filter, modal detail, eligibility |
| Health Score | pages/health.html | 100-point score, 7-dimension radar chart, improvement tips |

## 🗂️ Files
- `frontend/css/style.css` — Full dark design system
- `frontend/js/main.js` — Shared utilities (localStorage, formatting, auth)
- `frontend/data/schemes.json` — 75 government schemes from SchemesProject
- All pages linked and cross-sharing data via localStorage
