// =============== changing bg of nav on scroll ===============
window.onscroll = function() {scrollFunction()};

const nav = document.getElementById("navIndex");
// const navAll = document.getElementById("navAll");

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    nav.style.cssText = "background: #202e3d;";
    // navAll.style.cssText = "background: #fff;";
  } else {
    nav.style.cssText = "background: none;";
    // navAll.style.cssText = "background: none;";
  }
}

// window.onscroll = function() {scrollFn()};

// const navAll = document.getElementById("navAll");

// function scrollFn() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     navAll.style.cssText = "background: #fff;";
//   } else {
//     navAll.style.cssText = "background: none;";
//   }
// }

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