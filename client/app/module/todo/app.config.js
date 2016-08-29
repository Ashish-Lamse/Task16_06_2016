/**
 * Created by Ashish Lamse on 16/6/16.
 */
'use strict';
angular
    .module('todoApp')

    .config(['$routeProvider', '$locationProvider','$translateProvider','ChartJsProvider',
        function($routeProvider,$locationProvider,$translateProvider,ChartJsProvider){

            $routeProvider
                .when('/',{
                    templateUrl:'partials/dashboard.html',
                    controller:'dashboardController'
                })

                .when('/dashboard',{
                    templateUrl:'partials/dashboard.html',
                    controller:'dashboardController',
                    controllerAs:"dc"
                })

                .when('/home',{
                    templateUrl:'partials/home.html'
                })

                .when('/chart',{
                    templateUrl:'partials/chart.html',
                    controller:'chartController',
                    controllerAs:"ch"
                })

                .when('/tobeImp',{
                    templateUrl:'partials/tobeImplemented.html',
                    controller:'tobeController',
                    controllerAs:'tobe'
                })

                .otherwise({
                    redirectTo:'/dashboard'
                });


            ChartJsProvider.setOptions({
            colours: ['#ff6666', '#80d4ff', '#9fdfbf'],
            responsive: false
        });
        // Configure all line charts
        ChartJsProvider.setOptions('Line', {
            datasetFill: false
        });


        $translateProvider.translations('en', {
            TaskName:"Task Name",
            TITLE: 'TITLE',
            Description: 'Description',
            Status: 'Status',
            Start_Date: 'Start Date',
            End_Date: 'End Date',
            Priority:'Priority',
            English:'English',
            Spanish:'Spanish',
            Manage_Your_Tasks:'Manage Your Tasks',
            Add_New_task:'Add New Task',
            ShowChart:'Show Task on Chart',
            CompleteTask:'Complete Task',
            'CompleteConfirm':'Are you sure want to mark task as completed..?',
            'DeleteTask':'Delete The Task',
            'DeleteConfirm':'Are You sure want to delete the task..?',
            'EditTask':"Edit Task",
            'AddTask':"Add Task"

        });

        $translateProvider.translations('de', {
            TaskName:"Task Name",
            TITLE: 'Título',
            Description: 'Descripción',
            Status: 'Estado',
            Start_Date: 'Fecha de inicio',
            End_Date: 'Fecha final',
            Priority:'Prioridad',
            English:'Inglés',
            Spanish:'Español',
            Manage_Your_Tasks:'Administrar sus tareas',
            Add_New_task:'Añadir nueva tarea',
            ShowChart:'mostrar tarea en la tabla',
            CompleteTask:'Tarea completa',
            'CompleteConfirm':'¿Seguro desea marcar tarea como completada .. ?',
            'DeleteTask':'Eliminar la tarea',
            'DeleteConfirm':'¿Usted está seguro de querer eliminar la tarea .. ?',
            'EditTask':"Editar tarea",
            'AddTask':"Add Task"

        });

        $translateProvider.preferredLanguage('en');

        $locationProvider.html5Mode(true);
    }]);