const mainNav = document.getElementById('main-navigation');
const navOpenBtn = document.getElementById('nav-open-btn');
const navCloseBtn = document.getElementById('nav-close-btn')

navOpenBtn.addEventListener('click', (e) => {
    mainNav.dataset.menu = "open"
})

navCloseBtn.addEventListener('click', (e) => {
    mainNav.dataset.menu = "close"
})

window.addEventListener('resize', (e) => {
    mainNav.dataset.menu = "close"
})
