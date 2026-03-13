const express=require('express');
const router=express.Router();
const fc=require('../controllers/financeController');
router.get('/', fc.getInsurance); router.post('/add', fc.addInsurance);
module.exports=router;
