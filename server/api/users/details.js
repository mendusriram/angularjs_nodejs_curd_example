const express = require('express');
const router = express.Router();
var db = require('./../../db');
var url  = require('url');
router.get('/details/:id', function(req, res) {
	var dbModel = require('./model');
	dbModel.getDetailsUser(req, res);
});
module.exports = router;