const slidButtonOne = document.getElementById('slid_button_one');
const slidButtonTwo = document.getElementById('slid_button_two');
const slidButtonThree = document.getElementById('slid_button_three');
const slidMediaOne = document.getElementById('slid_media_one');
const slidMediaTwo = document.getElementById('slid_media_two');
const slidMediaThree = document.getElementById('slid_media_three');
const buttonsObject = {
  slidButtonOne: document.getElementById('slid_button_one'),
  slidButtonTwo: document.getElementById('slid_button_two'),
  slidButtonThree: document.getElementById('slid_button_three'),
}
const setStylesOfButtons = (eventButton, opacity) => {
  let direction;
  switch(eventButton) {
    case 'slid_button_one':
      direction = ['slid_button_one', 'slid_button_two', 'slid_button_three'];
    break;  
    case 'slid_button_one':
      direction = ['slid_button_two', 'slid_button_one', 'slid_button_three'];
    break; 
    case 'slid_button_one':
      direction = ['slid_button_three', 'slid_button_two', 'slid_button_one'];
    break; 
  }
  buttonsObject[direction[0]].style.background = '#f4f4f4';
  buttonsObject[direction[1]].style.background = '#48cfad';
  buttonsObject[direction[2]].style.background = '#48cfad';
}

slidButtonOne.addEventListener('click', () => {
  setStylesOfButtons('slid_button_one', '1')
})

slidButtonTwo.addEventListener('click', () => {
  setStylesOfButtons('slid_button_two', '1')
})

slidButtonThree.addEventListener('click', () => {
  setStylesOfButtons('slid_button_three', '1')
})



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