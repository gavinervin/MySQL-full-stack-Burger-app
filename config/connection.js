var mysql = require("mysql");
var connection = mysql.createConnection({
	root: 3306,
	host: "localhost",
	user: "root",
	password: "Jostick4747",
	database: "burgers_db"
});

connection.connect(function(err) {
	if (err)throw err;
	console.log("connected as id " + connection.threadId);
});

module.exports = connection;