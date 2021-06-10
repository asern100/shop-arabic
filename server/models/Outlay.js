const {model,Schema} = require('mongoose');

const outlaySchema = new Schema({
    thing: String,
    amount: Number,
    date: String,
    sellPointID:String,
    employeeID:String,
})

module.exports = model('Outlay', outlaySchema);