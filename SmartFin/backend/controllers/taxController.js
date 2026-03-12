exports.calculateTax = (req,res)=>{

let {income, deduction} = req.body;

income = Number(income);
deduction = Number(deduction);

let taxableIncome = income - deduction;

let tax = taxableIncome * 0.1;

res.json({
taxableIncome: taxableIncome,
tax: tax
});

};