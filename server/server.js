const express = require("express")
const {Server} = require("socket.io")
const http = require("http")
const PORT = 8081

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
})

server.listen(PORT, ()=> {
    console.log("Server is running on::",PORT )
})