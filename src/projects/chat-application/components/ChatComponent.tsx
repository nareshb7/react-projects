import React, { useState } from "react";
import { Button, Input } from "common/Components";
import { messages } from "./mockData";
const ChatComponent = () => {
  const [messageInput, setMessageInput] = useState("")
  const sendMessage =()=> {
    console.log("MESSAGE::", messageInput)
  }
  const handleKeyPress =(e: React.KeyboardEvent<HTMLInputElement>)=> {
    if (e.key ==="Enter") {
      sendMessage()
    }
  }
  return (
    <div className="chat-box">
      <div className="box-header">
        <div className="leftside-section">
          <span className="back-icon">&#x2190;</span>
          <span>User Name</span>
        </div>
        <div className="rightside-section">
          <span>:</span>
        </div>
      </div>
      <div className="box-body">
        {messages.map((message, idx) => {
          return (
            <div
              key={idx}
              className={`message ${
                message.sender === "User1" ? "right" : "left"
              }`}
            >
              <span className="message-content">{message.message}</span>
              <div className="user-name">{message.sender}</div>
            </div>
          );
        })}
      </div>
      <div className="box-footer">
        <Input onKeyDown={handleKeyPress} className="msz-input" value={messageInput} onChange={(e) => setMessageInput(e.target.value)} />
        <Button className="msz-submit" title=">" onClick={sendMessage} />
      </div>
    </div>
  );
};

export default ChatComponent;
