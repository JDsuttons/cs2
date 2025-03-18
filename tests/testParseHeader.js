const fs = require("fs")
const path = require("path");
const directory = path.join(__dirname,'\\outputs');
const { Helpers } = require('\\Work\\repos\\cs2\\helpers')
const { demoFile } =require ("../env.js")

var {parseEvent, parseHeader} = require('@laihoe/demoparser2');
const { kill } = require("process");

const data = fs.readFileSync(demoFile)

let header = parseHeader(data, "map_name")

console.log(header)