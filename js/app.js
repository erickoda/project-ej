const hamburgerBtn = document.querySelector('.header___hamburger');
const hamburgerMenu = document.querySelector('.hamburger___menu');
const navbar = document.querySelector('.header___container');
const navbarTitles = document.querySelector('.header___menu')

hamburgerBtn.addEventListener('click', function(){

    console.log('click');

    if (hamburgerMenu.classList.contains('open')){
        hamburgerMenu.classList.remove('open');
        hamburgerMenu.classList.add('animate-out');
        hamburgerMenu.classList.remove('animate-in');
    }
    else{
        hamburgerMenu.classList.add('open');
        hamburgerMenu.classList.add('animate-in');
        hamburgerMenu.classList.remove('animate-out');
    }

})

setInterval(function scrollAnimation(){
    if (window.scrollY > 10){
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
}, 100);