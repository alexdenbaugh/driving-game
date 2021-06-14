var $car = document.querySelector('img');

var carData = {
  direction: 'right',
  location: {
    x: 0,
    y: 0
  },
  carId: null,
  started: false,
  controlKeys: ['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight', ' ']
};

function changeDirection(direction) {
  $car.className = 'direction-' + direction;
  carData.direction = direction;
}

function go() {
  carData.location.x += 5;
  $car.style.left = `${carData.location.x}px`;
}

document.addEventListener('keydown', function (event) {
  if (!carData.controlKeys.includes(event.key)) {
    return;
  }
  if (event.key === 'ArrowDown') {
    changeDirection('down');
  } else if (event.key === 'ArrowUp') {
    changeDirection('up');
  } else if (event.key === 'ArrowLeft') {
    changeDirection('left');
  } else if (event.key === 'ArrowRight') {
    changeDirection('right');
  } else if (event.key === ' ') {
    if (carData.started) {
      clearInterval(carData.carId);
      carData.started = false;
    } else {
      carData.carId = setInterval(go, 16);
      carData.started = true;
    }
  }
});
