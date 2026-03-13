# SmartFin — Combined Financial Management Platform

A fully merged, clean version of **SmartTax AI** and **SmartFin**, combining all features from both projects into one unified folder — no duplicates, all bugs fixed.

---

## 📁 Folder Structure

```
SmartFin/
├── frontend/               ← Open these in browser (or serve via backend)
│   ├── index.html          ← Landing page
│   ├── login.html          ← Login
│   ← dashboard.html        ← Main dashboard
│   ├── css/
│   │   └── style.css       ← Single unified stylesheet
│   ├── js/
│   │   ├── main.js         ← Shared utilities (auth, API, formatters)
│   │   ├── dashboard.js    ← Dashboard stats & chart
│   │   ├── incomeExpense.js
│   │   ├── investments.js
│   │   ├── loans.js
│   │   ├── taxCalculator.js
│   │   ├── insurance.js
│   │   ├── assets.js
│   │   ├── estate.js
│   │   └── healthScore.js
│   └── pages/
│       ├── income-expense.html
│       ├── investments.html
│       ├── loans.html
│       ├── tax.html
│       ├── insurance.html
│       ├── assets.html
│       ├── estate.html
│       └── health-score.html
│
└── backend/                ← Node.js/Express API
    ├── server.js
    ├── package.json
    ├── controllers/
    │   └── financeController.js   ← Single unified controller
    └── routes/
        ├── incomeRoutes.js
        ├── expenseRoutes.js
        ├── assetRoutes.js
        ├── investmentRoutes.js
        ├── taxRoutes.js
        ├── insuranceRoutes.js
        ├── loanRoutes.js
        ├── estateRoutes.js
        └── healthRoutes.js
```

---

## 🚀 Running the App

### Option A — Frontend Only (no backend needed)
Just open `frontend/index.html` in your browser. All calculations work offline — the JS automatically falls back to local computation if the backend is not running.

### Option B — Full Stack (with backend)

```bash
cd backend
npm install
npm start
# Server starts at http://localhost:5000
# Frontend is served at http://localhost:5000/index.html
```

---

## ✅ Features

| Feature | Description |
|---|---|
| 💵 Income & Expenses | Track salary, other income, expenses, auto-calculate savings |
| 📈 Investment Planner | Calculate future value, get risk-based suggestions |
| 🏦 Loan & EMI Calculator | Full EMI breakdown with total interest |
| 🧾 Tax Calculator | Indian FY 2024-25 Old Regime slabs with all deductions |
| 🛡️ Insurance Advisor | Coverage ratio analysis & adequacy check |
| 🏛️ Asset Tracker | Track gold, property, stocks with running total |
| 🏠 Estate & Will | Estate value calculation with nominee details |
| ❤️ Financial Health Score | 6-parameter score (0–100) with auto-fill from other modules |

---

## 🔧 Bugs Fixed from Original Files

- Removed **duplicate function definitions** in `loans.js`, `health.js`, `income.js`, `assests.js`
- Fixed **broken nested `<a>` tag** in `index.html`
- Fixed **duplicate form inputs** in `loans.html`, `tax.html`, `income-expense.html`, `assests.html`
- Fixed **Chart.js loaded twice** in `dashboard.html`
- Fixed **wrong JS path** (`assets.js` vs `assests.js` typo)
- Fixed **wrong CSS path** (`../style.css` vs `style.css`) across inner pages
- Consolidated **3 CSS files** into one clean stylesheet
- Consolidated **scattered controllers** into one `financeController.js`
- Created missing **`routes/` folder** referenced in `server.js` but absent from the zip
- All pages now use **consistent navbar, result boxes, and button styles**
