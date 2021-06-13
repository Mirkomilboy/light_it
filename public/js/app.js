document.onscroll = function () { scrollFunction() };

const header = document.querySelector("header");

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.body.classList.add('active-sticky')
    } else {
        document.body.classList.remove('active-sticky')
    }
};


// MOBILE NAV MENU"
const mobileMenu = document.getElementById('mobile-nav')
const hamburgerMenu = document.querySelector('.hamburger-menu')

hamburgerMenu.addEventListener('click', e => {
    e.preventDefault()

    mobileMenu.classList.toggle('active')
});

// SERVICE DROPDOWN
// document.querySelector('.service-btn').addEventListener('click', e => {
//     e.preventDefault()
//     document.querySelector('.service-icon').classList.toggle('rotate-0')

//     const dropdown = e.target.nextElementSibling;
//     dropdown.classList.toggle('max-h-0')
// });


// Service navbar scroll
(function () {
    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.getElementById('service-nav').scrollLeft -= (delta * 40); // Multiplied by 40
        e.preventDefault();
    }
    if (document.getElementById('service-nav').addEventListener) {
        // IE9, Chrome, Safari, Opera
        document.getElementById('service-nav').addEventListener("mousewheel", scrollHorizontally, false);
        // Firefox
        document.getElementById('service-nav').addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } else {
        // IE 6/7/8
        document.getElementById('service-nav').attachEvent("onmousewheel", scrollHorizontally);
    }
})();