const fs = require("fs");

//Read File:
fs.readFile("./content.txt", { encoding: "utf-8" }, (error, response) => {
    if (error) return "Error Occured";
    console.log(response)
})

//Write File:
fs.writeFile("./write.txt", "WRITE FILE ASYNC\n", { flag: "a" }, (error, response) => {
    if (error) return "Error Occured";
    console.log(response)
})