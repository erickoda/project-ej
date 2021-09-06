"use strict"


//hamburger menu
const hamburgerBtn = document.querySelector('.header___hamburger');
const hamburgerMenu = document.querySelector('.hamburger___menu');
const hamburgerMenuLines = document.querySelectorAll('.header___hamburger > span');
//console.log(hamburgerMenuLines);

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

//Links Internos
const linksInternosDesktop = document.querySelectorAll('.header___menu a[href^="#"]');
const linksInternosMobile = document.querySelectorAll('.hamburger___menu a[href^="#"]');

//Consultorio carousel imgs
const consultorioCarouselImgs = document.querySelectorAll('.consultorio___container___items___carousel___imgs > img');//
const consultorioCarouselContainer = document.querySelector('.consultorio___container___items___carousel___imgs');

//Header carousel
const headerCarousel = document.querySelector('.header___img');


//Ajuste para altura de pixels para onde o link interno vai para
linksInternosMobile.forEach(link => {
    link.addEventListener('click', function scrollClick(event){
        event.preventDefault();
        const element = event.target;
        const id = element.getAttribute('href');
        const sectionHeight = document.querySelector(id).offsetTop;

        window.scroll(0, sectionHeight - 100);//Para mobile reduz em 100px
    })
})

//Ajuste para altura de pixels para onde o link interno vai para
linksInternosDesktop.forEach(link => {
    link.addEventListener('click', function scrollClick(event){
        event.preventDefault();
        const element = event.target;
        const id = element.getAttribute('href');
        const sectionHeight = document.querySelector(id).offsetTop;

        window.scroll(0, sectionHeight - 150);//Para mobile reduz em 150px
    })
})

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
        hamburgerMenuLines[1].classList.remove('hamburger-btn-close-span-2-opacity');
    }

    else{
        //hamburger menu box
        hamburgerMenu.classList.add('open');
        hamburgerMenu.classList.add('animate-in');
        hamburgerMenu.classList.remove('animate-out');

        //hamburger menu btn
        hamburgerMenuLines[0].classList.add('hamburger-btn-close-span-1-down');
        hamburgerMenuLines[2].classList.add('hamburger-btn-close-span-3-up');
        hamburgerMenuLines[1].classList.add('hamburger-btn-close-span-2-opacity');
    }

})



//Animações vinculadas ao scroll da página
window.addEventListener('scroll', function(){

    //Navbar
    if (window.scrollY > 10){
        navbar.classList.remove('background-out');
        navbar.classList.add('background-in');
        navbarTitles.classList.remove('brightness');
    }
    else {
        navbar.classList.remove('background-in');
        navbar.classList.add('background-out');
        navbarTitles.classList.add('brightness');
    }

    //Tratamentos
    if (window.scrollY > 200){
        tratamentosAll.classList.add('tratamentos-in');
        tratamentosAll.classList.remove('tratamentos-out');
    }
    else {
        tratamentosAll.classList.add('tratamentos-out');
        tratamentosAll.classList.remove('tratamentos-in');
    }

    //Sobre Desktop
    if (window.scrollY > 750 && this.document.documentElement.clientWidth > 1100){
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

    //Sobre Mobile
    else if (window.scrollY > 1310 && this.document.documentElement.clientWidth <= 1100){

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

    

    //Animação Localização texto desktop
    if(window.scrollY > 1800 && this.document.documentElement.clientWidth > 1100){
        textMapa.classList.add('rotate-in');
        textMapa.classList.remove('rotate-out');

    }
    //Animação Localização texto mobile
    else if(window.scrollY > 4200 && this.document.documentElement.clientWidth <= 1100){
        textMapa.classList.add('rotate-in');
        textMapa.classList.remove('rotate-out');

    }
    else{
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
let counter = 1;
setInterval(() =>{

    if(counter === 3) counter = 0;

    headerCarousel.style.transform=`translateX(${-100*counter}vw)`;

    if(this.document.documentElement.clientWidth > 1100){   
        consultorioCarouselContainer.style.transform=`translateX(${-680*counter}px)`;
    }
    else if(this.document.documentElement.clientWidth <= 1100){   
        consultorioCarouselContainer.style.transform=`translateX(${-100*counter}vw)`;
    }

    counter++;

},4000)