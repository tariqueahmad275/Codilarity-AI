
const isAuthenticated = (req, res, next) =>{
    req.user ? next() : res.send("Failed")
}

module.exports = isAuthenticated