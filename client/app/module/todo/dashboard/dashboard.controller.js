/**
 * Created by Ashish Lamse on 16/6/16.
 */

(function(){
    angular
        .module('todoApp')
        .controller('dashboardController',function ($resource) {
            return $resource('http://192.168.2.33', {});
        })

}());

/*.factory('Employee', ['$resource',
    function ($resource) {
        return $resource('http://10.0.1.24:3000/employees/:employeeId', {});
    }])*/
