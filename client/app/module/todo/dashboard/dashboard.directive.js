/**
 * Created by Ashish Lamse on 30/6/16.
 */
(function(){
    angular.module('todoApp')
        .directive('dashboardDirective',dashboardDirective);

    dashboardDirective.$inject=['$uibModal','$rootScope'];

    function dashboardDirective($uibModal,$rootScope){

       function linker(scope, element, attrs){
           scope.selectedTooltip="Mark as Select";
           scope.deleteTooltip="Delete Task";
           scope.editedTooltip="Edit Task";

           scope.tasks=$rootScope.TASKS;

           scope.deleteTasks = function(name) {
               deleteTask(name);
           };

           scope.markAsCompleteTask=function(name){
               checkSelect(name);
           };

            scope.editTask=function(name){
                editTask(name);
           };

           function editTask(name){


               $uibModal.open({

                   animation: scope.animationsEnabled,

                   templateUrl: 'partials/editTask.html',

                   controller:function ($scope,$uibModalInstance){
                       var editTask=scope.tasks;

                       $scope.statuses = [
                           {value: 'OPENED', name: 'Opened'},
                           {value: 'CLOSE',name:'Close'},
                           {name:'Invalid',value: 'INVALID'},
                           {name:'In progress',value: 'INPROGRESS'}
                       ];

                       scope.priorityArray = [
                           {name:'Low',value: 'LOW'},
                           {name:'High',value: 'HIGH'},
                           {name:'Medium',value: 'MEDIUM'}
                       ];

                       $scope.edittaskContant={
                           "name": "",
                           "description": "",
                           "startdate": "",
                           "enddate": "",
                           "status": "",
                           "priority": ""
                       };

                       for (var i = 0; i < editTask.length; i++) {
                           if (editTask[i].name == name) {

                               $scope.edittaskContant.name=editTask[i].name;
                               $scope.edittaskContant.description=editTask[i].description;
                               $scope.edittaskContant.startdate=editTask[i].startdate;
                               $scope.edittaskContant.enddate=editTask[i].enddate;
                               $scope.edittaskContant.status=editTask[i].status;
                               $scope.edittaskContant.priority=editTask[i].priority;
                               break;
                           }
                       }

                       $scope.ok=ok;
                       $scope.cancel=cancel;

                       function ok(){
                           console.log($scope.edittaskContant.name);
                           for (var i = 0; i < editTask.length; i++) {
                               if (editTask[i].name == name) {
                                   editTask[i].name=$scope.edittaskContant.name;
                                   editTask[i].description= $scope.edittaskContant.description;
                                   editTask[i].startdate=$scope.edittaskContant.startdate;
                                   editTask[i].enddate=$scope.edittaskContant.enddate;
                                   editTask[i].status=$scope.edittaskContant.status;
                                   editTask[i].priority=$scope.edittaskContant.priority;
                                   break;
                               }
                           }
                           scope.tasks = editTask;


                           $uibModalInstance.dismiss('cancel');
                       }

                       function cancel(){
                           $uibModalInstance.close();
                       }
                   }
               });

           }

           function checkSelect(name) {

               $uibModal.open({

                   animation: scope.animationsEnabled,
                   templateUrl: 'partials/completeTask.html',

                   controller: function ($scope, $uibModalInstance) {
                       var checkTask = scope.tasks;
                       $scope.ok = ok;
                       $scope.cancel = cancel;

                       function ok() {
                           for (var i = 0; i < checkTask.length; i++) {
                               if (checkTask[i].name == name) {
                                   checkTask[i].status = "COMPLETED";
                                   break;
                               }
                           }
                           scope.tasks = checkTask;
                           $uibModalInstance.dismiss('cancel');
                       }

                       function cancel() {
                           $uibModalInstance.close();
                       }

                   }
               });
           }


           function deleteTask(name){
               $uibModal.open({

                   animation: scope.animationsEnabled,

                   templateUrl: 'partials/deleteTask.html',

                   controller:function ($scope,$uibModalInstance){

                       var decnt=this;
                       $scope.ok=ok;
                       $scope.cancel=cancel;

                       function ok(){
                           var deleteTask=scope.tasks;


                           for (var i = 0; i < deleteTask.length; i++) {
                               if (deleteTask[i].name == name) {
                                   deleteTask.splice(i, 1);
                                   break;
                               }
                           }
                           scope.tasks = deleteTask;


                           $uibModalInstance.dismiss('cancel');
                       }

                       function cancel(){
                           $uibModalInstance.close();
                       }
                   }
               });
           }
       }

            return{

                templateUrl:'partials/dashboardDirective.html',
                scope:{
                    tasks:'='
                },
                link:linker

            };
        }
}());

