// navbar 
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar');

hamburger.addEventListener('click', function() {
  navMenu.classList.toggle('menu-open'); 

  if (navMenu.classList.contains('menu-open')) {
      navMenu.style.backgroundColor = "#7A4B39"; 
  } else {
      navMenu.style.backgroundColor = "rgba(0, 0, 0, 0)"; 
  }
});

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const logo = document.getElementsByClassName("nav-logo")[0];

    if ((document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) || navMenu.classList.contains('menu-open')) {
        logo.classList.add("show");
        navMenu.style.backgroundColor = "#7A4B39"; 
        navMenu.style.boxShadow = "0 1px 10px black"; 
    } else {
        logo.classList.remove("show");
        navMenu.style.backgroundColor = "rgba(0, 0, 0, 0)"; 
        navMenu.style.boxShadow = "none"; 
    }
}
