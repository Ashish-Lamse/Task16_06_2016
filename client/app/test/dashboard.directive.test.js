/**
 * Created by Ashish Lamse on 4/7/16.
 */
(function(){
    describe('Should test dashbard directive',function(){
        var $compile,
            $scope,
            rootScope,
            $templateCache;

        var t=[{
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

        beforeEach(module('todoApp'));

        beforeEach(inject(function($rootScope, _$compile_, $httpBackend, _$templateCache_){

            $compile = _$compile_;
            rootScope = $rootScope;
            $scope = $rootScope.$new();
            $templateCache = _$templateCache_;

            $templateCache.put('partials/dashboardDirective.html');
            $httpBackend.whenGET('partials/dashboardDirective.html').respond($templateCache.get('partials/dashboardDirective.html'));

        }));

        function directiveElement(){
            var element = $compile('<dashboard-directive tasks="t"></dashboard-directive>')($scope);
            $scope.$digest();
            return element;
        }

        it('Testing dashboard directive', inject(function ($httpBackend, $location) {
            var element = directiveElement();
            $scope.$digest();
            expect(element[0].outerHTML).toEqual('<dashboard-directive class="ng-scope" tasks="t"></dashboard-directive>');
        }));

        it('should check delete functionality', function () {
            var element = directiveElement();

            var isoscope=element.isolateScope();
        });
    });
}());
