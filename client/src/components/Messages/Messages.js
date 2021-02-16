import React, { useEffect, useRef } from "react";
import Message from "./Message/Message";

import "./Messages.css";

const Messages = ({ messages, name }) => {
  const dummy = useRef(null);

  useEffect(() => {
    dummy.current.scrollIntoView();
  }, [messages]);

  return (
    <div className="messages">
      {messages.map((message, i) => (
        <Message key={i} message={message} name={name} />
      ))}
      <span ref={dummy}></span>
    </div>
  );
};

export default Messages;
