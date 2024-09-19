//문자 열(String) - "", '', ``(backtick)으로 표현이 가능함
const number = "1";
const number1 = `1`;
const number2 = "1";

console.log(number);
//숫자(Number)를 합산 하는걸 원할때
const age = 100;
const age1 = 20;

console.log(age + age1); //120
// Number, String 타입 바꾸기

//Number화 시키기
const a = Number("100"); // 숫자 100
const b = Number("200"); // 숫자 200
console.log(a + b); // 합연산 300이 나옴.

const c = Number("10"); // 숫자 10
const d = Number("50"); // 숫자 50
console.log(c + d); // 60이 나와야함!

//String화 시키기
const e = String(100); // " 100 "
const f = String(4); // "4"
console.log(e + f); // "1004"가 나와야함
