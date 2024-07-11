from flask import Flask, render_template
from flask_socketio import SocketIO, send, join_room, leave_room

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your_secret_key'
socketio = SocketIO(app, cors_allowed_origins="*")

chat_room = 'main_chat_room'

@app.route('/')
def join():
    return render_template('join_room.html')

@socketio.on('message')
def handle_message(data):
    send(data['message'], room=chat_room)

@socketio.on('join')
def handle_join(data):
    username = data['username']
    join_room(chat_room)
    send(f'{username} has joined the chat.', room=chat_room)

@socketio.on('leave')
def handle_leave(data):
    username = data['username']
    leave_room(chat_room)
    send(f'{username} has left the chat.', room=chat_room)


if __name__ == '__main__':
    socketio.run(app, debug=True)

