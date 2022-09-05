// let a = setTimeout(function () { // 함수 표현식 // 함수리터럴
//   console.log("a");
// }, 1000);



console.log("a");

// 순서를 어기는 케이스
let b = setTimeout(function () {
  console.log("b");  
}, 0);

//일반 사용 방식
console.log("c");  

