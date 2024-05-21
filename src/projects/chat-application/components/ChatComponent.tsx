import React, { useEffect, useState } from "react";
import { Button, Input } from "common/Components";
// import { messages } from "./mockData";
import { socket } from "..";

export interface ChatComponentProps {
  userData: {
    roomNo: string;
    name: string;
  };
  handleBack: ()=> void;
}
const ChatComponent = ({ userData, handleBack }: ChatComponentProps) => {
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState<
    { content: string; sender: string }[]
  >([]);
  socket.off("newMessage").on("newMessage", (latestMessages) => {
    setMessages(latestMessages);
  });
  const sendMessage = () => {
    socket.emit("sendMessage", {
      content: messageInput,
      sender: userData.name,
      roomId: "",
    });
    setMessageInput('')
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };
  useEffect(()=> {
    socket.emit("getMessages")
  }, [])
  return (
    <div className="chat-box">
      <div className="box-header">
        <div className="leftside-section">
          <span className="back-icon" onClick={handleBack}>&#x2190;</span>
          <span>{userData.name}</span>
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
                message.sender === userData.name ? "right" : "left"
              }`}
            >
              <span className="message-content">{message.content}</span>
              <div className="user-name">
                {message.sender === userData.name ? "You" : message.sender}
              </div>
            </div>
          );
        })}
      </div>
      <div className="box-footer">
        <Input
          onKeyDown={handleKeyPress}
          className="msz-input"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
        />
        <Button className="msz-submit" title=">" onClick={sendMessage} />
      </div>
    </div>
  );
};

export default ChatComponent;
