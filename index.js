// require
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require('mongoose');


const loginRoute = require("./routes/login");
const registerRoute = require("./routes/register");
const profileRoute = require("./routes/profile");
const logoutRoute = require("./routes/logout");
const config = require("./config");
const port = 5000;

mongoose.connect(config.dbURL,{useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on("error", () => {console.log("Falled to connect")});
mongoose.connection.once("open", () => console.log("connceted"));

app.set("view engine", 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/", (req, res) => {
    console.log(global.user);
    res.render("index", {user: global.user});
});

global.user = null;

app.use("/login", loginRoute);
app.use("/register", registerRoute);
app.use("/profile", profileRoute);
app.use("/logout", logoutRoute);



app.listen(port,() => console.log("Running"));