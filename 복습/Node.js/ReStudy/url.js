const url = require('url');
const { URL } = url;
const querystring = require('querystring');

const exUrl = 'http://www.yonggyo.com/book/bookList.aspx?cate=001001001#anchor';
const parseUrl = url.parse(exUrl);
console.log('url.parse(): ', parseUrl);
