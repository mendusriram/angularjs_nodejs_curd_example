var db = require('./../../db');
module.exports ={
	// login user
	loginUser : function (req, res){
		var sql = "SELECT id FROM users where email= '"+req.body.email+"' AND password = '"+req.body.password+"'";
		db.query(sql, function (err, result, fields) {
		if (err) throw err;
		 console.log(result);
		 res.send(result);
		});
	},
	// Register user
	registerUser : function (req, res){
		var sql = "INSERT INTO users (name, email, password) VALUES ('"+req.body.name+"', '"+req.body.email+"', '"+req.body.password+"')";
		db.query(sql, function (err, result) {
		if (err) throw err;
		 console.log("1 record inserted");
		 res.send("Successfully inserted...");
		}); 
	},
	// Get user Details
	getDetailsUser : function (req, res){
		var url_parts = url.parse(req.url, true);
		var query = url_parts.query;
		var sql = "SELECT * FROM users where id="+req.params.id+"";
		db.query(sql, function (err, result) {
		if (err) throw err;
		 console.log(result);
		 res.send(result);
		});
	},
	// Remove user Details
	deleteUser : function (req, res){
		var url_parts = url.parse(req.url, true);
		var query = url_parts.query;
		var sql = "DELETE FROM users where id="+req.params.id+"";
		db.query(sql, function (err, result) {
		if (err) throw err;
		 console.log(result);
		 res.send(result);
		});
	}
}