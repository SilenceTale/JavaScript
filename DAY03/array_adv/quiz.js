// 1. [1, 2, 3, 4, 5] -> 두 배 해주기
// 2. [1, 2, 3, 4, 5] -> 홀 수면 두 배 짝수면 세배
// 3. [1, 2, 3, 4, 5] -> 3이하면 '🍒' 아니면 '🍉'
const multi = (x) => {
  return x * 2;
};

const oddEven = (x) => {
  return x % 2 == 1 ? x * 2 : x * 3;
};

const counter = (x) => {
  return x <= 3 ? "🍒" : "🍉";
};

const num = [1, 2, 3, 4, 5].map(multi);
const num1 = [1, 2, 3, 4, 5].map(oddEven);
const num2 = [1, 2, 3, 4, 5].map(counter);

console.log(num);
console.log(num1);
console.log(num2);

const fruitArray = [
  "watermelon",
  "cherry",
  "banana",
  "avocado",
  "apple",
  "orange",
  "pineapple",
  "strawberry",
];
// 1. 문자의 길이가 7글자 이상이면 대문자화 아니면 소문자화
// 2. 알파벳 a가 들어가면 대문자화 아니면 소문자화
// 3. 단어 안에 있는 알파벳 a를 '🍒'바꾸기

const changeWord = (x) => {
  return x.length >= 7 ? x.toUpperCase() : x.toLowerCase();
};

const hasA = (x) => {
  return x.includes("a") ? x.toUpperCase() : x.toLowerCase();
};

const makeCherry = (x) => {
  return x.includes("a") ? x.replaceA("a", "🍒") : x;
};

const quiz1 = fruitArray.map(changeWord);
const quiz2 = fruitArray.map(hasA);
const quiz3 = fruitArray.map(makeCherry);

const starbucks = [
  { name: "americano", price: 4500, shots: 2, ingredients: ["water", "beans"] },
  { name: "latte", price: 6000, shots: 2, ingredients: ["milk", "beans"] },
  {
    name: "java chip",
    price: 6500,
    shots: 2,
    ingredients: ["milk", "beans", "wheat"],
  },
  {
    name: "Honey Black tea",
    price: 5700,
    shots: 1,
    ingredients: ["Grapefruit", "water", "source"],
  },
];

// 1번문제 가을(autumn)시즌 이벤트 -> 모든 가격을 10% 할인한 가격으로 바꿔주기
// 2번문제 두유시즌 이벤트 -> Ingredients(성분)에 두유(soy milk) 강제 추가
// 3번문제 스타벅스 아아 기념 -> 이름이 아메리카노면 2000원 할인된 가격으로 바꿔주고, 샷 하나 더 늘려주기
// 4번문제 인플레이션 시즌 이벤트 -> 모든 가격 20% 오른 가격으로 바꿔주기
// { name: "americano", price: 4500, shots: 2, ingredients: ["water", "beans"] },

const autumn = starbucks.map((x) => {
  x.price = x.price * 0.9;
  return x;
});

const Soymilk = starbucks.map((x) => {
  x.ingredients.push("Soymilk");
  return x;
});

const IceAmericano = starbucks.map((x) => {
  if (x.name == "americano") {
    x.price = x.price * 0.8;
    x.shot = x.shot + 1;
    return x;
  } else {
    return x;
  }
});

const inflation = starbucks.map((x) => {
  x.price = x.price * 1.2;
  return x;
});

console.log(autumn);
console.log(Soymilk);
console.log(IceAmericano);
console.log(inflation);

// (&&[and], ||[or],![not])
