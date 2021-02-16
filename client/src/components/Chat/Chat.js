import React, { useEffect, useState } from "react";

import queryString from "query-string";
import io from "socket.io-client";
import InfoBar from "../InfoBar/InfoBar";

import "./Chat.css";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";

import { useHistory } from "react-router-dom";
import TextContainer from "../../TextContainer/TextContainer";

let socket;
const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState([]);

  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);

  const ENDPOINT = "http://localhost:5000";

  const history = useHistory();

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    setName(name);
    setRoom(room);

    socket = io(ENDPOINT);

    socket.emit("join", { name, room }, (err) => {
      if (err) {
        alert(err.error);
        history.push("/");
      }
    });

    console.log({ socket });

    return () => {
      // socket.emit("disconnect");
      socket.disconnect();
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });

    console.log({ messages });
  }, [messages]);

  useEffect(() => {
    socket.on("roomData", ({ room, users }) => {
      setUsers(users);
    });
  }, [users]);

  const sendMessage = (e) => {
    e.preventDefault();

    if (inputText) {
      socket.emit("sendMessage", inputText, () => setInputText(""));
    }
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          inputText={inputText}
          setInputText={setInputText}
          sendMessage={sendMessage}
        />
      </div>
      <TextContainer users={users} />
    </div>
  );
};

export default Chat;
