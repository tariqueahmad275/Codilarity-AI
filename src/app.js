const express = require('express')
const app = express()
const path = require('path');
const passport = require('passport');
const dotenv = require('dotenv');
dotenv.config();


var session = require("express-session")
app.use(session({ secret: "codehub" }))
app.use(passport.initialize());
app.use(passport.session())


const port = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded());

app.set('views', path.join(__dirname, "views"))
app.set("view engine", "hbs")

app.use(express.static(__dirname + '/public'));

require("../src/utils/auth")
require("../src/db/connection")

const UIRoutes = require("../src/routes/UI/uiRoutes")
app.use("/UI", UIRoutes)

const googleAuth = require("../src/routes/auth/googleAuth")
app.use("/auth", googleAuth)

const responseRoutes = require("../src/routes/UI/responseRoutes")
app.use("/getResponse", responseRoutes)


app.listen(port, () => {
    console.log(`Connected to ${port}`)
})