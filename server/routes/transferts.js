const express = require('express')
const router = express.Router()
const Transfert = require('../models/Transfert');

const SellPoint = require('../models/SellPoint');

router.post("/transferts/", async (req, res) => {
    
    const newTransfert = new Transfert(req.body);
    const pointfrom = await  SellPoint.findById(req.body.from);
    const pointto = await  SellPoint.findById(req.body.to);
    pointfrom.achat -= parseFloat(req.body.amount)
    pointto.achat += parseFloat(req.body.amount)
    await pointfrom.save()
    await pointto.save()
    
    await newTransfert.save().then( data => res.json(data) ).catch( err => res.json(err) )
    
 })
 router.get("/transferts/", async (req, res) => {
    
    const transferts = await Transfert.find()
      .then( data => res.json(data) ).catch( err => res.json(err) )
    
  })
 module.exports = router