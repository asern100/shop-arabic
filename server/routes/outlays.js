const express = require('express')
const router = express.Router()
const Outlay = require('../models/Outlay');
const SellPoint = require('../models/SellPoint');
const Shop = require('../models/Shop');

router.post("/outlays/", async (req, res) => {
    
    const newOutlay = new Outlay(req.body);
    const point = await  SellPoint.findById(req.body.sellPointID);
    const shop = await  Shop.findById(point.shopID);
    point.achat += parseFloat(req.body.amount)
    shop.achat += parseFloat(req.body.amount)
    await point.save()
    await shop.save()
    
    await newOutlay.save().then( data => res.json(data) ).catch( err => res.json(err) )
    
 })
 router.get("/outlays/", async (req, res) => {
    
    const outlays = await Outlay.find()
      .then( data => res.json(data) ).catch( err => res.json(err) )
    
  })
 module.exports = router