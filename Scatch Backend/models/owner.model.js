const mongoose = require("mongoose")

const ownerSchema = new mongoose.Schema({
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
    password: {
        type: String,
        required: true
    },
    picture: {
        type: String,
    },
    gstIn: {
        type: String,
    },
}, { timestamps: true })

module.exports = mongoose.model("owner", ownerSchema)