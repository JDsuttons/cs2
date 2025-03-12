var {parseEvents, listGameEvents} = require('@laihoe/demoparser2');
const pathToDemo = ("\\Work\\repos\\cs2\\demos\\complexity-vs-vitality-m1-inferno.dem")

// If you just want the names of all events then you can use this:
let eventNames = listGameEvents(pathToDemo)

console.log(eventNames)