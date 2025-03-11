const fs = require("fs")
const path = require("path");
const directory = path.join(__dirname,'\\outputs');

var {parseEvent, parseTicks} = require('@laihoe/demoparser2');

const pathToDemo = "\\demos\\natus-vincere-vs-apeks-m3-mirage-p2.dem"

let gameEndTick = Math.max(...parseEvent(pathToDemo,"round_end").map(x => x.tick))
let fields = ["kills_total", "deaths_total", "mvps", "headshot_kills_total", "ace_rounds_total", "score"]
let scoreboard = parseTicks(pathToDemo, fields, [gameEndTick])

let header = fields
let content = scoreboard

let csvContent = header+ "\n" +content.join(",")

fs.writeFileSync(directory+"/testtest.csv",csvContent);

console.log(scoreboard);