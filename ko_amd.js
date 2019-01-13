
define([
    'require',
    'knockout'
], function(require, ko) {
    'use strict';

    var viewModel = function(){
        this.fname = ko.observable('David');
        this.comments = ko.observable('Knockout Webpack working!');
        
    }
    // console.log(ko);
    // ko.applyBindigns(new viewModel()); // This will be a subtle spelling error to catch
    ko.applyBindings(new viewModel());

    
});