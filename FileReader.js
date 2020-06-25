const fs = require('fs');
const { type } = require('os');

class FileReader {
    constructor() {
        
    }

    readFile(fName){
        this.fName = fName;
        
        //fs.createReadStream(filename)

        var bufferString ="";

        /*

        fs.readFile(fName, 'utf8', 
            function(err,data){
                //console.log (data)
                bufferString = data;
                console.log(data.length);
                console.log(typeof data);
            });
        */

        return bufferString;

        //console.log (typeof data)

        //console.log(length data)
    }

}

module.exports = FileReader;
