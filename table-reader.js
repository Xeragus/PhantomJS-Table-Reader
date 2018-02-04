var page = require('webpage').create();
var fs = require('fs');
// place the url here
var url = "";
page.open(url, function(){ //Opening the function
    var ua = page.evaluate(function() {
        return document.getElementById("customers").textContent;
    });
    fs.write("data-raw.txt", ua, "w");
    
    // open streams
    var readStream = fs.open('data-raw.txt', 'r');
    var writeStream = fs.open('data.csv', 'w');
    var lineCounter = 0;
    while(!readStream.atEnd()) {
        var line = readStream.readLine().trim();

        if(line!="" && lineCounter<2) {
            writeStream.write(line + ","); 
            lineCounter++;          
        }
        else if (line!="" && lineCounter==2) {
            writeStream.write(line + "\n");
            lineCounter++;
        }
        else {
            lineCounter = 0;
        }
    }
    // close streams
    readStream.close();
    writeStream.close();

    phantom.exit();
});
