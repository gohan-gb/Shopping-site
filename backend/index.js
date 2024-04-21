const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const productRouter = require("./routes/products.routes");

app.use(
  cors({
  origin: "*",
})
);

const mongodbUrl = 'mongodb+srv://gobinda:test@cluster0.1nad2gg.mongodb.net/e_commerce?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongodbUrl);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDb connection error"));

db.once("open", () => {
    console.log("connected to MongoDb successfully")
});

app.get('/', function (req, res) {
  res.send('Hello World')
});

app.use(express.json());

app.use(productRouter);

app.listen(3000, "0.0.0.0" ,() => {
    console.log("server started at port 3000")
});