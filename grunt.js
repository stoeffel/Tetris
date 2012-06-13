module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    lint: {
      all: ['grunt.js','app/**/*.js','app.js']
    },
    jshint: {
      options: {
        browser: true
      }
    },
    concat: {
    dist: {
      src: ['app/**/*.js','app.js'],
      dest: 'app.all.js'
    }
  },
  min: {
    dist: {
      src: ['app.all.js'],
      dest: 'app.all.min.js'
    }
  }
  });

  // Load tasks from "grunt-sample" grunt plugin installed via Npm.
  grunt.loadNpmTasks('grunt-sample');
  grunt.loadNpmTasks('grunt-concat');

  // Default task.
  grunt.registerTask('default', 'lint sample');

};