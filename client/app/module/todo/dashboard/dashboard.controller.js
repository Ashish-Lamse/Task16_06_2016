/**
 * Created by Ashish Lamse on 16/6/16.
 */
'use strict';
(function(){
    angular
        .module('todoApp')
        .controller('dashboardController', dashboardController);

    dashboardController.$inject=['$rootScope','dashboardFactory','$scope','$uibModal'];

    function dashboardController($rootScope,dashboardFactory,$scope,$uibModal){
        var dc = this;

        dc.tasks=[];
        dc.loadTasks = loadTasks;
        dc.addNewTask=addNewTask;


        loadTasks();

        dc.deleteTooltip='Delete Task';
        dc.selectedTooltip='Mark as Complete';

        dc.statuses = [
            {value: 'OPENED', name: 'Opened'},
            {value: 'CLOSE',name:'Close'},
            {name:'Invalid',value: 'INVALID'},
            {name:'In progress',value: 'INPROGRESS'}
        ];

        dc.priorityArray = [
            {name:'Low',value: 'LOW'},
            {name:'High',value: 'HIGH'},
            {name:'Medium',value: 'MEDIUM'}
        ];

        function loadTasks() {
            dashboardFactory.readTask().then(function(response){
                $rootScope.TASKS = response;
                dc.tasks= $rootScope.TASKS;

            });
        }

        function addNewTask(){
            dashboardFactory.addNewTask(dc);
        }
    }

}());