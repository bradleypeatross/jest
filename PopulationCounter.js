//const csv = require('csv-parser');
//const fs = require('fs');
const fileReader = require('./FileReader');
const CsvParser = require ('./CsvParser')


class PopulationCounter {
    
    constructor () {   
    
    

    }

    count(filename) {
        var freader = new fileReader();
        var bufferString = freader.readFile(filename);

        //var parser = new CsvParser(bufferString);

    }


    //opens file and reads it and stores it in 
    file_reader() {

    }


}

module.exports = PopulationCounter;