const mongoose = require('mongoose');
const {Schema} = mongoose;

const itemSchema = new Schema({
    src: {
        type: String,
        required: true
    },
    header: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        default: 1,
        required: true
    }
})

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;