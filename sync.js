//var greeter = require('./greeter');
//greeter.greet('Joe');
//greeter.shout('Joe');

var fs = require('fs');
//console.log(fs);
console.log(fs.readFileSync('./file1.txt').toString("utf-8", 0, 7));
