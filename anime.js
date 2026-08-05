let degree = 0;
const colors = ["red", "yello", "green", "blue"];
setInterval(() => {
  degree += 90;

  text.style.transform = `rotate(${degree}deg)`;

  const colorIndex = (degree / 90) % 4;
  text.style.color = colors[colorIndex];
}, 1000);
