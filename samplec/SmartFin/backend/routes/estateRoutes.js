const express=require('express');
const router=express.Router();
const fc=require('../controllers/financeController');
router.get('/', fc.getEstates); router.post('/add', fc.addEstate);
module.exports=router;
