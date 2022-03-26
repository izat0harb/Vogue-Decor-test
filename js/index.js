let slider1 = document.querySelector(".slider1")
let slider2 = document.querySelector(".slider2");
let slider3 = document.querySelector(".slider3");

let services = document.querySelector(".services ");
let line = document.querySelector(".line");
let hSlider2 = document.querySelector(".h-slider2");

let aout = document.querySelector("#about")
let aoutCol1 = document.querySelector(".about-col1")
let aoutCol2 = document.querySelector(".about-col2")


window.addEventListener("scroll", function() {
    if (window.scrollY >= services.offsetTop - 200) {
        slider1.style = " transform: none; transition: 1.5s all;"
    }
    if (window.scrollY >= line.offsetTop - 100) {
        slider2.style = " transform: none; transition: 1.5s all;"
    }
    if (window.scrollY >= slider3.offsetTop - 300) {
        slider3.style = " transform: none; transition: 1.5s all;"
    }
    if (window.scrollY >= aout.offsetTop - 100) {
        aout.style = "  opacity: 1; transition: 1.5s all;"
        aoutCol1.style = "   transform: none; transition: 1.5s all;"
        aoutCol2.style = "   transform: none; transition: 1.5s all;"
    }


});