const { RSA_NO_PADDING } = require('constants');
const fs = require('fs');

fs.readFile('./read.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('1번', data.toString());

  fs.readFile('./read.txt', (err, data) => {
    if (err) {
      throw err;
    }
    console.log('2번', data.toString());

    fs.readFile('./read.txt', (err, data) => {
      if (err) {
        throw err;
      }
      console.log('3번', data.toString());
    });
  });
});
