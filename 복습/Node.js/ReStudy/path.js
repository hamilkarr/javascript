const path = require('path');
const string = __filename;

console.log('path.sep: ', path.sep);
console.log('path.delimiter: ', path.delimiter);

console.log('path.dirname: ', path.dirname(string));
console.log('path.basename: ', path.basename(string));
console.log('path.extname: ', path.extname(string));
console.log('path.basename - extname: ', path.basename(string, path.extname(string)));
console.log('------------------------------');
console.log('path.parse()', path.parse(string));
console.log(
  'path.format: ',
  path.format({
    dir: 'C:\\user\\test',
    name: 'test',
    ext: '.js',
  })
);

console.log('path.normalize: ', path.normalize('c:\\\\user\\\test'));
console.log('path.isAbsolute', path.isAbsolute('C:\\'));
console.log('path.relative', path.relative('c:\\user\test', 'c:\\'));
console.log('path.join: ', path.join(__dirname, '..', '..', '/users', '/test'));
