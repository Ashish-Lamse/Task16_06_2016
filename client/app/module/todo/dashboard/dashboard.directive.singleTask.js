/**
 * Created by Ashish Lamse on 25/8/16.
 */

(function(){
    angular.module('todoApp')

        .directive('singleTask',function($uibModal){
            function link(scope,ele,attrs){
                scope.startDate=function(){
                    var dateString = scope.task.startdate; // Oct 23
                    var dateParts = dateString.split("-");
                    var dateObject = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]); // month is 0-based
                    return dateObject
                };

                scope.endDate=function(){
                    var dateString = scope.task.enddate; // Oct 23
                    var dateParts = dateString.split("-");
                    var dateObject = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]); // month is 0-based
                    return dateObject
                };

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
                                {name:'In progress',value: 'INPROGRESS'},
                                {name:'Completed',value: 'COMPLETED'}
                            ];

                            $scope.prioritiesValues = [
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

                        templateUrl: '../../../partials/deleteTask.html',

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
                templateUrl:'partials/single-task.html',
                scope:{
                    task:'=',
                    tasks:'='
                },
                link:link
            }
        })
}());