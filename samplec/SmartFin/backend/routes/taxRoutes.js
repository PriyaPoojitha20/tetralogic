const express=require('express');
const router=express.Router();
const fc=require('../controllers/financeController');
router.post('/calculate', fc.calculateTax);
module.exports=router;
