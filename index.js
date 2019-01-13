define([
    'require',
    'jquery',
    // './node_modules/knockout/build/output/knockout-latest'
    'knockout',
    './ko_amd.js'
], function(require, $, ko, koamd) {
    'use strict';
    console.log('Webpack working!');
    // console.log($);
    $('<h3>jQuery Webpack working!</h3>').appendTo('body');
    $( "<p>jQuery Webpack working!</p>" ).appendTo( ".inner" );

    
});