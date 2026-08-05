const text = document.getElementById("text");

let angle = 0;

const colors = ["blue", "green", "yellow", "red"];

setInterval(() => {
  angle += 90;

  text.style.transform = `rotate(${angle}deg)`;

  const colorIndex = (angle / 90) % 4;
  text.style.color = colors[colorIndex];
}, 1000);
