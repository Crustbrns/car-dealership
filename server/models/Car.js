const { Schema, model } = require('mongoose');

const schema = new Schema({
    model: { type: String, required: true },
    color: { type: String, required: true },
    price: { type: Number, required: true },
    picture: { type: String, required: true },
    description: { type: String, required: true },
});

module.exports = model('Car', schema)