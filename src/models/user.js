const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    "email": {
        type: String,
        required: true,
        trim: true
    },
    "displayName":{
        type: String,
        required: true,
        trim: true
    },
    "access":{
        type: Boolean,
        required: true,
        trim: true
    },
    "password":{
        type: String,
        required: true,
        trim: true
    },
})

const User = new mongoose.model("User", userSchema)
module.exports = User