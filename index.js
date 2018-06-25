const http = require('http');
const express = require('express');

const port = parseInt(process.env['PORT'], 10) || 8000;

const app = express();
app.use(express.static(__dirname));
http.createServer(app)
  .listen(port, () => {
    console.log(`http://127.0.0.1:${port}/`);
  });
