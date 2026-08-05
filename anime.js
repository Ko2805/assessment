alert("JavaScriptが動いています！");

document.addEventListener('DOMContentLoaded', function () {

  let heading = document.getElementById('heading');

  let degree = 0;

  function rotateHeading() {

    degree = degree + 6;

    if (degree >= 360) {
      degree = 0;
    }

    // 回転角度によって色を変更
    if (degree < 90) {
      heading.className = 'color1';

    } else if (degree < 180) {
      heading.className = 'color2';

    } else if (degree < 270) {
      heading.className = 'color3';

    } else {
      heading.className = 'color4';
    }

    // X方向に回転
    heading.style.transform = 'rotateX(' + degree + 'deg)';
  }

  // 20ミリ秒ごとに実行
  setInterval(rotateHeading, 20);

});
