const fs = require('fs');
const { type } = require('os');

class FileReader {
    constructor() {
        
    }

    readFile(fName){
        this.fName = fName;

        //fName = "./data/testData.csv"

        //  ./data/testData.csv
        //  ./data/worldcitiespop.csv
        //fs.createReadStream(filename)

        var bufferString = fs.readFileSync(fName, 'utf8')

        
        
        //console.log("bufferString ", bufferString);
        return bufferString;

        //console.log (typeof data)

        //console.log(length data)
    }

}

module.exports = FileReader;
