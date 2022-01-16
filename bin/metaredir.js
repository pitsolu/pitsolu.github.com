var quickTemplate = require('quicktemplate');
// var markdown = require("markdown").markdown
// var xpath = require('xpath');
// var dom = require('xmldom').DOMParser;
var fs = require("fs");
const path = require('path');
const proc = require("process");

var file = proc.argv[2];

var dir = "redirects/articles/";
var jsonfile = "docs/articles/meta/all.json";
var urlpart = "news"

if(file == "dev"){

  dir = "redirects/articles-dev/";
  jsonfile = "docs/articles-dev/meta/all.json";
  urlpart = "dev"
}

jsonfile = path.join(__dirname, "../".concat(jsonfile))

var metatpl = path.join(__dirname, "../".concat("static/tpl/meta.html"))

var redirdir = path.join(__dirname, "../".concat("static/".concat(dir)))

var jsonList = require(jsonfile);

var html = "";

var filename = "";

jsonList.forEach(function(json){

    json.descr = json.title
    filename = json.file
    json.file = urlpart + "/".concat(json.file)
    json.fb_id = "None"

    html = quickTemplate(json, metatpl);

    // console.log(html)

    try{

      fs.writeFileSync(redirdir.concat(filename + ".html"), html)  
    }
    catch(err){

      console.error(err)    
    }
})

