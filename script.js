const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const carousel = document.querySelector(".carousel-container");
const track = document.querySelector(".track");
let index = 0;
let visibleCards = 3;
const totalCards = document.querySelectorAll(".card-container").length;

function updateVisibleCards() {
    if (window.innerWidth <= 1100) {
        visibleCards = 1;
    } else if (window.innerWidth <= 1530) {
        visibleCards = 2;
    } else {
        visibleCards = 3;
    }
}

function updateCarousel() {
    const cardWidth = carousel.offsetWidth / visibleCards;
    track.style.transform = "translateX(" + (index * -cardWidth) + "px)";
    

    prev.classList.toggle("show", index > 0);
    next.classList.toggle("hide", index >= totalCards - visibleCards);
}

next.addEventListener("click", function (e) {
    e.preventDefault();
    if (index < totalCards - visibleCards) {
        index++;
        updateCarousel();
    }
});

prev.addEventListener("click", function () {
    if (index > 0) {
        index--;
        updateCarousel();
    }
});

window.addEventListener("resize", function () {
    updateVisibleCards();
    updateCarousel();
});

updateVisibleCards();
updateCarousel();