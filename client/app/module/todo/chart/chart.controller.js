/**
 * Created by Ashish Lamse on 28/6/16.
 */
(function () {
angular
    .module('todoApp')
    .controller('chartController', chartController);

    chartController.$inject=['$scope','$rootScope'];

    function chartController($scope,$rootScope){
        var ch=this;

        var allTasks=$rootScope.TASKS;
        ch.statuses={
         "OPENED":0,
        "INPROGRESS":0,
        "INVALID":0,
        "COMPLETE":0
        };
        ch.priorities={
        "HIGH":0,
        "MEDIUM":0,
        "LOW":0
    }
        angular.forEach(allTasks,function(task){
            if(task.status==='COMPLETED'){
                ch.statuses.COMPLETE++;
            }
            else if(task.status==='OPENED'){
                ch.statuses.OPENED++;
            }
            else if(task.status==='INPROGRESS'){
                ch.statuses.INPROGRESS++;
            }
            else{
                ch.statuses.INVALID++;
            }
        });

        angular.forEach(allTasks,function(task){
            if(task.priority==='HIGH'){
                ch.priorities.HIGH++;
            }
            else if(task.priority==='MEDIUM'){
                ch.priorities.MEDIUM++;
            }else{
                ch.priorities.LOW++;
            }
        });
        ch.series = ['Series A','Series B','Series C','Series D'];
        ch.labels = ['OPENED', 'INPROGRESS', 'INVALID', 'COMPLETE'];
        ch.data = [
            [ch.statuses.OPENED,ch.statuses.INPROGRESS,ch.statuses.INVALID,ch.statuses.COMPLETE]
        ];

        ch.plabels = ["HIGH", "MEDIUM", "LOW"];
        ch.pdata = [ch.priorities.HIGH, ch.priorities.MEDIUM, ch.priorities.LOW];
    }
}());