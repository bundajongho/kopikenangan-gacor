// navbar
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var logo = document.getElementsByClassName("nav-logo")[0];
  var navMenu = document.getElementsByClassName("navbar")[0];

  if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
    logo.classList.add("show");
    navMenu.style.color = "black";
    navMenu.style.backgroundColor = "#7A4B39";
    navMenu.style.boxShadow = "0 1px 10px black";
  } else {
    logo.classList.remove("show");
    navMenu.style.color = "white";
    navMenu.style.backgroundColor = "rgba(0, 0, 0, 0)";
    navMenu.style.boxShadow = "none";
  }
}


