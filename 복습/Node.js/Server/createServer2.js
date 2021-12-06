const http = require('http');
const fs = require('fs').promises;

http
  .createServer(async (req, res) => {
    let html = '';
    if (req.url.indexOf('/about') != -1) {
      html = await fs.readFile('./about.html');
    } else {
      html = await fs.readFile('./index.html');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    }
    res.end(html);
  })
  .listen(8080, () => {
    console.log('서버 대기중...');
  });
