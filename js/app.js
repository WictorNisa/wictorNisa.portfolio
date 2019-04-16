const modal = document.getElementById('simpleModal');
const modalOpenOne = document.querySelector('.project1');


window.addEventListener('click', openModal);


function openModal(e){
  const cloesetDiv1 = e.target.closest('.project1')
  const cloesetDiv2 = e.target.closest('.project2')
  if(cloesetDiv1) {
    console.log('HI');
    modal.style.display = 'flex';
  } else if (cloesetDiv2) {
    console.log('HI this is number 2');
    modal.style.display = 'flex';
    }
  }
















  var rellax = new Rellax('.rellax', {
    speed: -1.5,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });
