const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        length: 50,
    },
    email: {
        type: String,
        length: 50,
        unique: true,
    },
    message: {
        type: String,
        length: 50,
        required: true,
    },
    enteredAt: {
        type: Date,
        default: Date.now(),
    }, 
}, {timestamps: true}
)

const User = mongoose.model("user", userSchema);

module.exports = User;