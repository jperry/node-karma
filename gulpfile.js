var gulp = require('gulp');
var karma = require('karma').server;

gulp.task('default', function() {
    // place code for your default task here
});

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done);
});