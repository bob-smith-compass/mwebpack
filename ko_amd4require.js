
define([
    'require',
    // 'knockout' // Will not load properly with RequireJS because actual path is node_modules/knockout/build/output/knockout-latest.js
    'node_modules/knockout/build/output/knockout-latest.js',
    'node_modules/jquery/dist/jquery.js'

], function(require, ko, $) {
    'use strict';

    var viewModel = function($){
        this.fname = ko.observable('David');
        this.comments = ko.observable('Knockout Webpack working!');
        this.show = function(){
            $('textarea').css({border: 'solic 1px red'});
        }
        
    }
    // console.log(ko);
    // ko.applyBindigns(new viewModel()); // This will be a subtle spelling error to catch
    ko.applyBindings(new viewModel($));

});



// define(['knockout', 'moment'], function (ko, moment) {

//     'use strict';
//     ko.bindingHandlers.date = {
//         update: function (element, dateValue, allBindings) {
//             var date = ko.utils.unwrapObservable(dateValue()) || '-',
//                 format = allBindings.get('format'),
//                 formattedDate = function () {
//                     return moment(date).format(format);
//                 };
//             ko.bindingHandlers.text.update(element, formattedDate);
//         }
//     };

//     return {
//         dateBinding: ko.bindingHandlers.date
//     };
// });
