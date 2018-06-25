const path = require('path');
const http = require('http');
const express = require('express');
const mime = require('mime');

const port = parseInt(process.env['PORT'], 10) || 8000;

const app = express();
app.get('*', (req, res, next) => {
  req.url = req.url.replace(/\?.*$/, '');
  req.originalUrl = req.url;

  res.set('Content-Type', mime.getType(req.url));

  next();
});
app.use(express.static(path.join(__dirname, 'assets', 'frontend', 'bundle'), {
  dotfiles: 'allow',
}));
app.use(express.static(__dirname, {
  dotfiles: 'allow',
}));
http.createServer(app)
  .listen(port, () => {
    console.log(`http://127.0.0.1:${port}/`);
  });
