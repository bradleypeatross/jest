//const csv = require('csv-parser');
//const fs = require('fs');
const fileReader = require('./FileReader');
const CsvParser = require ('./CsvParser');


class PopulationCounter {
    
    constructor (csvParser, fileReader) {
        this.csvParser = csvParser;
        this.fileReader = fileReader;   

    }

    count(filename) {
        var totalPop = 0;
        //var freader = new fileReader();
        //var csvParser = new CsvParser();
        
        var bufferString = this.fileReader.readFile(filename) //freader.readFile(filename);

        //loop until end of string

        var lineString = "";
        var i = 0;
        while (i < bufferString.length)
        {
            lineString += bufferString[i];

            if (bufferString[i] == '\n') {
                lineString = lineString.slice(0,lineString.length - 1);
                //console.log(lineString);
                //call csvparser, returns integer
                totalPop += this.csvParser.readLines(lineString);
                //console.log(totalPop);
                lineString = "";
            }
            

          i++;
        }


        //console.log("The population of the world is: ",totalPop);
        return "The population of the world is: "+totalPop.toLocaleString();

    }

}

module.exports = PopulationCounter;