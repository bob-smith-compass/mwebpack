
define([
    'require',
    // 'knockout' // Will not load properly with RequireJS because actual path is node_modules/knockout/build/output/knockout-latest.js
    // 'node_modules/knockout/build/output/knockout-latest.js',
    // './node_modules/jquery/dist/jquery.js'
    'knockout',
    'jquery'

], function(require, ko, $) {
    'use strict';
    console.log($); // undefined

    var viewModel = function(){
        /**
         * Initialize events
         */
        $(function(){
            $('textarea').click(function(event){
                event.stopPropagation();
                console.log('Text area clicked!');
            }); 
        })
        var that=this;
        this.fname = ko.observable('David');
        this.comments = ko.observable('Knockout Webpack working!');
        this.borderSet = ko.observable(false);
        this.show = function(){
            if(!this.borderSet()){
                $('textarea').css({border: 'solid 1px red'}); 
                $('h3').css({border: 'solid 1px red'}); 
                this.borderSet(true)
            }else{
            // console.log($('textarea'));
            console.log($('h3'));
            // require(['node_modules/jquery/dist/jquery.js'], function(){
                $('textarea').css({border: 'solid 2px green'}); // Uncaught TypeError: $ is not a function IF NOT SET IN require-config.js
                // $('h3').css({border: 'solic 1px red'}); // NOT APPLIED: solic is not soliD
                $('h3').css({border: 'solid 2px green'}); // NOT APPLIED: solic is not soliD
            // })
            this.borderSet(false);
            }
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
    ko.applyBindings(new viewModel());

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


