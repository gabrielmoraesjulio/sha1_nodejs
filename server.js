const express = require("express")
const bodyParser = require("body-parser")
const crypto = require("crypto")
require("dotenv").config()

//MODELS
const LoginUsers = require("./model/LoginUsers")

//APP
const app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static("assets"))

//ROUTES
app.get("/", async (req, res) => {
    const Users = await LoginUsers.findAll()
    res.render("index", {
        UsersVar: Users
    })
})
app.post("/newUser", async (req, res) => {
    const newLogin = req.body.newLogin
    const newEmail = req.body.newEmail
    const newPassword = req.body.newPassword
    const hashNewPassword = crypto.createHash('sha1').update(newPassword).digest('hex')

    await LoginUsers.create({
        loginUser: newLogin,
        emailUser: newEmail,
        passwordUser: hashNewPassword,
    })

    res.redirect("/")
})

//SERVER
const port = process.env.PORT
app.listen(port, console.log(`Server running in http://localhost:${port}`))
