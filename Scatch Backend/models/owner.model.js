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
    products: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"product"
        }
    ],
    picture: {
        type: String,
    },
    gstIn: {
        type: String,
    },
}, { timestamps: true })

module.exports = mongoose.model("owner", ownerSchema)