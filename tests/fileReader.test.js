const FileReader = require("../FileReader");

describe('Test file reader', () => {
    //test filereader
    it('should create file reader instance with filename', () => {
      //setup
      fReader = new FileReader();
  
      //test
      expect(typeof (fReader.readFile("./data/testData.csv"))).toBe("string");
    })
  });
  /* todo, figure out block quote
    //test filereader
    it('should create file reader instance with filename and read sample testData', () => {
      //setup
      fReader = new FileReader();
  
      //test
      expect(fReader.readFile("./data/testData.csv")).toBe(`Country,City,AccentCity,Region,Population,Latitude,Longitude
  ad,aixas,Aix�s,06,,42.4833333,1.4666667
  ad,aixirivali,Aixirivali,06,,42.4666667,1.5
  ad,aixirivall,Aixirivall,06,150,42.4666667,1.5
  ad,aixirvall,Aixirvall,06,,42.4666667,1.5
  ad,aixovall,Aixovall,06,500,42.4666667,1.4833333`);
    })
  
  */