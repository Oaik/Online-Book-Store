const express = require("express");
const router = express.Router();

const User = require("../models/user");

router.route("/")
        .get((req, res) => {
            res.render("register");
        })
        .post((req, res) => {
            let user = {username: req.body.username, password: req.body.password}
            User.find({username: user.username}, (err, data) => {
                if(err) throw new error(err);
                if(data.length != 0)
                    return res.send("user already registered");
                user = new User(user);
                user.save().then(() => {
                    global.user = user;
                    console.log("Saved in db");
                    return res.redirect("/");
                })
            })
        })

module.exports = router;