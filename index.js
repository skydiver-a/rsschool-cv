window.onload = function() {
  const mouseDown = document.querySelectorAll('.mousedown');
  const index = 0;

  // resize the window
  addResizeHandler();
  this.addEventListener('resize', addResizeHandler);

  // mouse scrolling
  // button clicking
}

const addResizeHandler = () => {
  const leftSlide = document.querySelectorAll('.slider__left-slide'),
       rightSlide = document.querySelectorAll('.slider__right-slide'),
     windowHeight = document.querySelector('.wrapper');

  const colors = ['#446A64', '#E1A175', '#E1DE75', '#9EB2AF'];

  for (let i = 0; i < leftSlide.length; i++) {
    leftSlide[i].style.backgroundColor = colors[i];
    leftSlide[i].style.top = -windowHeight + i + 'px';
    rightSlide[i].style.top = windowHeight + i + 'px';
  }
}