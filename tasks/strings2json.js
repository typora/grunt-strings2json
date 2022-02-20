/*
 * grunt-strings2json
 * https://github.com/abner/grunt-strings2json
 *
 * Copyright (c) 2017 Abner Lee
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var i18nStringsFiles = require('i18n-strings-files');

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('strings2json', 'convert from *.strings to *.json', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: ', '
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      
      var data = {};

      f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        var input = require("fs").readFileSync(filepath, options.encode || 'UTF-8');
        input = input.replace(/;\s*\/\*.+\*\//gm, ';');
        Object.assign(data, i18nStringsFiles.parse(input));
      });

      var content = JSON.stringify(data);

      f.dest = f.dest.replace(/\.strings$/gi, ".json");

      // Write the destination file.
      grunt.file.write(f.dest, content);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
