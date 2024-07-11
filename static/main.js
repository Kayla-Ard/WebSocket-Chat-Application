document.addEventListener('DOMContentLoaded', () => {
    const socket = io();

    const joinForm = document.getElementById('joinForm');
    joinForm.addEventListener('submit', event => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        socket.emit('join', { username });

        document.getElementById('joinChat').style.display = 'none';
        document.getElementById('chatRoom').style.display = 'block';

        socket.username = username;
    });

    const messageForm = document.getElementById('messageForm');
    messageForm.addEventListener('submit', event => {
        event.preventDefault();
        const messageInput = document.getElementById('message');
        const message = messageInput.value;
        socket.send({ message });
        messageInput.value = '';
    });

    socket.on('message', data => {
        const messagesDiv = document.getElementById('messages');
        messagesDiv.innerHTML += `<p>${data}</p>`;
    });

    const leaveButton = document.getElementById('leaveButton');
    leaveButton.addEventListener('click', () => {
        socket.emit('leave', { username: socket.username });
        document.getElementById('chatRoom').style.display = 'none';
        document.getElementById('joinChat').style.display = 'block';
    });
});


