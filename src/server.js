const express = require('express');
const path = require('path');
const compression = require('compression');
const app = express();

app.use(express.static(path.resolve(__dirname)));
app.use(express.static(path.resolve(__dirname, '..', 'dist')));

app.get('/', (req, res) =>
  res.sendFile(path.resolve(__dirname, '../dist/index.html'))
);
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(3000);
});
