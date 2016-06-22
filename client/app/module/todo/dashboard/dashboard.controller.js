/**
 * Created by Ashish Lamse on 16/6/16.
 */

(function(){
    angular
        .module('todoApp')

        .controller('dashboardController', dashboardController);

    dashboardController.$inject=['$rootScope','dashboardFactory'];

    function dashboardController($rootScope,dashboardFactory,$scope){

        var dc = this;

        dashboardFactory.readTask().then(function(response){
            $rootScope.TASKS = response;
        });

    }

}());


