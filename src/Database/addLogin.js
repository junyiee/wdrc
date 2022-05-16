/*
username = 
password = 
Need to pull this data from the login form.
*/


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



var sql = "INSERT INTO accounts (username, password) VALUES ?"; 
var values = [
[username, password]
];
con.query(sql, function (err, result) {  
if (err) throw err;  
console.log("1 record inserted");  
});  