// models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    userType: { type: String, enum: ['buyer', 'seller'], default: 'buyer' }
});

module.exports = mongoose.model('User', userSchema);
