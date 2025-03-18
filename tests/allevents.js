const fs = require("fs")
var {parseEvents, listGameEvents} = require('@laihoe/demoparser2');
const { demoFile } =require ("../env.js")

const data = fs.readFileSync(demoFile)

// If you just want the names of all events then you can use this:
let eventNames = listGameEvents(data)

console.log(eventNames)