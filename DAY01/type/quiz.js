//prompt로 첫 번째 숫자 입력
//prompt로 두 번째 숫자 입력
// 콘솔로 두 수의 합은 ~~입니다.

// const first = Number(prompt("첫 번째 숫자 입력"));
// const second = Number(prompt("두 번째 숫자 입력"));

// console.log(`두 수의 합은 ${first + Number}입니다.`);

//방식은 여러가지
//1.

// const sum = Number(first) + Number(second);
// console.log(`두 수의 합은 ${first + second}입니다.`);
// [대신 이 방식은 ()이 소괄호 안에 숫자를 써 넣으면 합연산이 됌.]
// ex)) const sum = Number(50) + Number(100);
//      console.log(`두 수의 합은 ${50 + 100}입니다.`);

// 2.

// const first = prompt("첫 번째 숫자 입력");
// const second = prompt("두 번째 숫자 입력");
// const sum = Number(first) + Number(second);
// console.log(`두 수의 합은 ${sum} 입니다.`)

// 3.

// const first = Number(prompt("첫 번째 숫자 입력"));
// const second = Number(prompt("두 번째 숫자 입력"));
// console.log(`두 수의 합은 ${first + Number}입니다.`);

// 총 이렇게 3가지의 방법이 있지만 편할대로 사용해도 됌!

// ask: prompt, answer:console
// 1. 한 변의 길이를 물어보고, 정사각형의 넓이와 둘레 알려주기
const square = Number(prompt("정사각형 한 변의 길이는 얼마인가요?"));
console.log(`정사각형의 둘레는 ${square * square}이고 ${square * 4}입니다.`);

// 2. 밑 변과 높이를 물어보고, 정삼각형의 넓이 구하기
const triangle = Number(prompt("정삼각형의 밑 변은 얼마인가요?"));
const height = Number(prompt("정삼각형의 높이는 얼마인가요?"));
console.log(`정삼각형의 넓이는 ${triangle * height * 0.5}입니다.`);

// 3. 반 지름을 물어보고 원의 넓이와 둘레 구하기
const circle = Number(prompt("원의 반 지름의 길이는 얼마인가요?"));
console.log(
  `원의 넓이는 ${circle * 2 * 3.14} 이고 ${circle * circle * 3.14} 입니다.`
);

// 4. 출생년도를 물어보고 나이를 나타내기 ex) 몇년생임? 2000 -> 25
const birth = Number(prompt("당신의 출생년도는 몇 년인가요?"));
console.log(`당신의 나이는 ${2024 - birth}입니다`);

// 5. 일본 여행 갈거임 그래서 100만원 환전하면 현재 환율로 엔화 나타내기
// const jpn = Number(prompt("얼마나 환전 하실건가요?"));
// console.log(`현재 엔화로 환전 하면 ${jpn / 9.31}원 입니다. } `);
//  ex) 얼마 환전? 1000000 -> 107451

const won = Number(prompt("얼마 환전 할꺼임?"));
const currency = 0.1075;
console.log(`환전결과(엔화)는 ${currency * won}입니다.`);
