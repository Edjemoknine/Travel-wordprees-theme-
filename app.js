let menu = document.getElementById('menu');
let list = document.getElementById('navbar');

menu.addEventListener('click', () => {
    list.classList.toggle('open');
    menu.classList.toggle('open');


})