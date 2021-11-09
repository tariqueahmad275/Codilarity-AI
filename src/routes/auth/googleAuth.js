const express = require('express')
const router = express.Router()
const passport = require('passport');

module.exports =  isAuthenticated = (req, res, next) =>{
    req.user ? next() : res.send("Failed")
}


router.get("/google", passport.authenticate('google', { scope: ['email', 'profile'], prompt: "select_account" }))

router.get("/googleCallback", passport.authenticate('google', {
    successRedirect: "/auth/main",
    failureRedirect: "/auth/failure"
}))

router.get("/main", isAuthenticated, (req, res) => {
    res.render('main')
})

router.get("/failure", (req, res) => {
    res.send("Unable to Login")
})

router.get("/logout", (req, res) => {
    req.logout();
    req.session.destroy()
    res.redirect("/UI/index");
})

module.exports = router