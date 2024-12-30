function sendMessage() {
    const userInput = document.getElementById('user-input');
    const messageContainer = document.getElementById('message-container');

    if (userInput.value.trim() !== '') {
        // Add user message to the chat
        const userMessage = document.createElement('div');
        userMessage.className = 'message user-message';
        userMessage.textContent = userInput.value;
        messageContainer.appendChild(userMessage);

        // Simulate bot response
        const botResponse = getBotResponse(userInput.value);
        const botMessage = document.createElement('div');
        botMessage.className = 'message bot-message';
        botMessage.textContent = botResponse;
        messageContainer.appendChild(botMessage);

        // Clear input field
        userInput.value = '';

        // Scroll to the latest message
        messageContainer.scrollTop = messageContainer.scrollHeight;
    }
}

function getBotResponse(userInput) {
    // Simple bot responses based on user input
    const responses = {
        "hello": "Hi there! How can I assist you today?",
        "help": "Sure, I'm here to help! What do you need assistance with?",
        "bye": "Goodbye! Have a great day!"
    };
    
    return responses[userInput.toLowerCase()] || "I'm not sure how to respond to that. Can you please rephrase?";
}
