import React from 'react';
import io from 'socket.io-client';

class MentorFindingWebsite extends React.Component {
  handleClick = () => {
    // Connect to the WebSocket server
    const socket = io('wss://your-websocket-server-url');

    // Perform additional actions with the WebSocket connection, such as joining a room or emitting events
    socket.on('connect', () => {
      console.log('Connected to WebSocket server');

      // Join a specific room
      socket.emit('joinRoom', 'meetingRoom1');

      // Send a message to the server
      socket.emit('message', 'Hello server!');
    });

    // Handle incoming messages from the server
    socket.on('message', (message) => {
      console.log('Received message:', message);
    });

    // Handle disconnection from the server
    socket.on('disconnect', () => {
      console.log('Disconnected from WebSocket server');
    });
  };

  render() {
    return (
      <div>
        <h1>Welcome to the Mentor Finding Website</h1>
        
        <button onClick={this.handleClick}>Meeting Rooms</button>
      </div>
    );
  }
}

export default MentorFindingWebsite;
