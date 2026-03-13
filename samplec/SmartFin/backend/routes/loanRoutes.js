const express=require('express');
const router=express.Router();
const fc=require('../controllers/financeController');
router.get('/', fc.getLoans); router.post('/emi', fc.calculateEMI);
module.exports=router;
