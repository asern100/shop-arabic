const express = require('express');
const router = express.Router()
const SellPoint = require('../models/SellPoint');
const Shop = require('../models/Shop')

router.put("/sellpoints/", async  (req, res) => {
    
    const newSellPoint = await  new SellPoint(req.body);
    const shop = await Shop.findById(req.body.shopID);
    shop.restachat -= parseFloat(req.body.achat)
    await shop.save()
    await newSellPoint.save().then( data => res.json(data) ).catch( err => { res.json(err); console.log(res.json(err))} )
    
 })

 router.get("/sellpoints/", async (req, res) => {
    
  const points = await SellPoint.find()
    .then( data => res.json(data) ).catch( err => res.json(err) )
  
})
 module.exports = router