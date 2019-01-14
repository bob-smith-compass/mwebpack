module.exports = (config) => {
    config.set({
      // ... normal karma configuration
      files: [
        // all files ending in "_test"
        { pattern: 'test/*Spec.js', watched: false },
        { pattern: 'test/**/*Spec.js', watched: false }
        // each file acts as entry point for the webpack configuration
      ],
  
      preprocessors: {
        // add webpack as preprocessor
        'test/*_test.js': [ 'webpack' ],
        'test/**/*_test.js': [ 'webpack' ]
      },
      plugins: [
        'karma-chrome-launcher',
        // 'karma-tap',
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
    