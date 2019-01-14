
    /** Unit Tests - 
     * to be moved to its own files
     */
define([
    'require',
    'knockout'
], function(require, ko) {
    'use strict';

    describe("Knockout Unit Testing", function () {
        beforeEach(function () {
          newEntryFirstName = ko.observable('David');
          newEntryLastName = ko.observable('Shams');
          list = ko.observableArray([]);
        });
        it("Frist name should be David, last name should be Shams", function () {
          expect(newEntryFirstName).toBe("David");
          expect(newEntryLastName).toBe("Shams");
        })
      })
    
});


// define(['testUtils', 'knockout', 'moment', 'utils/date.binding'], function (testUtils, ko, moment) {

//     'use strict';
//     ddescribe('utils/date.binding', function () {

//         var testee,
//             targetElement,
//             dateValue;

//         beforeEach(function (done) {
//             testUtils.loadWithCurrentStubs('utils/date.binding', function (dateUtils) {
//                 testee = dateUtils;
//                 done();
//             });
//         });

//         afterEach(function () {
//             testUtils.reset();
//         });

//         function createTestNode() {
//             targetElement = document.createElement('div');
//             targetElement.innerHTML = '<div id="dateBindingElement" data-bind="date: dateValue, format: \'DD MMM YYYY\'"></div>';
//             document.body.appendChild(targetElement);
//         }

//         function deleteTestNode() {
//             var element = document.getElementById("dateBindingElement");
//             element.parentNode.removeChild(element);
//         }

//         describe('ko.bindingHandlers.date', function () {

//             beforeEach(createTestNode);
//             afterEach(deleteTestNode);

//             it('should take an observable date 02-01-2017 and format it to DD MMM YYYY format - 01 Feb 2017', function () {
//                 dateValue = ko.observable('02-01-2017');
//                 ko.applyBindings({dateValue: dateValue}, targetElement);
//                 expect(document.getElementById('dateBindingElement').innerHTML).toBe('01 Feb 2017');
//             });

//             it('should take a string date 02-01-2017 and format it to DD MMM YYYY format - 01 Feb 2017', function () {
//                 dateValue = '02-01-2017';
//                 ko.applyBindings({dateValue: dateValue}, targetElement);
//                 expect(document.getElementById('dateBindingElement').innerHTML).toBe('01 Feb 2017');
//             });

//             it('should take any date (string or observable) and conver it to requested format. 02-01-2017 to MM DD YY', function () {
//                 dateValue = '02-01-2017';

//                 targetElement.innerHTML = '<div id="dateBindingElement" data-bind="date: dateValue, format: \'MM-DD-YY\'"></div>';
//                 document.body.appendChild(targetElement);

//                 ko.applyBindings({dateValue: dateValue}, targetElement);
//                 expect(document.getElementById('dateBindingElement').innerHTML).toBe('02-01-17');
//             });

//             it('should return - if the date value is null or undefiled or blank', function () {
//                 dateValue = '';
//                 ko.applyBindings({dateValue: dateValue}, targetElement);
//                 expect(document.getElementById('dateBindingElement').innerHTML).toBe('-');
//             });
//         });
//     });
// });
