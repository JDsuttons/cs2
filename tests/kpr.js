const fs = require("fs")
const path = require("path");
const directory = path.join(__dirname,'\\outputs');

var {parseEvent} = require('@laihoe/demoparser2');

const data = fs.readFileSync("\\Work\\repos\\cs2\\demos\\complexity-vs-vitality-m1-inferno.dem")

let kills = parseEvent(data, "player_death", ["last_place_name", "team_name"], ["total_rounds_played", "is_warmup_period"])


// Here we could add more filters like weapons and zones etc.
// remove team-kills and warmup kills
let killsNoWarmup = kills.filter(kill => kill.is_warmup_period == false)
let filteredKills = killsNoWarmup.filter(kill => kill.attacker_team_name != kill.user_team_name)
let maxRound = Math.max(...kills.map(o => o.total_rounds_played))


for (let round = 0; round <= maxRound; round++){
    const killsPerPlayer = {};
    let killsThisRound = filteredKills.filter(kill => kill.total_rounds_played == round)
    killsThisRound.forEach(item => {
        const attackerName = item.attacker_name;
        const kills = killsPerPlayer[attackerName] || 0;
        killsPerPlayer[attackerName] = kills + 1;
    });
    console.log("round:", round)
    console.log(killsPerPlayer)
    console.log(filteredKills)
}






