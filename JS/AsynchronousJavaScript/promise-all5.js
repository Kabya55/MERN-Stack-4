// All promises

const promise1 = Promise.resolve("Promise 1 resolved");
const promise2 = new Promise((res) => {
  setTimeout(() => {
    res("Promise 2 resolved");
  }, 2000);
});

Promise.all([promise1, promise2]).then((res) => {
  console.log(res);
});

// Promise race
//  ai khana ja ta aga solve hoba sai tar result pao

const promise3 = new Promise((res) => {
  setTimeout(() => {
    res("Promise 3 resolved");
  }, 4000);
});
const promise4 = new Promise((res) => {
  setTimeout(() => {
    res("Promise 4 resolved");
  }, 3000);
});

Promise.race([promise3, promise4]).then((res) => {
  console.log(res);
});
