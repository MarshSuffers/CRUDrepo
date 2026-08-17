const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://gabbytooele13_db_user:<test>@cluster0.b4hqems.mongodb.net/?appName=Cluster0'

mongoose.connect(connectionString).then(() => console.log('CONNECTED TO THE DB...')).catch((err) => console.log(err))