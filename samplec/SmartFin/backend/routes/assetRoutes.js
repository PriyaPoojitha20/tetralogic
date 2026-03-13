const express=require('express');
const router=express.Router();
const fc=require('../controllers/financeController');
router.get('/', fc.getAssets); router.post('/add', fc.addAsset);
module.exports=router;
