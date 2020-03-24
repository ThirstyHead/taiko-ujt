const fs = require('fs');
const readline = require('readline');
const taiko = require('taiko');

class UserJourney{
  constructor(fileName){
    this.fileName = fileName;
    // console.log(taiko);
    this.lines = [];
  }

  start(){

    let shadowLines = this.lines;
    const rl = readline.createInterface({
      input: fs.createReadStream(this.fileName),
      crlfDelay: Infinity
    });

    rl.on('line', (line) => {
      // console.log(`Line from file: ${line}`);
      // taiko['openBrowser']();
      // taiko[line]();
      shadowLines.push(line);
    });

    rl.on('close', () => {
      console.log(shadowLines);
    });
  }
}


module.exports = UserJourney;



