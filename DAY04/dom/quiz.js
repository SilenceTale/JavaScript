// 2000개 [빨,주,노,초,파,남,보]

const container = document.createElement("div");
container.classList.add("container");

const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "skyblue",
  "pink",
];
Array(2000)
  .fill(0)
  .forEach((v, i) => {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = colors[i % colors.length];
    container.appendChild(box);
  });

document.body.appendChild(container);
