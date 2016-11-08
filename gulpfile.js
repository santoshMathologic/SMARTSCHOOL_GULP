var gulp = require("gulp");
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var merge = require('merge-stream');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var less = require('gulp-less');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var rename = require('gulp-rename');
var gulpMultinject = require('gulp-multinject');
var sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

var inputPath = 'public_dev';  // eg.: src  or  src/html
var outputPath = 'public';  // eg.: dist  or public/html


var output = outputPath + '/';
var input = inputPath + '/';





gulp.task('styles', function() {

      var lessStream = gulp.src(input + 'less/**/*.less')
        .pipe(less())
        .pipe(concat('less-files.less'));

        
    var scssStream = gulp.src(input + 'scss/**/*.scss')
        .pipe(sass())
        .pipe(concat('scss-files.scss'));


    var cssStream = gulp.src(input + 'styles/**/*.css')
         .pipe(concat('css-files.css'));


    var mergedStream = merge(cssStream,lessStream,scssStream)
        .pipe(concat('main.styles.min.css'))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(cssnano())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(output + 'stylesheets'));

    return mergedStream;
});

// Copy all ng js files
gulp.task('ng', function() {
    console.log("ng is updating");
    return gulp.src(input + 'ng/**/*')
        .pipe(gulp.dest(output + 'ng'))
});

gulp.task('views', function() {
    console.log("views is updating");
    return gulp.src(input + 'views/**/*')
        .pipe(gulp.dest(output + 'views'))
});

// Copy Images
gulp.task('assests', function() {
    return gulp.src(input + 'assets/**/*.+(png|jpg|jpeg|gif)')
        .pipe(gulp.dest(output + 'assets'))
});



gulp.task('bower_components', function() {
    console.log("bower is updating");
    return gulp.src(input + 'bower_components/**/*')
        .pipe(gulp.dest(output + 'bower_components'))
});

 
gulp.task('useref', function() {

    if (process.env.NODE_ENV == 'development' || process.env.NODE_ENV == undefined) {
        console.log('in development');
        return gulp.src(input + '*.html')
            .pipe(useref())
            .pipe(gulp.dest(output))
    }
    else {
        console.log('iin production');
        console.log(process.env.NODE_ENV);
        return gulp.src(input + '*.html')

            .pipe(useref())
            .pipe(gulp.dest(output))
    }

});


gulp.task('javascripts', function() {
    return gulp.src(input + 'javascripts/*.js')
        .pipe(gulp.dest(output + 'javascripts/'))
})


// Live-Sync on browser
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: output
        },
    })
});



// Clean up: clean {{outputPath}}
gulp.task('clean:' + outputPath, function() {
    return del.sync(outputPath);
});

// Clean everything
gulp.task('cache:clear', function(callback) {
    return cache.clearAll(callback)
});



// This is watch to update the browser in any file changes
gulp.task('watch', ['browserSync', 'styles', 'ng','views', 'useref'], function() {
    gulp.watch(input + 'css/**/*.css', ['styles']);
    gulp.watch(input + 'javascripts/**/*.js', ['javascripts']);
    gulp.watch(input + 'ng/**/*', ['ng', 'useref']);
    gulp.watch(input + 'views/**/*', ['views', 'useref']);
    gulp.watch(input + '**/*.html', ['useref']);
    gulp.watch(input + '**/*', browserSync.reload);
    
});


gulp.task('build', function(callback) {
    runSequence('clean:' + outputPath,
        ['styles', 'useref', 'ng','views','assests','bower_components','javascripts'],
        callback
    )
});


gulp.task('default', function(callback) {
    runSequence(['styles', 'ng','views', 'useref', 'browserSync', 'watch','bower_components','assests','javascripts'],
        callback
    )
});

