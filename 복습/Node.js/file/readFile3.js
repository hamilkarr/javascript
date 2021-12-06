const fs = require('fs').promises;

fs.readFile('./read.txt')
  .then((data) => {
    console.log('First', data.toString());

    return fs.readFile('./read.txt');
  })
  .then((data) => {
    console.log('Second', data.toString());

    return fs.readFile('./read.txt');
  })
  .then((data) => {
    console.log('Third', data.toString());
    return fs.readFile('./read.txt');
  })
  .catch((err) => {
    console.error(err);
  });

async function run() {
  try {
    let data = await fs.readFile('./read.txt');
    // 반환값인 데이터 : Promise인스턴스에서 then 으로 유입되는 데이터
    console.log('1번: ', data.toString());
    data = await fs.readFile('./read.txt');
    console.log('2번: ', data.toString());
    data = await fs.readFile('./read.txt');
    console.log('3번: ', data.toString());
  } catch (err) {
    // Promise 인스턴스에서 catch 로 유입되는 구간
    console.error(err);
  }
}

run();
