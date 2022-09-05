// setInterval(function () {
//   console.log("a");
// }, 100);

let num = 0;
let count = setInterval(function () { 
  num++;
  console.log(num);
  if (num === 60) {
    console.log("종료!");
    clearInterval(count);
  }
   }, 16); // 60fps의 개념