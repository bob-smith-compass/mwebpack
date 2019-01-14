module.exports = (config) => {
    config.set({

        // ... normal karma configuration
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        reporters: ['progress'],
        colors: true,
        autoWatch: true,
        browsers: ['Chrome'],
        // frameworks: ['jasmine', 'requirejs'],
        frameworks: ['jasmine'],
        // enable / disable colors in the output (reporters and logs)
        colors: true,
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,






        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        // frameworks: ['jasmine', 'requirejs'],



        files: [
            'node_modules/requirejs/require.js',

            // all files ending in "_test"
            { pattern: 'test/*Spec.js', watched: false },
            { pattern: 'test/**/*Spec.js', watched: false }
            // each file acts as entry point for the webpack configuration
        ],

        preprocessors: {
            // add webpack as preprocessor
            'test/*Spec.js': ['webpack'],
            'test/**/*_Spec.js': ['webpack']
        },
        plugins: [
            'karma-chrome-launcher',
            // 'karma-tap',
            'karma-jasmine',
            // 'karma-sourcemap-loader',
            'karma-webpack' // *** This 'registers' the Karma webpack plugin.
        ],


        webpack: {
            // karma watches the test entry points
            // (you don't need to specify the entry option)
            // webpack watches dependencies

            // webpack configuration
        },

        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i. e.
            stats: 'errors-only'
        }
    })
}
