const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("<h1>Hello world!</h1>")
})

app.get("/contact", function (req, res) {
    res.send("contact me on aishatmurtadho@gmail.com")
})

app.get("/about", function (req, res) {
    res.send("My name is Murtadho 'Aaishah, I'm a trainee at CodeVillage Nigeria limited")
})

app.get("/hubbies", function (req, res) {
    res.send("<ul><li>money</li><li>food</li><li>korean movies</li><li>sleeping</li></ul>")
})
app.listen(3000, function () {
    console.log("server started on port 3000")
})