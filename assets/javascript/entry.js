import '../css/app.scss'
import i18n from 'i18next'
//import resources from '../../locales'  // typescript: import * as resources from '../locales'

i18n.init({
  lng: 'en',
  debug: true,
  resources: {
    en: {
      translation: {
        "key": "Meke - En"
      }
    },
    de: {
      translation: {
        "key": "Mekito"
      }
    }
  }
}, function(err, t) {
  // init set content
  updateContent();
});

function updateContent() {
  //document.getElementsByClassName('nombre').innerHTML = i18n.t('key');
  let element = document.getElementsByClassName('nombre')[0];
  console.log(element);
  if (element) { element.innerHTML = i18n.t('key') }

}

function changeLng(lng) {
  i18n.changeLanguage(lng);
}

i18n.on('languageChanged', () => {
  updateContent();
});






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
