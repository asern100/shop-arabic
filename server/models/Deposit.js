const {model,Schema} = require('mongoose');

const depositSchema = new Schema({
    sellPointID:String,
    quantity: String,
    product: String,
    client:String,
    phone:Number,
    whatCost: Number,
    amount: Number,
    asDeposit:Number,
    rest:Number,
    state:Boolean,
    date:String,
    dateFor:String,
})

module.exports = model('Deposit', depositSchema);