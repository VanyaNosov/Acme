const slidContainer = document.getElementById('slid_container');
const slidsCollection = [...document.getElementsByClassName('slid_content_block')];
const slidContent = document.getElementById('slid_container');
const slidBottomLeft = document.getElementById('button_left');
const slidBottomRight = document.getElementById('button_rigth');
const oneSlid = document.getElementById('slid_two');
const oneSlidBottom = document.getElementById('one_slid');
const TwoSlidBottom = document.getElementById('two_slid');
const ThreeSlidBottom = document.getElementById('three_slid');
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

function some (direction,indexSt) {
  const slidArray = document.getElementsByClassName('slid_content_block');
  const slidArrayMedia = document.getElementsByClassName('slid_content_block_media');
  index === indexSt;
  console.log(index)
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
    index = slidArrayMedia.length - 1;
  } else if (direction === 'leftMedia') {
    index = index - 1
  }
  if (index === slidArrayMedia.length - 1 && direction === 'rightMedia') { 
    index = 0
  } else if (direction === 'rightMedia') {
    index = index + 1;
  }

  if (index === 0 && direction === 'leftMediaButton') {
    index = slidArrayMedia.length - 1;
  } else if (direction === 'leftMediaButton') {
    index = index - 1
  }
  if (index === slidArrayMedia.length - 1 && direction === 'rightMediaButton') { 
    index = 0
  } else if (direction === 'rightMediaButton') {
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
    nextIndex = slidArrayMedia.length - 1;
  } else if (direction === 'leftMedia') {
    nextIndex = index - 1
  }
  if (index === slidArrayMedia.length - 1 && direction === 'rightMedia') { 
    nextIndex = 0
  } else if (direction === 'rightMedia') {
    nextIndex = index + 1;
  }

  if (index === 0 && direction === 'leftMediaButton') {
    nextIndex = slidArrayMedia.length - 1;
  } else if (direction === 'leftMediaButton') {
    nextIndex = index - 1
  }
  if (index === slidArrayMedia.length - 1 && direction === 'rightMediaButton') { 
    nextIndex = 0
  } else if (direction === 'rightMediaButton') {
    nextIndex = index + 1;
  }
  return nextIndex;
}

function sliderUsingButtons (buttons) {
  const slidArray = document.getElementsByClassName('slid_content_block');
  let indexSlidButton
  if(buttons === 'oneButtons' && slidArray[1].id === 'slid_two') {
    indexSlidButton === index - 2;
  }else if (buttons === 'TwoSlidBottom' && slidArray[1].id === 'slid_one') {
    console.log('1')
  }else if (buttons === 'ThreeSlidBottom' && slidArray[1].id === 'slid_three') {
    indexSlidButton === index + 3;
  }
}

startState ()

function globalAmin (direction) {
  some(direction,undefined)
  const needPutIndex = someTwo(direction);
  sliderUsingButtons()
  slideDistribution (direction, slidsCollection[needPutIndex])
}

function globalAminTwo (direction) {
  some(direction,undefined)
  const needPutIndex = someTwo(direction);
  slideDistribution (direction, slidsCollectionTwo[needPutIndex])
}

function globalAmin (direction) {
  const needPutIndex = someTwo(direction);
  some('leftMediaButton',undefined)
  sliderUsingButtons()
  slideDistribution (direction, slidsCollection[needPutIndex])
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

oneSlidBottom.addEventListener('click', () => {
  globalAmin('oneSlidBottom')
})

TwoSlidBottom.addEventListener('click', () => {
  globalAmin('TwoSlidBottom')
})

ThreeSlidBottom.addEventListener('click', () => {
  globalAmin('ThreeSlidBottom')
})
