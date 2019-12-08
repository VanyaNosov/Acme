const slidContainer = document.getElementById('slid_container');
const slidsCollection = [...document.getElementsByClassName('slid_content_block')];
const slidContent = document.getElementById('slid_container');
const slidBottomLeft = document.getElementById('button_left');
const slidBottomRight = document.getElementById('button_rigth');
const oneSlid = document.getElementById('slid_two');
const oneSlidButton= document.getElementById('one_slid');
const TwoSlidButton= document.getElementById('two_slid');
const ThreeSlidButton = document.getElementById('three_slid');
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
  const cloneMediaTwoTwo = cloneMediaTwo.cloneNode(true);
  slidContainer.innerHTML = '';
  slidContentMedia.innerHTML = '';
  slidContentMedia.appendChild(cloneMediaTwo);
  slidContentMedia.insertBefore(cloneMediaOne, cloneMediaTwo)
  slidContentMedia.insertBefore(cloneMediaTwoTwo, cloneMediaOne)
  slidContainer.appendChild(cloneThree)
  slidContainer.insertBefore(cloneOne, cloneThree)
  slidContainer.insertBefore(cloneTwo, cloneOne)
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
  const slidArray = document.getElementsByClassName('slid_content_block');
  const slidArrayMedia = document.getElementsByClassName('slid_content_block_media');
  if (index === 0 && direction === 'left') {
    index = slidArray.length - 1;
  } else if (direction === 'left') {
    index = index - 1
  }

  if (index === slidArray.length - 1 && direction === 'right') { 
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
  const slidArray = document.getElementsByClassName('slid_content_block');
  const slidArrayMedia = document.getElementsByClassName('slid_content_block_media');
  if (index === 0 && direction === 'left') {
    nextIndex = slidArray.length - 1;
  } else if (direction === 'left') {
    nextIndex = index - 1
  }
  if (index === slidArray.length - 1 && direction === 'right') { 
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

function sliderUsingButton (indexSlidButton) {
  let indexSlidB = indexSlidButton - index;
  if(indexSlidB > 0) {
    for(i = 0; i < Math.abs(indexSlidB); i++) {
      globalAmin('right')
  }
  console.log(indexSlidB)
  }else {
    console.log(indexSlidB)
    for(i = 0; i < Math.abs(indexSlidB); i++) {
      globalAmin('left')
    }
  }
}

startState ()

function globalAmin (direction) {
  some(direction)
  const needPutIndex = someTwo(direction);
  slideDistribution (direction, slidsCollection[needPutIndex])
}

function globalAminTwo (direction) {
  some(direction)
  const needPutIndex = someTwo(direction);
  slideDistribution (direction, slidsCollectionTwo[needPutIndex])
}

function globalAminTwo (direction) {
  some(direction)
  const needPutIndex = someTwo(direction);
  slideDistribution (direction, slidsCollectionTwo[needPutIndex])
}

slidBottomRight.addEventListener('click', () => {
  globalAmin('right')
})

slidBottomLeft.addEventListener('click', () => {
  globalAmin('left')
})

buttonslidmediaright.addEventListener('click', () => {
  globalAminTwo('rightMedia')
})

button_slid_media_left.addEventListener('click', () => {
  globalAminTwo('leftMedia')
})

oneSlidButton.addEventListener('click', () => {
  sliderUsingButton(0)
})

TwoSlidButton.addEventListener('click', () => {
  sliderUsingButton(1)
})

ThreeSlidButton.addEventListener('click', () => {
  sliderUsingButton(2)
})
