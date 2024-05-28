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
	NAVBAR BACKGROUND EFFECT
	************************
*/
function headerScrollEffect() {	
  const navbar = document.querySelector('#nav-effect');
	if (window.innerWidth >= 992) {
  	if (window.scrollY >= 10) {
    	navbar.classList.add('bg-dark');
    } else {
      navbar.classList.remove('bg-dark');
    }
  } else {
    navbar.classList.add('bg-dark');
  }
}
window.addEventListener('scroll', headerScrollEffect);
window.addEventListener('DOMContentLoaded', headerScrollEffect);
window.addEventListener('resize', headerScrollEffect);
/*
	NAV LOGO TYPING TEXT
	********************
*/
function logoTypingEffect() {
  const text = 'Young Sam Concepts';
  const typingElement = document.getElementById('typing-text');

  typeText(text, typingElement, 150);
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
// Open external links
function openExternalLinks() {
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





// funtion to submit Contact Form Datas To Gmail Using SMTPJS //
function sendMSG() {
	const name = document.querySelector('#name').value;
	const email = document.querySelector('#email').value;
	const message = document.querySelector('#message').value;

	const messageBody = 'Name: ' + name
		+ '\nEmail: ' + email
		+ '\nMessage: ' + message // Sender message body from the form //

	Email.send({
		Host: 'smtp.gmail.com',
		Username: 'youngsamconcepts@gmail.com', // Registered smtp username //
		Password: '<DOCTYPE.elasticemail.youngsamconcepts>', // Registered smtp password //
		To: 'youngsamconcepts@gmail.com',
		From: email, // Sender gmail from the form //
		Subject: `Message from ${name} on your Portfolio Website`, // Default Subject //
		Body: messageBody
	}).then(message => successfulMSG(document.querySelector('.formWrapper #feedback')));	

	// Function - Successful message
	function successfulMSG(feedback) {
		const text = 'Message submitted successfully! \nWe will respond to you as soon as possible using the email you provided. Thank you!';
		const feedbackText = document.createTextNode(text);
		feedback.appendChild(feedbackText);

		// Clear the feedback text
		setTimeout(() => {
			feedback.innerText = '';
		}, 7000);
	}
	console.log(messageBody);
}

/*
	VALIDATE THE CONTACT FORM
	*************************
*/
function validateForm(e) {
	e.preventDefault();

	const name = document.querySelector('#name');
	const email = document.querySelector('#email');
	const message = document.querySelector('#message');

	if (name.value === '' || name.value.length === 0) {
		const nameFeedback = document.querySelector('#name-feedback');
		name.classList.add('error');
		nameFeedback.innerText = 'Name field is empty!';
		setTimeout(() => {
			name.classList.remove('error')
			nameFeedback.innerText = '';
		}, 3000);
	} else if (email.value === '' || email.value.length === 0) {
		const emailFeedback = document.querySelector('#email-feedback');
		email.classList.add('error');
		emailFeedback.innerText = 'Email field is empty!';
		setTimeout(() => {
			email.classList.remove('error');
			emailFeedback.innerText = '';
		}, 3000);
	} else if (message.value === '' || message.value.length === 0) {
		const messageFeedback = document.querySelector('#message-feedback');
		message.classList.add('error');
		messageFeedback.innerText = 'Message field is empty!';
		setTimeout(() => {
			message.classList.remove('error');
			messageFeedback.innerText = '';
		}, 3000);
	} else {
		sendMSG();

		// Clear the input fields
		setTimeout(() => {
			name.value = '';
			email.value = '';
			message.value = '';
		}, 1000);
	}
}
/*
	EVENT LISTENER - SUBMIT CONTACT FORM DATAS TO GMAIL ON VALIDAION
	****************************************************************
*/
document.querySelector('#contact-form').addEventListener('submit', validateForm);
