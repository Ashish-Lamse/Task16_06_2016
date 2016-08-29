
/**
 * Created by Ashish Lamse on 29/8/16.
 */

describe('cartController', function() {
    beforeEach(module('todoApp'));

    var $controller;
    var $rootScope;

    beforeEach(inject(function(_$controller_,_$rootScope_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $rootScope=_$rootScope_;
        $controller = _$controller_;

        $rootScope.TASKS= [
            {
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
                "status": "COMPLETE",
                "priority": "HIGH"
            },
            {
                "name": "Task 3",
                "description": "Task 3 description",
                "startdate": "01-01-2016",
                "enddate": "01-01-2016",
                "status": "INVALID",
                "priority": "MEDIUM"
            },
            {
                "name": "Task 4",
                "description": "Task 4 description",
                "startdate": "01-01-2016",
                "enddate": "01-01-2016",
                "status": "INPROGRESS",
                "priority": "MEDIUM"
            }];

        $rootScope.statuses={

            "OPENED":0,
            "INPROGRESS":0,
            "INVALID":0,
            "COMPLETE":0
        };


        $rootScope.priorities={
            "HIGH":0,
            "MEDIUM":0,
            "LOW":0
        };
        $rootScope.$digest();
    }));

    it('should check priority', function() {
        var $scope = {};
        var controller = $controller('chartController', { $scope: $scope,$rootScope:$rootScope });
        expect($rootScope.TASKS[0].status).toBe("OPENED");
        expect($rootScope.TASKS[1].priority).toBe("HIGH");
    });

    it('should check length of status and priority', function() {
        var $scope = {};
        var controller = $controller('chartController', { $scope: $scope,$rootScope:$rootScope });
        expect($rootScope.statuses.OPENED).toBe(0);
        expect($rootScope.statuses.COMPLETE).toBe(0);
        expect($rootScope.priorities.HIGH).toBe(0);

        if($rootScope.TASKS[0].status==="OPENED"){
            $rootScope.statuses.OPENED=($rootScope.statuses.OPENED)+1;
        }

        expect($rootScope.statuses.OPENED).toBe(1);
    });

});