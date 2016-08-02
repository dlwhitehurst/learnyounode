// **********************************************************
// LearnYouNode No. 4 of 13
// read file, count newlines and print result noOfNewlines
//

var fs = require('fs') // require is a special function provided by node

if (process.argv[2] == null) {
  throw new Error("Filename not given!");
}

function numberOfNewlines() {
  fs.readFile(process.argv[2].toString(), "utf8", function callback(err, data) {
    if(err)
    {
      console.log("An I/O error has occurred!");
    }
    var lines = data.split("\n");
    console.log(lines.length);
  })
}

numberOfNewlines();
