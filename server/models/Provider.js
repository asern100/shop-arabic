const {model,Schema} = require('mongoose');

const providerSchema = new Schema({
    name: String,
})

module.exports = model('Provider', providerSchema);