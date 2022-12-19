var menu = document.getElementById('menuShow');

var botaoHamburguer = document.getElementById("icone");

var container = document.querySelector('body')

var botaoExit = document.querySelector('#exit-button i')

botaoHamburguer.addEventListener('click',()=>{
    container.classList.toggle('change')
    menu.style.left = '0px';
})

botaoExit.addEventListener('click', ()=>{
    menu.style.left = '-50%';
})