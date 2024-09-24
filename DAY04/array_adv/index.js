// arr 함수들
// map: 바꿔주기
// filter: 걸러주기, 어떠한 조건에 부합하는 요소만 남겨주는 것이 filter

[10, 20, 30, 40, 50].filter((x) => {
  return 30 > x;
});

[10, 20, 30, 40, 50].filter((x) => {
  return x == 20 || x == 40;
});

//5.answer
// 메소드 체이닝(method chaining)
fruitArray.filterx[
  //every: 어떠한 조건에 모든 요소가 부합한가? 물어볼떄 사용하는것(return Boolean)
  (10, 20, 30, 40, 50)
].every((x) => {
  return x > 10;
});

//some: 어떠한 조건에 하나 요소가 부합함?(return Boolean)
[10, 20, 30, 40, 50].some((x) => {
  return x > 60; // x > 60으로 10~50밖에 없으니 이 문장은 false
});

//배열 만들기

//열칸 만들기[]
//map 안에 i는 요소중 내가 몇번쨰인지 알려달라는 명령어
Array(10)
  .fill(1)
  .map((x, i) => {
    return x + 1;
  });
