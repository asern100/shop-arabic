const {model,Schema} = require('mongoose');

const lossSchema = new Schema({
    thing: String,
    note: String,
    amount: Number,
    date: String,
    employeeID:String,
    sellPointID:String,
})

module.exports = model('Loss', lossSchema);