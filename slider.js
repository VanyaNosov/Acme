const slidContainer = document.getElementById('slid_container')
const slidsCollection = [...document.getElementsByClassName('slid_content_block')]
const slidContent = document.getElementById('slid_container')
const slidBottomLeft = document.getElementById('button_left')
const slidBottomRight = document.getElementById('button_rigth')
const oneSlidBottom = document.getElementById('one_slid')
const TwoSlidBottom = document.getElementById('two_slid')
const ThreeSlidBottom = document.getElementById('three_slid')
const oneSlid = document.getElementById('slid_two')
let index = 0;
let nextIndex = 1;
function startState () {
  const cloneOne = slidsCollection[0].cloneNode(true)
  const cloneThree = slidsCollection[1].cloneNode(true)
  const cloneTwo = slidsCollection[slidsCollection.length - 1].cloneNode(true)
  slidContainer.innerHTML = '';
  slidContainer.appendChild(cloneOne)
  slidContainer.insertBefore(cloneTwo, cloneOne)
  slidContainer.insertBefore(cloneThree, cloneOne)
}

function slideDistribution (direction, slide) {
  const slidArray = document.getElementsByClassName('slid_content_block');
  const cloneOne = slide.cloneNode(true);
  if(direction === 'right') {
    slidContent.removeChild(slidArray[0]);
    slidContent.appendChild(cloneOne);
  }else {
    slidContent.removeChild(slidArray[slidArray.length - 1])
    slidContent.insertBefore(cloneOne, slidArray[0]);
  }
}

function some (direction) {
  if (index === 0 && direction === 'left') {
    index = 2;
  } else if (direction === 'left') {
    index = index - 1
  }
  if (index === 2 && direction === 'right') { 
    index = 0
  } else if (direction === 'right') {
    index = index + 1;
  }
}

function someTwo (direction) {
  if (index === 0 && direction === 'left') {
    nextIndex = 2;
  } else if (direction === 'left') {
    nextIndex = index - 1
  }
  if (index === 2 && direction === 'right') { 
    nextIndex = 0
  } else if (direction === 'right') {
    nextIndex = index + 1;
  }
  return nextIndex;
}

// function funcButtonNavigator (direction) {

// }

startState ()

function globalAmin (direction) {
  some(direction)
  const needPutIndex = someTwo(direction);
  slideDistribution (direction, slidsCollection[needPutIndex])
  // funcButtonNavigator(direction);
}

oneSlidBottom.addEventListener('click', () => {
  globalAmin('oneButton')
})

slidBottomRight.addEventListener('click', () => {
  globalAmin('right')
})

slidBottomLeft.addEventListener('click', () => {
  globalAmin('left')
})

