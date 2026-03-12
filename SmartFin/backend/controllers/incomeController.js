let incomeList = [];

exports.getIncome = (req,res)=>{
    res.json(incomeList);
};

exports.addIncome = (req,res)=>{

    const income = req.body;

    incomeList.push(income);

    res.json({
        message:"Income added successfully",
        data: income
    });

};