import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Chatbot Route
app.post('/chat', (req, res) => {
  const userMessage = req.body.message;
  console.log("User Message:", userMessage); // For Debugging

  let botResponse = "I didn't understand that.";

  if (userMessage.toLowerCase().includes('hello')) {
    botResponse = 'Hi there! How can I help you today?';
  }
  else if (userMessage.toLowerCase().includes('bye')) {
    botResponse = 'Goodbye! Have a nice day!';
  }
  else if (userMessage.toLowerCase().includes('how are you')) {
    botResponse = "I'm just a bot, but I'm doing great! How about you?";
  }
  else if (userMessage.toLowerCase().includes('your name')) {
    botResponse = "I'm your personal chatbot!";
  }
  else if (userMessage.toLowerCase().includes('thanks')) {
    botResponse = "You're welcome! 😊";
  }

  res.send({ reply: botResponse });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
