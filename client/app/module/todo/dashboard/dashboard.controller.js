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
        dc.filterTasks = filterTasks;
        dc.deleteTask=deleteTask;
        dc.checkSelect=checkSelect;

        loadTasks();

        dc.deleteTooltip='Delete Task....';
        dc.selectedTooltip='Select the task...';

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

       function deleteTask(name){
           var modalInstanceDelete = $uibModal.open({

               animation: $scope.animationsEnabled,

               templateUrl: '../../../partials/deleteTask.html',

               controller:function ($scope,$uibModalInstance){

                   var decnt=this;
                   $scope.ok=ok;
                   $scope.cancel=cancel;

                   function ok(){
                       var deleteTask=dc.tasks;


                           for (var i = 0; i < deleteTask.length; i++) {
                               if (deleteTask[i].name == name) {
                                   deleteTask.splice(i, 1);
                               }
                           }
                           dc.tasks = deleteTask;


                       $uibModalInstance.dismiss('cancel');
                   }

                   function cancel(){
                       $uibModalInstance.close();
                   }
               }
           });
        }

        function checkSelect(name){

            var modalInstanceCheck = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: '../../../partials/completeTask.html',
                controller: function($scope,$uibModalInstance){
                    var checkTask=dc.tasks;
                    $scope.ok=ok;
                    $scope.cancel=cancel;

                    function ok(){
                        for (var i = 0; i < checkTask.length; i++) {
                            if (checkTask[i].name == name || checkTask[i].status=="COMPLETED") {
                                checkTask[i].status="COMPLETED";
                            }
                        }
                        dc.tasks = checkTask;
                        $uibModalInstance.dismiss('cancel');
                    }

                    function cancel(){
                        $uibModalInstance.close();
                    }

                }
            })
        }

        function loadTasks() {
            dashboardFactory.readTask().then(function(response){
                $rootScope.TASKS = response;
                console.log($rootScope.TASKS+"inside dashboard controller")
                dc.tasks= $rootScope.TASKS;

            });
        }

        function filterTasks(){
            var TASKS=$rootScope.TASKS;

            var status=dc.selectedStatus;
            var priorities=dc.selectedPriority;
            var filteredTasks=[];

            angular.forEach(TASKS,function(task){
                if (status && priorities && task.status === status.value){
                   angular.forEach(priorities,function(priority){
                        if(priority.value.indexOf(task.priority)!== -1){
                            filteredTasks.push(task);
                        }
                    })
                }

                else if (!priorities && status && task.status === status.value ) {
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
            if  (status || priorities) {
                dc.tasks=filteredTasks;
            }
            else {
                dc.tasks=$rootScope.TASKS;
            }
        }

    }

}());