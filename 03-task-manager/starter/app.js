const dns = require("node:dns/promises");
dns.setServers(["8.8.8.8"]);

const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect.js");
require("dotenv").config();
const notFound = require("./middleware/not-found.js");
const asyncWrapper = require("./middleware/async.js");
const errorHandlerMiddleware = require("./middleware/error-handler.js");

//middleware
app.use(express.static("./public"));
app.use(express.json());

// routes

app.use("/api/v1/tasks", tasks);

app.use(notFound);

app.use(asyncWrapper);

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(port, console.log(`${port}...`));
	} catch (error) {
		console.log(error);
	}
};

start();
