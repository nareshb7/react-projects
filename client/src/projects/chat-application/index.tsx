import React, { useState } from "react";
import { io } from "socket.io-client";
import "./styles.scss";
import ChatComponent from "./components/ChatComponent";
import Login from "./components/Login";
import { ChatUserData } from "./types";
import { initialUserObj } from "./utils/Constants";
import { Button } from "common/Components";
import { BE_URL } from "utils/Constants";

export const socket = io(BE_URL);

const ChatMain = () => {
  const [userData, setUserData] = useState<ChatUserData>(initialUserObj);
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);
  const handleStartChat = (data: ChatUserData) => {
    setIsChatboxOpen(true);
    setUserData(data);
  };
  const handleBack = () => {
    setIsChatboxOpen(false);
    setUserData(initialUserObj);
  };

  return (
    <div className="chat-main ">
      <div className="font-bold text-2xl p-1"> CHAT MAIN PAGE</div>
      {!isChatboxOpen && <Login onStart={handleStartChat} />}
      {isChatboxOpen &&
        (socket.connected ? (
          <ChatComponent userData={userData} handleBack={handleBack} />
        ) : (
          <div>
            <Button onClick={handleBack} title="Go Back" /> Socket Not Connected
          </div>
        ))}
    </div>
  );
};

export default ChatMain;
