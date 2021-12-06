const fs = require('fs');
// 기본값 64kb애소 - 8byte로 변경
const stream = fs.createReadStream('./readme2.txt', { highWaterMark: 8 });

const data = [];
stream.on('data', (chunk) => {
  data.push(chunk);
  //console.log(chunk);
  //console.log(chunk.toString());
});

stream.on('end', () => {
  //console.log('파일 읽기 완료...');
  console.log(Buffer.concat(data).toString());
});

stream.on('error', (err) => {
  console.error(err);
});
