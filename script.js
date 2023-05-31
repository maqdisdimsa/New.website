let menu = document.querySelector('#menu-icon');
let tonav = document.querySelector('.tonav');

menu.onclick =  () => {
    menu.classList.toggle('bx-x');
    tonav.classList.toggle('open');
}