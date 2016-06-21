/**
 * Created by Ashish Lamse on 16/6/16.
 */

(function(){
    angular
        .module('todoApp')
        .factory('dashboardFactory',function($http,$rootScope){
            return{
                readTask:function(){
                    $rootScope.ALL_TASKS=null;

                    $http.get('todotasks.json').success(function (response) {

                        $rootScope.ALL_TASKS= response.todotasks;


                    })
                    return $rootScope.ALL_TASKS;
                }
            }
        });
}());




/*dashboardFactory.$inject=['$http','$rootScope']


 function  dashboardFactory($http,$rootScope) {
 alert('inside factory')

 $rootScope.ALL_TASKS=null;

 var factory = {
 readTask: readTask
 };

 return factory;
 }


 function readTask() {
 $http.get('todotasks.json').success(function (response) {
 $rootScope.ALL_TASKS = response.todotasks;
 return $rootScope.ALL_TASKS;
 });
 }*/