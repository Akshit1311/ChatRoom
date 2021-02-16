import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";

// CSS
import "./Join.css";
const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    name && room
      ? history.push(`/chat?name=${name}&room=${room}`)
      : alert("Fill all fields");
  };

  return (
    <div className="joinOuterContainer">
      <form className="joinInnerContainer" onSubmit={handleSubmit}>
        <div className="heading">Join</div>
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className="joinInput"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Room Name"
            className="joinInput"
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>

        {/* <Link
          to={`/chat?name=${name}&room=${room}`}
          onClick={(e) => (!name || !room) && e.preventDefault()}
        > */}
        <button className="button mt-20" type="submit">
          Sign In
        </button>
        {/* </Link> */}
      </form>
    </div>
  );
};

export default Join;
