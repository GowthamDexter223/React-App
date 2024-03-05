const http = require("http");
const fs = require("fs");

const indexPage = fs.readFileSync("./Course-Website/index.html", { encoding: "utf-8" });

const stylePage = fs.readFileSync("./Course-Website/style.css")

const headerImg = fs.readFileSync("./Course-Website/about-us-banner.png")

const app = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, {
            "Content-Type": "text/html"
        })
        res.write(indexPage)
        res.end();

    } else if (req.url === "/style.css") {
        res.writeHead(200, {
            "Content-Type": "text/css"
        })
        res.write(stylePage)
        res.end();

    } else if (req.url === "/headerImg.png") {
        res.writeHead(200, {
            "Content-Type": "image/png"
        })
        res.write(headerImg)
        res.end();

    } else {
        res.write("<h1>Error</h1><a href='http://localhost:5000'>Back</a>")
        res.end();
    }
})

app.listen(5000, () => {
    console.log("Server Started")
})