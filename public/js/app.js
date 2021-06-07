document.onscroll = function () { scrollFunction() };

const header = document.querySelector("header");

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.body.classList.add('active-sticky')
    } else {
        document.body.classList.remove('active-sticky')
    }
};