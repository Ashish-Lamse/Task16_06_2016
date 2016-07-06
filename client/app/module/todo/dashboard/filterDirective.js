/**
 * Created by sb0103 on 30/6/16.
 */

(function() {
    angular
        .module('todoApp')
        .directive('filterDirective', filterDirective);
    filterDirective.$inject=['$rootScope'];

    function filterDirective($rootScope){

        function linkerFilter(scope, element, attrs){

            scope.filters = {
                status: '',
                priorities: []
            };



            scope.filterTasks=function(){
                var TASKS=$rootScope.TASKS;

                console.log(TASKS);

                var status=scope.filters.status;
                var priorities=scope.filters.priorities;

                var filteredTasks=[];



                angular.forEach(TASKS,function(task){
                    if (status && priorities.length!==0 && task.status === status){
                        angular.forEach(priorities,function(priority){
                            if(priority.indexOf(task.priority)!== -1){
                                filteredTasks.push(task);
                            }
                        })
                    }

                    else if (priorities.length===0 && status && task.status === status ) {
                        filteredTasks.push(task);
                    }

                    else if ( !status && priorities){
                        angular.forEach(priorities,function(priority){
                            if(priority.indexOf(task.priority)!== -1){
                                filteredTasks.push(task);
                            }
                        })
                    }
                });
                if  (status || priorities.length!==0) {
                    scope.tasks=filteredTasks;
                }
                else {
                    scope.tasks=$rootScope.TASKS;
                }
            }
        }
        return {
            restrict: 'EA',
            scope: {
                tasks: '=',
                filterstatus:'=',
                'filterpriority':'='
            },
            link: linkerFilter,
            templateUrl: 'partials/filterTask.html'
        };

    }

}());