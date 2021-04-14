const btnOpen = document.getElementById("btn-open");
const sidebar = document.getElementById("side-bar");
const btnClose = document.getElementById("btn-closes");
const main = document.getElementById("main");
const load = document.getElementById("load");
const loader = document.querySelector(".loader");
const homeLinks = document.getElementById("home-sidebar");
const aboutLinks = document.getElementById("aboutus-sidebar");
const servicesLinks = document.getElementById("services-sidebar");
const contactLinks = document.getElementById("contact-sidebar");
const ourteamLink = document.getElementById("ourteam-sidebar");

homeLinks.addEventListener('click',()=>{
  sidebar.style.left = "-250px";
})

aboutLinks.addEventListener('click',()=>{
  sidebar.style.left = "-250px";
})

servicesLinks.addEventListener('click',()=>{
  sidebar.style.left = "-250px";
})

ourteamLink.addEventListener('click',()=>{
  sidebar.style.left = "-250px";
})


contactLinks.addEventListener('click',()=>{
  sidebar.style.left = "-250px";
})

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



main.style.display = "none";
load.classList.add("load");

setTimeout(() => {
  load.classList.remove("load");
  loader.style.display = "none";
  main.style.display = "block";
}, 1200);

btnOpen.addEventListener("click", () => {
  sidebar.style.left = 0;
});

btnClose.addEventListener("click", () => {
  sidebar.style.left = "-250px";
});

let sliderImage = document.querySelectorAll(".slide"),
  leftArrow = document.querySelector("#left-arrow"),
  rightArrow = document.querySelector("#right-arrow"),
  current = 0;

//   clear all images
const reset = () => {
  for (let i = 0; i < sliderImage.length; i++) {
    sliderImage[i].style.display = "none";
  }
};

// init slide

const startSlide = () => {
  reset();
  sliderImage[0].style.display = "block";
};

const leftSlide = () => {
 setTimeout(()=>{
  reset();
  sliderImage[current - 1].style.display = "block";
  current--;
 },300)
};

const rightSlide = () => {
  setTimeout(() => {
    reset();
    sliderImage[current + 1].style.display = "block";
    current++;
  },300 );
};

leftArrow.addEventListener("click", () => {
  if (current === 0) {
    current = sliderImage.length;
  }
  leftSlide();
});

rightArrow.addEventListener("click", () => {
  if (current === sliderImage.length - 1) {
    current = -1;
  }
  rightSlide();
});

startSlide();



