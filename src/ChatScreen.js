import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import "./ChatScreen.css";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Organization",
      image:
        "https://static.vecteezy.com/system/resources/previews/022/664/807/non_2x/cat-face-silhouettes-cat-face-svg-black-and-white-cat-vector.jpg",
      message: "Hi, thank you for your interest in adopting a pet!",
    },
    {
      name: "Organization",
      image:
        "https://static.vecteezy.com/system/resources/previews/022/664/807/non_2x/cat-face-silhouettes-cat-face-svg-black-and-white-cat-vector.jpg",
      message:
        "Please reply if you would like to know more about the adoption process.",
    },
    {
      message: "Hi! Is this pet still available for adoption?",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    // Set messages to whatever is currently in messages and the new message from input
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">YOU FAVORITED THIS PET ON 9/18/24</p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            {/* Add avatar photo for the other person */}
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          // Don't need avatar photo if user is the one sending message
          <div className="chatScreen__message">
            {/* Use a different className for the user to differentiate sender and receiver*/}
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
      <div>
        <form className="chatScreen__input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="chatScreen__inputField"
            placeholder="Type a message"
            type="text"
          />
          <button
            onClick={handleSend}
            type="submit"
            className="chatScreen__inputButton"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatScreen;
