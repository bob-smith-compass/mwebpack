# How to run Webpack from CLI
`webpack --mode=development ./index.js`
This will put the bundle in dist/main.js

# Install Knockout with npm
`npm i -S knockout` Note: not knockoutjs

# Unit Testing

## Karma
`npm install --save-dev karma karma-webpack`
[Karma Webpack](https://github.com/webpack-contrib/karma-webpack)

## Karma to run RequireJS
To get Karma to run with Require.js we need two files:

karma.conf.js — which configures Karma
test-main.js — which configures Require.js for the tests
[http://karma-runner.github.io/0.12/plus/requirejs.html](http://karma-runner.github.io/0.12/plus/requirejs.html)

# Jasmine
`jasmine init`
`jasmine examples` // Install Jasmine Test Runner and Examples

## Jasmine with Webpack Karma
`sudo npm i karma-jasmine `
`sudo npm i jasmine`
`jasmine init` 
`sudo npm install --save-dev webpack karma karma-webpack` Webpack must be locally installed
[https://webpack.js.org/guides/integrations/#karma](https://webpack.js.org/guides/integrations/#karma)
This command will create a jasmine.json file, which will look like this:
```
{
  // dirctory under which files exists
  "spec_dir": "app/javascript",
  // naming convention of the file, i.e. file ending in spec.js
  "spec_files": [
    "**/*[sS]pec.js"
  ],
  // helper files are run before specs
  "helpers": [
    "spec_helpers/**/*.js"
  ],
  "stopSpecOnExpectationFailure": false,
  "random": false
}
```

[How to configure Jasmine test with React, ES6 and Webpack](https://www.classandobjects.com/test_using_jasmine_react_es6_webpack/)