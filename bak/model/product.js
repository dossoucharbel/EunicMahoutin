const mongoose = require('mongoose');

const prodSchema = mongoose.Schema({
    nom: { type: String},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    contry: { type: String}
});

module.exports = mongoose.model('Product', prodSchema);
