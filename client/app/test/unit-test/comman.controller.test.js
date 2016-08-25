/**
 * Created by Ashish Lamse on 17/8/16.
 */
'use strict';

describe('this will check comman controller functionality',function(){
    var scope,controller;

    beforeEach(module('todoApp'));

    /*beforeEach(module('pgdx', function ($provide, $translateProvider) {

        // configures staticFilesLoader
        $translateProvider.useStaticFilesLoader({
            prefix: 'i18n/messages-',
            suffix: '.json'
        });

    }));*/


    it('should test commanController', inject(function($controller, $translate) {
        var $scope = {};
        var commonController = $controller('commonController', { $scope: $scope});
        expect(commonController).toBeDefined();
        $scope.changeLanguage('en');
        expect($translate.proposedLanguage()).toEqual('en');
    }));
});
