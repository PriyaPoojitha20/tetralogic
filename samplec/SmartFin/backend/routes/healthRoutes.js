const express=require('express');
const router=express.Router();
const fc=require('../controllers/financeController');
router.post('/score', fc.getHealthScore);
module.exports=router;
