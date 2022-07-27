const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");


// require("dotenv").config();


const app = express();

const PORT = process.env.PORT || 8080; // || this is logical or operator if 8080 is not available when the web app is online it gets a available port

app.use(cors());
app.use(bodyParser.json());


const URL = "mongodb+srv://kavindu:boIoy4QIk8rMfGMq@cluster0.0ud1v.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(URL);

const connection = mongoose.connection;
connection.once("open",()=>{
    console.log("mongodb connection succesfully");
})

const studentsRouter = require("../backend/routes/students.js");

app.use('/student',studentsRouter);

app.listen(PORT,()=>{
    console.log(`server is running on port : ${PORT}`);
})
