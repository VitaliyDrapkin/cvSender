const express = require("express");
const server = express();
const mongoose = require("mongoose");
const cors = require("cors");

const messageRoute = require("./routes/message-route");

const errorHandler = require("./errors/error-handler");
const cookieParser = require("cookie-parser");

server.use(express.json());
server.use(cookieParser());
server.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3001;
server.use(cors({ origin: "http://localhost:3000", credentials: true }));

server.use("/message", messageRoute);

server.use(errorHandler);

async function start() {
  try {
    await mongoose.connect("mongodb://127.0.0.1/Social_Network", {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log(`Successfully connect to MongoDB`);

    server.listen(PORT, () => {
      console.log(`Server is running on Port ${PORT}`);
    });
  } catch (error) {
    console.log("Data base error" + error);
  }
}

start();
