const express = require('express')
const router = express.Router()
const Deposit = require('../models/Deposit');
const SellPoint = require('../models/SellPoint');
const Shop = require('../models/Shop');

router.put("/deposits/",async (req, res) => {

    const newDeposit = new Deposit({
        'date': new Date(),
        'rest': parseFloat(req.body.amount) - parseFloat(req.body.asDeposit),
        'state':false,
        ...req.body
    });
    const sellpoint = await  SellPoint.findById(req.body.sellPointID);
    const shop = await Shop.findById(sellpoint.shopID);
    let amount = parseFloat(req.body.amount)
    
    if (shop) {
        sellpoint.vente += amount
        await sellpoint.save() 
        shop.vente += amount
        await shop.save().then( data => res.json(data) ).catch( err => res.json(err) )   
    }

    await newDeposit.save()
 })

 router.get("/deposits/",async (req, res) => {
    const deposits = await Deposit.find()
    .then( data => res.json(data) ).catch( err => res.json(err) )
 })
 module.exports = router