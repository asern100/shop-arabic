const express = require('express')
const router = express.Router()
const Client = require('../models/Client');

router.post("/clients/", async (req, res) => {
    
    const newClient = new Client({
        "name":req.body.name,
        "achat":req.body.achat,
        "vente":req.body.vente,
      });
    
    newClient.save().then( data => res.json(data) ).catch( err => res.json(err) )
    
 })

 module.exports = router