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
