const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// Serve frontend statically
app.use(express.static(path.join(__dirname, "../frontend")));

/* ── Routes ── */
const incomeRoutes     = require("./routes/incomeRoutes");
const expenseRoutes    = require("./routes/expenseRoutes");
const assetRoutes      = require("./routes/assetRoutes");
const investmentRoutes = require("./routes/investmentRoutes");
const taxRoutes        = require("./routes/taxRoutes");
const insuranceRoutes  = require("./routes/insuranceRoutes");
const loanRoutes       = require("./routes/loanRoutes");
const estateRoutes     = require("./routes/estateRoutes");
const healthRoutes     = require("./routes/healthRoutes");

app.use("/api/income",      incomeRoutes);
app.use("/api/expense",     expenseRoutes);
app.use("/api/assets",      assetRoutes);
app.use("/api/investments", investmentRoutes);
app.use("/api/tax",         taxRoutes);
app.use("/api/insurance",   insuranceRoutes);
app.use("/api/loans",       loanRoutes);
app.use("/api/estate",      estateRoutes);
app.use("/api/health",      healthRoutes);

app.get("/api", (req, res) => res.json({ status: "SmartFin Backend Running" }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`SmartFin server running on http://localhost:${PORT}`));
