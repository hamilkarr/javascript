const fs = require('fs').promises;

/*
fs.writeFile('./writeme.txt', '글을 입력합니다.')
  .then(() => {
    return fs.readFile('./writeme.txt');
  })
  .then((data) => {
    console.log(data.toString());
  })
  .catch((err) => {
    console.error(err);
  });
*/

// 즉시 실행 함수
(async function () {
  try {
    await fs.writeFile('./writeme.txt', '글이 입력됩니다(await)');
    const data = await fs.readFile('./writeme.txt');
    console.log(data.toString());
  } catch (err) {
    console.error(err);
  }
})();
