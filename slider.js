const slidContainer = document.getElementById('slid_container');
const slidsCollection = [...document.getElementsByClassName('slid_content_block')];
const slidContent = document.getElementById('slid_container');
const slidBottomLeft = document.getElementById('button_left');
const slidBottomRight = document.getElementById('button_rigth');
const oneSlidBottom = document.getElementById('one_slid');
const TwoSlidBottom = document.getElementById('two_slid');
const ThreeSlidBottom = document.getElementById('three_slid');
const oneSlid = document.getElementById('slid_two');

const slidsCollectionTwo = [...document.getElementsByClassName('slid_content_block_media')];
const slidContentMedia = document.getElementById('slid_container_two');
const button_slid_media_left = document.getElementById('button_slid_media_left');
const buttonslidmediaright = document.getElementById('button_slid_media_right');

let index = 0;
let nextIndex = 1;
function startState () {
  const cloneOne = slidsCollection[0].cloneNode(true)
  const cloneThree = slidsCollection[1].cloneNode(true)
  const cloneTwo = slidsCollection[slidsCollection.length - 1].cloneNode(true)
  const cloneMediaOne = slidsCollectionTwo[0].cloneNode(true)
  const cloneMediaTwo = slidsCollectionTwo[slidsCollectionTwo.length - 1].cloneNode(true)
  const cloneMediaOneTwo = cloneMediaOne.cloneNode(true);
  slidContainer.innerHTML = '';
  slidContentMedia.innerHTML = '';
  slidContentMedia.appendChild(cloneMediaOne);
  slidContentMedia.insertBefore(cloneMediaTwo, cloneMediaOne)
  slidContentMedia.insertBefore(cloneMediaOneTwo, cloneMediaTwo)
  slidContainer.appendChild(cloneOne)
  slidContainer.insertBefore(cloneTwo, cloneOne)
  slidContainer.insertBefore(cloneThree, cloneOne)
}


function slideDistribution (direction, slide) {
  const slidArray = document.getElementsByClassName('slid_content_block');
  const slidArrayMedia = document.getElementsByClassName('slid_content_block_media');
  const cloneOne = slide.cloneNode(true);
  if(direction === 'right') {
    slidContent.removeChild(slidArray[0]);
    slidContent.appendChild(cloneOne);
  }else if (direction === 'left'){
    slidContent.removeChild(slidArray[slidArray.length - 1]);
    slidContent.insertBefore(cloneOne, slidArray[0]);
  }

  if(direction === 'rightMedia') {
    slidContentMedia.removeChild(slidArrayMedia[0]);
    slidContentMedia.appendChild(cloneOne);
  }else if (direction === 'leftMedia'){
    slidContentMedia.removeChild(slidArrayMedia[slidArrayMedia.length - 1]);
    slidContentMedia.insertBefore(cloneOne, slidArrayMedia[0]);
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

  if (index === 0 && direction === 'leftMedia') {
    index = 1;
  } else if (direction === 'leftMedia') {
    index = index - 1
  }
  if (index === 1 && direction === 'rightMedia') { 
    index = 0
  } else if (direction === 'rightMedia') {
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

  if (index === 0 && direction === 'leftMedia') {
    nextIndex = 1;
  } else if (direction === 'leftMedia') {
    nextIndex = index - 1
  }
  if (index === 1 && direction === 'rightMedia') { 
    nextIndex = 0
  } else if (direction === 'rightMedia') {
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

function globalAminTwo (direction) {
  some(direction)
  const needPutIndex = someTwo(direction);
  slideDistribution (direction, slidsCollectionTwo[needPutIndex])
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

buttonslidmediaright.addEventListener('click', () => {
  globalAminTwo('rightMedia')
  console.log('1')
})

button_slid_media_left.addEventListener('click', () => {
  globalAminTwo('leftMedia')
  console.log('1')
})


