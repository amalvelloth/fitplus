const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
});

const CardModel = mongoose.model('Card', cardSchema);

module.exports = CardModel;

