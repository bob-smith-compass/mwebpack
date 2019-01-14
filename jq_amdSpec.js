// define([
//     'node_modules/knockout/build/output/knockout-latest.js',
//     'node_modules/jquery/dist/jquery.js'

// ], function (ko, $) {
//     console.log($);
//     console.log(ko);

//     return {
//         add: function () {

//         }
//     }

// })

define([
    'node_modules/requirejs/require'], 
    function (require) {

    describe('jq_amd', function () {
        describe('add function', function () {
            it('has been called', function (done) {
                define(['jq_amd'], [], function (jqamd) {
                    return {
                        add: function () { }
                    }
                })
                require(['jq_amd'], function (jqamd) {
                    spyOn(jqamd, "add");
                    // jqamd.add(); // Call the function you spy on
                    expect(jqamd.add).toHaveBeenCalled();
                    done();

                })
            })
        })
    })

})