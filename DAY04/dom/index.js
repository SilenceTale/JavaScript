// DOM[HTML+CSS]

// element type
const div = document.createElement("div");
div.innerText = "삼김";
div.style.color = "red";
document.body.appendChild(div);

// 버튼 태그 3개 만들기 [아메리카노] [에이드] [라떼]
//map, foreach(훑어보기)

// ["아메리카노", "에이드", "라떼"].forEach((v) => {
//   const button = document.createElement("button");
//   button.innerText = v;
//   button.style.backgroundcolor = "skyblue";
//   button.style.color = "white";
//   document.body.appendChild(button);
// });

// [아메리카노,노랑색,검은색] [에이드, 핑크색, 하얀색] [라떼,하늘색,주황색]
// const coffee = ["americano", "ade", "latte"];
// const back = ["yellow", "pink", "skyblue"];
// const color = ["black", "white", "orange"][("아메리카노", "에이드", "라떼")]
//   .map((x) => {
//     const button = document.createElement("button");
//     button.innerText = v;
//   })

// [
//   { name: "아메리카노", bg: "yellow", color: "black" },
//   { name: "에이드", bg: "pink", color: "white" },
//   { name: "라떼", bg: "skyblue", color: "orange" },
// ].forEach((v) => {
//   const button = document.createElement("button");
//   button.innerText = v.name;
//   button.style.backgroundcolor = v.bg;
//   button.style.color = v.color;
//   document.body.appendChild(button);
// });

// 사이트의 기획 먼저 파악해야함
// [html + css] + [js]
const container = document.createElement("div");
// className
// container.className = "container"

// classList
container.classList.add("container"); // <div claas="container"> </div>

const box = document.createElement("div");
box.classList.add("box");
box.style.backgoundcolor = "red";
container.appendChild(box);

const box1 = document.createElement("div");
box1.classList.add("box");
box1.style.backgoundcolor = "yellow";
container.appendChild(box1);

document.body.appendChild(container);
