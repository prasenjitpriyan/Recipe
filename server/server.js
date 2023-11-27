require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3001
const url = process.env.URL

let corsOptions = {
    origin: ['http://localhost:5173/'],
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
};

app.use(express.json());
app.get('/', cors(corsOptions), (req, res) => {
    res.json({ message: "All good!" })
});

mongoose
    .connect(url)
    .then(() => {
        console.log('App connected to DB...');
        app.listen(port, () => {
            console.log(`App is listening to Port: ${port}`);
        })
    })
    .catch((error) => {
        console.log(error.message);
    })