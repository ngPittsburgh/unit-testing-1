var gulp = require("gulp");
var connect = require("gulp-connect");

gulp.task('default', function () {

    // Uses gulp-connect plugin to start up a server
    connect.server({
        root: ['app'],
        port: 9000
    });
});