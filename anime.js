let heading = document.getElementById('heading');

let degree = 0;

function rotateHeading() {
  degree = degree + 6;
  degree = degree % 360;

  if (degree === 0) {
    heading.setAttribute('class', 'face');

  } else if (degree === 90) {
    heading.setAttribute('class', 'back');

  } else if (degree === 180) {
    heading.setAttribute('class', 'color3');

  } else if (degree === 270) {
    heading.setAttribute('class', 'color4');
  }

  heading.style.transform = 'rotateX(' + degree + 'deg)';
}

setInterval(rotateHeading, 20);
