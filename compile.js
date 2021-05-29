const path = require('path');
//using path module, we get cross-path compatibility
const fs = require('fs');
const solc = require('solc')
//pass in the name of the directory name
const inboxPath = path.resolve(__dirname,'contracts','Inbox.sol');
const source = fs.readFileSync(inboxPath,'utf8');

//pass in the name of the contract and how many we want to compile
// set up module.export so we can add it to other files
module.exports = solc.compile(source,1).contracts[':Inbox'];