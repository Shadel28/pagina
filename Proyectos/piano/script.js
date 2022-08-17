const piano=document.querySelector(".material-symbols-outlined");
const head=document.querySelector(".header");

piano.addEventListener("click", ()=>{
    piano.classList.toggle("activo");
    head.classList.toggle("activo");
})

document.querySelectorAll(".items").forEach(item=>item.addEventListener("click", ()=>{
    head.classList.remove("activo");
}))

document.querySelectorAll(".social-link").forEach(social=>social.addEventListener("click", ()=>{
    head.classList.remove("activo");
}))
