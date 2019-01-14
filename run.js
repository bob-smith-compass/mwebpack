// import Jasmine from 'jasmine';
var Jasmine = require('jasmine');

var jasmine = new Jasmine();
// modify this line to point to your jasmine.json
jasmine.loadConfigFile('spec/support/jasmine.json');
jasmine.execute();
