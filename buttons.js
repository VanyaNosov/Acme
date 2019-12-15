const slidButtonOne = document.getElementById('slid_button_one');
const slidButtonTwo = document.getElementById('slid_button_two');
const slidButtonThree = document.getElementById('slid_button_three');
const slidMediaOne = document.getElementById('slid_media_one');
const slidMediaTwo = document.getElementById('slid_media_two');
const slidMediaThree = document.getElementById('slid_media_three');
const oneSlidв = document.getElementById('one_slid');
const twoSlidв = document.getElementById('two_slid');
const threeSlidв = document.getElementById('three_slid');

const buttonsFunc = (direction,directionTwo) => {
  const buttonsArray = [slidButtonOne,slidButtonTwo, slidButtonThree];
  const buttonsArrayTwo = [oneSlidв,twoSlidв, threeSlidв];
  buttonsArray.forEach(function(buttonsNoActive) {
    buttonsNoActive.className = 'slidMediaNoActive';
    buttonsArrayTwo.className = 'button_slid_click_no_active';
  });
  buttonsArrayTwo.forEach(function(buttonsArrayTwo) {
    buttonsArrayTwo.className = 'button_slid_click_no_active';
  });
  direction.className = 'slidMediaActive';
  directionTwo.className = 'button_slid_click_active';
}
slidButtonOne.addEventListener('click', () => {
  buttonsFunc(slidButtonOne,'')
})

slidButtonTwo.addEventListener('click', () => {
  buttonsFunc(slidButtonTwo,'')
})

slidButtonThree.addEventListener('click', () => {
  buttonsFunc(slidButtonThree,'')
})

oneSlidв.addEventListener('click', () => {
  buttonsFunc('',oneSlidв)
})

twoSlidв.addEventListener('click', () => {
  buttonsFunc('',twoSlidв)
})

threeSlidв.addEventListener('click', () => {
  buttonsFunc('',threeSlidв)
})
// slidButtonOne.addEventListener('click', () => {
//   slidButtonOne.className = 'slidMediaActive';
//   slidButtonTwo.className = 'slidMediaNoActive';
//   slidButtonThree.className = 'slidMediaNoActive';
// })

// slidButtonTwo.addEventListener('click', () => {
//   slidButtonOne.className = 'slidMediaNoActive';
//   slidButtonTwo.className = 'slidMediaActive';
//   slidButtonThree.className = 'slidMediaNoActive';
// })

// slidButtonThree.addEventListener('click', () => {
//   slidButtonOne.className = 'slidMediaNoActive';
//   slidButtonTwo.className = 'slidMediaNoActive';
//   slidButtonThree.className = 'slidMediaActive';
// })

// const buttonsObject = {
//   slidButtonOne: document.getElementById('slid_button_one'),
//   slidButtonTwo: document.getElementById('slid_button_two'),
//   slidButtonThree: document.getElementById('slid_button_three'),
// }
// const slidMediaObject = {
//   slidMediaOne: document.getElementById('slid_media_one'),
//   slidMediaTwo: document.getElementById('slid_media_two'),
//   slidMediaThree: document.getElementById('slid_media_three'),
// }

// const setStylesOfButtons = (eventButton, eventButtonTwo, opacity) => {
//   let directionOneEvent;
//   let directionTwoEvent;
//   switch(eventButton) {
//     case 'slidButtonOne':
//     directionOneEvent = ['slidButtonOne', 'slidButtonTwo', 'slidButtonThree'];
//     break;  
//     case 'slidButtonTwo':
//     directionOneEvent = ['slidButtonTwo', 'slidButtonOne', 'slidButtonThree'];
//     break; 
//     case 'slidButtonThree':
//     directionOneEvent = ['slidButtonThree', 'slidButtonTwo', 'slidButtonOne'];
//     break; 
//   }
//   buttonsObject[directionOneEvent[0]].style.background = '#f4f4f4';
//   buttonsObject[directionOneEvent[1]].style.background = '#48cfad';
//   buttonsObject[directionOneEvent[2]].style.background = '#48cfad';
// }

// slidButtonOne.addEventListener('click', () => {
//   setStylesOfButtons('slidButtonOne','slid_media_one','1')
// })

// slidButtonTwo.addEventListener('click', () => {
//   setStylesOfButtons('slidButtonTwo','slid_media_two','1')
// })

// slidButtonThree.addEventListener('click', () => {
//   setStylesOfButtons('slidButtonThree','slid_media_three','1')
// })



// slidButtonOne.addEventListener('click', () => {
//   slidMediaOne.style.opacity = '1';
//   slidMediaTwo.style.opacity = '0';
//   slidMediaThree.style.opacity = '0';
//   slidButtonOne.style.color = '#777';
//   slidButtonTwo.style.color = '#fff';
//   slidButtonThree.style.color = '#fff';
//   slidButtonOne.style.background = '#f4f4f4';
//   slidButtonTwo.style.background = '#48cfad';
//   slidButtonThree.style.background = '#48cfad';
// })

// slidButtonTwo.addEventListener('click', () => {
//   slidMediaOne.style.opacity = '0';
//   slidMediaTwo.style.opacity = '1';
//   slidMediaThree.style.opacity = '0';
//   slidButtonOne.style.color = '#fff';
//   slidButtonTwo.style.color = '#777';
//   slidButtonThree.style.color = '#fff';
//   slidButtonTwo.style.background = '#f4f4f4';
//   slidButtonOne.style.background = '#48cfad';
//   slidButtonThree.style.background = '#48cfad';
// })

// slidButtonThree.addEventListener('click', () => {
//   slidMediaOne.style.opacity = '0';
//   slidMediaTwo.style.opacity = '0';
//   slidMediaThree.style.opacity = '1';
//   slidButtonOne.style.color = '#fff';
//   slidButtonTwo.style.color = '#fff';
//   slidButtonThree.style.color = '#777';
//   slidButtonTwo.style.background = '#48cfad';
//   slidButtonOne.style.background = '#48cfad';
//   slidButtonThree.style.background = '#f4f4f4';
// })

// buttonContainerFoure.addEventListener('click', () => {
//   buttonContainerFoure.style.background = '#48cfad';
// })
