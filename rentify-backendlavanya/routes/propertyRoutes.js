// routes/propertyRoutes.js

const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/propertyController');

router.get('/', propertyController.getAllProperties);
router.post('/', propertyController.createProperty);
router.put('/:id', propertyController.updateProperty);
router.delete('/:id', propertyController.deleteProperty);

module.exports = router;
