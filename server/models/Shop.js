const {model,Schema} = require('mongoose');

const shopSchema = new Schema({
    name: String,
    vente: Number,
    achat: Number, 
    gain: Number,
    restachat: Number,
    debts: Number,
     
})

module.exports = model('Shop', shopSchema);