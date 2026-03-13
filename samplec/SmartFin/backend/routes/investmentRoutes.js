const express=require('express');
const router=express.Router();
const fc=require('../controllers/financeController');
router.get('/', fc.getInvestments); router.post('/add', fc.addInvestment);
module.exports=router;
