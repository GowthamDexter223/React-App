const http = require("http");

const app = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write(indexPage)
        res.end();
    } else if (req.url === "/about") {
        res.write("<h1>About Page</h1>")
        res.end();
    } else if (req.url === "/home") {
        res.write("<h1>Home Page</h1>")
        res.end();
    } else {
        res.write("<h1>Error</h1><a href='http://localhost:5000'>Back</a>")
        res.end();        
        console.log("ERROR")
    }
});

app.listen(5000, () => {
    console.log("SERVER STARTED")
})