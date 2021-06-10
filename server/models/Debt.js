const {model,Schema} = require('mongoose');

const debtSchema = new Schema({
    shopID: String,
    who: String,
    note: String,
    amount: Number,
    date: String,
    installments : [
        {amount : Number, date : String}
    ],
    promises :[
        {amount : Number, date : String}
    ],
    rest: Number,
})

module.exports = model('Debt', debtSchema);