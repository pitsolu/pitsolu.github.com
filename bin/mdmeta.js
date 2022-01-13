var markdown = require("markdown").markdown
var xpath = require('xpath');
var dom = require('xmldom').DOMParser;
var fs = require("fs");
const path = require('path');
const proc = require("process");

var file_type = proc.argv[2];

var dir = "docs/articles";
if(file_type == "dev")
  var dir = "docs/articles-dev";

const dirp = path.join(__dirname, '../'.concat(dir));

const files = fs.readdirSync(dirp).filter(file => path.extname(file) === '.md');

files.forEach(function(file){
          
    var data = fs.readFileSync(dirp.concat('/'.concat(file)), 'utf8')
    var md = markdown.toHTML(data)

    var doc = new dom().parseFromString(md)
    var title = xpath.select("string(//h1[1])", doc)
    var date = xpath.select("string(p[last()])", doc)

    var article_json = {

      "title":title,
      "date":date,
      "file":file
    }

    var meta_dir = dirp.concat("/meta/".concat(file.replace(".md",".json")))

    try{

      fs.writeFileSync(meta_dir, JSON.stringify(article_json, null, 4))  
    }
    catch(err){

      console.error(err)    
    }
});

console.log("Done.")