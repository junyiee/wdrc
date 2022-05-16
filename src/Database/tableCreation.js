var mysql = require('mysql');  
var con = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "temppasswordxd",  
database: "login_database"  
});  
con.connect(function(err) {  
if (err) throw err;  
console.log("Connected!");  
var sql = "CREATE TABLE accounts (username VARCHAR(255) PRIMARY KEY, password VARCHAR(255))";    
con.query(sql, function (err, result) {  
if (err) throw err;  
console.log("Table created");  
});  
});  