const {model,Schema} = require('mongoose');

const saleSchema = new Schema({
    sellPointID:String,
    quantity: String,
    product: String,
    whatCost: Number,
    amount: Number,
    date:String,
})

module.exports = model('Sale', saleSchema);