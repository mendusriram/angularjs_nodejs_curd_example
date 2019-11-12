const express = require('express');
const router = express.Router();
var db = require('./../../db');
var url  = require('url');
router.delete('/delete/:id', function(req, res) {
	var dbModel = require('./model');
	deleteUser.getDetailsUser(req, res);
});
module.exports = router;