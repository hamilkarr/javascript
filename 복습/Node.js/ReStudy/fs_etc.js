const fs = require('fs');

fs_readFile('./readme2.txt').then((data) => {
  console.log(data.toString());
});

function fs_readFile(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
    });
  });
}
