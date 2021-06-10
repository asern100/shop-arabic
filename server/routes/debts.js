const express = require('express')
const router = express.Router()
const Debt = require('../models/Debt');
const Shop = require('../models/Shop');

router.post("/debts/", async (req, res) => {
    
    const newDebt = new Debt({
        installments:[],
        promise:[],
        rest:parseFloat(req.body.amount),
        ...req.body
    });
    const shop = await  Shop.findById(req.body.shopID);
    shop.debts += parseFloat(req.body.amount)
    await shop.save()    
    await newDebt.save().then( data => res.json(data) ).catch( err => res.json(err) )
    
 })

router.put("/debts/:id/installment", async (req, res) => {
    
    const debt = await Debt.findById(req.params.id);
    const shop = await  Shop.findById(debt.shopID);
    shop.debts -= parseFloat(req.body.amount)
    debt.installments.push({
        amount: parseFloat(req.body.amount),
        date: new Date().toISOString(),
    }) 

    await shop.save()    
    await debt.save().then( data => res.json(data) ).catch( err => res.json(err) )    
    
 })
 router.put("/debts/:id/nextpromise", async (req, res) => {
    
    const debt = await Debt.findById(req.params.id);
    debt.promises.push({
        amount: parseFloat(req.body.amount),
        date: req.body.date,
    })     
    await debt.save().then( data => res.json(data) ).catch( err => res.json(err) )    
    
 })

router.get("/debts/", async (req, res) => {
    
    const debts = await Debt.find()
      .then( data => res.json(data) ).catch( err => res.json(err) )
    
})

module.exports = router