const PopulationCounter = require('../PopulationCounter');
const FileReader = require("../FileReader");
const CsvParser = require("../CsvParser");

describe('The populatron', () => {
  it('should print the world population', () => {
      //setup
      const fileread = new FileReader();
      const csvParse = new CsvParser();

      const popCTR = new PopulationCounter(csvParse,fileread);
      //test goes here
      expect(popCTR.count("./data/worldcitiespop.csv")).toBe("The population of the world is: 1,347,982,728");
  })
});

describe('Test mock CSV and', () => {
    it('test with mock CSV', () => {
      //setup
  
      //dependency mock
      //mock CSV
      const mockCSV = jest.fn();
      mockCSV.mockReturnValue(123)
      const mockCSVParser = {readLines: mockCSV};
  
      const CSVexpected = 123;
  
      //mock file reader
      const mockFileReader = jest.fn();
      const mockReadFile = {readFile : mockFileReader}
      mockFileReader.mockReturnValue(`Country,City,AccentCity,Region,Population,Latitude,Longitude\n`);
      
      const readerExpected = `Country,City,AccentCity,Region,Population,Latitude,Longitude\n`;
  
      // dependant
  
      const popCTR = new PopulationCounter(mockCSVParser,mockReadFile)
      
      // exercise
  
      
  
  
      // asert
  
      expect(popCTR.count("./data/testData.csv")).toBe("The population of the world is: 123");
  
      //expect(mockCSV).toHaveBeenCalledWith(readerExpected) //newline problems
      expect(mockFileReader).toHaveBeenCalledWith("./data/testData.csv")
  
    })
  
  
  });