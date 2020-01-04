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
const slidArray = document.getElementsByClassName('slid_content_block');
const slidArrayMedia = document.getElementsByClassName('slid_content_block_media');
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
function slideDistribution (direction, slide,array,parentVariable) {
  const cloneOne = slide.cloneNode(true);
  if(direction === 'right') {
    parentVariable.removeChild(array[0]);
    parentVariable.appendChild(cloneOne);
  }else if (direction === 'left'){
    parentVariable.removeChild(array[array.length - 1]);
    parentVariable.insertBefore(cloneOne, array[0]);
  }

  // if(direction === 'rightMedia') {
  //   slidContentMedia.removeChild(array[0]);
  //   slidContentMedia.appendChild(cloneOne);
  // }else if (direction === 'leftMedia'){
  //   slidContentMedia.removeChild(array[array.length - 1]);
  //   slidContentMedia.insertBefore(cloneOne, array[0]);
  // }
}

function some (direction,array) {
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

  // if (index === 0 && direction === 'leftMedia') {
  //   index = slidArrayMedia.length - 1;
  // } else if (direction === 'leftMedia') {
  //   index = index - 1
  // }
  // if (index === 1 && direction === 'rightMedia') { 
  //   index = 0
  // } else if (direction === 'rightMedia') {
  //   index = index + 1;
  // }
}

function someTwo (direction,array) {
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

  // if (index === 0 && direction === 'leftMedia') {
  //   nextIndex = 1;
  // } else if (direction === 'leftMedia') {
  //   nextIndex = index - 1
  // }
  // if (index === 1 && direction === 'rightMedia') { 
  //   nextIndex = 0
  // } else if (direction === 'rightMedia') {
  //   nextIndex = index + 1;
  // }
  return nextIndex;
}

function sliderUsingButton (indexSlidButton) {
  let indexSlidB = indexSlidButton - index;
  if(indexSlidB > 0) {
    for(i = 0; i < indexSlidB; i++) {
      globalAmin('right', slidsCollection,slidArray,slidContent)
    }
  }else {
    for(i = 0; i < Math.abs(indexSlidB); i++) {
      globalAmin('left', slidsCollection,slidArray,slidContent)
    }
  }
}
startState ()

function globalAmin (direction,slidsCollectionArgument,array, parentVariable) {
  some(direction)
  const needPutIndex = someTwo(direction);
  slideDistribution(direction, slidsCollectionArgument[needPutIndex],array,parentVariable)
  console.log(direction)
}

function arrayButtons () {
  let arraySlidButton = document.getElementById('button_bottom').childNodes;
  arraySlidButton = Array.prototype.slice.call(arraySlidButton);
}

arrayButtons ()

slidBottomRight.addEventListener('click', () => {
  globalAmin('right',slidsCollection,slidArray,slidContent)
})

slidBottomLeft.addEventListener('click', () => {
  globalAmin('left',slidsCollection,slidArray,slidContent)
})

buttonslidmediaright.addEventListener('click', () => {
  globalAmin('right',slidsCollectionTwo,slidArrayMedia,slidContentMedia)
})

button_slid_media_left.addEventListener('click', () => {
  globalAmin('left',slidsCollectionTwo,slidArrayMedia,slidContentMedia)
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


