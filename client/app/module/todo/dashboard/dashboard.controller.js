/**
 * Created by Ashish Lamse on 16/6/16.
 */

/*
(function(){
    angular
        .module('todoApp')
        .controller('dashboardController', dashboardController);

    dashboardController.$inject = ['$scope', 'dashboardFactory'];


}());

function dashboardController($scope, dashboardFactory) {

    $scope.Alltasks=dashboardFactory.readTask();

}*/

(function(){
    angular
        .module('todoApp')
        .controller('dashboardController',function($rootScope,$scope,$timeout,dashboardFactory){
            var dc = this;

            function getAllTasks() {
                dashboardFactory.readTask().then(function(response){
                    $rootScope.TASKS = response;
                })
            }
            getAllTasks();

        })
}());


