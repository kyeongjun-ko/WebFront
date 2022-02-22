// JS의 내장객체 Array
const v1 = new Array(10);  // 10개짜리 빈 배열
const v2 = new Array();    // 빈 배열 생성
const v3 = new Array(1, "ABC", true); 

console.log(v1, v2, v3)

// length 속성 : 요소의 수
console.log(v1.length, v2.length, v3.length);

// 리터럴로 생성 (추천)
const v4 = [] ; // 빈배열
const v5 = ["red","green","blue","yellow"];

console.log(v4, v5);

// 객체도 배열처럼 접근할 수 있다.
const person = {
  name : "홍길동",
  age : 28
};

console.log(person['name']+":"+person['age']);

// 자바스크립트 배열은 인덱스를 엄격히 체크하지 않는다.
const arr = [];
console.log(arr.length);

// 인덱스 범위를 벗어난 배열의 접근
arr[10] = 2022;
console.log(arr);
console.log(arr.length);

// Array의 첫번째 메서드
// 01. 배열 합치기 : concat
const veges = ["배추","무","쪽파"];
const sources = ["소금","고춧가루","새우젓"];

console.log (veges, sources);

const ingr = veges.concat(sources);
console.log(ingr);

// 02. 특정 문자열 기준으로 합치기 : join
console.log("김장재료",ingr.join(","));
// , 를 기준으로 하나의 배열을 만들어낸다.

// 03-1. 요소를 삽입하거나, 추출한다. : push, pop
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.push("Kiwi"); // 배열뒤에 새로운 요소삽입 : push
console.log(fruits)

console.log
fruits.pop();                // 배열의 뒤에서 요소 추출
console.log(fruits);
console.log(fruits.pop());   // 추출한 요소자체의 이름
console.log(fruits.pop());
console.log(fruits);         // 요소 추출하고 난 뒤배열

// 03-2. 요소를 삽입하거나, 추출한다. : push, pop
fruits.push("Pear");         // 맨 뒤에 요소추가 : pear
console.log(fruits);
console.log(fruits.shift()); // 맨 앞의 요소 추출: shift
console.log(fruits.shift());
console.log(fruits.shift());
console.log(fruits);

// 04. splice : delete + insert
// 인자의 갯수 1개 : 해당 인덱스 ~ 끝까지 추출한 후 제거
fruits = ["Banana","Orange","Apple","Mango"];

console.log(fruits);
console.log(fruits.splice(2));   // 2번 인덱스부터 끝까지 추출후 제거
console.log(fruits);

// 인자의 갯수 2개 : 시작 인덱스, 갯수 추출 후 제거
fruits = ["Banana","Orange","Apple","Mango"];

console.log(fruits);
console.log(fruits.splice(2, 1)); // 2번 인덱스 ~ 1개 추출 후 제거
console.log(fruits);

// 인자의 갯수 3개 : 시작 인덱스, 추출 갯수, 추가할아이템
fruits = ["Banana","Orange","Apple","Mango"];
console.log(fruits);
console.log(fruits.splice(2, 1, "Kiwi", "Pineapple"));
console.log(fruits);

// 05. reverse, slice
// reverse
fruits.reverse();             // 좌우 반전
console.log(fruits.reverse());
console.log(fruits)

const fruits1 = ["Banana","Orange","Apple","Mango"];
fruits1.reverse();
console.log(fruits1);
// slice
let slice = fruits.slice(1, 2); // start, end
console.log(slice);

// sort : 정렬 - 기본 오름차순 정렬
console.log(fruits);
fruits.sort();
console.log("SORT ASC:", fruits);

fruits.sort(function(v1, v2) {
  if ( v1 < v2 ) return 1;  // 양수일때 v1 순서가 뒤다.
  if ( v1 > v2 ) return -1; // 음수일때 v1 순서가 앞
  if ( v1 == v2 ) return 0; // 0 -> 순서가 같다.
});
console.log ("SORT DESC:", fruits);