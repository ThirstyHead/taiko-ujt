const UserJourney = require('./lib/UserJourney/index.js');


const startMessage = "Beginning User Journey";
console.log(startMessage);
console.log('='.repeat(startMessage.length));

const userJourney = new UserJourney('journey/steps.md');
userJourney.start();


// const endMessage = "Ending User Journey";
// console.log(endMessage);
// console.log('='.repeat(endMessage.length));
