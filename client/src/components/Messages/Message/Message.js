import React from "react";
import { emojify } from "react-emojione";

const Message = ({ message: { user, text }, name }) => {
  const trimmedName = name.trim().toLowerCase();

  const isSentByMe = user === trimmedName;

  return (
    <div
      className={`messageContainer ${
        isSentByMe ? "justifyEnd" : "justifyStart"
      } `}
    >
      {isSentByMe && (
        <p className={`sentText ${isSentByMe ? "pr-10" : "pl-10"}`}>{user}</p>
      )}
      <div
        className={`messageBox ${
          isSentByMe ? "backgroundBlue" : "backgroundDark"
        }`}
      >
        <p className={`messageText ${isSentByMe ? "colorWhite" : "colorDark"}`}>
          {emojify(text)}
        </p>
      </div>
      {!isSentByMe && (
        <p className={`sentText ${isSentByMe ? "pr-10" : "pl-10"}`}>{user}</p>
      )}
    </div>
  );
};

export default Message;
