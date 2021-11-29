/*
const promise = new Promise(function (resolve, reject) {
  const isSuccess = true;
  if (isSuccess) {
    resolve('success!');
  } else {
    reject('fail');
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

function work(workNm, load) {
  return new Promise(function (resolve, reject) {
    if (!workNm || !load) {
      reject('Error!!');
      return;
    }

    setTimeout(function () {
      console.log(workNm);
      resolve(workNm + ' Finish');
    }, load);
  });
}

/* Promise 방식 
work('work1', 3000)
  .then(function (workNm) {
    console.log(workNm);
    return work('work2', 200);
  })
  .then(function (workNm) {
    console.log(workNm);
    return work('work3', 1000);
  })
  .then(function (workNm) {
    console.log(workNm);
    return work('wokr4', 100);
  })
  .then(function (workNm) {
    console.log(workNm);
    return work('', 0);
  })
  .catch(function (err) {
    console.log(err);
  });
*/

/* async
async function run() {
  try {
    let workNm = await work('작업1', 3000);
    console.log(workNm);
    workNm = await work('작업2', 2000);
    console.log(workNm);
    workNm = await work('작업3', 1000);
    console.log(workNm);
    workNm = await work('작업4', 10);
    console.log(workNm);
    await work('', 0);
  } catch (err) {
    console.log(err);
  }
}
run();
*/
