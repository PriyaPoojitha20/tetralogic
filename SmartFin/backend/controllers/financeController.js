let incomes = [];
let expenses = [];
let assets = [];
let investments = [];
let insurance = [];

exports.getIncome = (req,res)=>{
    res.json(incomes);
};

exports.addIncome = (req,res)=>{
    incomes.push(req.body);
    res.json({message:"Income added"});
};

exports.getExpenses = (req,res)=>{
    res.json(expenses);
};

exports.addExpense = (req,res)=>{
    expenses.push(req.body);
    res.json({message:"Expense added"});
};

exports.getAssets = (req,res)=>{
    res.json(assets);
};

exports.addAsset = (req,res)=>{
    assets.push(req.body);
    res.json({message:"Asset added"});
};

exports.getInvestments = (req,res)=>{
    res.json(investments);
};

exports.addInvestment = (req,res)=>{
    investments.push(req.body);
    res.json({message:"Investment added"});
};

exports.getInsurance = (req,res)=>{
    res.json(insurance);
};

exports.addInsurance = (req,res)=>{
    insurance.push(req.body);
    res.json({message:"Insurance added"});
};