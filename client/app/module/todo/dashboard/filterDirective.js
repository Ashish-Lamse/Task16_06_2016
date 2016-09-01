/**
 * Created by sb0103 on 30/6/16.
 */
'use strict';
(function() {
    angular
        .module('todoApp')
        .directive('filterDirective', filterDirective);
    filterDirective.$inject=['$rootScope','dashboardFactory'];

    function filterDirective($rootScope,dashboardFactory){

        function linkerFilter(scope, element, attrs){

            scope.filters = {
                status: '',
                priorities: []
            };

            scope.filterTasks=function()
            {
                 scope.tasks=dashboardFactory.filterAllTasks(scope.filters,scope.tasks);}
            }
        return {
            restrict: 'EA',
            scope: {
                tasks: '=',
                filterstatus:'=',
                filterpriority:'='
            },
            link: linkerFilter,
            templateUrl: 'partials/filterTask.html'
        };

    }

}());