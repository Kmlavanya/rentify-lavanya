// controllers/propertyController.js

const Property = require('../models/Property');

exports.getAllProperties = async (req, res) => {
    try {
        const properties = await Property.find();
        res.json(properties);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
};

exports.createProperty = async (req, res) => {
    try {
        const property = new Property(req.body);
        await property.save();
        res.status(201).json({ message: 'Property created successfully' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
};

exports.updateProperty = async (req, res) => {
    try {
        await Property.findByIdAndUpdate(req.params.id, req.body);
        res.json({ message: 'Property updated successfully' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
};

exports.deleteProperty = async (req, res) => {
    try {
        await Property.findByIdAndDelete(req.params.id);
        res.json({ message: 'Property deleted successfully' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
};
