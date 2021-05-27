// =============== changing bg of nav on scroll ===============
window.onscroll = function() {scrollFunction()};

const nav = document.getElementById("nav");
const nav2 = document.getElementById("nav2");

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    nav.style.cssText = "background: #202e3d;";
    nav2.style.cssText = "color: #fff;";
  } else {
    nav.style.cssText = "background: none;";
    nav2.style.cssText = "color: #000;";
  }
}

// =============== menu btn work on mobile ===============
const btn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

btn.addEventListener('click', function () {
    menu.classList.toggle('hidden');
    if (menu.classList.contains('hidden')) {
        nav.style.cssText = "background: none;";
      } else {
        nav.style.cssText = "background: #202e3d;";
      }
})