const express = require('express');
const memberRouter = require('./member');
const orderRouter = require('./order');
const fileRouter = require('./file');
const dbRouter = require('./database');
const router = express.Router();

router.use((req, res, next) => {
  //res.cookie('name', 'david');
  // res.clearCookie('name', 'david');
  // console.log(req.cookies);
  req.session.name = 'david';
  req.session.age = 40;
  delete req.session.age;
  req.session.destroy();
  console.log(req.session);
  next();
});

/**
 * 회원 관련
 * /member/join, /member/login
 */
router.use('/member', memberRouter);

/**
 * 주문관련
 * /order/cart, /order/form
 */
router.use('/order', orderRouter);

/**
 * 파일관련
 * /file
 */
router.use('/file', fileRouter);

/**
 * db 연습 관련
 * /db
 */
router.use('/db', dbRouter);

module.exports = router;
