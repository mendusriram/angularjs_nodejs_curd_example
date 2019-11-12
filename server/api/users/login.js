const express = require('express');
const router = express.Router();
var db = require('./../../db');
var url  = require('url');
router.post('/login', function(req, res) {
	var dbModel = require('./model');
	dbModel.loginUser(req, res);
});
module.exports = router;