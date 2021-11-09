const mongoose = require("mongoose")
const dotenv = require('dotenv');
dotenv.config();

const db = process.env.DB_CONNECTION

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection Successful to database.")
}).catch((error) => {
    console.log(error)
})