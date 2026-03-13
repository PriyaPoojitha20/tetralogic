const express=require('express');
const router=express.Router();
const fc=require('../controllers/financeController');
router.get('/', fc.getIncome); router.post('/add', fc.addIncome);
module.exports=router;
