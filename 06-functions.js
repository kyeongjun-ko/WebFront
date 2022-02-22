// 함수

// 1. 함수 선언식  (Declarariton)
function sum(a, b){ // function 함수명 (매개변수 목록)
  return a + b; // 함수가 값을 반환할 때는 return
}

// 2. sum 함수 사용
console.log( sum ( 10, 20 ));

// 3. 함수 표현식 (Expression) : 이름없는 변 수, 익명 한수
const asum = function (a, b) {
  return a+ b ;
}

console.log (typeof asum, asum(10, 20))

//  매개변수의 이해
// JavaScript 는 모든 원자값이 arguments 라는 이름의 배열로 나온다.

function getNumberTotal(){ // 인자 선언이 없다.
  // console.log는 모든 숫자에게 돌려주지 않았어요
  ("arguments", arguments);

    let result = 0;  
    for (let i = 0; i < arguments.length, i++) {
          result += arguments[1];
        } return result ;
      }
  console.log (getNumberTotal(1, 2, 3, 4, 5));
  console.log (getNumberTotal(1, 2, "3", 4, 5));


  // JavaScript 함수는 1급시민이다.
	// Function의 number, string 등의 객체와 동등한 소리를 낸다.
	// 다른 함수의 인수로 전달 될 수 있다.
	
	// callback
// 다른 함수의 인수로 전달되어서 함수의 내부에서 거꾸로 호출되는 것

function calcUsingCallback (val1, val2, func) {
  if (typeof func == "function"){  // 실행 가능한 함수이다.
    func( val1, val2) ; // callback
  }
}
clacUsingCallback ( 3, 4, function(v1, v2) {
  console.log( v1 + v2); // 3+4 = 7이 나온다.
});

clacUsingCallback ( 3, 4, function(v1, v2) {
  console.log( v1 * v2); // 3+4 = 7이 나온다.
});

// ES6 화살표 표기법 =>

// 인수값이 없는 함수
const f1 = function() { return "Hello" };
const f1Arrow = () => "Hello"; // () 생략 불가

console.log(f1(), f1Arrow());

// 인수가 1개 이상일 때
const f2 = function(name) { return "Hello, " + name };
const f2Arrow = name => "Hello, " + name;

console.log(f2("Bit"), f2Arrow("Bit"));

// 함수의 범위 스코프가 다르다. -> 내부적 작동 방식이 달라 유의해야한다.

// 인수가 2개 이상일 때
const f3 = function(a, b) { return a + b };
const f3Arrow = (a, b) => { return a + b };

console.log(f3(3, 7), f3Arrow(3, 7));
