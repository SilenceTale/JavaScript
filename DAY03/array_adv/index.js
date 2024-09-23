// Stirng, Number, Boolean, Arrey
const arr = ["samsung", "LG", "Apple", "Google"];

arr.push("Hyundai"); // Hyundai 뒤에 추가
arr.unshift("Hybe"); //Hybe 뒤에 추가
arr.pop(); //맨 뒤에 요소 추가
arr.shift(); // 맨 앞에 요소 빼기
arr.reverse(); // 배열 거꾸로 ["Google", [Apple], [LG], [Samsung]]
arr.indexOf("LG"); // 1
arr.indexOf("toyota"); // -1
arr.includes("Google"); // true false

//Quiz
// 유저에게 뉴스기사를 입력받고, 찾고 싶은 단어를 입력 받은 후
// 단어가 있으면 단어가 있습니다! 없으면 단어가 없습니다!

const news = prompt("뉴스기사 입력하세요");
const lookingWord = prompt("단어 입력하셈");

const words = news.split(" ");
words.includes(lookingWord) ? "단어가 있음" : "단어가 없음";
alert(msg);
