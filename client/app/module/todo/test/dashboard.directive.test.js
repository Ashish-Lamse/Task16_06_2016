/**
 * Created by Ashish Lamse on 4/7/16.
 */

describe('Should test dashbard directive',function(){
    var compile, scope,controller,directiveElem;

    beforeEach(function(){
        module('todoApp');

        inject(function($compile, $rootScope,$controller){
            compile = $compile;
            scope = $rootScope.$new();
            controller=$controller;
        });

        directiveElem = getCompiledElement();

    });

    function getCompiledElement(){
        var dc=controller('dashboardController',{$scope:scope});
        var element = angular.element('<dashboard-directive tasks="dc.tasks"></dashboard-directive>');

        var compiledElement = compile(element)(scope);
        scope.$digest();
        return compiledElement;
    }

    it("should check delete functionality",function(){
        directiveElem.deleteTasks("Task 6");
        expect(scope.tasks.length).equals(47);
    })


});
