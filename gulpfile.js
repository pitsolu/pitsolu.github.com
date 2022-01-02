'use strict';

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var preprocess = require("gulp-preprocess");
var replace = require("gulp-replace");

var $ = require('gulp-load-plugins')({ lazy: true });

var options = {

    bowerJson: require('./bower.json'),
    directory: './bower_components/',
    ignorePath:  '../..'
}

exports.html = async function(){

  var wiredep = require('wiredep').stream;

  gulp
    .src("./site/components/index.html")
    .pipe(wiredep(options))
    .pipe(replace('/bower_components', function() {
            
        return 'bower_components'
    }))    
    .pipe(preprocess({}))
    .pipe(gulp.dest("./"));
};
