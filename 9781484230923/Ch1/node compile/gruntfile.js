module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compile: {
      ractive: {
        src: 'templates/*.mustache',
        dest: 'templates/template.js'
      }
    }
  });

  grunt.loadTasks('./tasks');

  grunt.registerTask('default', ['compile']);
};