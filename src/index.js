
addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('show');
        })
    }
})

let change = false;
const categories = document.getElementById('nav-menu-list');
categories.addEventListener('click', () => {
    const navCategories = document.querySelector('.nav-categories');
    if (change == false) {
        navCategories.style.display = "block";
        change = true;
    } else {
        navCategories.style.display = "none";
        change = false;
    }
});

/* Inicio Codigo Slider */

let slider = document.querySelector(".slider-contenedor")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 5000;

window.addEventListener("resize", function() {
    width = sliderIndividual[0].clientWidth;
})

setInterval(function() {
    slides();
}, intervalo);



function slides() {
    slider.style.transform = "translate(" + (-width * contador) + "px)";
    slider.style.transition = "transform .8s";
    contador++;

    if (contador == sliderIndividual.length) {
        setTimeout(function() {
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador = 1;
        }, 5000)
    }
}

/* Fin Codigo Slider */

