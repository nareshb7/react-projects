const express = require("express")
const {Server} = require("socket.io")
const http = require("http")
const PORT = 8081
const messages =[]

const app =express()
const server = http.createServer(app)
const io = new Server(server,{
    cors: {
        origin: '*',
        methods: ["GET", "POST"]
    }
})

io.on("connection", (socket) => {
    console.log("SOCKET CONNECTED::", socket.id)
    socket.on("chat", ()=> {
        console.log('CHAT EVENT EMITTED')
        socket.emit("check", "SOCKET CONNECTED")
    })
    socket.on("sendMessage", (data)=> {
        // const {content, sender} = data
        messages.push(data)
        socket.emit('newMessage', messages)
        socket.broadcast.emit("newMessage", messages)
    })
    socket.on("getMessages", ()=> {
        socket.emit('newMessage', messages)
    })
})

server.listen(PORT, ()=> {
    console.log("Server is running on::",PORT )
})