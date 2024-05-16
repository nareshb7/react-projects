import React, { useEffect, useState } from "react";
import {io} from "socket.io-client"
import "./styles.scss"
import { Button, Input } from "common/Components";
import ChatComponent from "./components/ChatComponent";

const socket = io("http://192.168.10.30:8081")

const ChatMain =()=> {
    const [userData,setUserData] = useState({
        roomNo: "",
        name: ""
    })
    const handleStartChat =()=> {
        console.log("User Data:::", userData)
    }
    const handleChange =(e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setUserData({...userData, [name]: value})
    }
    useEffect(()=> {
        socket.emit('chat')
    }, [])
    return <div className="chat-main">CHAT MAIN PAGE
        <div>
            <Button onClick={handleStartChat} title="Start Chat" />
            <Input name="name" value={userData.name} onChange={handleChange} type="text" placeholder="Enter Name"/>
            <Input name="roomNo" value={userData.roomNo} onChange={handleChange} type="text" placeholder="Enter Room No"/>
            <Button onClick={handleStartChat} title="Join Chat" />
        </div>
        <ChatComponent />
        
    </div>
}

export default ChatMain