let text = document.getElementById('text');
let immeuble1 = document.getElementById('immeuble1');
let immeuble2 = document.getElementById('immeuble2');
let arbre1 = document.getElementById('arbre1');
let arbre2 = document.getElementById('arbre2');
let gens1 = document.getElementById('gens1');
let gens2 = document.getElementById('gens2');
let gens3 = document.getElementById('gens3');

const MAX_SCROLL_VALUE = 500;

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    if (value < MAX_SCROLL_VALUE) {
        text.style.marginTop = value * 2.5 + 'px';
        immeuble1.style.left = value * -1.5 + 'px';
        immeuble2.style.left = value * 0.6 + 'px';
        arbre1.style.left = value * 0.5 + 'px';
        arbre2.style.left = value * -0.5 + 'px';
        gens1.style.top = value * -0.3 + 'px';
        gens1.style.left = value * 0.3 + 'px';
        gens2.style.top = value * -0.3 + 'px';
        gens2.style.left = value * 0.5 + 'px';
        gens3.style.top = value * -0.3 + 'px';
        gens3.style.left = value * -0.3 + 'px';
    }
});
