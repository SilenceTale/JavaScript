// CGV 프로그램

// 1.영화 고르기 - ["베테랑2",[에일리언],["사랑의하츄핑"]
// 2. 좌석 등급 고르기 - standard[10000], couples[20000], premium[15000], economy[8000]
// 3. 팝콘 고르기 - 일반[6000], 카라멜[6500], 치즈[6500], 반반[7000]
// 4. 음료 고르기 - 탄산[2000], 에이드[3000], 커피[3000]
// 5. 나이 입력 - 13세 이하면 30%할인, 60세 이상 20%할인[영화만]

//콘솔 - 영화, 좌석, 팝콘, 음료, 총 금액: ~~~입니다.

//내가 한건 애초에 잘못 됀 접근!
// const movie = ["베테랑2", "에일리언", "사랑의하츄핑"];
// const sit = [
//   "standard[10000]",
//   "couples[20000]",
//   "premium[15000]",
//   "economy[8000]",
// ];
// const popcon = ["일반[6000]", "카라멜[6500]", "치즈[6500]", "반반[7000]"];
// const drink = ["탄산[2000]", "에이드[3000]", "커피[3000]"];
// const age = Number(prompt("나이를 입력해주세요"));

// const question1 = prompt(`${movie} 중 고르세요(0~2)`);
// const question2 = prompt(`${sit} 중 고르세요(0~3)`);
// const question3 = prompt(`${popcon} 중 고르세요(0~2)`);
// const question4 = prompt(`${drink} 중 고르세요(0~2)`);

// const isPositive = age < 13;
// const isNegative = age < 60;
// const isOdd = movie / 2;

// if (isPositive && isOdd) {
//   console.log("할인적용 연령입니다.");
// } else if (isNegative && isOdd) {
//   console.log("할인적용 연령입니다.");
// } else {
//   console.log("할인적용이 불가능합니다.");
// }

// console.log(`총 결제 금액은`);

//아래 정답지는 2가지 방법이 존재함!
const movie = {
  name: ["베테랑2", "에일리언", "사랑의 하츄핑"],
  seat: {
    name: ["standard", "Couple", "Premium", "Economy"],
    price: [10000, 20000, 15000, 8000],
  },
};

// const cinema = {
//   name: ["베테랑2", "에일리언", "사랑의 하츄핑"],
//   seat: [
//     { name: "Standard", price: 10000 },
//     { name: "Couple", price: 20000 },
//     { name: "Premium", price: 15000 },
//     { name: "Economy", price: 8000 },
//   ],
// };

const shop = {
  popcorn: [
    { name: "일반 팝콘", price: 6000 },
    { name: "카라멜 팝콘", price: 6500 },
    { name: "치즈 팝콘", price: 6500 },
    { name: "반반 팝콘", price: 7000 },
  ],
  beverage: [
    { name: "탄산", price: 2000 },
    { name: "에이드", price: 3000 },
    { name: "커피", price: 3000 },
  ],
};

const movieChoose = Number(prompt(`${movie.name} 중에 영화를 고르세요(0~2)`));
const seatChoose = Number(
  prompt(
    `${movie.seat[0].name} ${movie.seat[1].name} ${movie.seat[2].name} ${movie.seat[3].name}중에 고르세요`
  )
);
const popcornChoose = Number(
  prompt(
    `${shop.popcorn[0].name} ${shop.popcorn[1].name} ${shop.popcorn[2].name} ${shop.popcorn[3].name} 중에 고르세요`
  )
);
const beverageChoose = Number(
  prompt(
    `${shop.beverage[0].name} ${shop.beverage[1].name} ${shop.beverage[2].name} 중에 고르세요`
  )
);
const age = Number(prompt("나이를 입력해주세요."));

const msg = `${movie.name[movieChoose]} ${movie.seat[seatChoose].name} ${shop.popcorn[popcornChoose].name} ${shop.beverage[beverageChoose].name}`;

// lexical scope
if (age <= 13) {
  const total =
    movie.seat[seatChoose].price * 0.7 +
    shop.popcorn[popcornChoose].price +
    shop.beverage[beverageChoose].price;
  console.log(`${msg} 총 금액: ${total} 입니다.`);
} else if (age >= 60) {
  const total =
    movie.seat[seatChoose].price * 0.8 +
    shop.popcorn[popcornChoose].price +
    shop.beverage[beverageChoose].price;
  console.log(`${msg} 총 금액: ${total} 입니다.`);
} else {
  const total =
    movie.seat[seatChoose].price * 1 +
    shop.popcorn[popcornChoose].price +
    shop.beverage[beverageChoose].price;
  console.log(`${msg} 총 금액: ${total} 입니다.`);
}
