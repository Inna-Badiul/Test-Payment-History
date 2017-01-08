var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    jsSources = [
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/director/build/director.min.js',
        'node_modules/lodash/lodash.min.js',
        'js/app.js',
        'js/*.js'
    ];

gulp.task('sass', function () {
    return gulp.src('css/styles.scss')

        .pipe(sass({includePaths:["node_modules/bootstrap/dist/css"]}).on('error', sass.logError))
        .pipe(gulp.dest('dist'));
});

gulp.task('sass:prod', function () {
    return gulp.src('css/styles.scss')

        .pipe(sass({
            includePaths:["node_modules/bootstrap/dist/css"],
            outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('dist'));
});

gulp.task('scripts:dev', function () {
    return gulp.src(jsSources)
        .pipe(sourcemaps.init())
        .pipe(concat('all.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));
});

gulp.task('scripts:prod', function () {
    return gulp.src(jsSources)
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
    gulp.watch('css/*.scss', ['sass']);
    gulp.watch('js/*.js', ['scripts:dev']);
});


gulp.task('default', ['sass', 'scripts:dev' ,'watch']);
gulp.task('prod', ['sass:prod', 'scripts:prod']);
