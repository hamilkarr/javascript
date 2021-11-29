/*
function work(workNm, load, callback) {
  setTimeout(function () {
    console.log(workNm);
    if (typeof callback == 'function') callback();
  }, load);
}

work('First work', 3000, function () {
  work('Second work', 1000, function () {
    work('Third Work', 500, function () {
      work('4th Work', 2000);
    });
  });
});
*/

/*
const promise = new Promise(function (resolve, reject) {
  const isSuccess = false;
  if (isSuccess) {
    resolve('성공!');
  } else {
    reject('실패!');
  }
});

promise
  .then(function (msg) {
    console.log(msg);
  })
  .catch(function (msg) {
    console.log(msg);
  });
*/

/* 프로미스 예제
function work(workNm, load, callback) {
  return new Promise(function (resolve, reject) {
    if (!workNm || !load) {
      reject(workNm);
    }
    setTimeout(function () {
      console.log(workNm);
      resolve(workNm);
    }, load);
  });
}

work('First Work', 300)
  .then(function (workNm) {
    console.log(workNm, ' Finish!');
    return work('Second Work', 1000);
  })
  .then(function (workNm) {
    console.log(workNm, ' Finish!');
    return work('Third Work', 10);
  })
  .then(function (workNm) {
    console.log(workNm, ' Finish!');
    return work('', 0);
  })
  .catch(function (workNm) {
    console.log(workNm, ' Error!');
  });
*/

function work(workNm, load) {
  return new Promise(function (resolve, reject) {
    if (!workNm || !load) {
      reject(new Error(workNm));
    }
    setTimeout(function () {
      console.log(workNm);
      resolve(workNm);
    }, load);
  });
}

async function run() {
  try {
    let result = await work('First Work', 3000);
    console.log(result);
    result = await work('Second Work', 1000);
    console.log(result);
    result = await work('Third Work', 2000);
    console.log(result);
    await work('', 0);
  } catch (err) {
    // reject 가 호출되면 유입되는 구간
    console.log(err);
  }
}

run();
