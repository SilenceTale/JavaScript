// 버스 종류
// 1. 마을 버스, 시내 버스, 고속 버스, 심야 버스
// 2. 1500, 2000, 8000, 10000

// 경기권, 충청권, 강원권, 제주권
// +2000, +3000, +3000, +10000

// 좌석 : 일반석, 프리미엄석, 넷플석
// 가격 : +1000, +3000, +4000

// 나이 13세 이하면 20%, 65세 이상 50%, 나머지 100%임 ㅅㄱ

const bus = {
  names: [
    { name: "마을 버스", price: 1500 },
    { name: "시내 버스", price: 2000 },
    { name: "고속 버스", price: 8000 },
    { name: "심야 버스", price: 10000 },
  ],
  regions: [
    { name: "경기권", price: 2000 },
    { name: "충청권", price: 3000 },
    { name: "강원권", price: 3000 },
    { name: "제주권", price: 10000 },
  ],
  seats: [
    { name: "일반석", price: 1000 },
    { name: "프리미엄석", price: 3000 },
    { name: "넷플석", price: 4000 },
  ],
};

const bus_choose = Number(
  prompt(
    `${bus.names[0].name} ${bus.names[1].name} ${bus.names[2].name} ${bus.names[3].name}  중에 영화를 고르세요(0~3)`
  )
);
const region_choose = Number(
  prompt(
    `${bus.regions[0].name} ${bus.regions[1].name} ${bus.regions[2].name} ${bus.regions[3].name} 중에 고르세요(0~3)`
  )
);
const seat_choose = Number(
  prompt(
    `${bus.seats[0].name} ${bus.regions[1].name} ${bus.regions[2].name} 중에 고르세요(0~2)`
  )
);

const age = Number(prompt("나이를 입력해주세요"));

const msg = `${bus.names[bus_choose].name} + ${bus.regions[region_choose].name} + ${bus.seats[seat_choose].name}`;

if (age <= 13) {
  const total =
    bus.names[bus_choose].price * 0.8 +
    bus.regions[region_choose].price +
    bus.seats[seat_choose].price;
  console.log(`${msg} 총 금액: ${total} 입니다.`);
} else if (age <= 60) {
  const total =
    bus.names[bus_choose].price * 0.5 +
    bus.regions[region_choose].price +
    bus.seats[seat_choose].price;
  console.log(`${msg} 총 금액: ${total} 입니다.`);
} else {
  const total =
    bus.names[bus_choose].price * 1 +
    bus.regions[region_choose].price +
    bus.seats[seat_choose].price;
  console.log(`${msg} 총 금액: ${total} 입니다.`);
}
