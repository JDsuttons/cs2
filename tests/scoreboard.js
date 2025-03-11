const fs = require("fs")
const path = require("path");
const directory = path.join(__dirname,'\\outputs');

var {parseEvent, parseTicks} = require('@laihoe/demoparser2');

const pathToDemo = "\\demos\\natus-vincere-vs-apeks-m3-mirage-p2.dem"

let gameEndTick = Math.max(...parseEvent(pathToDemo,"round_end").map(x => x.tick))
let fields = ["4k_rounds_total","ace_rounds_total","deaths_total","headshot_kills_total","kills_total","mvps","score","team_clan_name", "team_rounds_total"]
let scoreboard = parseTicks(pathToDemo, fields, [gameEndTick])

let header = fields.join(","); 
let content = scoreboard.map(scoreboard => 
  Object.values(scoreboard).join(",")
);
const csvContent = header + "\n" + content.join("\n")

fs.writeFileSync(directory+"/newcsvtest.csv",csvContent);
console.log(scoreboard)