var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');


gulp.task('sass', () => {
    gulp.src('./src/sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css/'));
});

gulp.task('listen', () => {
    gulp.watch('./src/sass/**/*.scss', ['sass'])
})


gulp.task('server', () => {
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    });

    gulp.watch('./src/**/*').on('change', browserSync.reload);

    gulp.watch('./src/sass/**/*.scss', ['sass']);
})