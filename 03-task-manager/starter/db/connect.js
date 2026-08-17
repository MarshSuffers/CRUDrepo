const dns = require("node:dns/promises");
dns.setServers(["8.8.8.8"]);

const mongoose = require("mongoose");
const { url } = require("node:inspector");

const connectDB = (url) =>{
return mongoose
	.connect(url);

}

module.exports = connectDB