import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./styles.scss";
import { Button, Input } from "common/Components";
import ChatComponent from "./components/ChatComponent";

export const socket = io("http://192.168.10.30:8081");
const initialUserObj ={
    roomNo: "",
    name: "",
  };

const ChatMain = () => {
  const [userData, setUserData] = useState(initialUserObj);
  const [formData, setFormData] = useState(initialUserObj);
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);
  const handleStartChat = () => {
    if (formData.name.length > 3) {
      setIsChatboxOpen(true);
      const random = Math.random().toString(36).slice(2, 6)
      formData.name = formData.name + random
      setUserData(formData)
      setFormData(initialUserObj)
    } else {
      setIsChatboxOpen(false);
      alert("Please Enter Name...!");
    }
  };
  const handleChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };
  const handleBack =()=> {
    setIsChatboxOpen(false)
    setUserData(initialUserObj)
  }
  return (
    <div className="chat-main">
      CHAT MAIN PAGE
      <div>
        <Button onClick={handleStartChat} title="Start Chat" />
        <div>
          <label>User Name:</label>
          <Input
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </div>
        <div>
          <label>Room No:</label>
          <Input
            value={formData.roomNo}
            onChange={(e) => handleChange("roomNo", e.target.value)}
          />
        </div>
        <Button onClick={handleStartChat} title="Join Chat" />
      </div>
      {isChatboxOpen && <ChatComponent userData={userData} handleBack={handleBack} />}
    </div>
  );
};

export default ChatMain;
