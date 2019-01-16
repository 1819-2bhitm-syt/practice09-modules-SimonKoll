const readline = require('readline');
const fs = require('fs');
let compressedLines = [];


let decompress = function (line) {
    var i = 0;
    var stringReturn='';
    var char = line.charAt(0);
    var numbstring = line.substring(1, line.length);
    var numb = parseInt(numbstring);
    for (i = 0; i < numb; i++) {
        stringReturn = stringReturn + char;
    }
    return stringReturn;

}
const rl = readline.createInterface({
    input: fs.createReadStream('compressed.txt'),
    crlfDelay: Infinity
});

rl.on('line', (line) => {
    compressedLines.push(line);
});

rl.on('close', (line) => {
    for (line of compressedLines) {
        let decompressedLine = decompress(line);
        console.log(decompressedLine);
    }
});