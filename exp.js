// Chatbox Functionality
const chatbox = document.getElementById('chatbox');
const chatInput = document.getElementById('chat-input');

function sendMessage() {
    const message = chatInput.value.trim();
    if (message === '') return;

    // Create new message element
    const messageEl = document.createElement('div');
    messageEl.classList.add('chat-message');
    messageEl.textContent = message;

    // Append message to chatbox
    chatbox.appendChild(messageEl);
    chatInput.value = '';

    // Scroll to bottom of chatbox
    chatbox.scrollTop = chatbox.scrollHeight;
}

// Playful Cursor Animation
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
    });
});
