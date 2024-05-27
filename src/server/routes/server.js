const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const propertiesRoutes = require('./routes/properties');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/properties', propertiesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
