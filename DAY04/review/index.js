// 1. [10, 20, 30, 40, 50]을 30이하면 100 더하기, 아니면 200 더하기
// 2. ["americano", "latte", "vanilla", "mocha", "mint", "tea"]
//    -1. 5글자 이하라면 대문자화, 아니면 '🥞'로 바꾸기

const num = [10, 20, 30, 40, 50];
const plus = num.map((x) => {
  x <= 30 ? x + 30 : x + 200;
});

console.log(num);

const cafeArr = ["americano", "latte", "vanilla", "mocha", "mint", "Tea"];

const fivewords = (x) => {
  return x.length >= 5 ? x.toUpperCase() : x.toLowerCase();
};
const review1 = cafe.map(fivewords);

const add = (x, y) => x + y;
const sub = (x, y) => x - y;

const mul = (x, y) => {
  const a = "123";
  return x * y;
};
