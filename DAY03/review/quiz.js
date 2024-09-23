// 1. 어떤 숫자를 넣으면 홀수인지 짝수인지 돌려주는 함수
// 2. 어떤 숫자를 넣으면 5배수인지 5의 배수가 아니면 5의 배수가 아님을 돌려주는 함수
// 3. 어떤 숫자를 1번을 넣으면 - 일반 팝콘, 2- 카라멜 팝콘, 3- 치즈 팝콘, 그외 그런거 없음이라고 돌려주는 함수 만들기
// 4. 어떠한 문자열을 3개 넣으면 배열로 돌려주는 함수 ex)사탕, 떡볶이, 멜론 -> [사탕,떡볶이,멜론]

// const num = Number(prompt("숫자를 넣으면 홀짝 알려드림"));

// const isPositive = num > 0;
// const isOdd = num % 2 == 1;
// const isEvan = num % 2 == 0;

// if (isPositive && isOdd) {
//   console.log("홀수임ㅅㄱ");
// } else if (ispositive && isEvan) {
//   console.log("짝수임ㅅㄱ");
// } else {
//   console.log("이걸왜넣음?");
// }

// const magic = Number(prompt("수 넣으면 5배수인지 말해드림"));

// const isPositive = magic > 0;
// const isOdd = num * 5 == 1;

// if (isPositive && isOdd) {
//   console.log("5배수맞음");
// } else {
//   console.log("5배수아님ㅅㄱ");
// }

//마술상자: input -> output

// output이 있음[string]
function oddEven(x) {
  return x % 2 == 1 ? "홀수" : "짝수";
}

function isFivetime(x) {
  return x % 5 == 0 ? "5의 배수" : "5의 배수 아님";
}

// return이 아닌 console.log로 찍는건 순수성에 위반됨 [팝콘문자만 원해오 + 출력까지 해줄게오: 순수성 위배]
function popcorn(x) {
  if (x == 1) {
    return "일반 팝콘";
  } else if (x == 2) {
    return "카라멜 팝콘";
  } else if (x == 3) {
    return "치즈 팝콘";
  } else {
    return "그딴거없음 ㅋㅋ";
  }
}

function popcorn2(x) {
  return `${x} 팝콘`;
}

function stringToArray(a, b, c) {
  return [a, b, c];
}

// 어떠한 과일 이름을 넣으면 ~~맛 아이스크림을 돌려주는 함수

function icecream(x) {
  return `${x}맛 아이스크림`;
}

function fruitArray(a, b, c) {
  return [a, b, c];
}

function oddEven1(x) {
  return x % 2 == 1;
}
