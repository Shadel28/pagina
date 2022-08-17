const hamb = document.querySelector('.navbar_bars');
const nav = document.querySelector('.navbar_menu');


hamb.addEventListener('click', () => {
    hamb.classList.toggle('activa');
    nav.classList.toggle('activa');
})

document.querySelectorAll('.navbar_menu-ul-link').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('activa');
}))