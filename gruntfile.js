module.exports = function (grunt) {
    grunt.initConfig({
        browserify: {
            development: {
                src: [
                    "./src/**/*.js"
                ],
                dest: 'common.js',
                options: {
                    browserifyOptions: { debug: true },
                    transform: [["babelify", { "presets": ["es2015"] }]]
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-browserify');
};
