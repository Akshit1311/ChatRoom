import React from "react";
import { useHistory } from "react-router-dom";

import "./InfoBar.css";

const InfoBar = ({ room }) => {
  const history = useHistory();

  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img
          src="https://raw.githubusercontent.com/adrianhajdin/project_chat_application/master/client/src/icons/onlineIcon.png"
          alt="online-icon"
          className="onlineIcon"
        />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <img
          src="https://raw.githubusercontent.com/adrianhajdin/project_chat_application/master/client/src/icons/closeIcon.png"
          alt="close-icon"
          className="closeIcon"
          onClick={() => history.push("/")}
        />
      </div>
    </div>
  );
};

export default InfoBar;
