// console.log('a');

// const funcMultiple = (numbOne, numbTwo) => {
//   let a = 1;
//   let b = 1;

//   const multiInterval = setInterval();
// }


// const funcMultiple = (val1, val2) => {
//   for (let i = 0; i < val1.lengh; i++) {
//     let a = 1;
//     let b = 1;
//     console.log(a * b);
//     b + i;
//   }
//   return;
// }

// funcMultiple(9);

// let a = 1;
// let b = 1;
// while (true) {
//   if (a === 10) {
//     break;
//   }
//   c = a * b;
//   console.log(c)
//   if (b === 9) {
//     b = 0;
//     a++;
//   }
//   b++;
// }

let aa = 1;
let bb = 1;
let cc = 9

const multi = (a, b, c) => {
  while (true) {
    if (a === c + 1) {
      break;
    }
    let d = a * b;
    console.log(d);  
    if (b === c) {
      b = 0;
      a++;
    }
    b++;
  }
}

multi(aa, bb, cc);