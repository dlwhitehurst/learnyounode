
// **********************************************************
// LearnYouNode No. 3 of 13
// Print number of command-line arguments
//

var result = 0;

for (var i = 2; i < process.argv.length; i++){
    result += Number(process.argv[i]);
}
console.log(result);
