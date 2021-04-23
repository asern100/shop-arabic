const {model,Schema} = require('mongoose');

const clientSchema = new Schema({
    name: String,
})

module.exports = model('Client', clientSchema);