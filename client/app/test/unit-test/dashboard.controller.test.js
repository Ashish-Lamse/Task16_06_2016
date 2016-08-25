/**
 * Created by Ashish Lamse on 2/7/16.
 */
describe('This will test dashboard controller functionality operation',function () {
    var scope;
    var controller;
    var dashboard;
    var httpBackend;

    beforeEach(module('todoApp'));

    beforeEach(inject(function ($controller, $rootScope, dashboardFactory, $httpBackend) {
        scope=$rootScope.$new();
        controller=$controller;
        dashboard=dashboardFactory;
        httpBackend= $httpBackend;

    }));

    it('should test controller',function(){
        var vm = controller("dashboardController",{$scope:scope,dashboardFactory:dashboard,$httpBackend:httpBackend});
        httpBackend.expectGET("todotasks.json").respond("Response found!");
        httpBackend.flush();
    });
});

