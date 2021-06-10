const express = require('express')
const router = express.Router()
const Loss = require('../models/Loss');
const SellPoint = require('../models/SellPoint');
const Shop = require('../models/Shop');

router.post("/losses/", async (req, res) => {
    
    const newLoss = new Loss(req.body);
    const point = await  SellPoint.findById(req.body.sellPointID);
    const shop = await  Shop.findById(point.shopID);
    point.achat += parseFloat(req.body.amount)
    shop.achat += parseFloat(req.body.amount)
    await point.save()
    await shop.save()
    
    await newLoss.save().then( data => res.json(data) ).catch( err => res.json(err) )
    
 })
 router.get("/losses/", async (req, res) => {
    
    const losses = await Loss.find()
      .then( data => res.json(data) ).catch( err => res.json(err) )
    
  })
 module.exports = router
