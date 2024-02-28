const fs = require("fs");

//const fileContent = fs.readFileSync("./content.txt", {encoding:"utf-8"})

//console.log(fileContent);

fs.writeFileSync("./write.txt", "WRITE FILE\n", { flag: "a" });