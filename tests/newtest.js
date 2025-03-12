const fs = require("fs")
const path = require("path");
const directory = path.join(__dirname,'\\outputs');
const { Helpers } = require('\\Work\\repos\\cs2\\helpers')

var {parseEvent} = require('@laihoe/demoparser2');
const { kill } = require("process");

const data = fs.readFileSync("\\Work\\repos\\cs2\\demos\\complexity-vs-vitality-m1-inferno.dem")

let kills = parseEvent(data, "player_death")


var helpers = new Helpers()
let header = helpers.playerDeathsHeader()

let content = kills.map(kills => 
  Object.values(kills).join(",")
);

const csvContent = header + "\n" + content.join("\n")

fs.writeFileSync(directory+"/abc.csv",csvContent);

console.log(csvContent)