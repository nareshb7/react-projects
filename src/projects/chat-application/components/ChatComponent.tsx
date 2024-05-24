import React, { useEffect, useState } from "react";
import { Button, Input } from "common/Components";
import { socket } from "..";
import { ChatComponentProps, MessageType } from "../types";

const ChatComponent = ({ userData, handleBack }: ChatComponentProps) => {
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState<MessageType[]>([]);
  socket
    .off("newMessage")
    .on("newMessage", (latestMessages, roomMessages, total) => {
      console.log("room::::", { roomMessages, total });
      setMessages(roomMessages);
    });
  const sendMessage = () => {
    socket.emit("sendMessage", {
      content: messageInput,
      sender: userData.name,
      roomId: userData.roomNo,
    });
    setMessageInput("");
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };
  useEffect(() => {
    socket.emit("joinRoom", userData.roomNo);
    socket.emit("getMessages", userData.roomNo);
    return () => {
      socket.emit("leaveRoom", userData.roomNo);
    };
  }, []);
  return (
    <div className="chat-box">
      <div className="box-header">
        <div className="leftside-section">
          <span className="back-icon" onClick={handleBack}>
            &#x2190;
          </span>
          <span>
            {userData.name} ({userData.roomNo})
          </span>
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
