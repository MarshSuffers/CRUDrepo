const dns = require("node:dns/promises");
dns.setServers(["8.8.8.8"]);

const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect.js");
require('dotenv').config()

//middleware

app.use(express.json());

// routesc
app.get("/hello", (req, res) => {
	res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

const port = 3000;

const start = async () =>{
	try{
		await connectDB(process.env.MONGO_URI)
		app.listen(port, console.log(`${port}...`));

	} catch (error) {
		console.log(error)
	}
}

start()