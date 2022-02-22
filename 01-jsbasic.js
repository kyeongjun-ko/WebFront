/// 한줄 주석            /* 여러줄 주석 */

//  터미널, 콘솔에 메세지 출력을 위해서 colsole 객체를 사용한다.
console.log("일반 메세지")
console.error("에러 메세지")
console.warn("경고 메세지")
console.debug("디버그 메세지")
console.info("정보 메세지")

// 변수 : var, let, const
var testVar = "var"; // ES6 이전 할당방법
let testLet = "let"; // let : 재할당 가능 변수
const testConst = "const" // const: 재할당 불가 변수 - 상수처럼 사용

console.log(testVar, testLet, testConst)

//  변수의 변경
testVar = "var cahnged"
testLet = "let chaenged"
// testConst = "const changed"
// -> const는 선언과 동시에 할당하는것만 가능하다.

console.log(testVar, testLet, testConst)
let v = "String";
console.log (v, typeof v) // 현재 변수의 타입 확인
// 동적 타이핑 언어 - 언제든지 타입이 변경될 수 있다.

v = 2002 ;
console.log (v, typeof v)  // 언제든지 타입이 변경 될 수있다. 

// JS의 기본 데이터 형 : number, string, boolean
