'use strict';

const mql600 = window.matchMedia('(min-width: 600px)');
const mql900 = window.matchMedia('(min-width: 900px)');
const snake = document.querySelector('.snake');

const snakeStyle = window.getComputedStyle(snake, null);
let gridTempOld = snakeStyle.getPropertyValue('grid-template');

function evt() {
  const gridTemp = snakeStyle.getPropertyValue('grid-template');

  snake.setAttribute('style', 'grid-template: '
    + gridTempOld.replace(' / none', ''));

  snake.classList.add('snake--animate-in');

  setTimeout(() => {
    snake.classList.remove('snake--animate-in');
    snake.classList.add('snake--animate-out');
  }, 400);

  setTimeout(() => snake.setAttribute('style', 'grid-template: '
  + gridTemp.replace(' / none', '')), 800);
  gridTempOld = gridTemp.replace(' / none', '');
}

mql600.addListener(evt);
mql900.addListener(evt);
