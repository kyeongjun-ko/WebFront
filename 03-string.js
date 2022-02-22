// String : 문자열을 표현하는데 사용되는 데이터 타입
// JS의 문자열은 유니코드 문자들의 연결구조이기도 하다.
// 문자 하나하나가 연결되어 하나의 표현을 이루는 데이터이다.

let s1 = "JavaScript"
let s2 = String("JavaScrtpt")

// 자바스크립트에서는 STRING 타입과 다른 타입을 합칠때
// string 이 자동변환된다. 자동 변환된다.

// // String 문자열 치환
// const s replace ("JavasScrtpt", "JS")

// 문자열 내에 serchvalue 를 replace 
// 화이트 스페이스 제거( 띄어쓰기, 빈 문자, 공백 제거)

// 검색하는 serchin 이 문자열이 내에 없을때는 -1을 반환한다.




// 01. String 에 대한 이해
const s1 = "Modern JavaScript and Java"
const s2 = String("Modern JavaScript and Java");

console.log(typeof s1, typeof s2);

// 02. length : 문자열의 길이 확인하기
console.log( s1, "Length", s1.length);

// 03. 문자열 추출 메서드
console.log ( s1.charAt(7)); // 7번 인덱스의 문제
console.log ( s1[7]); // 배열처럼 사용가능하다. 변경불가
console.log ( s1. substring(7, 17)) // 7번 인데스~ 17 번인덱스 이전까지 추출
console.log ( s1. substring(7)); // 7번 인덱스~ 꼴찌인덱스까지


// 04. 검색 메서드 
// s1에서 Java 검사하기
let position = s1.indexOf("Java"); // s1에서
console.log(s1);
console.log("1번째 Java: ", position);

position = s1.indexOf ("Java", position +4); // s1의 특정 위치로부터 검색
console.log ("2번째 Java", position)

position = s1.indexOf ("Nothing"); // 없는 검색어의 검색: -1
console.log( "없는 검색어: ", position); 

position = s1.lastIndexOf ("Script"); // lastIndexOf 뒤로부터 검색한다.
console.log ("뒤로부터 검색: ", position); 

// 05. 문자열 치환하기
console.log(s1);
console.log(s1.replace("JavaScript", "JS")) // 첫번째 인자: 바꾸려는값, 두번째 인자:변환하려는 값
console.log(s1); // 자바스크립트에서는 문자열 자체는 바뀌지 않는다 -> 원본데이터가 보존되어있다

// 원본을 바꾸려고 할때 const -> let 으로 변경
let s3 = s1.replace("JavaScript", "JS")
console.log(s3);

// 좌우 스페이스 제거 .trim()
console.log("              Hello                 ".trim()); // 좌우 공백문자 제거

// 06. ES6의 Template String (많은 기능이 추가)
// 이스케이프
// \n : 개행
// \t : 탭
// \' : 작은따옴표
// \" : 큰 따옴표
// \` : 백틱 (여러줄 문자열)
// \$ : 달러기호 (ES6추가)

// EX) 현재 기온은 00도 입니다. ->  문자열로 만드려고할 때
let temp = 12;
let message = "현재 기온은 "+ temp +"도 입니다.";
console.log(message)

// 템플릿 문자열 활용
// : 문자열의 구성이 복잡하거나, 여러줄일때 이스케이프를 사용한다.
message = `현재 기온은 ${temp}도입니다.`
console.log(message)

// 여러 줄 문자열도 템플릿으로 쉽게 만들 수 있다.
message = "예전에는 여러줄 문자열을 만드는것이 \n 쉽지 않았습니다 촤핳 이것은 고영욱"
console.log(message)

message = `하지만 ES6 에서는
아주 손쉽게
여러 줄 문자열을 만들 수 있습니다.`;

console.log(message); // 띄어쓰기가 바로 적용된다.
