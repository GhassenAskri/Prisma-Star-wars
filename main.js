

function openMenu() {
   openButtonElement = document.getElementById('open-menu-button');
   mobileMenuElement = document.getElementById('mobile-menu');
   openButtonElement.style.visibility = "hidden";
   mobileMenuElement.style.visibility= "visible";
  }

function closeMenu() {
    mobileMenuElement = document.getElementById('mobile-menu');
    openButtonElement = document.getElementById('open-menu-button');
    openButtonElement.style.visibility= "visible";
    mobileMenuElement.style.visibility = "hidden";
   }

//Paralax effect
   $(window).scroll(function(){ 
    var scroll = $(window).scrollTop(),
    speed1 = 20,
    speed2 = 2,
    textPos = $('.img-side').position().top,
    bgPos = $('.img-side').position().top,
    bgEq = (bgPos - (bgPos + (scroll/speed1))),
    textEq = (textPos - (textPos + (scroll/speed2)));
     $(".img-side").css({transform: "translate( 0, " + textEq + "px)"})
     $(".cover-background").css({transform: "translate( 0, " + bgEq + "px)"})
  

})