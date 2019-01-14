define(['require', 'knockout'], function(require, ko){
    var viewModel = function(){
        // this.fname = ko.obervable('David')
    }
    ko.applyBindings(new viewModel());
})
describe('Unit Test', function(){
    it('Should pass', function(){
        expect(true).toBe(true);
    })
})