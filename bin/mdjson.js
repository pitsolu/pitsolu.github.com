var markdown = require("markdown").markdown
var xpath = require('xpath');
var dom = require('xmldom').DOMParser;
var fs = require("fs");
const path = require('path');
const proc = require("process");

var file = proc.argv[2];

var dir = "docs/articles";
var jsonfile = "docs/articles.json";

if(file == "dev"){

  var dir = "docs/articles-dev";
  var jsonfile = "docs/articles-dev.json";
}


//joining path of directory 
const directoryPath = path.join(__dirname, '../'.concat(dir));
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {

    var articles = [];
    
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 

    //listing all files using forEach
    files.forEach(function (file) {
        
        // Do whatever you want to do with the file
        var data = fs.readFileSync(dir.concat('/'.concat(file)), 'utf8')
        var md = markdown.toHTML(data)

        var doc = new dom().parseFromString(md)
        var title = xpath.select("string(//h1[1])", doc)
        var date = xpath.select("string(p[last()])", doc)

        articles.push({

          "title":title,
          "date":date,
          "file":file
        })
    });

    try {
      fs.writeFileSync(jsonfile, JSON.stringify(articles, null, 4))
      //file written successfully
    } catch (err) {
      console.error(err)
    }

    // console.log(articles)
});