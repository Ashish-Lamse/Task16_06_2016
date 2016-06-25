(function(){
    angular
        .module('todoApp')
        .controller('commonController',commonController);
        commonController.$inject = ['$scope','$translate'];

        function commonController($scope, $translate){

            $scope.changeLanguage = function (key) {
                $translate.use(key);
            };
        }
}());