/**
 * Created by Ashish Lamse on 16/6/16.
 */

(function(){
    angular
        .module('todoApp')
        .controller('dashboardController', dashboardController);

    dashboardController.$inject=['$rootScope','dashboardFactory','$scope','$uibModal'];

    function dashboardController($rootScope,dashboardFactory,$scope,$uibModal){
        var dc = this;

        dc.tasks=[];
        dc.loadTasks = loadTasks;
       /* dc.filterTasks = filterTasks;*/

        $scope.add=function(a,b){
            return a+b;
        }


        dc.myName="Ashish";

        loadTasks();

        dc.deleteTooltip='Delete Task';
        dc.selectedTooltip='Mark as Complete';
        /*dc.selectedPriority=[];*/

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
                console.log($rootScope.TASKS+"inside dashboard controller")
                dc.tasks= $rootScope.TASKS;

            });
        }

        /*function filterTasks(){
            var TASKS=$rootScope.TASKS;

            var status=dc.selectedStatus;
            var priorities=dc.selectedPriority;
            var filteredTasks=[];

            angular.forEach(TASKS,function(task){
                if (status && priorities.length!==0 && task.status === status.value){
                   angular.forEach(priorities,function(priority){
                        if(priority.value.indexOf(task.priority)!== -1){
                            filteredTasks.push(task);
                        }
                    })
                }

                else if (priorities.length===0 && status && task.status === status.value ) {
                    filteredTasks.push(task);
                }
                else if ( !status && priorities){
                    angular.forEach(priorities,function(priority){
                        if(priority.value.indexOf(task.priority)!== -1){
                            filteredTasks.push(task);
                        }
                    })
                }
            });
            if  (status || priorities.length!==0) {
                dc.tasks=filteredTasks;
            }
            else {
                dc.tasks=$rootScope.TASKS;
            }
        }*/

    }

}());