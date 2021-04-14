var carData = {
  direction: 'right',
  position: [0, 0],
  controlKeys: ['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight']
};
// var $carDiv = document.querySelector('div.car');
var $car = document.querySelector('img');

function changeDirection(direction) {
  $car.setAttribute('data-direction', direction);
  $car.className = 'direction-' + direction;
  carData.direction = direction;
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
  }
});
