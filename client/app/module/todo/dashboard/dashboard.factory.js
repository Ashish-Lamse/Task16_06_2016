 /**
 * Created by Ashish Lamse on 16/6/16.
 */
'use strict';
(function(){

    angular
        .module('todoApp')
        .factory('dashboardFactory', dashboardFactory);

    dashboardFactory.$inject = ['$http', '$q','$uibModal'];


    function dashboardFactory($http,$q,$uibModal){
        var Tasks;
        return {
            readTask : readTask,
            addNewTask:addNewTask

        };

        function addNewTask(dc){
            $uibModal.open({
                animation:dc.animationsEnabled,
                templateUrl:'partials/addNewTask.html',

                controller:function($scope,$uibModalInstance){
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

                    $scope.addTask={
                        "name": "",
                        "description": "",
                        "startdate": "",
                        "enddate": "",
                        "status": "",
                        "priority": ""
                    };

                    $scope.ok=function(){
                        var newTask={
                            "name": "Task "+(dc.tasks.length+1),
                            "description": $scope.addTask.description,
                            "startdate": $scope.addTask.startdate,
                            "enddate": $scope.addTask.enddate,
                            "status": $scope.addTask.status,
                            "priority": $scope.addTask.priority
                        };
                        dc.tasks.push(newTask);
                        $uibModalInstance.close();
                    };

                    $scope.canc=function(){
                        $uibModalInstance.close();
                    };
                }
            });
        }

        function readTask(){
            var deferred = $q.defer();
            $http.get('todotasks.json').success(
                function (response) {
                    Tasks=response.todotasks;
                    deferred.resolve(response.todotasks);
                },
                function(resion){
                    deferred.reject("reject");
                });
            return deferred.promise;
        }
    }
}());

