const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render("client/page/products/index.pug");
});

module.exports = router;