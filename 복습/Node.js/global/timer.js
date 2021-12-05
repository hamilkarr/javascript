const timeout = setTimeout(() => {
  console.log('3초뒤에 실행');
}, 3000);

// timeout -> 백그라운드 대기 아이디 -> 중지할때(clearTimeout) 활용 할 수 있음.

console.log(timeout);
clearTimeout(timeout);
