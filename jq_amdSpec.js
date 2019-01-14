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

describe('jq_amd', function(){
    describe('add function', function(){
        it('has been called', function(){
            expect(add).toHaveBeenCalled();
        })
    })
})