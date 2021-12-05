const timeout = setTimeout(() => {
  console.log('after 1.5 Sec');
}, 1500);

const interval = setInterval(() => {
  console.log('every 2 Sec');
}, 2000);

const timeout2 = setTimeout(() => {
  console.log('Never Done');
}, 3000);

setTimeout(() => {
  clearTimeout(timeout2);
  clearInterval(interval);
}, 2500);

const immediate = setImmediate(() => {
  console.log('Right Now!');
});
