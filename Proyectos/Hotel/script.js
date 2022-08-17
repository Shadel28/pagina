const hamb = document.querySelector('.hamburger');
const nav = document.querySelector('.ul-nav');




hamb.addEventListener('click', () => {
    hamb.classList.toggle('active');
    nav.classList.toggle('active');
})

document.querySelectorAll('.links-nav').forEach(x => x.addEventListener('click', () => {
    hamb.classList.remove('active');
    nav.classList.remove('active');
}))
