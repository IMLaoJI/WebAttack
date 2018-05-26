const mysql = require('mysql');
exports.getConnection = function(){
	let connection = mysql.createConnection({
		host: 'localhost',
		database: 'imooc_safety',
		user: 'root',
		password: 'root'
	});
	connection.connect();
	return connection;
};
