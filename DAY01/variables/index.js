//첫 문법 = (넣기 ex: const lunch = "짬뽕밥"; 하면 짬뽕밥나옴.)
// const 변수(별명) (variable) = "데이터"
const lunch = "삼각 김밥";
alert(lunch);

//콘솔
//커피라는 별명을 만들고 커피데이터 넣어주고 콘솔로 출력.
const coffee = "핫식스";
console.log(coffee);

//mbti라는 별명 만들고 mbti 넣어서 콘솔로 출력
// const mbti = "istp";
// console.log(mbti);
//문법은 이렇게 2가지가 존재함 위$글은 현 개발자들이 많이 쓰는 문구

// console.log("내 mbti ${mbti}"); //<=== 잘못됀 예시.
// console.log(`내 mbti ${mbti}`);
// console.log("내 mbti는" + mbti);

/*
~~~ 5개의 변수 명을 만들고 데이터 커스터마이즈 하기
안녕하세요 저의 이름은 ~~~입니다.
저의 mbti는 ~~~이고요
제가 좋아하는 플랫폼은 ~~~입니다.
요즘 즐겨보는 유튜버는 ~~~입니다.
오늘 저녁은 ~~~ 먹을 예정입니다.
*/
const name = "권선구";
const mbti = "istp";
const plat = "Steam";
const youtuber = "씨랙과_해마티엘";
const dinner = "라면";

console.log(`안녕하세요 저의 이름은 ${name} 입니다.`);
console.log(`저의 mbti는 ${mbti}이고요`);
console.log(`제가 좋아하는 플랫폼은 ${plat}입니다.`);
console.log(`요즘 즐겨보는 유튜버는 ${youtuber}입니다.`);
console.log(`오늘 저녁은 ${dinner}먹을 예정입니다.`);

// (혹은 console.log(`
// 안녕하세요 저의 이름은 ${name}입니다.
// 저의 mbti는 ${mbti}이고요
// 제가 좋아하는 플랫폼은 ${plat}입니다.
// 요즘 즐겨보는 유튜버는 ${youtuber}입니다.
// 오늘 저녁은 ${dinner}먹을 예정입니다.`);)로 console 하나로 처리가 가능함!
