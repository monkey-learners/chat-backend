const express = require('express');
const router = require('./routes');
require('dotenv').config();

const app = express();
app.use('/', router);

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
