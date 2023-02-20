function doTask1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

function doTask2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 1000);
  });
}

function doTask3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, 1000);
  });
}

async function asyncTasks() {
  const response1 = await doTask1();
  console.log(response1);
  const response2 = await doTask2();
  console.log(response2);
  const response3 = await doTask3();
  console.log(response3);
}

asyncTasks();

async function* genTasks() {
  const response1 = await doTask1();
  yield console.log(response1);
  const response2 = await doTask2();
  yield console.log(response2);
  const response3 = await doTask3();
  yield console.log(response3);
}

var task = genTasks();
task.next();
task.next();
task.next();

