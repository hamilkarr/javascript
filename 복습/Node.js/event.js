const MyEvent = require('events');
const myEvent1 = new MyEvent();
myEvent1.on('myEvent1', () => {
  console.log('이벤트1 발생');
});
myEvent1.on('myEvent1', () => {
  console.log('event1 happened');
});

myEvent1.once('event2', () => {
  console.log('event2!!!');
});

myEvent1.emit('myEvent1');
