// spin on icon

document.querySelector(".toggle-settings .fa-cog").onclick = function () {
  this.classList.toggle("fa-spin");
  // toggle class open on setting box
  document.querySelector(".setting-box").classList.toggle("open");
  document.querySelector(".landing-page").classList.toggle("mini");
  document.querySelector(".header-area").classList.toggle("mini");
};

// switch colors

const colorsLi =document.querySelectorAll(".colors-list li");

colorsLi.forEach(li => {

  li.addEventListener("click", (e) => {


  document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

  });
 
});

// select landing page element

let landingPage = document.querySelector(".landing-page");

// array of imgs
let imgsArray = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
  "08.jpg",
  "09.jpg",
  "10.jpg",
];

// change background

setInterval(() => {
  let randomNumber = Math.floor(Math.random() * imgsArray.length);

  landingPage.style.backgroundImage =
    'url("images/' + imgsArray[randomNumber] + '")';
}, 3400);
