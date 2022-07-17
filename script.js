const nav_link = document.getElementById("nav-button");
const mobile_nav = document.getElementById("mobile-nav");
const nav_open = document.getElementById("nav-open");
const nav_close = document.getElementById("nav-close");
const header = document.querySelector("header");
const home = document.getElementById("intro");
var showNav = false;

nav_link.addEventListener("click", function (el) {
    el.preventDefault();
    showNav = !showNav
    if (showNav) {
        mobile_nav.classList.remove("hidden");
        nav_close.classList.remove("hidden");
        nav_open.classList.add("hidden");
    } else {
        mobile_nav.classList.add("hidden");
        nav_close.classList.add("hidden");
        nav_open.classList.remove("hidden");
    }
});

function isVisible(el) {
    const rect = el.getBoundingClientRect();
    console.log(rect);
    return (
        rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
}

// document.addEventListener("scroll", function (ev) {
//     var visible = isVisible(home);
//     if (visible) {
//         header.classList.remove("sticky");
//         header.classList.remove("shadow-lg");
//     } else {
//         header.classList.add("sticky");
//         header.classList.add("shadow-lg");
//     }
//     console.log(visible);
// })

