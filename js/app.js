const modal = document.getElementById('simpleModal');
const modalOpenOne = document.querySelector('.project1');
const modalContent = document.querySelector('.modal-content');
const closeButton = document.querySelector('.close-modal');
const sliderElements = document.querySelectorAll('.slide-in');
const certiModal = document.querySelector('.frontendCerti');


window.addEventListener('click', openModal);
window.addEventListener('click', outsideClick);
modal.addEventListener('click', closeModal);
certiModal.addEventListener('click', openModalCerti);


function openModalCerti(e) {
  modal.style.display = 'flex';
  modal.style.opacity = '.98';
  let html = `
    <img src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/12880007" class="certifi-img">
  `;
  modalContent.innerHTML = html;
}



function outsideClick(e) {
  if(e.target == modal) {
    modal.style.display = 'none';
  }
}

function closeModal(e) {
  if(e.target.classList.contains('close-modal')){
    modal.style.display = 'none';
  }
}

function openModal(e){
  const cloesetDiv1 = e.target.closest('.project1')
  const cloesetDiv2 = e.target.closest('.project2')
  const cloesetDiv3 = e.target.closest('.project3')
  const cloesetDiv4 = e.target.closest('.project4')
  if(cloesetDiv1) {
    modal.style.display = 'flex';
    let html = `
    <img class="modal-img-view" src="img/project-5-img.png">
    <h2 class="bigH">Photo Gallery</h2>
    <p class="modal-p">A photo gallery project where I had to use CSS grids and the JQuery library and two plugins, one of them being a lightbox plugin.</p>
    <div class="modal-buttons">
    <button class="github-button"><a target="_blank" href="https://github.com/WictorNisa/techdegree-project5">Github &#60 &#47 &#62</a></button>
    <button class="liveproject-button"><a target="_blank"
    href="https://agitated-lamport-3acfa8.netlify.com">Live Example &#187;</a></button>
    </div>
    <button class="close-modal">Close</button>
    `;
    modalContent.innerHTML = html;
    }
    else if (cloesetDiv2) {
    modal.style.display = 'flex';
    let html = `
    <img class="modal-img-view" src="img/project-6-img.png">
    <h2 class="bigH">GameShow App </h2>
    <p class="modal-p">A Gameshow app where I had alot of JavaScript pratice working with arrays and the DOM.</p>
    <div class="modal-buttons">
    <button class="github-button"><a target="_blank" href="https://github.com/WictorNisa/Project-6">Github &#60 &#47 &#62</a></button>
    <button class="liveproject-button"><a target="_blank"
    href="https://jolly-haibt-d93b1e.netlify.com">Live Example &#187;</a></button>
    </div>
    <button class="close-modal">Close</button>
    `;
    modalContent.innerHTML = html;
    }
    else if (cloesetDiv3) {
    modal.style.display = 'flex';
    let html = `
    <img class="modal-img-view" src="img/project-7-img.png">
    <h2 class="bigH">Web DashBoard</h2>
    <p class="modal-p">A cool Web dashboard where I had to work with all kinds of tools like, CSS grids, inline SVG and the chart.js library.</p>
    <div class="modal-buttons">
    <button class="github-button"><a target="_blank" href="https://github.com/WictorNisa/Project-7">Github &#60 &#47 &#62</a></button>
    <button class="liveproject-button"><a target="_blank"
    href="https://boring-lamport-32d775.netlify.com">Live Example &#187;</a></button>
    </div>
    <button class="close-modal">Close</button>
    `;
    modalContent.innerHTML = html;
    }
    else if (cloesetDiv4) {
    modal.style.display = 'flex';
    let html = `
    <img class="modal-img-view" src="img/project-8-img.png">
    <h2 class="bigH">Employee directory</h2>
    <p class="modal-p">A very tough but fun project where I had to work with APIS. I got practice with the fetch api, promises and displaying random users everytime the user reloads the interface.</p>
    <div class="modal-buttons">
    <button class="github-button"><a target="_blank" href="https://github.com/WictorNisa/Project-8">Github &#60 &#47 &#62</a></button>
    <button class="liveproject-button"><a target="_blank"
    href="https://dazzling-clarke-7cd055.netlify.com">Live Example &#187;</a></button>
    </div>
    <button class="close-modal">Close</button>
    `;
    modalContent.innerHTML = html;
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

  function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
