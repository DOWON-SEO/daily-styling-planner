const express = require("express")
const app = express()
const db = require("./db.json")
const multer = require("multer")
const crypto = require("crypto")
const path = require("path")
const fs = require("fs")

var storage = multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb) {
      crypto.pseudoRandomBytes(16, function (err, raw) {
        if (err) return cb(err)
  
        cb(null, raw.toString('hex') + path.extname(file.originalname))
      })
    }
  })

const upload = multer({ storage: storage })


app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.static("uploads"))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    return res.render("index", {items : db.public.items})
})

app.get("/temperature", (req, res) => {
    return res.render("temperature")
})

app.get("/add", (req, res) => {
    return res.render("add")
})

app.post("/add", upload.single("img"), (req, res) => {
    db.public.items.push({
        img : req.file.destination + req.file.filename,
        ...req.body
    })
    const updatedData = JSON.stringify(db);
    fs.writeFileSync('./db.json', updatedData);
    return res.send("good")
})
app.listen(8080, () => {
    console.log("server listening on 8080")
})
