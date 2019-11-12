let gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer'),
    pug = require('gulp-pug');

gulp.task('clean', async function () {
    del.sync('dist');
});

gulp.task('scss', function () {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(autoprefixer())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('app/css'));
});

gulp.task('css', function () {
    return gulp.src([
        'node_modules/normalize.css/normalize.css',
        'node_modules/bootstrap/dist/css/bootstrap.css',
        'node_modules/slick-carousel/slick/slick.css'
    ])
        .pipe(concat('_libs.scss'))
        .pipe(gulp.dest('app/scss'));
});

gulp.task('html', function () {
    return gulp.src('app/**/*.html');
});

gulp.task('script', function () {
    return gulp.src('app/js/*.js');
});

gulp.task('js', function () {
    return gulp.src([
        'node_modules/slick-carousel/slick/slick.js',
        'node_modules/bootstrap/dist/js/bootstrap.js'
    ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));
});

gulp.task('pug', function () {
    return gulp.src('app/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('app'));
});

gulp.task('export', function () {
    let buildHtml = gulp.src('app/**/*.html')
        .pipe(gulp.dest('dist'));
    let buildHCss = gulp.src('app/css/**/*.css')
        .pipe(gulp.dest('dist/css'));
    let buildHJs = gulp.src('app/js/**/*.js')
        .pipe(gulp.dest('dist/js'));
    let buildHFonts = gulp.src('app/fonts/**/*.*')
        .pipe(gulp.dest('dist/fonts'));
    let buildHImg = gulp.src('app/img/**/**/**/*.*')
        .pipe(gulp.dest('dist/img'));
});

gulp.task('watch', function () {
    gulp.watch('app/**/**/*.scss', gulp.parallel('scss'));
    gulp.watch('app/*.html', gulp.parallel('html'));
    gulp.watch('app/js/**/**/*.js', gulp.parallel('script'));
    gulp.watch('app/**/**/**/*.pug', gulp.parallel('pug'));
});

gulp.task('build', gulp.series('clean', 'export'));

gulp.task('default', gulp.parallel('css', 'scss', 'js', 'pug', 'watch'));