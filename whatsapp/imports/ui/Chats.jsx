import React, { Component } from "react";
import PropTypes from "prop-types";
// Test Data
import data from "../testData/Chats";

const Chats = () => {
  return (
    <>
      {data.map(chat => (
        <div className="chat">
          <img src={chat.picture} alt="User" />
          <h2>{chat.name}</h2>
          <p>{chat.lastMessage.text}</p>
          <span className="last-message-timestamp">
            {chat.lastMessage.timestamp}
          </span>
        </div>
      ))}
    </>
  );
};

Chats.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  lastMessage: PropTypes.shape({
    text: PropTypes.string.isRequired,
    timestamp: PropTypes.instanceOf(Date)
  }).isRequired
};

Chats.defaultProps = {
  picture: "",
  name: "",
  lastMessage: {
    text: "",
    timestamp: new Date()
  }
};

export default Chats;
