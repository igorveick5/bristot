let header = document.querySelector('.header');
let headerHeight = header.offsetHeight;

let offsetTop = document.querySelector('.offset-top');

function headerOffset() {
    offsetTop.style.paddingTop = headerHeight + 'px';
}
headerOffset();

window.addEventListener('resize', () => {
    headerOffset();
});
