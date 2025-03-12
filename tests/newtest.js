const fs = require("fs")
const path = require("path");
const directory = path.join(__dirname,'\\outputs');

var {parseEvent} = require('@laihoe/demoparser2');
const { kill } = require("process");

const data = fs.readFileSync("\\Work\\repos\\cs2\\demos\\complexity-vs-vitality-m1-inferno.dem")

let kills = parseEvent(data, "round_end")


let header = ["event_name","reason","round","tick","winner" ]

let content = kills.map(kills => 
  Object.values(kills).join(",")
);

const csvContent = header + "\n" + content.join("\n")

fs.writeFileSync(directory+"/abc.csv",csvContent);

console.log(kills)