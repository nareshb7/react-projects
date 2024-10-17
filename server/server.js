const express = require("express");
const { Server } = require("socket.io");
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = 8081;
const messages = [];
const roomMessages = {};

const app = express();
app.use(cors());
// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
const v1Router = require("./versions/v1");

app.use("/v1", v1Router);
io.on("connection", (socket) => {
  console.log("SOCKET CONNECTED::", socket.id);
  socket.on("chat", () => {
    console.log("CHAT EVENT EMITTED");
    socket.emit("check", "SOCKET CONNECTED");
  });
  socket.on("joinRoom", (roomId) => {
    socket.join(roomId);
  });
  socket.on("leaveRoom", (roomId) => {
    socket.leave(roomId);
  });
  socket.on("sendMessage", (data) => {
    const { content, sender, roomId } = data;
    const message = {
      content,
      sender,
      id: Math.random().toString(36).slice(2),
    };
    if (roomId in roomMessages) {
      roomMessages[roomId].push(message);
    } else {
      roomMessages[roomId] = [message];
    }
    messages.push(message);
    // socket.emit('newMessage', messages, roomMessages[roomId], roomMessages)
    io.to(roomId).emit(
      "newMessage",
      messages,
      roomMessages[roomId],
      roomMessages
    );
    // io.to(room).emit('room-messages', roomMessages)
  });
  socket.on("getMessages", (roomId) => {
    socket.emit(
      "newMessage",
      messages,
      roomMessages[roomId] || [],
      roomMessages
    );
  });
});

server.listen(PORT, () => {
  console.log("Server is running on::", PORT);
});
