const fs = require("fs")
const { Helpers } = require('\\Work\\repos\\cs2\\helpers')
const { demoFile, phFileName } =require ("../env.js")

var {parseHeader} = require('@laihoe/demoparser2');

const data = fs.readFileSync(demoFile)

var helpers = new Helpers()
let header = helpers.gameHeader()

const parsedContent = parseHeader(data)

let content = [parsedContent].map(parsedContent => 
    Object.values(parsedContent).join(",")
  );

const csvContent = header + "\n" + content
  
fs.writeFileSync(`${phFileName}`,csvContent);

console.log(csvContent)