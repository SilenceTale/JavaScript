// // 1. answer
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((x) => {
//   return x % 3 == 0;
// });

// // 2. answer
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((x) => {
//   return 4 <= x && 8 >= x;
// });

// const fruitArray = [
//   "watermelon",
//   "cherry",
//   "banana",
//   "avocado",
//   "apple",
//   "orange",
//   "pineapple",
//   "strawberry",
// ];

// // 3. answer
// fruitArray.filter((x) => {
//   return x.includes("o");
// });

// // 4. answer
// fruitArray.filter((x) => {
//   return x.length >= 6;
// });

// //5.answer
// const upper = fruitArray
//   .filter((x) => {
//     return x.length % 2 == 0;
//   })
//   .map((x) => {
//     return x.toUpperCase();
//   });
// // 메소드 체이닝(method chaining)
// fruitArray.filterx;

// 유저에게 정수 n(maximum),k(배수)를 입력 받으면
// n = 10, k = 3-> [3,6,9]
// n 15, k = 5 -> [5, 10, 15]를 도출하는 함수 만들기

// const test = (n, k) => {
//   return Array(n)
//     .fill(0)
//     .map((x, i) => {
//       return i + 1;
//     })
//     .filter((x) => {
//       return x % k == 0;
//     });
// };

// //todolist = ["점심먹기","복습하기","유튜브 보기","카톡하기"]
// //finished = [false,false,true,true]

// // newToDolist = ["점심먹기","복습하기"]

// const todolist = ["점심먹기", "복습하기", "유튜브 보기", "카톡하기"];
// const finished = [false, false, true, true];

// todolist.filter((x, i) => {
//   return !finished[i];
// });
// //함수화로 시킨다는 것은 패턴화로 바꾸겠단 소리
// const newTodolist = (todolist, finished) => {
//   return todolist.filter((x, i) => {
//     return !finished[i];
//   });
// };

// // 오전 마지막 퀴즈
// //x 기준으로 나눴을 때, 나눠진 문자열을 각각 길이를 배열화 시킬 것
// // "xabcxdefxghi" [0,3,3,3]
// const test2 = (word) => word.split("x").map((x) => x.length);

// "xabcxdefxghi".split("x").map((x) => {
//   x.length;
// });

const fruits = ["melon", "kiwi", "apple", "banana", "orange"];

const vowels = ["a", "e", "i", "o", "u"];

const newF = fruits.map((x) =>
  x
    .split("")
    .map((y) => (vowels.some((v) => v == y) ? y.toUpperCase() : y))
    .join("")
);

// 모음 a,e,i,o,u는 대문자로 바꾸기

console.log(newF);
// "melon".split("").map((x) => {
//   return x == "a" || x == "e" || x == "i" || x == "o" || x == "u"
//     ? x.toUpperCase()
//     : x;
// });

// 1~100 까지 만들고, 369 만들기
//[1,2,"👏","👏",..,"👏",]
//correct answer
//hint! : 알고리즘 문제를 풀때 [String,]
// 해당 타입에 방법이 없으면 다른 타입으로 바꿔서 시도해볼 것!

const num = Array(100)
  .fill(0)
  .map((x, i) => String(i + 1))
  .map((x) =>
    x.includes("3") || x.includes("6") || x.includes("9") ? "👏" : x
  );

//wrong answer
// const numbergame = ["3","6","9"];

// const newgame = Array(100)
//   .fill(1)
//   .map((y,i) => String(i + 1))(number.some((v) => v == y) ? y.replaceA("3", "👏") : y))
//   .join("");

// console.log(newgame);
