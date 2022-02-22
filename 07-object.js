// 1. Object 생성 방법1

let person = new Object(); // 새 객체 생성
// 속성을 동적으로 추가할수 있다.
// 2가지의 속성
// property : 데이터
// method : 내장함수

person.name = "홍길동";
person.age = 28; // property 추가
person.showInfo = function() { // Method 추가, 익명함수
  let message = `Name: ${this.name}, Age: ${this.age}`;
  console.log (message);
};

// 객체 출력
console.log(person);

// 메서드 호출
person.showInfo();

// 1. Object 생성 방법2 : JSON이용

person = {
  name : "홍길동",
  age : 28,
  showInfo: function(){
    let message = `Name: ${this.name}, Age: ${this.age}`;
    console.log (message);
  }
};
console.log(person);
person.showInfo();

// 1. Object 생성 방법3 : Prototype 기반 상속
const Member = function (name, position){
  this.name = name;
  this.position = position;
}

let m1 = new Member("강백호","PF");
let m2 = new Member("서태웅","SF");

console.log(m1);
console.log(m2);

// JS는 동적으로 속성을 추가할수 있다. 2개에서 3개로추가
m1.sayHi = function() {
  console.log(`${this.name}님이 당신을 부릅니다.`);
}
console.log(m1);
m1.sayHi();
// 동적으로 추가한 속성들은 해당 객체에서만 사용 가능하다.
// m2.sayHi();

// Member 함수를 상속받은 모든 인스턴스에 공통적인 속성을 공유하려고할때
// -> Prototype 을 사용한다.

Member.prototype.introduce = function() {
  console.log(`${this.name}님이 당신을 부릅니다.`);
}; // Member의 공유영역에 메서드 추가

console.log(m1.constructor);   // m1의 기반이 되는 객체를 확인
console.log(Member.prototype); // Member의 공유영역

// introduce 는 m1, m2의 constuctor인
// Member의 prototype 영역에 존재한다. - 모든객체 고유가능

m1.introduce();
m2.introduce();