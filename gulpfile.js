var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var minifyCss = require('gulp-minify-css');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');


var cssPath = 'sass/';

gulp.task('sass', function () {
    return sass(cssPath + 'styles.scss').on('error', sass.logError)
        .pipe(postcss([
            autoprefixer({browsers: ['last 2 versions', 'ie >= 10']})
        ]))
        .pipe(minifyCss({compatibility: 'ie10'}))
        .pipe(gulp.dest(cssPath))
});
