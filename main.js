// var carData = {
//   direction: 'right',
//   position: [0, 0]
// };
// var $carDiv = document.querySelector('div.car');
var $car = document.querySelector('img');

function changeDirection(direction) {
  $car.setAttribute('data-direction', direction);
  $car.className = 'direction-' + direction;
}

changeDirection('left');
