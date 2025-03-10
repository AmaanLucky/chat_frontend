const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Chatbot Route
app.post('/chat', (req, res) => {
  const userMessage = req.body.message;

  // Simple AI logic (replace this with real AI response later)
  let botResponse = "I didn't understand that.";

  if (userMessage.toLowerCase().includes('hello')) {
    botResponse = 'Hi there! How can I help you today?';
  }
  if (userMessage.toLowerCase().includes('bye')) {
    botResponse = 'Goodbye! Have a nice day!';
  }

  res.send({ reply: botResponse });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
