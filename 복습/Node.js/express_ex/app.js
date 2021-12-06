const express = require('express'); // node_modules/express/index.js
const app = express();

/*
app.get('/', (req, res) => {
  
  res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' });
  res.end('<h1>출력!</h1>');
  
  res.send('<h1>출력!!!</h1>');
});
*/
app.use('/', (req, res) => {
  console.log('use 라우터');
});

app.get(
  '/',
  (req, res, next) => {
    console.log('첫번째 미들 웨어');
    next();
  },
  (req, res, next) => {
    console.log('두번째 미들 웨어');
    next();
  },
  (req, res, next) => {
    console.log('세번째 미들 웨어');
    //res.send('<p>출력</p>');
    next();
  }
);

app.get(
  '/',
  (req, res, next) => {
    console.log('네번째 미들 웨어');
    next();
  },
  (req, res, next) => {
    console.log('다섯번째 미들 웨어');
    res.send('<h2>출력!!!</h2>');
  }
);

/*
app.get('/about', (req, res) => {
  res.send('<h1>about 페이지</h1>');
});
*/

app.listen(3000, () => {
  console.log('서버 대기중...');
});
