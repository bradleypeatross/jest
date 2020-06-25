
const CsvParser = require("../CsvParser");

describe('Test csv parser', () => {
    //test csv parser
    it('should create csv parser instance with buffer string, returns integer', () => {
      //setup
      csvParser = new CsvParser();
  
      //test
      expect(typeof (csvParser.readLines("testString"))).toBe("number");
    })
  });