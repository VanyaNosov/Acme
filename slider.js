const slidContainer = document.getElementById('slid_container');
const slidsCollection = [...document.getElementsByClassName('slid_content_block')];
const slidContent = document.getElementById('slid_container');
const slider = document.getElementById('slider');
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
const arraySlid = document.getElementById('slid_container').childNodes;
const buttonsss = document.getElementById('buttons_dsds');
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

function creatingElementsButtons () {
  let arraySlid = document.getElementById('slid_container').childNodes;
  arraySlid = Array.prototype.slice.call(arraySlid);
  const containerButtons = document.createElement('ol');
  containerButtons.className = 'button_block';
  slider.appendChild(containerButtons)
  const res = arraySlid.filter(el => el.className === 'slid_content_block')
  for(i = 0; i < res.length; i++) {
  (function (index) {
    let buttons = document.createElement('li');
    buttons.className = 'button_slid_click_active m_button_slid_click_no_active';
    buttons.id = `button_bottom_${i}`;
    containerButtons.appendChild(buttons)
    buttons.addEventListener('click', () => {
      sliderUsingButton(index)
    })
  })(i)
}
  let bla = containerButtons.firstChild
  bla.className = 'button_slid_click_active m_button_slid_click_active'
  containerButtons.className = 'button_block';
  containerButtons.id = 'button_bottom';
}
creatingElementsButtons() 
startState()

function globalAmin (direction,slidsCollectionArgument,array, parentVariable) {
  some(direction)
  const needPutIndex = someTwo(direction);
  slideDistribution(direction, slidsCollectionArgument[needPutIndex],array,parentVariable)
  console.log(direction)
}

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



