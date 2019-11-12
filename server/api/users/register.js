const express = require('express');
const router = express.Router();
var db = require('./../../db');
router.post("/register", function(req, res) {
	var dbModel = require('./model');
	dbModel.registerUser(req, res);
});
module.exports = router;