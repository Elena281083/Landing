
var slideIndex = 1;
showSlides(slideIndex);


function plusSlide() {
    showSlides(slideIndex += 1);
}


function minusSlide() {
    showSlides(slideIndex -= 1);  
}


function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

let menu = document.querySelector(".menu");
let burger = document.querySelector(".burger");
let close = document.querySelector(".menu__close");
let playButtonsFirst = document.querySelectorAll('.main-video__play');
let playButtonsLast = document.querySelectorAll('.main-video__play2');

burger.addEventListener('click', function(e) {
    menu.classList.add('menu--visible');

});
close.addEventListener('click', function(e) {
    menu.classList.remove('menu--visible');

});

playButtonsFirst.forEach((el) => {
	el.addEventListener('click', (e) => {
		let video = e.currentTarget.closest('.main-video__media').querySelector('video');
		video.play();
		setTimeout(() => {
			video.volume = 0.5;
		}, 500);
        el.currentTime =0;
	});

});

playButtonsLast.forEach((el) => {
	el.addEventListener('click', (e) => {
		let video = e.currentTarget.closest('.main-video__media').querySelector('video');
        video.pause();
	});
});
