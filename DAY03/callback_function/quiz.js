// makeCoffee함수 만들기 [커피 준비 - 커피 완료]
//Americano, latte, vanilla 함수 만들어서 makeCoffee(americano) [커피 준비- 커피 완료]만들기
const cafe = (roasting) => {
  console.log("커피 준비");
  roasting();
  console.log("커피 완료");
};
const americano = () => {
  console.log("좋은 콩 가져오기");
  console.log("측정하기");
  console.log("콩을 잘 갈기");
  console.log("탬핑 잘 하기");
  console.log("머신에 포타필터 넣기");
  console.log("에스프레소 만들기");
  console.log("뜨거운 물 붓기");
  console.log("에스프레소를 물에 붓기");
  console.log("아메리카노 즐기기!");
};

const latte = () => {
  console.log("컵에 얼음을 가득 넣어주기");
  console.log("우유 120ml를 부어주기");
  console.log("에스프레소 60ml를 얼음 위에 천천히 부어주기");
  console.log("라떼 층 만드는 포인트는 얼음 위로 천천히 커피를 부어주는 것!");
  console.log("카페 라떼 즐기기!");
};
const vanilla = () => {
  console.log("유리잔에 얼음을 1/3 정도 채워줍니다.");
  console.log("우유를 부어줍니다.");
  console.log("오리지널 고소한 우유로 라떼만들면 고소함이 깊습니다.");
  console.log("에스프레소 샷을 넣어주기");
  console.log("바닐라 라떼 시럽 넣어주기");
  console.log("단게 좋으면 시럽 더 넣고 풍미살리고 싶으면 적게 넣기");
  console.log("바닐라 라떼 즐기기!");
};

cafe(americano);
cafe(latte);
cafe(vanilla);
cafe(() => {
  console.log("원두갈기");
  console.log("샷 내리기");
  console.log("얼음을 컵에 넣기");
  console.log("샷넣기");
  console.log("물 넣기");
  console.log("망고 넣기");
});
