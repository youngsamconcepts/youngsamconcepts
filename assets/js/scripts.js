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
	NAV LOGO TYPING TEXT
	********************
*/
function logoTypingEffect() {
  const text = 'Young Sam Concepts';
  const typingElement = document.getElementById('logo-text');

  typeText(text, typingElement, 150);
}
document.addEventListener('DOMContentLoaded', logoTypingEffect);
