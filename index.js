const leftSlide = document.querySelectorAll('.slider__left-slide'),
    rightSlide = document.querySelectorAll('.slider__right-slide');
let windowHeight = document.querySelector('.wrapper').clientHeight;

const colors = ['#446A64', '#F76600', '#FEF943', '#9EB2AF'];

let index = 0,
    wheeling;

window.onload = function() {
  // resize the window
  addResizeHandler();
  this.addEventListener('resize', addResizeHandler);

  // mouse scrolling
  document.addEventListener('wheel', (event) => {
    addMouseScrollHandler(event);
  }, {passive: false});

  // button clicking
  addButtonClickHandler();
}

const addResizeHandler = () => {
  windowHeight = document.querySelector('.wrapper').clientHeight;
  for (let i = 0; i < leftSlide.length; i++) {
    leftSlide[i].style.backgroundColor = colors[i];
    leftSlide[i].style.top = - windowHeight*i + "px";
    rightSlide[i].style.top = windowHeight*i + "px";
  }
}

const addMouseScrollHandler = (event) => {
  clearTimeout(wheeling);
  event.preventDefault();
  let e = window.event || e;
  const delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

  wheeling = setTimeout(() => {
    wheeling = undefined;
    if (delta === 1) {
      clickToMoveUp();
    }
    if (delta === -1) {
      clickToMoveDown();
    }
  }, 100);

  smoothTransition();
}

const addButtonClickHandler = () => {
  const mouseClick = document.querySelector('.slider__controls');
  mouseClick.addEventListener('click', (event) => {
    if(event.target.classList.contains('controls__control-up')) {
      clickToMoveUp();
    }
    if(event.target.classList.contains('controls__control-down')) {
      clickToMoveDown();
    }
    smoothTransition();
  });
}

const clickToMoveUp = () => {
  index++;
  for(let i = 0; i < leftSlide.length; i++) {
    leftSlide[i].style.top = parseInt(leftSlide[i].style.top) + windowHeight + "px";
    rightSlide[i].style.top = parseInt(rightSlide[i].style.top) - windowHeight + "px";
  }

  if (index > leftSlide.length - 1) {
    index = 0;
    for (let i = 0; i < leftSlide.length; i++) {
      leftSlide[i].style.top = -windowHeight * i + "px";
      rightSlide[i].style.top = windowHeight * i + "px";
    }
  }
}

const clickToMoveDown = () => {
  index--;
  for(let i = 0; i < leftSlide.length; i++) {
    leftSlide[i].style.top = parseInt(leftSlide[i].style.top) - windowHeight + "px";
    rightSlide[i].style.top = parseInt(rightSlide[i].style.top) + windowHeight + "px";
  }

  if (index < 0) {
    index = rightSlide.length - 1;
    for (let i = 0; i < leftSlide.length; i++) {
      leftSlide[i].style.top = parseInt(leftSlide[i].style.top) + leftSlide.length * windowHeight + "px";
      rightSlide[i].style.top = parseInt(rightSlide[i].style.top) - rightSlide.length * windowHeight + "px";
    }
  }
}

const smoothTransition = () => {
  for (let i = 0; i < leftSlide.length; i++) {
    leftSlide[i].style.transition = "all 1s"
    rightSlide[i].style.transition = "all 1s";
  }
}