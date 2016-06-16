/**
 * Created by Ashish Lamse on 16/6/16.
 */
angular
    .module('todoApp')
    .config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider){
    $routeProvider

        .when('/',{
            templateUrl:'../../partials/dashboard.html',
            controller:'dashboardController'
        })

        .when('/dashboard',{
            templateUrl:'../../partials/dashboard.html',
            controller:'dashboardController'
        })

        .when('/home',{
            templateUrl:'../../partials/home.html'
        })

        .otherwise({
            redirectTo:'/dashboard'
        });

     $locationProvider.html5Mode(true);
}]);