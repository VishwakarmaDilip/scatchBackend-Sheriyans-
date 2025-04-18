const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    image: {
        type: Boolean,
        default: false
    },
    price: {
        type: String,
        required: true
    },
    discount: {
        type: Number,
        default:0
    },
    bgColor: {
        type: String,
    },
    panelColor: {
        type: String,
    },
    textColor: {
        type: String,
    },
}, { timestamps: true })

module.exports = mongoose.model("product", productSchema)