var gulp = require('gulp'),
    sass = require('gulp-sass');


gulp.task('sass', () => {
    gulp.src('./src/sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css/'));
});

gulp.task('listen', () => {
    gulp.watch('./src/sass/**/*.scss', ['sass'])
})