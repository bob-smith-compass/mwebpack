
define([
    'require',
    // 'knockout' // Will not load properly with RequireJS because actual path is node_modules/knockout/build/output/knockout-latest.js
    'node_modules/knockout/build/output/knockout-latest.js',
    'node_modules/jquery/dist/jquery.js'

], function(require, ko, $) {
    'use strict';
    console.log($); // undefined
    console.log('jQuery not'); // undefined

    var viewModel = function($){
        var that=this;
        this.fname = ko.observable('David');
        this.comments = ko.observable('Knockout Webpack working!');
        this.show = function(){
            require(['node_modules/jquery/dist/jquery.js'], function(){
                $('textarea').css({border: 'solic 1px red'});
            })
        }
        
        /** DEBUG: pass $ */
        require(['node_modules/jquery/dist/jquery.js'], function($){
            that.mow = function(){
            $('textarea').css({border: 'solic 5px green'});
            }
        })
        
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
