//조건문 (조건에 맞으면 코드 실행하는 뜻)
//if-else문

const num = Number(prompt("숫자 입력"));

if (num > 0) {
  console.log("입력한 값은 양수임");
} else if (num == 0) {
  console.log("정수임. 그냥 0.");
} else {
  console.log("입력한 값은 음수임");
}
console.log("프로그램 끝");

// 수학 시험 점수 프로그램
const math = Number(prompt("수학 점수 입력"));
// 90점 A, 80점 B, 70점 C, 60 D, 그 외는 수강철회

if (math >= 90) {
  console.log("A급입니다.");
} else if (math >= 80) {
  console.log("B급입니다.");
} else if (math >= 70) {
  console.log("C급입니다.");
} else if (math >= 60) {
  console.log("D급입니다.");
} else {
  console.log("수강 철회");
}
console.log("수학 시험 점수 프로그램 끝");

// 숫자를 입력해서, 양의 홀수, 양의 짝수, 0, 음의 홀수, 음의 짝수 알려주기
//ex) -3 -> 음의 홀수, -4 -> 음의 짝수

const wtf = Number(prompt("홀수,짝수,정수 알려드림"));

const isPositive = wtf > 0;
const isNegative = wtf < 0;
const isOdd = wtf % 2 == 1;
const isEven = wtf % 2 == 0;

if (isPositive && isOdd) {
  console.log("양의 홀수");
} else if (isPositive && isEvan) {
  console.log("양의 짝수");
} else if (isNegative && isOdd) {
  console.log("음의 홀수");
} else if (isNegative && isEvan) {
  console.log("음의 짝수");
} else {
  console.log("정수 0임");
}
