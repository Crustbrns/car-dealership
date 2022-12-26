const { Schema, model } = require('mongoose');

const schema = new Schema({
    firstname: { type: String, required: true },
    secondname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passhash: { type: Number, required: true },
});

module.exports = model('AutoUser', schema)