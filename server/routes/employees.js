const express = require('express')
const router = express.Router()
const Employee = require('../models/Employee');

router.post("/employees/", async (req, res) => {
    
    const newEmployee = new Employee({
        ...req.body,
        "start": new Date().toISOString()
    });

    newEmployee.save().then( data => res.json(data) ).catch( err => res.json(err) )
    
 })
 router.get("/employees/",async (req, res) => {
    const employees = await Employee.find()
    .then( data => res.json(data) ).catch( err => res.json(err) )
 })
 module.exports = router