/**
 * Created by Ashish Lamse on 4/7/16.
 */

describe('Should test dashbard directive',function(){
    var compile, scope,controller,directiveElem;

    beforeEach(module('todoApp'));

    beforeEach(inject(function($compile, $rootScope,$controller){
            compile = $compile;
            scope = $rootScope.$new();
            controller=$controller;
        }));

    it("should check delete functionality",function(){
        var vm = controller("dashboardController",{$scope:scope});

       var a= [
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
                "status": "OPENED",
                "priority": "HIGH"
            }];
        /*scope.deleteTasks("Task 1");*/
    });
});

