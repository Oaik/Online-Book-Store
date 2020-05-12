const express = require("express");
const router = express.Router();

router.route('/')
        .get((req, res) => {
            global.user = null;
            res.redirect("/");
        })

module.exports = router;