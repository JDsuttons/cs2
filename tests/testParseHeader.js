const fs = require("fs")
const path = require("path");
const directory = path.join(__dirname,'\\outputs');
const { Helpers } = require('\\Work\\repos\\cs2\\helpers')

var {parseEvent, parseHeader} = require('@laihoe/demoparser2');
const { kill } = require("process");

const data = fs.readFileSync(Helpers.demoFile)

let header = parseHeader(data, "map_name")

console.log(header)