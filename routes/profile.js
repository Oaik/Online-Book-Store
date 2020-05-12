// TODO:
// Change post to delete
// Implement put request
const express = require("express");
const router = express.Router();
const User = require("../models/user")

router.route('/:user')
        .get((req, res) => {
            let user = {username: req.params.user};
            User.find({username: user.username}, (err, data) => {
                if(err)
                    throw new error(err);
                if(data.length == 0) {
                    res.redirect('/login');
                    return;
                }
                user.date = data.date;
                res.render("profile", {user: user});
            });
        })
        // .put((req, res) => {

        // })
        .post((req, res) => {
            User.findOneAndDelete({username: req.params.user})
                    .then(data => {
                        if(data)
                            res.redirect("/logout")
                        else
                            res.send("No user found");
                    })
                    .catch((err) => {
                        throw new error(err);
                    })
        })

module.exports = router;