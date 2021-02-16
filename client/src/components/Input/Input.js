import React from "react";

import "./Input.css";

const Input = ({ inputText, setInputText, sendMessage }) => {
  return (
    <form className="form" onSubmit={sendMessage}>
      <input
        type="text"
        className="input"
        placeholder="Type a message..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className="sendButton" type="submit">
        Send
      </button>
    </form>
  );
};

export default Input;
