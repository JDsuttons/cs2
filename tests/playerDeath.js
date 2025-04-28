const fs = require("fs")
const path = require("path");
const directory = path.join(__dirname,'\\outputs');
const { Helpers } = require('\\Work\\repos\\cs2\\helpers')
const { demoFile,pdFileName } =require ("../env.js")

var {parseEvent} = require('@laihoe/demoparser2');
const { kill } = require("process");

const data = fs.readFileSync(demoFile)

let kills = parseEvent(data, "player_death", ["active_weapon_name"])

var helpers = new Helpers()
let header = helpers.playerDeathsHeader()

let content = kills.map(kills => 
  Object.values(kills).join(",")
);

const csvContent = header + "\n" + content.join("\n")

fs.writeFileSync(`${pdFileName}`,csvContent);

console.log(kills)