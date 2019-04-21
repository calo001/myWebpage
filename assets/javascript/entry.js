import '../css/app.scss'

let menuActive = document.querySelector("#my_nav");
document.querySelector(".floatingmenu").onclick = function(){
  menuActive.classList.toggle("menu_active");
};

let elementsMenu = document.querySelectorAll(".menu_active a");
elementsMenu.forEach( (el)=> {
  el.onclick = function(){
    menuActive.classList.remove("menu_active");
  };
} );

// Lazy load

let lazyImages = [...document.querySelectorAll('.lazy')]
let inAdvance = 300;

function lazyLoad() {
  lazyImages.forEach(image => {
    if (image.offsetTop < window.innerHeight + window.pageYOffset + inAdvance) {
      image.src = image.dataset.src;
      image.onload = () => image.classList.remove('lazy')
    }
  });
}

lazyLoad();
window.addEventListener('scroll', lazyLoad, 50);
window.addEventListener('resize', lazyLoad, 50);
