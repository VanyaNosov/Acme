const buttonContainerFoure = document.getElementById('button_container_foure');
const body = document.getElementById('body');
const slidButtonOne = document.getElementById('slid_button_one');
const slidButtonTwo = document.getElementById('slid_button_two');
const slidButtonThree = document.getElementById('slid_button_three');
const slidMediaOne = document.getElementById('slid_media_one');
const slidMediaTwo = document.getElementById('slid_media_two');
const slidMediaThree = document.getElementById('slid_media_three');

slidButtonOne.addEventListener('click', () => {
  slidMediaOne.style.opacity = '1';
  slidMediaTwo.style.opacity = '0';
  slidMediaThree.style.opacity = '0';
  slidButtonOne.style.color = '#777';
  slidButtonTwo.style.color = '#fff';
  slidButtonThree.style.color = '#fff';
  slidButtonOne.style.background = '#f4f4f4';
  slidButtonTwo.style.background = '#48cfad';
  slidButtonThree.style.background = '#48cfad';
})

slidButtonTwo.addEventListener('click', () => {
  slidMediaOne.style.opacity = '0';
  slidMediaTwo.style.opacity = '1';
  slidMediaThree.style.opacity = '0';
  slidButtonOne.style.color = '#fff';
  slidButtonTwo.style.color = '#777';
  slidButtonThree.style.color = '#fff';
  slidButtonTwo.style.background = '#f4f4f4';
  slidButtonOne.style.background = '#48cfad';
  slidButtonThree.style.background = '#48cfad';
})

slidButtonThree.addEventListener('click', () => {
  slidMediaOne.style.opacity = '0';
  slidMediaTwo.style.opacity = '0';
  slidMediaThree.style.opacity = '1';
  slidButtonOne.style.color = '#fff';
  slidButtonTwo.style.color = '#fff';
  slidButtonThree.style.color = '#777';
  slidButtonTwo.style.background = '#48cfad';
  slidButtonOne.style.background = '#48cfad';
  slidButtonThree.style.background = '#f4f4f4';
})

buttonContainerFoure.addEventListener('click', () => {
  buttonContainerFoure.style.background = '#48cfad';
})

// body.addEventListener('click', () => {
//   // if(buttonContainerFoure.style.background === '#48cfad') {
//   // buttonContainerFoure.style.background === 'red';
// // }
  
//   buttonContainerFoure.style.background = '#475168';
// })







