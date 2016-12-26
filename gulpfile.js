var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    jsSources = [
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/lodash/lodash.min.js',
        'js/*.js'
    ];
gulp.task('sass', function () {
    return gulp.src('css/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist'));
});

gulp.task('scripts', function () {
    return gulp.src(jsSources)
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('copy', function(){
    return gulp.src('index.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
    gulp.watch('css/*.scss', ['sass'])
    gulp.watch('js/*.js', ['scripts'])
    gulp.watch('index.html', ['copy']);
});


gulp.task('default', ['sass', 'scripts' ,'watch', 'copy']);
