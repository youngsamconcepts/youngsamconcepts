/*
  CONTACT MESSAGES USING SMTP JS LIBRARY
  **************************************
*/
const name = $('#contact-name');
const email = $('#contact-email');
const message = $('#contact-message');

function sendMSG() {
	const messageBody = 'Name: ' + name.val() + '<br/> Email: ' + email.val() + '<br/> Message: ' + message.val();
  //`Name: ${name.val()} \nEmail: ${email.val()} Message: ${message.val()}`
	Email.send({
	  SecureToken: "fb12c9d1-fd09-4232-9df1-362e07ce7e50",
	  To: 'youngsamconcepts@gmail.com',
	  From: 'youngsamconcepts@gmail.com',
	  Subject : `A new message from ${name.val()}`,
	  Body: messageBody
	}).then(message => {
		if (message !== 'ok') {
      const text = 'Message not sent! Something went wrong, please try again!'
      $('#feedback').addClass('alert-warning').text(text).fadeIn('slow');
      $('#feedback').fadeOut(5000);
    }
    const text = 'Message successfully sent! Thanks for your message, we will review your message and get back to you as soon as possible using the email you provided.'
    $('#feedback').text(text).addClass('alert-success').fadeIn('slow');
    $('#feedback').fadeOut(5000);
	});
}
// Validate the contact form and send
function validateForm() {
  if (name.val() === '') {
  	name.addClass('error');
    $('#name-feedback').text('Name field is empty!');
    setTimeout(() => {
      name.removeClass('error')
      $('#name-feedback').text('');
    }, 3000);
  } else if (email.val() === '') {
    email.addClass('error');
    $('#email-feedback').text('Email field is empty!');
    setTimeout(() => {
      email.removeClass('error')
      $('#email-feedback').text('');
    }, 3000);
  } else if (message.val() === '') {
    message.addClass('error');
    $('#message-feedback').text('Message field is empty!');
    setTimeout(() => {
      message.removeClass('error')
      $('#message-feedback').text('');
    }, 3000);
  } else {
  	// Send message
    sendMSG();

    // Clear the input fields
    setTimeout(() => {
      name.val('');
      email.val('');
      message.val('');
    }, 1000);
  }
}
// EventListener - Submit Message
$('#contact-form').submit(function(e) {
  e.preventDefault();
  validateForm();
});