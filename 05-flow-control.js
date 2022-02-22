// for문, while문 이용

// 1. 구구단 만들기
for (let i=2; i<=9; i++ ){
  console.log(i + "단 = ");
  for (let j=1; j<=9; j++){
    console.log(i+" * "+j+" = "+(i*j));
  } console.log("\n")
}

// 2. * 그리기
//  *****
//  ****
//  ***
//  **
//  *

for (let i=5; i>=1; i-- ){
  // console.log("*");
  let stars = "";
  for (let j=1; j<=i; j++){
    stars += "*";
  }
  console.log(stars);
}
