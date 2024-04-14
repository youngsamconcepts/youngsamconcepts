const chatInput = document.querySelector('.chat-input textarea');
const sendBtn = document.querySelector('.chat-input span');
const chatbox = document.querySelector('.chatbox');
const chatbotToggler = document.querySelector('.chatbot-toggler');
const chatbotCloseBtn = document.querySelector('#chatbot-close-btn');

let userMessage;
const inputInitHeight = chatInput.scrollHeight;

// Create a chat <li> element with passed message and className
const createChatLi = (message, className) => {
	const chatLi = document.createElement('li');

	chatLi.classList.add('chat', className);

	let chatContent = className === 'outgoing' ? `
		<p></p>
		<figure class="figure">
			<img src="assets/images/ys.jpg" alt="" class="figure-img rounded-circle" />
		</figure>
	` :  `
		<span class="fas fa-robot"></span>
		<p></p>
	`;

	chatLi.innerHTML = chatContent;
	chatLi.querySelector('p').textContent = message;
	return chatLi;
}

const generationResponse = (incomingChatLi) => {
	const messageElement = incomingChatLi.querySelector('p');
	// The AI reponse's code goes here
	messageElement.innerHTML = `Hello \nThis is just a IU design. All chats will be refreshed once the page is reloaded. \n So you may want to generate a free AI response at: <a href="https:/api.openai.com/v1/chat/completions" class="text-primary" target="_blank">https:/api.openai.com/v1/chat/completions</a> and store the user chats to the database. \nThank you for choosing this template!`
	// Adjust the height of the chatbot based on it's contents
	chatbox.scrollTo(0, chatbox.scrollHeight)
}

const handleChat = () => {
	userMessage = chatInput.value.trim();
	if(!userMessage) return;
	chatInput.value = '';
	chatInput.style.height = `${inputInitHeight}px`;

	// Appends the user message to the chatbox
	chatbox.appendChild(createChatLi(userMessage, 'outgoing'));
	chatbox.scrollTo(0, chatbox.scrollHeight);

	// Displays the "..." message while waiting reponse
	const incomingChatLi = createChatLi('...', 'incoming');
	chatbox.appendChild(incomingChatLi);
	chatbox.scrollTo(0, chatbox.scrollHeight);
	// Display the reponse after 600 milliseconds
	setTimeout(() => {		
		generationResponse(incomingChatLi);
	}, 1000);
}
// Adjust the height of the input textarea based on it's contents
chatInput.addEventListener('input', () => {
	chatInput.style.height = `${inputInitHeight}px`;
	chatInput.style.height = `${chatInput.scrollHeight}px`;
});
// If Enter key is pressed without Shift key and the window width is greater
// than 800px, handle the chat.
chatInput.addEventListener('keydown', (e) => {
	if (e.key === 'Enter' && !e.shiftKey && window.innerWidth > 800) {
		e.preventDefault();
		handleChat();
	}
});
// Handle chat
sendBtn.addEventListener('click', handleChat);
// Toggles the chatbot on button click
chatbotToggler.addEventListener('click', () => document.body.classList.toggle('show-chatbot'));
// Closes the chatbot on small devices
chatbotCloseBtn.addEventListener('click', () => document.body.classList.remove('show-chatbot'));