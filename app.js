const express = require('express');
const path = require('path');
const app = express();
const apiData = require('./routes/api');

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

apiData(app);

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });
