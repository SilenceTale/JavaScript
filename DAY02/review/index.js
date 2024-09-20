const health1 = prompt("첫 번째 운동은 뭐로 시작했나요?");
const health2 = prompt(" 두 번째 운동은 뭐로 시작했나요?");
const health3 = prompt("세 번째 운동은 뭐로 시작했나요?");

console.log(`운동순서:${health1}->${health2}->${health3}`);

const price = Number(prompt("4500"));
const amount = Number(prompt("1"));
console.log(`아메리카노 가격은 총 ${price * amount}입니다.`);

const birth = Number(prompt("당신은 몇 년생이신가요?"));
console.log(`그럼 ${birth}년생이니 ${2024 - birth + 1}살이군요!`);
