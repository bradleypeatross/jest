class CsvParser {
    constructor() {

    }

    readLines(bufferString) {
        this.bufferString = bufferString;
        var count = 0;

        var popLineString = bufferString.split(',')

        //console.log(popLineString[4]);

        //assign population integer
        var tempCount = parseInt(popLineString[4])
        //console.log("tempCount ",tempCount)
        if (!isNaN(tempCount)) {
            count = tempCount;
            //console.log(popLineString[4])
            //console.log(count)
        };
        //returns the population for the line
        return count;
    }

}

module.exports = CsvParser;