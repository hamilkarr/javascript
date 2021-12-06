const timer = setImmediate(() => {
  console.log('setImmediate');
});

clearImmediate(timer);

// setTimeout(() => {
//   console.log('setTimeout');
// }, 0);
