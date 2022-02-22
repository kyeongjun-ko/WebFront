// 논리형 자료타입 (Boolean)
// 비교와 논리연산이 들어간다. (True, False를 반환한다.)

// 논리의 조합은 AND(&&) , OR(\\), NOT(!) 으로 조합한다.

let v1; // 선언만 하고, 초기화되지 않았다. > indefined
let v2 = null ; //  null로 초기화 되었다. null도 하나의 객체

console.log(typeof v1, typeof v2) ;
console.log(v2, typeof v2, v2 == null) ;

// undefined : JavaScript 인터프리터에게 허용된 타입
// null : 프로그래머가 임의로 설정하는 값이다.

// undefined도 개발자가 설정해 줄 수 있는 값이다.
v2 = undefined;

console.log(v2, typeof v2, v2 == undefined ); // undefined 확인하기

// == vs === 
// == : 단순히 타입과 관계없이 값만 비교하는 방식
// === : 타입과 함께 값도 비교한다. (Strict 엄밀하게)

console.log( 2022 == "2022" ); // 단순 값의 비교 : true
console.log(2022 === "2022"); // 값과 함께 타입도 비교할때 **추천

// Boolean 객체를 이용한 논리값 추출하기
// number, string 이 비어있으면 false값이 반환

console.log(Boolean("Java"), Boolean("")); // string
console.log(Boolean(2022), Boolean(0)); // number

// 객체가 비어있으면, false, number에서는 0은 비어있다고 판단한다.


// React, Vue.js 에 필수적으로 나오는 판별법
console.log(true && "JavaScript");  // JavaScript
console.log(false && "JavaScript"); // false

console.log(true || "JavaScript"); // true
console.log(false || "JavaScript"); // JavaScript