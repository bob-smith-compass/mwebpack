define([
    'require',
    'jquery',
    // './node_modules/knockout/build/output/knockout-latest'
    'knockout'
], function(require, $, ko) {
    'use strict';
    console.log('Webpack working!');
    // console.log($);
    $('<h3>jQuery Webpack working!</h3>').appendTo('body');
    $( "<p>jQuery Webpack working!</p>" ).appendTo( ".inner" );

    var viewModel = function(){
        this.fname = ko.observable('David');
        this.comments = ko.observable('Knockout Webpack working!');
        
    }
    // console.log(ko);
    // ko.applyBindigns(new viewModel()); // This will be a subtle spelling error to catch
    ko.applyBindings(new viewModel());
    
});