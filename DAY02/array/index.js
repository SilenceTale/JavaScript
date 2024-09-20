//기본 타입: String, number, Boolean, Null, Undefined
//참조 타입: Array

// Array(배열):[]
//시작: 0번째부터
const paik = ["아메리카노", "라떼", "모카", "바닐라"];
console.log(paik);
console.log(paik[2]);

//서브웨이
// 빵 메뉴 고르기[플랫, 화이트, 위트]
// 치즈 메뉴 고르기[슈레드, 모짜렐라, 아메리칸치즈]
// 소스 메뉴 고르기[머스타드, 핫칠리, 소금, 후추, 스언, 홀레]
// 쿠키 메뉴 고르기[화이트, 초콜릿, 아몬드]
// 음료 메뉴 고르기[콜라, 제로콜라, 스프라이트, 커피]
// 최종 메뉴는 (플랫-모짜렐라-소금-아몬드-콜라)

const bread = ["플랫", "화이트", "위트"];
const cheese = ["슈레드", "모짜렐라", "아메리칸치즈"];
const souce = ["머스타드", "핫칠리", "소금", "후추", "스언", "홀레"];
const cookie = ["화이트", "초콜릿", "아몬드"];
const drink = ["콜라", "제로콜라", "스프라이트", "커피"];

const quest1 = prompt(`${bread} 중 고르셈(0~2)`);
const quest2 = prompt(`${cheese} 치즈 고르셈(0~2) `);
const quest3 = prompt(`${souce} 소스 고르셈 (0~5)`);
const quest4 = prompt(`${cookie} 쿠키 고르셈(0~2)`);
const quest5 = prompt(`${drink} 음료 고르셈(0~3)`);

console.log(
  `최종 메뉴:${bread[quest1]}-${cheese[quest2]}-${souce[quest3]}-${cookie[quest4]}-${drink[quest5]}`
);
