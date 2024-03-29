var markdown = require("markdown").markdown
var xpath = require('xpath');
var dom = require('xmldom').DOMParser;
var fs = require("fs");
const path = require('path');
const proc = require("process");

var file = proc.argv[2];

var dir = "docs/articles";
var jsonfile = "docs/articles/meta/all.json";

if(file == "dev"){

  var dir = "docs/articles-dev";
  var jsonfile = "docs/articles-dev/meta/all.json";
}

const dirp = path.join(__dirname, '../'.concat(dir));

const files = fs.readdirSync(dirp).filter(file => path.extname(file) === '.md');

var articles = []

files.forEach(function(file){
          
    var data = fs.readFileSync(dirp.concat('/'.concat(file)), 'utf8')
    var md = markdown.toHTML(data)

    var doc = new dom().parseFromString(md)
    var title = xpath.select("string(//h1[1])", doc)
    var date = xpath.select("string(p[last()])", doc)

    articles.push({

      "title":title,
      "date":date,
      "file":file
    })

    try{

      fs.writeFileSync(jsonfile, JSON.stringify(articles, null, 4))
    }
    catch(err){

      console.error(err)    
    }
});

console.log("Done.")