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
	  SecureToken: "fb12c9d1-fd09-4232-9df1-362e07ce7e50",
	  To: 'youngsamconcepts@gmail.com',
	  From: 'youngsamconcepts@gmail.com',
	  Subject : `A new message from ${name.val()}`,
	  Body: messageBody
	}).then(message => {
		alert(message)
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