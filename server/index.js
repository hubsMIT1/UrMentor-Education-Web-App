// const express = require("express");
// const app = express();
// const http = require("http");
// const cors = require("cors");
// const { Server} = require("socket.io")

// app.use(cors());
// const server = http.createServer(app);

// const io = new Server(server,{
//     cors: {
//         origin: "http://locakhost:3000",
//         method: ["GET","POST"],
//     }
// });

// io.on("connection", (socket) => {
//     console.log(`UserConnected: ${socket.id}`);

//     socket.on("disconnect", () => {
//         console.log(`User Dissconnect : ${socket.id}`)
//     });
// })

// server.listen(3001, () =>{
//     console.log("Server Running");
// })
const express = require("express");
require('dotenv').config();

const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose")
const app = express();
// app.use(cors());
const bodyParser = require('body-parser')

app.use(cors({
  origin: 'http://localhost:3001',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
//DB
const connection = require("./db")
// connection();

// const { Server } = require("socket.io");

//chAT 
const server = http.createServer(app);
const ioServer = require("./chat/chat")
const io = ioServer(server);


const port = process.env.PORT || 3000 

console.log(port)

const User = require('./model/user');
// MongoDb();



app.post('/users', async (req, res) => {
  console.log(req.body)
  const { name, email, password, userType, phoneNumber } = req.body;

  const newUser = new User({
    name,
    email,
    password,
    userType,
    phoneNumber,
  });


  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});


app.listen(port, () => {
  console.log("SERVER RUNNING");
});