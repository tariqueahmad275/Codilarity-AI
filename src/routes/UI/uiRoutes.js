const express = require('express')
const router = express.Router()
const isAuthenticated = require("../../utils/authMiddleware")


router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/main',isAuthenticated, (req, res) => {
    res.render('main')
})

router.get('/manual', (req, res) => {
    res.render('manual')
})

router.get('/index', (req, res) => {
    res.render('index')
})


module.exports = router
