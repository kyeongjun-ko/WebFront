// 수치형 데이터 
let n1 = 5; // literal
let n2 = Number(5); // 객체 이용생성

console.log(n1, "==", n2, "?", n1==n2)

// 다양한 형태의 수치 입력
const hex = 0xff0000 // 16진수 입력가능
const oct = 0o10 // 8진수 입력가능
console.log(hex, oct);

// Math 내장함수
console.log(Math.round(Math.PI));

console.log(Math.min(1,5,3,2,6,7), // 최솟값 구하는 Math 함수 min
            Math.max(9,2,6,2,4)) // 최댓값 구하는 Math 함수 max

// 유용하게 쓸수 있는 함수들
console.log(Math.round(3.567), Math.trunc(3.567), Math.floor(3,567)) // round:반올림 , trunc, floor :버림

// casting 하기
console.log("---------------Castiong")

// parse 계열 함수로 약올리지 말기 parseInt, parseFloatt, Number
console.log(parseInt("011")) // number 형태로 반환 // 11

// 2진수  -> number 값으로 변환하
console.log(parseInt("011", 2)) // 011(2진수)로 캐스팅
console.log(parseInt("123.456")) // 정수 형태만 반환
console.log(parseFloat("123.456")) // 실수로 변환하기때문에 그대로

let v = parseInt("a123.456") // 숫자로 반환할 수 없는 상태
console.log(v, typeof v); 

// Nan 를 산술  연산에 포함시키려면?
console.log(v + 10);

// 수치형 변수가 Nan 인가를 확인한다.
console.log(isNaN(v)) // v가 NaN인가를 확인한다.

// Infinity : 무한대
v = 1/0;
console.log(v, typeof(v))

// Infinity 가 포함된 산술 연산식 -> Infinity
console.log(v+10)

// 유한수인지 확인하는 방법
console.log(v, isFinite(v)) // false : 무한이다.

