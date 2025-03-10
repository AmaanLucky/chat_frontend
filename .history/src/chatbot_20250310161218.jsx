import React, { useState } from 'react';
import axios from 'axios';

function Chatbot() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userMessage = { text: input, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      // ✅ Connect to your own backend API
      const response = await axios.post('https://chat-backend-4n6q.onrender.com', {
        message: input,
      });

      const botMessage = { text: response.data.reply, sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      const botMessage = { text: 'Oops! Something went wrong. Try again later.', sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }

    setInput('');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.sender === 'user' ? 'user-message' : 'bot-message'}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={handleSend}>Send</button>

      <style jsx>{`
        .chat-container {
          width: 400px;
          margin: 50px auto;
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 10px;
          background-color: #f9f9f9;
        }

        .messages {
          height: 300px;
          overflow-y: auto;
          padding: 10px;
        }

        .user-message {
          background-color: #007bff;
          color: white;
          padding: 8px;
          border-radius: 5px;
          text-align: right;
          margin-bottom: 10px;
        }

        .bot-message {
          background-color: #e9e9e9;
          color: black;
          padding: 8px;
          border-radius: 5px;
          text-align: left;
          margin-bottom: 10px;
        }

        input {
          width: 80%;
          padding: 10px;
          margin-right: 5px;
        }

        button {
          padding: 10px;
          background-color: #007bff;
          color: white;
          border: none;
          cursor: pointer;
        }

        button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
}

export default Chatbot;
