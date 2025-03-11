var {parseEvent} = require('@laihoe/demoparser2');
const fs = require('fs');
const path = require("path");
const directory = path.join(__dirname,'\\outputs');
 
const data = fs.readFileSync("\\Work\\repos\\cs2\\demos\\complexity-vs-vitality-m1-inferno.dem");
let buf = Buffer.from(data)
let out = parseEvent(data, "player_death", ["total_rounds_played"])

let header = buf.join(","); 
let content = out.map(out => 
  Object.values(out).join(",")
);
const csvContent = header + "\n" + content.join("\n")

fs.writeFileSync(directory+"/random.csv",csvContent);