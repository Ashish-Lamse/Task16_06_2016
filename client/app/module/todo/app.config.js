/**
 * Created by Ashish Lamse on 16/6/16.
 */
angular
    .module('todoApp')

    .config(['$routeProvider', '$locationProvider','$translateProvider', function($routeProvider,$locationProvider,$translateProvider){
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

        $translateProvider.translations('en', {
            TITLE: 'TITLE',
            Description: 'Description',
            Status: 'Status',
            Start_Date: 'Start_Date',
            End_Date: 'End_Date',
            Priority:'Priority',
            English:'English',
            Spanish:'Spanish',
            Manage_Your_Tasks:'Manage Your Tasks',
            Add_New_task:'Add New Task'

        });

        $translateProvider.translations('de', {
            TITLE: 'Título',
            Description: 'Descripción',
            Status: 'Estado',
            Start_Date: 'Fecha de inicio',
            End_Date: 'Fecha final',
            Priority:'Prioridad',
            English:'Inglés',
            Spanish:'Español',
            Manage_Your_Tasks:'Administrar sus tareas',
            Add_New_task:'Añadir nueva tarea'
        });

        $translateProvider.preferredLanguage('en');

     $locationProvider.html5Mode(true);
}]);