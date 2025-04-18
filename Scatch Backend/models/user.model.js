const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
        minLength:3
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    cart: [

    ],
    isAdmin: {
        type: Boolean,
        default: false
    },
    orders: [

    ],
    password: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    picture: {
        type: String,
    },
}, { timestamps: true })

module.exports = mongoose.model("user", userSchema)