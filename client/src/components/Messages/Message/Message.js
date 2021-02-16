import React from "react";

const Message = ({ message: { user, text }, name }) => {
  const trimmedName = name.trim().toLowerCase();

  const isSentByMe = user === trimmedName;

  return (
    <div
      className={`messageContainer ${
        isSentByMe ? "justifyEnd" : "justifyStart"
      } `}
    >
      <p className={`sentText ${isSentByMe ? "pr-10" : "pl-10"}`}>{user}</p>
      <div
        className={`messageBox ${
          isSentByMe ? "backgroundBlue" : "backgroundDark"
        }`}
      >
        <p className={`messageText ${isSentByMe ? "colorWhite" : "colorDark"}`}>
          {text}
        </p>
      </div>
    </div>
  );
};

export default Message;
