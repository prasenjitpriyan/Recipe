require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");
const cors = require("cors");

const user = require("./router/user.js")

const app = express();
const port = process.env.PORT || 3001
const url = process.env.URL

let corsOptions = {
    origin: ['http://localhost:5176/'],
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
};

app.use(passport, passport.initialize());
require("./passport")(passport);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", user);

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