// Q-3. 실수(소숫점이 있는 수)를 위의 조건에 처리 했을 때 소숫점 첫번째 자리까지만 출력되도록 처리하세요.
  
  const a = 13.13;
  const b = parseInt(a);
  console.log(b);
  
// Q-4. 음수(0보다 작은 수) 를 처리 했을 때 "절대값"이 출력되도록 처리하세요.
  
  const c = -13;
  console.log(Math.abs(c));

// Q-5. 수열의 합, 시그마 로직을 구현하세요. (에를 들어 1단의 총 합계 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 합계)
  
  // const sigma = (num1, num2) => { 
  //   const sum = (num2)*(num2 + num1) / 2;
  //   //console.log(sum);
  //   return sum;
  // };
  //sigma(1, 10);

  console.log(sigma(1, 10));

// Q-6. HTML에 나타난 구구단 중 항목 하나를 클릭하면 '클릭된 요소'가 삭제되도록 처리하세요.


// Q-7. Q-6번 기능에 더해 삭제된 요소가 다섯번단위로 누적되면, 삭제된 요소의 결과값 총합을 경고창(alert())으로 보이게 조치하세요.