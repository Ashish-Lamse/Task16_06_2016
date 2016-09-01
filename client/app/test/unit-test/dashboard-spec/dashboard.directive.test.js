/**
 * Created by Ashish Lamse on 4/7/16.
 */
(function(){
    describe('Should test dashbard directive',function(){
        var $compile,
            $scope,
            $templateCache,
            directiveElem;


        beforeEach(module('todoApp'));

        beforeEach(inject(function($rootScope, _$compile_, $httpBackend, _$templateCache_){

            $compile = _$compile_;
            $scope = $rootScope.$new();
            $templateCache = _$templateCache_;

            $templateCache.put('partials/dashboardDirective.html');
            $httpBackend.whenGET('partials/dashboardDirective.html').respond($templateCache.get('partials/dashboardDirective.html'));

            $scope.selectedTooltip='';
            $scope.deleteTooltip='';
            $scope.editedTooltip='';
            $scope.tasks='';


            directiveElem=directiveElement();

        }));



        function directiveElement(){
            var element = $compile('<dashboard-directive tasks="$scope.t"></dashboard-directive>')($scope);
            $scope.$digest();
            return element;
        }

        it('Testing dashboard directive', inject(function ($httpBackend, $location) {
            var element = directiveElement();
            $scope.$digest();
            expect(element[0].outerHTML).toEqual('<dashboard-directive tasks="$scope.t" class="ng-scope"></dashboard-directive>');

        }));

        it('should check delete functionality', function () {
           var isolatedScope=directiveElem.scope();

            isolatedScope.selectedTooltip='ASH';

            expect(isolatedScope.selectedTooltip).toBe('ASH');
        });
    });
}());
