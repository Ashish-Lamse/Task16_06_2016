/**
 * Created by Ashish Lamse on 30/6/16.
 */
'use strict';
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

