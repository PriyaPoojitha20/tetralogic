exports.calculateEMI = (req,res)=>{

let {principal, rate, tenure} = req.body;

rate = rate/100/12;

let emi = (principal*rate*Math.pow((1+rate),tenure))/(Math.pow((1+rate),tenure)-1);

res.json({
emi: emi.toFixed(2)
});

};