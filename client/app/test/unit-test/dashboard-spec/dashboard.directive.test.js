/**
 * Created by Ashish Lamse on 4/7/16.
 */
(function(){
    describe('Should test dashbard directive',function(){
        var $compile,
            $scope,
            $templateCache;


        beforeEach(module('todoApp'));

        beforeEach(inject(function($rootScope, _$compile_, $httpBackend, _$templateCache_){

            $compile = _$compile_;
            $scope = $rootScope.$new();
            $templateCache = _$templateCache_;

            $templateCache.put('partials/dashboardDirective.html');
            $httpBackend.whenGET('partials/dashboardDirective.html').respond($templateCache.get('partials/dashboardDirective.html'));

        }));

        beforeEach(function(){
            $scope.t=[{
                "name": "Task 1",
                "description": "Task 1 description",
                "startdate": "01-08-2016",
                "enddate": "01-10-2016",
                "status": "OPENED",
                "priority": "LOW"
            },
            {
                 "name"  : "Task 2",
                 "description"   : "Task 2 description",
                 "startdate" : "01-08-2016",
                 "enddate"   : "01-10-2016",
                 "status"    : "OPENED",
                 "priority"  : "HIGH"
            }
            ];
        });

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
            var element=$compile('<dashboard-directive></dashboard-directive>')($scope);
            var s=element.scope();
            $scope.$digest();
            console.log($scope.t.length)

        });
    });
}());
