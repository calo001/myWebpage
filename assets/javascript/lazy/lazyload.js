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
