"use strict"


//hamburger menu
const hamburgerBtn = document.querySelector('.header___hamburger');
const hamburgerMenu = document.querySelector('.hamburger___menu');
const hamburgerMenuLines = document.querySelectorAll('.header___hamburger > span');
console.log(hamburgerMenuLines);

//navbar
const navbar = document.querySelector('.header___container');
const navbarTitles = document.querySelector('.header___menu');

//Seção de tratamento
const tratamentosAll = document.querySelector('.tratamentos___items');

//Seção sobre
const sobreParagrafo = document.querySelector('.sobre___container___items > p');
const sobreTopicos = document.querySelector('.sobre___container___items > ul');
const sobreTitle = document.querySelectorAll('.sobre___container___items > h3');

//Map-icon
const iconMapa = document.querySelector('#map-icon');
const iconMapaShadow = document.querySelector('#map-shadow');
const textMapa = document.querySelector('.localizacao___container___endereco___text');

//pause fn
function sleep(ms) {
    return new Promise(
        resolve => setTimeout(resolve, ms)
    );
}

//Animação do botão hamburger
hamburgerBtn.addEventListener('click', function(){

    console.log('click');

    if (hamburgerMenu.classList.contains('open')){

        //hamburger menu box
        hamburgerMenu.classList.remove('open');
        hamburgerMenu.classList.add('animate-out');
        hamburgerMenu.classList.remove('animate-in');

        //hamburger menu btn
        hamburgerMenuLines[0].classList.remove('hamburger-btn-close-span-1-down');
        hamburgerMenuLines[2].classList.remove('hamburger-btn-close-span-3-up');
        sleep(300);
    }

    else{
        //hamburger menu box
        hamburgerMenu.classList.add('open');
        hamburgerMenu.classList.add('animate-in');
        hamburgerMenu.classList.remove('animate-out');

        //hamburger menu btn
        hamburgerMenuLines[0].classList.add('hamburger-btn-close-span-1-down');
        hamburgerMenuLines[2].classList.add('hamburger-btn-close-span-3-up');
        sleep(300);
    }

})



//Animações vinculadas ao scroll da página
function scrollPosition(){
    return window.pageYOffset;
}

window.addEventListener('scroll', function(){
    var scrollY = scrollPosition();

    //Navbar
    if (scrollY > 10){
        //console.log("scroll");
        navbar.classList.remove('background-out');
        navbar.classList.add('background-in');
        navbarTitles.classList.remove('brightness');
    }
    else {
        //console.log("not-scrolled");
        navbar.classList.remove('background-in');
        navbar.classList.add('background-out');
        navbarTitles.classList.add('brightness');
    }

    //Tratamentos
    if (scrollY > 200){
        tratamentosAll.classList.add('tratamentos-in');
        tratamentosAll.classList.remove('tratamentos-out');
    }
    else {
        tratamentosAll.classList.add('tratamentos-out');
        tratamentosAll.classList.remove('tratamentos-in');
    }

    //Sobre
    if (scrollY > 750){
        //Paragrafo fade-in
        sobreParagrafo.classList.add('rotate-in');
        sobreParagrafo.classList.remove('rotate-out');

        //Topico fade-in
        sobreTopicos.classList.add('rotate-in');
        sobreTopicos.classList.remove('rotate-out');

        //Título fade-in
        for(let i=0; i < sobreTitle.length; i++){
            sobreTitle[i].classList.add('sobre-in-t');
            sobreTitle[i].classList.remove('sobre-out-t');
        }
        
    }
    else {
        //Paragrafo fade-out
        sobreParagrafo.classList.add('rotate-out');
        sobreParagrafo.classList.remove('rotate-in');  

        //Topico fade-out
        sobreTopicos.classList.add('rotate-out');
        sobreTopicos.classList.remove('rotate-in');  

        //Título fade-out
        for(let i=0; i < sobreTitle.length; i++){
            sobreTitle[i].classList.add('sobre-out-t');
            sobreTitle[i].classList.remove('sobre-in-t');
        }
    }

    //Animação Localização texto
    if(scrollY > 1800){
        //console.log("aqui");
        textMapa.classList.add('rotate-in');
        textMapa.classList.remove('rotate-out');

    }
    else{
        //console.log("noaaqui");
        textMapa.classList.add('rotate-out');
        textMapa.classList.remove('rotate-in');
    }

});

//Mapa-icon animation
setInterval(function(){

    if(iconMapa.classList.contains('map-icon-down')){
        iconMapa.classList.add('map-icon-up');
        iconMapa.classList.remove('map-icon-down');

        iconMapaShadow.classList.add('map-shadow-up');
        iconMapaShadow.classList.remove('map-shadow-down');
    }

    else {
        iconMapa.classList.add('map-icon-down');
        iconMapa.classList.remove('map-icon-up');

        iconMapaShadow.classList.add('map-shadow-down');
        iconMapaShadow.classList.remove('map-shadow-up');
    }
    

}, 1500)

//carousel 

//criar um vetor com todas as imgs 

//fzer com q 2 imgs tenham seus tranforms: translateX alterados


//frase de efeito
//frase não tão efetiva