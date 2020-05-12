const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.route("/")
        .get((req, res) => {
            res.render("login");
        })
        .post((req, res) => {
            let user = {username: req.body.username, password: req.body.password}
            User.find(user, (err, data) => {
                if(err) throw new error(err);
                if(data.length == 0)
                    return res.redirect('/login');
                global.user = user;
                return res.redirect('/');
            })
        })

module.exports = router