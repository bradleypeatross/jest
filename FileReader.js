const fs = require('fs');
const { type } = require('os');

class FileReader {
    constructor() {
        
    }

    readFile(fName){
        this.fName = fName;
        
        //fs.createReadStream(filename)

        var bufferArrary = [];

        fs.readFile(filename, 'utf8', 
            function(err,data){
                //console.log (data)
                bufferArrary.push(data);
                console.log(typeof data);
            });

        //console.log(bufferArrary[0]);

        //console.log (typeof data)

        //console.log(length data)


    }

}

module.exports = FileReader;
