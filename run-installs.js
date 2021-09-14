const officialPath = process.env.OFFICIAL_ACTION_PATH;

const setupDotnet = require(officialPath + '/dist');

console.log(JSON.stringify(setupDotnet, null, 2));