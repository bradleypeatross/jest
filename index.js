const PopulationCounter = require('./PopulationCounter');
const fileReader = require('./FileReader');
const CsvParser = require ('./CsvParser');

// entry point of the application
const csvParse = new CsvParser();
const fileread = new fileReader();
popCTR = new PopulationCounter(csvParse,fileread);

var myArgs = process.argv.slice(2,3);

filename = myArgs[0];

console.log(popCTR.count(filename));