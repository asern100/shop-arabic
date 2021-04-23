const {model,Schema} = require('mongoose');

const transfertSchema = new Schema({
    what: String,
    amount:Number,
    from:String,
    to:String,
    employee: String,
    date: String,
})

module.exports = model('Transfert', transfertSchema);