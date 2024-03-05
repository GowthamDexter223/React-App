const express = require("express");

const app = express();

app.use(express.static("./Course-Website"))

app.get("/", (req, res) => {
    res.status(200).write("<h1>Good Morning</h1>")
    res.send();
})

// app.get("/about", (req, res) => {
//     res.status(200).write("<h1>ABOUT PAGE</h1>")
//     res.send();
// })

// app.get("/home", (req, res) => {
//     res.status(200).write("<h1>HOME PAGE</h1>")
//     res.send();
// })


app.get("*", (req, res) => {
    res.status(400).write("<h1>ERROR PAGE</h1><a href='http://localhost:5000'>Back</a>")
    res.send();
})

app.listen(5000, () => {
    console.log("SERVER STARTED")
});