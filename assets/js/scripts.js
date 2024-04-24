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
    if (window.innerWidth >= 992) {
    	if (window.scrollY >= 10) {
      	navbar.classList.add('bg-dark');
      } else {
	      navbar.classList.remove('bg-dark');
	    }
    } else {
      navbar.classList.add('bg-dark');
    }
  });
  window.addEventListener('DOMContentLoaded', () => {
    if (window.scrollY > 10 && window.innerWidth) {
      navbar.classList.add('bg-dark');
    } else {
      navbar.classList.remove('bg-dark');
    }
  });
}
document.addEventListener('DOMContentLoaded', userScroll);
/*
	NAV LOGO TYPING TEXT
	********************
*/
function logoTypingEffect() {
  const text = 'Young Sam Concepts';
  const typingElement = document.getElementById('typing-text');
  const typingDelay = 100;

  typeText(text, typingElement, typingDelay);
}
document.addEventListener('DOMContentLoaded', logoTypingEffect);
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


function openExternalLinks(linkElements) {
	const externalLinks = document.querySelectorAll('#external-link');
	const externalLinksFrame = document.querySelector('#external-link-frame iframe');
	const externalLinksPageTitle = document.querySelector('#external-link-frame #site-title');

	externalLinks.forEach(link => {
		link.addEventListener('click', e => {
			externalLinksFrame.src = link.href;
			externalLinksPageTitle.innerHTML = link.href;
		});
	});
	
}
document.addEventListener('DOMContentLoaded', openExternalLinks);