const {model,Schema} = require('mongoose');

const employeeSchema = new Schema({
    shopID:String,
    sellPointID:String,
    name: String,
    salary: Number,
    start: String,
})

module.exports = model('Employee', employeeSchema);