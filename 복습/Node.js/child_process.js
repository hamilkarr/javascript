const { exec } = require('child_process');

const proc = exec('dir/w');

proc.stdout.on('data', (data) => {
  console.log(data);
});
proc.stderr.on('data', (data) => {
  console.error(data);
});
