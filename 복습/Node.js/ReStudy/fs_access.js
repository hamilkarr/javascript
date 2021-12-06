const fs = require('fs');
const constants = require('fs').constants;

/*
fs.access('./pipe.js', constants.F_OK)
  .then(() => {
    console.log('파일 존재');
  })
  .catch(() => {
    console.log('파일 없음');
  });
  */

fs.access('./pipe.js', constants.W_OK | constants.F_OK)
  .then(() => {
    console.log('있음');
  })
  .catch((err) => console.log(없음));
