var {parseEvent} = require('@laihoe/demoparser2');
const fs = require('fs');
const path = require("path");
const directory = path.join(__dirname,'\\outputs');
 
const data = fs.readFileSync("\\Work\\repos\\cs2\\demos\\complexity-vs-vitality-m1-inferno.dem");
let buf = Buffer.from(data)
let out = parseEvent(data, "player_death", ["total_rounds_played"])


//fs.writeFileSync(directory+"/random.csv",csvContent);

console.log(out)