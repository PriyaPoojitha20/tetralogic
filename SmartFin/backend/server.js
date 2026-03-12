const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/* Import Routes */

const incomeRoutes = require("./routes/incomeRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const assetRoutes = require("./routes/assetRoutes");
const investmentRoutes = require("./routes/investmentRoutes");
const taxRoutes = require("./routes/taxRoutes");
const insuranceRoutes = require("./routes/insuranceRoutes");
const loanRoutes = require("./routes/loanRoutes");

/* Use Routes */

app.use("/api/income", incomeRoutes);
app.use("/api/expense", expenseRoutes);
app.use("/api/assets", assetRoutes);
app.use("/api/investments", investmentRoutes);
app.use("/api/tax", taxRoutes);
app.use("/api/insurance", insuranceRoutes);
app.use("/api/loans", loanRoutes);

app.get("/", (req,res)=>{
    res.send("SmartFin Backend Running");
});

app.listen(5000, ()=>{
    console.log("Server running on port 5000");
});