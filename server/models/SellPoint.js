const {model,Schema} = require('mongoose');

const sellPointSchema = new Schema({
    shopID: String,
    name: String,
    achat: Number, 
    vente: Number,
    gain: Number,
})

module.exports = model('SellPoint', sellPointSchema);