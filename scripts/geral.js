const header = document.querySelector('header');
const btn = document.getElementById('btnMenu');
const lista = document.querySelector('header ul#lista');
let sections = document.querySelectorAll('main > section');
let navLinks = document.querySelectorAll('body a[href^="#"]');
const menuItens = document.querySelectorAll('body header a[href^="#"]');

btn.addEventListener('click', function() {
    btn.classList.toggle('ativar');
    lista.classList.toggle('mostrar');
})

window.addEventListener('scroll', function() {
    header.classList.toggle('rolou', window.scrollY > 80);
})

menuItens.forEach(item => {
    item.addEventListener('click', rolagemPorClick);
})

function rolagemPorClick(event) {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;

    window.scroll({
        top: to - 250,
        behavior: 'smooth'
    });
}

function addReview(id) {
    section = document.querySelector("section#"+id);
    section.classList.add("revela");
}

function removeReview(id) {
    section = document.querySelector("section#"+id);
    section.classList.remove("revela");
}

