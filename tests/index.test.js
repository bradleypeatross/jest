const PopulationCounter = require('../PopulationCounter');
const FileReader = require("../FileReader");
const CsvParser = require("../CsvParser");

describe('The populatron', () => {
  it('should print the world population', () => {
      //setup
      const popCTR = new PopulationCounter();
      //test goes here
      expect(popCTR.start()).toBe("The population of the world is: 1,347,982,728");

      
  })

  //test filereader
  it('should create file reader instance with filename', () => {
    //setup
    fReader = new FileReader();

    

    //test
    expect(typeof (fReader.readFile("testFile"))).toBe("string");
  })


  //test csv parser
  it('should create csv parser instance with buffer string, returns integer', () => {
    //setup
    csvParser = new CsvParser();

    

    //test
    expect(typeof (csvParser.readLines("testString"))).toBe("number");
  })



});