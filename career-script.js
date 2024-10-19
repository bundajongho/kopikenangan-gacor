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


// slider
const slidesContainer = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let currentIndex = 1;
let isTransitioning = false; 

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);
slidesContainer.appendChild(firstClone); 
slidesContainer.insertBefore(lastClone, slides[0]); 

slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

function showSlide(index) {
  isTransitioning = true;  
  slidesContainer.style.transition = 'transform 0.5s ease';
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  if (isTransitioning) return;

  currentIndex++;
  showSlide(currentIndex);

  slidesContainer.addEventListener('transitionend', () => {
      if (currentIndex === slides.length + 1) {
          slidesContainer.style.transition = 'none';
          currentIndex = 1;
          slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
      }
      isTransitioning = false;  
  });
}

function prevSlide() {
  if (isTransitioning) return;  

  currentIndex--;
  showSlide(currentIndex);

  slidesContainer.addEventListener('transitionend', () => {
      if (currentIndex === 0) {
          slidesContainer.style.transition = 'none';
          currentIndex = slides.length;
          slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
      }
      isTransitioning = false;  
  });
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

setInterval(nextSlide, 3000);
