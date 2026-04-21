const cards = document.querySelectorAll('.card');
const sections = document.querySelectorAll('.section');
const vision = document.querySelector('.vision');

function revealOnScroll() {
    const trigger = window.innerHeight * 0.85;

    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if(top < trigger) {
            card.classList.add('show');
        }
    });

    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if(top < trigger) {
            sec.classList.add('show');
        }
    });

    if(vision) {
        const top = vision.getBoundingClientRect().top;
        if(top < trigger) {
            vision.classList.add('show');
        }
    }
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);