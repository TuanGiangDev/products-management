const express = require('express');
const controller = require('../../controllers/client/products.controller');

const router = express.Router();

router.get("/", controller.product);

module.exports = router;