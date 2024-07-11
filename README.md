# WebSocket Chat Room Application

## Overview

This project is a simple chat room application built using Flask, Socket.IO, and JavaScript. Users can join a chat room, send messages, and leave the room, with all actions being broadcast to other users in the room.

## Features

- Real-time communication using WebSocket.
- Join chat rooms.
- Send and receive messages.
- Notifications when users join or leave a room.

## Technologies and Tools Used

- WebSocket: For real-time, bi-directional communication between client and server.
- JavaScript: For implementing client-side logic and handling WebSocket events.
- HTML/CSS: For building the user interface.
- CORS: To enable communication between different domains.
- Socket.IO: For simplifying WebSocket implementation and handling.

## Project Structure

- app.py: Main application file that initializes Flask and Socket.IO, and handles routing and Socket.IO events.
- templates/join_room.html: HTML file for the chat room interface.
- static/main.js: JavaScript file for handling client-side Socket.IO events.
- static/styles.css: CSS file for styling the chat room interface.
- requirements.txt: List of dependencies required for the project.


## Usage

- Enter a username and click "Join Room".
- Once in the chat room, you can send messages using the message input box and see messages from other users.
- Click "Leave Room" to exit the chat room.


### Link to my GitHub: 
https://github.com/Kayla-Ard/WebSocket-Chat-Application.git
