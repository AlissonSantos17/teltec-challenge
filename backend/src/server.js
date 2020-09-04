const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors");
const app = express();
const http = require("http")

mongoose.connect('mongodb+srv://omnistack9:omnistack9@cluster0.q8lu8.mongodb.net/omnistack9?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());
app.use(cors());
app.listen(4003);