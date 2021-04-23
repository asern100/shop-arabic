const express = require('express')
const router = express.Router()
const Provider = require('../models/Provider');

router.post("/providers/", async (req, res) => {
    
    const newProvider = new Provider({
        "name":req.body.name,
      });
    
    newProvider.save().then( data => res.json(data) ).catch( err => res.json(err) )
    
 })

 module.exports = router