var {parseEvent} = require('@laihoe/demoparser2');
const fs = require('fs');
const path = require("path");
const directory = path.join(__dirname,'\\outputs');
 
const data = fs.readFileSync('\\demos\\natus-vincere-vs-apeks-m3-mirage-p2.dem');
let buf = Buffer.from(data)
let out = parseEvent(buf, "player_death", ["X", "Y"], ["total_rounds_played"])

fs.writeFileSync(directory+"/newcsvtest.csv",'out');

console.log(out)


