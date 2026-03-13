const express=require('express');
const router=express.Router();
const fc=require('../controllers/financeController');
router.get('/', fc.getExpenses); router.post('/add', fc.addExpense);
module.exports=router;
