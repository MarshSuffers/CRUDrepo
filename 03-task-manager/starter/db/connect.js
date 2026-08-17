const dns = require("node:dns/promises");
dns.setServers(["8.8.8.8"]);

const mongoose = require("mongoose");
const { url } = require("node:inspector");

const connectionString =
	"mongodb+srv://gabbytooele13_db_user:test@03-task-manager.43ihydb.mongodb.net/?appName=03-TASK-MANAGER";

const connectDB = (url) =>{
return mongoose
	.connect(connectionString);

}

module.exports = connectDB