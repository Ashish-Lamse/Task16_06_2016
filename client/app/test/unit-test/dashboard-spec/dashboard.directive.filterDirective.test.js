/**
 * Created by Ashish Lamse on 4/7/16.
 */
(function(){
    describe('Filter Directive Test', function () {

        var $compile;
        var $rootScope;
        var $templateCache;
        var $httpBackend;
        var directiveElem;

        beforeEach(module('todoApp'));

        beforeEach(inject(function(_$rootScope_, _$compile_,_$httpBackend_,_$templateCache_) {
            $rootScope = _$rootScope_.$new();
            $compile = _$compile_;
            $templateCache=_$templateCache_;
            $httpBackend=_$httpBackend_;


            $rootScope.TASKS = [{
                "name": "Task 1",
                "description": "Task 1 description",
                "startdate": "01-08-2016",
                "enddate": "01-10-2016",
                "status": "OPENED",
                "priority": "LOW"
            },
            {
                "name": "Task 2",
                "description": "Task 2 description",
                "startdate": "01-08-2016",
                "enddate": "01-10-2016",
                "status": "OPENED",
                "priority": "HIGH"
            },
            {
                "name": "Task 3",
                "description": "Task 3 description",
                "startdate": "01-01-2016",
                "enddate": "01-01-2016",
                "status": "INVALID",
                "priority": "MEDIUM"
            }];
            $rootScope.filterstatus = [];
            $rootScope.filterpriority =[];

            $templateCache.put('partials/filterTask.html');
            $httpBackend.whenGET('partials/filterTask.html').respond($templateCache.get('partials/dashboardDirective.html'));

            directiveElem = getCompiledElement();
        }));


        function getCompiledElement() {
            var compiledDirective = $compile(angular.element('<filter-directive tasks="$rootScope.TASKS" filterstatus="$rootScope.filterstatus" filterpriority="$rootScope.filterpriority"></filter-directive>'))($rootScope);
            $rootScope.$digest();
            $httpBackend.flush();

            return compiledDirective;
        }

        it('should render directive', function () {
            // We call the $compile service and pass the $rootScope
            var ele = $compile("<filter-directive></filter-directive>")($rootScope);
            // Unless we trigger the digest cycle, the directive's expressions won't be evaluated.
            $rootScope.$apply();

            expect($rootScope.$countChildScopes()).toBe(2);
            expect($rootScope.$countWatchers()).toBe(6  );
        });

        it('test case for check priority', function(){
            var isolatedScope = directiveElem.scope();

            console.log(isolatedScope);

            isolatedScope.filterpriority =  [
                {name:'Low',value: 'LOW'},
                {name:'High',value: 'HIGH'},
                {name:'Medium',value: 'MEDIUM'}
            ];

            expect($rootScope.filterpriority).toEqual([
                {name:'Low',value: 'LOW'},
                {name:'High',value: 'HIGH'},
                {name:'Medium',value: 'MEDIUM'}
            ]);
        });

        it('test case for check status', function(){
            var isolatedScope = directiveElem.scope();

            console.log(isolatedScope);

            isolatedScope.filterstatus = [
                {value: 'OPENED', name: 'Opened'},
                {value: 'CLOSE',name:'Close'},
                {name:'Invalid',value: 'INVALID'},
                {name:'In progress',value: 'INPROGRESS'}
            ];

            expect($rootScope.filterstatus).toEqual([
                {value: 'OPENED', name: 'Opened'},
                {value: 'CLOSE',name:'Close'},
                {name:'Invalid',value: 'INVALID'},
                {name:'In progress',value: 'INPROGRESS'}
            ]);
        });

        it('test filterTasks() function',function(){

            /*spyOn(filterDirective, 'filterTasks()').and.callFake(function(criteria){
                return 'blah';
            });*/

            var isolatedScope = directiveElem.scope();

            isolatedScope.TASKS=[{
                "name": "Task 1",
                "description": "Task 1 description",
                "startdate": "01-08-2016",
                "enddate": "01-10-2016",
                "status": "OPENED",
                "priority": "LOW"
            },
                {
                    "name": "Task 2",
                    "description": "Task 2 description",
                    "startdate": "01-08-2016",
                    "enddate": "01-10-2016",
                    "status": "OPENED",
                    "priority": "HIGH"
                },
                {
                    "name": "Task 3",
                    "description": "Task 3 description",
                    "startdate": "01-01-2016",
                    "enddate": "01-01-2016",
                    "status": "INVALID",
                    "priority": "MEDIUM"
                }];
            expect(isolatedScope.TASKS.length).toBe(3);

        });




    });
}());
