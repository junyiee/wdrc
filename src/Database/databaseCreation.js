var mysql = require('mysql');
var con = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "temppasswordxd"  
});
con.connect(function(err) {  
if (err) throw err;  
console.log("Connected!");  
con.query("CREATE DATABASE login_database", function (err, result) {  
if (err) throw err;  
console.log("Database created");  
});  
});  