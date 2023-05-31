const express = require("express")
const app = express()
const db = require("./db.json")

app.set("view engine", "ejs")
app.use(express.static("public"))

app.get("/auth/signin", (req, res) => {
    return res.render("signin")
})

app.get("/auth/signup", (req, res) => {
    return res.render("signup")
})

app.post("/auth/signin", (req, res) => {
    db.users
})

app.post("auth/signup", (req, res) => {

})
app.get("/", (req, res) => {
    return res.render("index")
})

app.listen(8080, () => {
    console.log("server listening on 8080")
})
