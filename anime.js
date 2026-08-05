let heading = document.getElementById('lucky');

let degree = 0;

function rotateLucky() {

  degree = degree + 6;

  if (degree >= 360) {
    degree = 0;
  }

  if (degree < 90) {
    lucky.className = 'color1';

  } else if (degree < 180) {
    lucky.className = 'color2';

  } else if (degree < 270) {
    lucky.className = 'color3';

  } else {
    lucky.className = 'color4';
  }

  lucky.style.transform = 'rotateX(' + degree + 'deg)';
}

setInterval(rotateLucky, 20);
