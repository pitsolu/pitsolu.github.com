var markdown = require("markdown").markdown
var xpath = require('xpath');
var xmldom = require('xmldom');
var fs = require("fs");
var proc = require("process")

var dom = xmldom.DOMParser;
var serializer = new xmldom.XMLSerializer();

var file = proc.argv[2]

var data = fs.readFileSync(file, 'utf8')
var md = markdown.toHTML(data)

var doc = new dom().parseFromString(md)
var title = xpath.select("string(//h1[1])", doc)
// var date = xpath.select("string(//p[last()])", doc)
var date = xpath.select("string(p[last()])", doc)

console.log(title);
console.log(date);