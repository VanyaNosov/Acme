const slidButtonOne = document.getElementById('slid_button_one');
const slidButtonTwo = document.getElementById('slid_button_two');
const slidButtonThree = document.getElementById('slid_button_three');
const slidMediaOne = document.getElementById('slid_media_one');
const slidMediaTwo = document.getElementById('slid_media_two');
const slidMediaThree = document.getElementById('slid_media_three');
const oneSlidв = document.getElementById('button_bottom_0');
const twoSlidв = document.getElementById('button_bottom_1');
const threeSlidв = document.getElementById('button_bottom_2');
const oneButtonSliderFour = document.getElementById('button_slider_two_left');
const twoButtonSliderFour = document.getElementById('button_slider_two_right');
const sliderFour = document.getElementById('slider_four_container');

const buttonsSliderFour = (direction) => {
  let sliderFourChilds = document.getElementById('slider_four_container').childNodes;
  sliderFourChilds = Array.prototype.slice.call(sliderFourChilds);
  const res = sliderFourChilds.filter(el => el.className === 'slid_content_media_two')
  function scrollCount () {
    let slidLenghtRight = res.length - 4;
    let slidLenghtLeft;
    slidLenghtLeft = slidLenghtRight;
    const scrollToRight = slidLenghtRight * 285;
    const scrollToLeft = slidLenghtLeft * 285;
    if(direction === 'right') {
      sliderFour.style.right = '0';
      sliderFour.style.left = -scrollToRight;
    }else {
      sliderFour.style.left = '0';
      sliderFour.style.right = -scrollToLeft;
    }
  }scrollCount();
}

const buttonsStylesFunc = (direction,directionThree) => {
  const buttonsArray = [slidButtonOne,slidButtonTwo, slidButtonThree];
  const slidArrayTwo = [slidMediaOne,slidMediaTwo, slidMediaThree];
  buttonsArray.forEach(function(buttonsNoActive) {
    buttonsNoActive.classList.remove('m_slidMediaActive');
    buttonsNoActive.classList.add('m_slidMediaNoActive');
  });
  slidArrayTwo.forEach(function(slidArrayTwo) {
    slidArrayTwo.style.opacity = '0';
  });
  direction.classList.remove('m_slidMediaNoActive');
  direction.classList.add('m_slidMediaActive');
  directionThree.style.opacity = '1';
}

const buttonsStylesFuncTwo = (directionTwo) => {
  const buttonsArrayTwo = [oneSlidв,twoSlidв, threeSlidв];
  buttonsArrayTwo.forEach(function(buttonsArrayTwo) {
    buttonsArrayTwo.classList.add('m_button_slid_click_no_active');
    buttonsArrayTwo.classList.remove('m_button_slid_click_active');
  });
  directionTwo.classList.remove('m_button_slid_click_no_active');
  directionTwo.classList.add('m_button_slid_click_active');
}

slidButtonOne.addEventListener('click', () => {
  buttonsStylesFunc(slidButtonOne,slidMediaOne)
})

slidButtonTwo.addEventListener('click', () => {
  buttonsStylesFunc(slidButtonTwo,slidMediaTwo)
})

slidButtonThree.addEventListener('click', () => {
  buttonsStylesFunc(slidButtonThree,slidMediaThree)
})

oneSlidв.addEventListener('click', () => {
  buttonsStylesFuncTwo(oneSlidв)
})

twoSlidв.addEventListener('click', () => {
  buttonsStylesFuncTwo(twoSlidв)
})

threeSlidв.addEventListener('click', () => {
  buttonsStylesFuncTwo(threeSlidв)
})

twoButtonSliderFour.addEventListener('click', () => {
  oneButtonSliderFour
  buttonsSliderFour('right')
})

oneButtonSliderFour.addEventListener('click', () => {
  buttonsSliderFour('left')
})