const express = require('express')
const router = express.Router()
const Sale = require('../models/Sale');
const SellPoint = require('../models/SellPoint');
const Shop = require('../models/Shop');

router.put("/sales/",async (req, res) => {

    const newSale = new Sale({
        ...req.body,
        'date':new Date().toISOString()
    });
    const sellpoint = await  SellPoint.findById(req.body.sellPointID);
    const shop = await Shop.findById(sellpoint.shopID);
    let amount = parseFloat(req.body.amount)
    let gain = parseFloat(req.body.amount) - (parseFloat(req.body.whatCost) * parseFloat(req.body.quantity))
    if (shop) {
        //sellpoint.achat += (req.body.whatCost * req.body.quantity)
        sellpoint.vente += amount
        sellpoint.gain += gain
        await sellpoint.save() 
        //shop.achat += (req.body.whatCost * req.body.quantity)
        shop.vente += amount
        shop.gain += gain
        await shop.save().then( data => res.json(data) ).catch( err => res.json(err) )
        
    }
    
    await newSale.save()
    
 })

 router.get("/sales/",async (req, res) => {
    const sales = await Sale.find()
    .then( data => res.json(data) ).catch( err => res.json(err) )
 })
 module.exports = router