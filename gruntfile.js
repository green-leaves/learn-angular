module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        concat: {
            default: {
                src: ["bower_components/angular/angular.js"],
                dest: "app/js/lib/lib.js",
            },
        },
    });

    grunt.loadNpmTasks("grunt-contrib-concat");

    grunt.registerTask("default", function () {
        console.log(1);
    });
};