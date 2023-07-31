// client.js
const socket = io();

// Handle the form submission
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.getElementById('message');
  const message = input.value.trim();
  if (message !== '') {
    socket.emit('chat message', message);
    input.value = '';
  }
});

// Handle incoming messages
socket.on('chat message', (msg) => {
  const li = document.createElement('li');
  li.textContent = msg;
  document.getElementById('messages').appendChild(li);
});
