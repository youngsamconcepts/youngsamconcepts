/*
  NAVBAR BACKGROUND EFFECT
  ************************
*/
const headerEffect = function () {
  if (window.scrollY > $('#main-header').outerHeight()) {
    $('#main-nav').addClass('bg-light');
    //$('.navbar-toggler').attr('data-bs-theme', 'light');
  } else {
    $('#main-nav').removeClass('bg-light');
    //$('.navbar-toggler').attr('data-bs-theme', 'dark');
  } 
}
//$(document).ready(headerEffect);
//$(window).scroll(headerEffect);

/*
  BACK TO TOP
  ***********
*/
$(document).ready(function() {
  $('#back-to-top').click(function() {
    window.scrollTo ({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });  
});

/*
  OPEN EXTERNAL LINKS ON THE WEBSITE
  **********************************
*/
const iframeWrapperSelector = '#external-link-iframe-wrapper';
const iframeSelector = '#external-link-iframe';
const iframeTitleSelector = '#site-title';
const closeIframeSelector =  'close-iframe'
const externalLinkSelector =  'external-link'

// Function - Show iframe
const showIframe = function (src) {
  const iframeWrapper = $(iframeWrapperSelector);
  const iframeTitle = $(iframeTitleSelector);
  const iframe = $(iframeSelector);

  iframeWrapper.fadeIn(50);
  iframeTitle.text(src);
  iframe.attr('src', iframeTitle.text());
}

// Function - Hide iframe
const hideIframe = function () {
  const iframeWrapper = $(iframeWrapperSelector);
  iframeWrapper.fadeOut(100);
}
$(document).ready(function() {
  // Hide iframe by default
  hideIframe();
  $('a').click(function(e) {
    if (this.id === 'external-link') {
      e.preventDefault();
      showIframe(this.href);
    }
  });
  $('#' + closeIframeSelector).click(function(e) {
    hideIframe();
  });
});

/*
  CONTACT MESSAGES USING SMTP JS LIBRARY
  **************************************
*/

const messageBody = 'Name: ' + $('#contact-name').val()
  + '\nEmail: ' + $('#contact-email').val()
  + '\nMessage: ' + $('#contact-name').val() // Sender message body from the form //


function sendMSG() {
  Email.send({
    Host: 'smtp.gmail.com',
    Username: 'youngsamconcepts@gmail.com', // Registered smtp username //
    Password: '<DOCTYPE.elasticemail.youngsamconcepts>', // Registered smtp password //
    To: 'youngsamconcepts@gmail.com',
    From: $('#contact-email').val(), // Sender gmail from the form //
    Subject: `A message from ${$('#contact-name').val()}`, // Default Subject //
    Body: messageBody
  }).then(message => message);
  console.log(messageBody)
}

const feedbackMSG = () => {
  const text = 'Message submitted successfully! \nWe will review your message and respond to you as soon as possible using the email you provided. Thank you!';
  $('#feedback').text(text).fadeIn(1000);
  $('#feedback').addClass('alert aler-success')
  // Clear the feedback text
  setTimeout(() => {
    $('#feedback').fadeOut(2000);
  }, 7000);
}


// Validate the contact form and send
function validateForm() {
  if ($('#contact-name').val() === '') {
    $('#contact-name').addClass('error');
    $('#name-feedback').text('Name field is empty!');
    setTimeout(() => {
      $('#contact-name').removeClass('error')
      $('#name-feedback').text('');
    }, 3000);
  } else if ($('#contact-email').val() === '') {
    $('#contact-email').addClass('error');
    $('#email-feedback').text('Email field is empty!');
    setTimeout(() => {
      $('#contact-email').removeClass('error')
      $('#email-feedback').text('');
    }, 3000);
  } else if ($('#contact-message').val() === '') {
    $('#contact-message').addClass('error');
    $('#message-feedback').text('Message field is empty!');
    setTimeout(() => {
      $('#contact-message').removeClass('error')
      $('#message-feedback').text('');
    }, 3000);
  } else {
    sendMSG();
    feedbackMSG();

    // Clear the input fields
    setTimeout(() => {
      $('#contact-name').val('');
      $('#contact-email').val('');
      $('#contact-message').val('');
    }, 1000);
  }
}

$('#contact-form').submit(function(e) {
  e.preventDefault();

  validateForm();
});
