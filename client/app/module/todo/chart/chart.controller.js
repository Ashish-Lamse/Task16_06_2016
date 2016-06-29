/**
 * Created by Ashish Lamse on 28/6/16.
 */
(function () {
angular
    .module('todoApp')
    .controller('chartController', chartController);

    chartController.$inject=['$scope','$rootScope'];

    function chartController($scope,$rootScope){
        var allTasks=$rootScope.TASKS;

        var OPENED=0;
        var INPROGRESS=0;
        var INVALID=0;
        var COMPLETE=0;

        var HIGH=0;
        var MEDIUM=0;
        var LOW=0;

        angular.forEach(allTasks,function(task){
            if(task.status==='COMPLETED'){
                COMPLETE++;
            }
            else if(task.status==='OPENED'){
                OPENED++;
            }
            else if(task.status==='INPROGRESS'){
                INPROGRESS++;
            }
            else{
                INVALID++;
            }
        });
        angular.forEach(allTasks,function(task){
            if(task.priority==='HIGH'){
                HIGH++;
            }
            else if(task.priority==='MEDIUM'){
                MEDIUM++;
            }else{
                LOW++;
            }
        });
        $scope.labels = ['OPENED', 'INPROGRESS', 'INVALID', 'COMPLETE'];
        $scope.data = [
            [OPENED,INPROGRESS,INVALID,COMPLETE]
        ];

        $scope.plabels = ["HIGH", "MEDIUM", "LOW"];
        $scope.pdata = [HIGH, MEDIUM, LOW];
    }
}());