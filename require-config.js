// require.config({
//     paths: {
//         require: './node_modules/requirejs/require.js'
//     }
// })

require.config({
    // Karma serves files under /base, which is the basePath from your config file
    baseUrl: '',
  
    paths: {
      'knockout': 'node_modules/knockout/build/output/knockout-latest',
      'jquery': './node_modules/jquery/dist/jquery'
  
    //   'jquery.validate': 'node_modules/jquery.validate.min',
    //   'jquery.validate.unobtrusive': 'node_modules/jquery.validate.unobtrusive',
    //   'jasmine': 'node_modules/jasmine-jquery',
    //   'login': 'src/js/login'
    },
    shim: {
      'knockout': ['jquery'],
    //   'jquery.validate.unobtrusive': ['jquery', 'jquery.validate']
    'ko_amd4require': ['knockout', 'jquery']
    }
})