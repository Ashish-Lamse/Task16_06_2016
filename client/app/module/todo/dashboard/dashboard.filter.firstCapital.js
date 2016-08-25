/**
 * Created by Ashish Lamse on 25/8/16.
 */

(function(){
    angular.module('todoApp')

    .filter('capitalize', function() {
        return function(input, scope) {
            if (input!=null)
                input = input.toLowerCase();
            return input.substring(0,1).toUpperCase()+input.substring(1);
        }
    });
}());
