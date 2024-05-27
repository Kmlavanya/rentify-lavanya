const express = require('express');
const router = express.Router();

let properties = [
  { id: 1, name: 'Sample Property 1', area: 'Sample Area 1', bedrooms: 3, bathrooms: 2, nearby: 'Sample Location 1', likes: 10 },
  { id: 2, name: 'Sample Property 2', area: 'Sample Area 2', bedrooms: 2, bathrooms: 1, nearby: 'Sample Location 2', likes: 8 },
  { id: 3, name: 'Sample Property 3', area: 'Sample Area 3', bedrooms: 4, bathrooms: 3, nearby: 'Sample Location 3', likes: 5 }
];

router.get('/', (req, res) => {
  res.json(properties);
});

router.post('/', (req, res) => {
  const newProperty = { ...req.body, id: properties.length + 1, likes: 0 };
  properties.push(newProperty);
  res.status(201).json(newProperty);
});

router.post('/:id/like', (req, res) => {
  const { id } = req.params;
  const property = properties.find(p => p.id == id);
  if (property) {
    property.likes += 1;
    res.status(200).json(property);
  } else {
    res.status(404).json({ message: 'Property not found' });
  }
});

module.exports = router;