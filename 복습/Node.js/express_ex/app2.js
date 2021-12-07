const express = require('express'); // node_modules/express/index.js
const app = express();

app.get(
  '/about',
  (req, res, next) => {
    console.log('middlware1');
    next();
  },
  (req, res, next) => {
    console.log('middleWare2');
    next();
  },
  (req, res, next) => {
    console.log('MiddleWare3');
    next();
  }
);

app.get('/about', (req, res, next) => {
  console.log('MiddleWare4!');
  next();
});

app.get('/home', (req, res, next) => {
  res.send('Home');
});

app.use((req, res, next) => {
  // use -> 모든 요청, 모든 요청 라우팅 URL
  console.log('All MiddleWare');
  res.send(req.url);
});

/*
app.get(
  '/about',
  (req, res, next) => {
    res.send('<h1>about</h1>');
    next();
  },
  (req, res, next) => {
    res.send('<h1>about2</h1>');
  }
); // 화살표함수 this의 사용 여부에 따라 선택
*/

app.listen(3000, () => {
  console.log('서버 대기중...');
});
