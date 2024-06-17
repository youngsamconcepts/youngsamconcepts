/*
  CONTACT MESSAGES USING SMTP JS LIBRARY
  **************************************
*/
const name = $('#contact-name');
const email = $('#contact-email');
const message = $('#contact-message');

function sendMSG() {
	const messageBody = `Name: ${name.val()} \nEmail: ${email.val()} \nMessage: ${message.val()}`
	Email.send({
	  SecureToken: "b34fd783-3aed-44c2-90e4-c78a218c4e30",
	  To: 'youngsamconcepts@gmail.com',
	  From: email.val(),
	  Subject : `A message from ${name.val()}`,
	  Body: messageBody
	}).then(message => {
	  $('#feedback').html(message).fadeIn(500);
	  $('#feedback').fadeOut(7000);
	});
	console.log(messageBody);
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