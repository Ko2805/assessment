const text = document.getElementById("text");
const button = document.getElementById("rotate");

let angle = 0;
const colors = ["red", "yello", "green", "blue"];
setInterval(() => {
  angle += 90;

  text.style.transform = `rotate(${angle}deg)`;

  const colorIndex = (angle / 90) % 4;
  text.style.color = colors[colorIndex];
}, 1000);
