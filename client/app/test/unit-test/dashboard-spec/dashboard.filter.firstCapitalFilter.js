/**
 * Created by Ashish Lamse on 29/8/16.
 */
describe('First Capital Latter Filter', function() {
    describe('EchoService', function() {
        var createFilter;

        beforeEach(module('todoApp'));

        beforeEach(inject(function($filter) {
            createFilter = function() {
                return $filter('capitalize');
            };
        }));

        it('should Capital First Word', function() {
            var filter = createFilter();
            expect(filter('hello')).toBe('Hello');
            expect(filter('hi')).toBe('Hi');
        });
    });
});