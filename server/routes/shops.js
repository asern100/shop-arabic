const express = require('express')
const router = express.Router()
const Shop = require('../models/Shop');

router.post("/shops/", async (req, res) => {
    
    const newShop = await new Shop({
      ...req.body,
      "vente" : 0,
      "gain" : 0,
      "restachat" : parseFloat(req.body.achat),
      
    });
    newShop.save().then( data => res.json(data) ).catch( err => { res.json(err); console.log(res.json(err))} )
    
 })

 router.get("/shops/", async (req, res) => {
    
  const shops = await Shop.find()
  .then( data => res.json(data) ).catch( err => res.json(err) )

  
})


 module.exports = router