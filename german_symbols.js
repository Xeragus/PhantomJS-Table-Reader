var fs = require('fs');
var readStream = fs.open('dirty_data.csv', 'r');
var writeStream = fs.open('clean_data.csv', 'w');

while(!readStream.atEnd()) {
	var line = readStream.readLine();
	var parts = line.split(',');
	console.log(parts[0] + "," + parts[1].trim().replace('aße', '*'));
	console.log();
}

readStream.close();
writeStream.close();

phantom.exit();