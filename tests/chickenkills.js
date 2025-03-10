var {parseEvent} = require('@laihoe/demoparser2');


// make sure your demo has chickens
let events = parseEvent("\\demos\\natus-vincere-vs-apeks-m3-mirage-p2.dem", "other_death")
let chickenKills = events.filter(event => event.othertype == "chicken")

console.log(chickenKills)