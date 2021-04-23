const {model,Schema} = require('mongoose');

const shopSchema = new Schema({
    name: String,
    vente: Number,
    achat: Number, 
    gain: Number,
    restachat: Number,
     
})

module.exports = model('Shop', shopSchema);