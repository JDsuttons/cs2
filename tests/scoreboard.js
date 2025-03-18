const fs = require("fs")
const path = require("path");
const directory = path.join(__dirname,'\\outputs');
const { demoFile } =require ("../env.js")

var {parseEvent, parseTicks} = require('@laihoe/demoparser2');

const data = fs.readFileSync(demoFile)

let gameEndTick = Math.max(...parseEvent(data,"round_end").map(x => x.tick))
let fields = ["4k_rounds_total","ace_rounds_total","deaths_total","headshot_kills_total","kills_total","mvps","score","team_clan_name", "team_rounds_total"]
let scoreboard = parseTicks(data, fields, [gameEndTick])

let header = fields.join(","); 
let content = scoreboard.map(scoreboard => 
  Object.values(scoreboard).join(",")
);
const csvContent = header + "\n" + content.join("\n")

fs.writeFileSync(directory+"/newcsvtest.csv",csvContent);
console.log(scoreboard)

