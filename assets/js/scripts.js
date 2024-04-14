var mod_pagespeed = "(function($){\"use strict\";$(window).load(function(){$('#loader').delay(300).fadeOut('slow');$('#loader-container').delay(200).fadeOut('slow');$('body').delay(300).css({'overflow':'visible'});});jQuery('.dropdown').hover(function(){jQuery(this).find('.dropdown-menu').stop(true,true).delay(200).fadeIn();},function(){jQuery(this).find('.dropdown-menu').stop(true,true).delay(200).fadeOut();});})(jQuery);";

/*
	TYPING TEXT
	***********
*/
function typeText(text, typingElement, delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
    	typingElement.textContent += text.charAt(i);
    }, delay * i);
  }
}
/*
	NAV BG EFFECT
	*************
*/
function userScroll() {
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      navbar.classList.add('bg-dark');
    } else {
      navbar.classList.remove('bg-dark');
    }
  });
  window.addEventListener('DOMContentLoaded', () => {
    if (window.scrollY > 10) {
      navbar.classList.add('bg-dark');
    } else {
      navbar.classList.remove('bg-dark');
    }
  });
}
document.addEventListener('DOMContentLoaded', userScroll);
/*
	NAV LOGO
	********
*/
function runTypingEffect() {
  const text = 'Young Sam Concepts';
  const typingElement = document.getElementById('typing-text');
  const typingDelay = 100;

  typeText(text, typingElement, typingDelay);
}
document.addEventListener('DOMContentLoaded', runTypingEffect);
/*
	BACK TO TOP
	***********
*/
function backToTop() {
	window.scrollTo ({
		top: 0,
		left: 0,
		behavior: "smooth",
	});
}

