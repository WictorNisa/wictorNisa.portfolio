const modal = document.getElementById('simpleModal');
const modalOpenOne = document.querySelector('.project1');
const modalContent = document.querySelector('.modal-content');
const closeButton = document.querySelector('.close-modal');


window.addEventListener('click', openModal);
window.addEventListener('click', outsideClick);
modal.addEventListener('click', closeModal);


function outsideClick(e) {
  if(e.target == modal) {
    modal.style.display = 'none';
  }
}

function closeModal(e) {
  if(e.target == closeButton){
    modal.style.display = 'none';
  }
}

function openModal(e){
  const cloesetDiv1 = e.target.closest('.project1')
  const cloesetDiv2 = e.target.closest('.project2')
  const cloesetDiv3 = e.target.closest('.project3')
  const cloesetDiv4 = e.target.closest('.project4')
  if(cloesetDiv1) {
    console.log('HI');
    modal.style.display = 'flex';
    let html = `
    <button class="close-modal">X</button>
    <img class="modal-img-view" src="img/project-5-img.png">
    <h2 class="bigH">Photo Gallery</h2>
    <p class="modal-p">A photo gallery project where I had to use CSS grids and the JQuery library and two plugins, one of them being a lightbox plugin.</p>
    <div>
    <button class="github-button">Github</button>
    <button class="liveproject-button">Live Example</button>
    </div>
    `;
    modalContent.innerHTML = html;
    }
    else if (cloesetDiv2) {
    console.log('HI this is number 2');
    modal.style.display = 'flex';
    }
    else if (cloesetDiv3) {
    console.log('HI this is number 3');
    modal.style.display = 'flex';
    }
    else if (cloesetDiv4) {
    console.log('HI this is number 4');
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
