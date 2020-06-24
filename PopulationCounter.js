//const csv = require('csv-parser');
//const fs = require('fs');
const fileReader = require('./FileReader');


class PopulationCounter {
    constructor () {   
    
    this.parser = {};

    }

    count(filename) {

        var freader = new fileReader();
        freader.readFile(filename);
        

    }

    //opens file and reads it and stores it in 
    file_reader() {

    }


}

module.exports = PopulationCounter;