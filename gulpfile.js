var gulp = require('gulp'),
    sass = require('gulp-sass'),
    include = require('gulp-file-include'),
    clean = require('gulp-clean'),
    browserSync = require('browser-sync');


gulp.task('clean', () => {
    return gulp.src('dist')
        .pipe(clean());
});

gulp.task('copy', ['clean'], () => {
    return gulp.src([
            'src/components/bootstrap/dist/**/*',
            'src/components/font-awesome/**/*',
            'src/css/**/*',
            'src/javascript/**/*',
            'src/imagens/**/*'
        ], { "base": "src" })
        .pipe(gulp.dest('dist'))

});

gulp.task('sass', () => {
    gulp.src('./src/sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('listen', () => {
    gulp.watch('./src/sass/**/*.scss', ['sass'])
});

gulp.task('html', () => {
    return gulp.src('./src/index.html')
        .pipe(include())
        .pipe(gulp.dest('dist'))
});


gulp.task('server', ['html'], () => {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    });

    gulp.watch('./src/**/*.html', ['html']);
    gulp.watch('./dist/**/*').on('change', browserSync.reload);

    gulp.watch('./src/sass/**/*.scss', ['sass']);
});