const fs = require("fs")
const path = require("path");
const directory = path.join(__dirname,'\\outputs');

fs.writeFileSync(directory+"/testtest.csv","Hi this is a text file");

