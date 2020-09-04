const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors");
const app = express();
const http = require("http")

mongoose.connect('mongodb+srv://teltec:teltec@cluster0.q8lu8.mongodb.net/desafioteltec?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());
app.use(cors());
app.listen(4003);