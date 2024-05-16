import React from "react";
import { Button, Input } from "common/Components";
import { messages } from "./mockData";
const ChatComponent = () => {
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
        {
            messages.map((message, idx) => {
                return <div key={idx} className={`message ${message.sender === "User1"? "right": "left"}`}>{message.message}</div>
            })
        }
      </div>
      <div className="box-footer">
        <Input className="msz-input" value="" onChange={(e) => {}} />
        <Button className="msz-submit" title=">" />
      </div>
    </div>
  );
};

export default ChatComponent;
