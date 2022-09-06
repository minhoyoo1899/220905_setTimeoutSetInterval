// console.log("a");

//setTimeout(param1, param2);  param 1 = callback, param2 = time (1000 = 1s)
// setTimeout(function () {
//   console.log("a");
//   setTimeout(function () {
//     console.log("b");
//     setTimeout(function () {
//       console.log("c");
//     }, 1000);
//   }, 1000);
// }, 1000); // param 1 = callback, param2 = time (1000 = 1s)
// 실행할 시기를 컨트롤 할 수 있다.

// setTimeout(function () {
//   console.log("a");
// }, 3000);
// setTimeout(function () {
//   console.log("b");
// }, 1000);
// setTimeout(function () {
//   console.log("c");
// }, 2000);

// 실행할 시기를 컨트롤 하기 때문에 순서대로 실행이 되지 않는다. 동기/ 비동기

setTimeout(function () {
  console.log("a");
  setTimeout(function () {
    console.log("b");
    setTimeout(function () {
      console.log("c");
    }, 2000);
  }, 1000);
}, 3000);  // callback (콜백 : 다시 부른다)