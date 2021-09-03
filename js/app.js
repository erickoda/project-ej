const hamburgerBtn = document.querySelector('.header___hamburger');
const hamburgerMenu = document.querySelector('.hamburger___menu');
//const menuBtn = document.querySelector('.has-fade');

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