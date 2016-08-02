// **********************************************************
// LearnYouNode No. 5 of 13
// read directory, provide directory file listing using a filetype extension filter
// Usage: node filter-ls.js <directory path> <extension>
//

var path = require('path')
var fs = require('fs') // require is a special function provided by node

if (process.argv[2] == null) {
  throw new Error("Directory file path not provided!");
}

if (process.argv[3] == null) {
  throw new Error("File type extension not provided!");
}

function ls() {
  fs.readdir(process.argv[2].toString(), function callback(err, files) {
    if(err)
    {
      console.log("An I/O error has occurred!");
    }
    // for using path.extname to match process.argv[3] e.g. path.extname('index.coffee.md')
    for (var i=0; i<files.length; i++) {
      if (path.extname(files[i]) === process.argv[3]) {
        console.log(files[i]);
      }
    }

  })
}

ls();

// Coffee script written by Jaz Singh (Shorter and more Succinct)
// Jaz also did not use path require(ment)
/*
fs = require 'fs'

extension = "." + process.argv[3]

fs.readdir process.argv[2], (error, files) ->
	for file in files
		if file.endsWith extension
			console.log file
*/
