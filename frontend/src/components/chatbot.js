import React, { useState } from "react";
import axios from "axios";



const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ sender: "bot", text: "Hi! How can I assist you with your degreee plan today?" }]);
  const [userInput, setUserInput] = useState("");

  const handleSendMessage = async () => {
    if (userInput.trim() === "") return;
  
    // Add user message to the chat
    setMessages((prev) => [...prev, { sender: "user", text: userInput }]);
  
    try {
      const response = await axios.post("http://127.0.0.1:5000/api/chatbot", {
        message: userInput,
      });
      const botReply = response.data.reply;
      console.log(botReply);
      // Add bot response to the chat
      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    } catch (error) {
      console.error("Error communicating with chatbot backend:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Sorry, something went wrong. Please try again later." },
      ]);
    }
    
    // Clear input field
    setUserInput("");
  };

  return (
    <div style={chatbotContainerStyles}>
      {isOpen && (
        <div style={chatboxStyles}>
          <div style={chatboxHeaderStyles}>
            <h4>Reveille</h4>
            <button style={closeButtonStyles} onClick={() => setIsOpen(false)}>
              ✖
            </button>
          </div>
          <div style={chatboxBodyStyles}>
            {messages.map((message, index) => (
              <div
                key={index}
                style={message.sender === "bot" ? botMessageStyles : userMessageStyles}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div style={chatboxFooterStyles}>
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type a message..."
              style={inputStyles}
            />
            <button onClick={handleSendMessage} style={sendButtonStyles}>
              Send
            </button>
          </div>
        </div>
      )}
      {!isOpen && (
        <button style={chatButtonStyles} onClick={() => setIsOpen(true)}>
          💬
        </button>
      )}
    </div>
  );
};

// Styles
const chatbotContainerStyles = {
  position: "fixed",
  bottom: "20px",
  right: "20px", // Change to right-hand side
  zIndex: 1000,
};

const chatboxStyles = {
  width: "300px",
  height: "400px",
  backgroundColor: "#FFFFFF",
  border: "1px solid #ccc",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  display: "flex",
  flexDirection: "column",
};

const chatboxHeaderStyles = {
  backgroundColor: "#7B0000", // Texas A&M maroon
  color: "#fff",
  padding: "10px",
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const closeButtonStyles = {
  backgroundColor: "transparent",
  color: "#fff",
  border: "none",
  fontSize: "16px",
  cursor: "pointer",
};

const chatboxBodyStyles = {
  flex: 1,
  padding: "10px",
  overflowY: "auto", // Scrollable content
};

const chatboxFooterStyles = {
  display: "flex",
  padding: "10px",
  borderTop: "1px solid #ccc",
};

const inputStyles = {
  flex: 1,
  padding: "8px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  marginRight: "10px",
};

const sendButtonStyles = {
  backgroundColor: "#7B0000",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  padding: "8px 12px",
  cursor: "pointer",
};

const chatButtonStyles = {
  backgroundColor: "#7B0000", // Texas A&M maroon
  color: "#fff",
  border: "none",
  borderRadius: "50%",
  width: "60px",
  height: "60px",
  fontSize: "24px",
  cursor: "pointer",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
};

const botMessageStyles = {
  backgroundColor: "#f1f0f0",
  color: "#000",
  padding: "8px",
  borderRadius: "10px",
  marginBottom: "8px",
  alignSelf: "flex-start",
};

const userMessageStyles = {
  backgroundColor: "#7B0000",
  color: "#fff",
  padding: "8px",
  borderRadius: "10px",
  marginBottom: "8px",
  alignSelf: "flex-end",
};

export default Chatbot;
