import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./styles.scss";
import { Button, Input } from "common/Components";
import ChatComponent from "./components/ChatComponent";

export const socket = io("http://192.168.10.30:8081");

const ChatMain = () => {
  const [userData, setUserData] = useState({
    roomNo: "",
    name: "",
  });
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);
  const handleStartChat = () => {
    console.log("User Data:::", userData);
    if (userData.name.length > 3) {
      setIsChatboxOpen(true);
    } else {
      setIsChatboxOpen(false);
      alert("Please Enter Name...!");
    }
  };
  const handleChange = (name: string, value: string) => {
    console.log("CHANGE:::", name, value);
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="chat-main">
      CHAT MAIN PAGE
      <div>
        <Button onClick={handleStartChat} title="Start Chat" />
        <div>
          <label>User Name:</label>
          <Input
            value={userData.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </div>
        <div>
          <label>Room No:</label>
          <Input
            value={userData.roomNo}
            onChange={(e) => handleChange("roomNo", e.target.value)}
          />
        </div>
        <Button onClick={handleStartChat} title="Join Chat" />
      </div>
      {isChatboxOpen && <ChatComponent userData={userData} handleBack={()=> setIsChatboxOpen(false)} />}
    </div>
  );
};

export default ChatMain;
