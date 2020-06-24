const PopulationCounter = require('./PopulationCounter');

// entry point of the application
popCTR = new PopulationCounter();

var myArgs = process.argv.slice(2,3);

filename = myArgs[0];

popCTR.count(filename);