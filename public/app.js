// =============== changing bg of nav on scroll ===============
document.onscroll = function() {scrollFunction()};

const navIndex = document.getElementById("navIndex");

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navIndex.style.cssText = "background: #202e3d;";
  } else {
    navIndex.style.cssText = "background: none;";
  }
};


document.body.onscroll = function() {scrollFunctionAllPage()};

const nav = document.getElementById("nav");

function scrollFunctionAllPage() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    nav.style.cssText = "background: #fff;";
  } else {
    nav.style.cssText = "background: none;";
  }
}



// =============== menu btn work on mobile ===============
const btn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

btn.addEventListener('click', function () {
    menu.classList.toggle('hidden');
    if (menu.classList.contains('hidden')) {
        navIndex.style.cssText = "background: none;";
      } else {
        navIndex.style.cssText = "background: #202e3d;";
      }
})

// btn.addEventListener('click', function () {
//     if (menu.classList.contains('-translate-x-96')) {
//       menu.classList.add('translate-x-96');
//       menu.classList.remove('-translate-x-96');
//     } else {
//       menu.classList.add('-translate-x-96');
//       menu.classList.remove('translate-x-96');
//     }
// })



$(document).ready(function() {
  $('.client .owl-carousel').owlCarousel({
      loop:true,
      autoplay:true,
      dots:false,
      responsive:{
          0: {
              items: 1
          },
      }
  })
});