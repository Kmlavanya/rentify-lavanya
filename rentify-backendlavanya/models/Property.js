// models/Property.js

const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    name: { type: String, required: true },
    area: { type: String, required: true },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    nearby: { type: String, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Property', propertySchema);
