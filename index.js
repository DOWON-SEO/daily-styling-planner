const express = require("express")
const app = express()
const db = require("./db.json")

app.set("view engine", "ejs")
app.use(express.static("public"))

app.get("/", (req, res) => {
    return res.render("index")
})

app.listen(8080, () => {
    console.log("server listening on 8080")
})
