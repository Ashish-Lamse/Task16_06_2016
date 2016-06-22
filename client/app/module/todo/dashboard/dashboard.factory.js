/**
 * Created by Ashish Lamse on 16/6/16.
 */

(function(){
    angular
        .module('todoApp')
        .factory('dashboardFactory',function($http,$rootScope, $q){

            var readTask = function(){
                console.log("in read task");
                var deferred = $q.defer();
                    $http.get('todotasks.json').success(function (response) {
                        deferred.resolve(response.todotasks);
                    }, function(){
                        deferred.reject("reject");
                    });
                return deferred.promise;
            };

            return {
                readTask : readTask
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