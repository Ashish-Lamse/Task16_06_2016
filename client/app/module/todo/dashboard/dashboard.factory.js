/**
 * Created by Ashish Lamse on 16/6/16.
 */

(function(){

    angular
        .module('todoApp')
        .factory('dashboardFactory', dashboardFactory);

    dashboardFactory.$inject = ['$http', '$q'];

    function dashboardFactory($http,$q){

        return {
            readTask : readTask
        }

        function readTask(){

            var deferred = $q.defer();

            $http.get('todotasks.json').success(
                function (response) {
                deferred.resolve(response.todotasks);
            },

                function(resion){
                deferred.reject("reject");
                console.log(resion);
            });
            return deferred.promise;
        };
    }


}())

