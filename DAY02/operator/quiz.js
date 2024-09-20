//1. 출생년도를 물어보고 2005년 이하면 성입니다, 아니면 미성년자입니다.

const birth = Number(prompt("출생년도는 몇 년인가요?"));
const answer = birth <= 2005 ? "성인입니다. " : "미성년자입니다.";

console.log(answer);
//2. 놀이기구를 탈려고 키를 물어보고 150cm이하면 탈 수 없습니다. 아니면 탈 수 있습니다.
const parade = Number(prompt("키가 몇 cm인가요?"));
const height = parade <= 150 ? "탈 수 없습니다." : "탈 수 있습니다.";

console.log(height);
//3. 양의 정수를 입력받고, 분초를 바꾸는 프로그램
//ex) 63 -> 1분 3초, 125 -> 2분 5초

const num = Number(prompt("양의 정수 입력"));
const sec = num % 60; // 9 초
const min = parseint(num / 60); //3분
const hour = parseInt(min / 60);
console.log(`${hour}시 ${min}분 ${sec}초 입니다.`);
