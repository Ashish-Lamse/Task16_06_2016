/**
 * Created by Ashish Lamse on 11/7/16.
 */
"use strict";

(function(){
    angular.module('todoApp')
    .controller('tobeController',tobeController);
    tobeController.$inject=['$uibModal'];

    function tobeController($uibModal){
        var tobe=this;
        tobe.openTobeModal=openTobeModal;

        function openTobeModal(){
            $uibModal.open({
                animation: tobe.animationsEnabled,
                templateUrl: 'partials/tobeTask.html',
                controller:function($scope,$uibModalInstance){
                    $scope.ok=function(){
                        $uibModalInstance.close();
                    };
                    $scope.can=function(){
                        $uibModalInstance.close();
                    };
                }
            })
        }
    }
}());
