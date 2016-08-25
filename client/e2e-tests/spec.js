/**
 * Created by sb0103 on 17/8/16.
 */

describe('a quick test', function(){
    it('should be true', function(){
        expect(true).toBe(true);
    });

    it('the dom initially has a heading and subheading', function () {
        browser.get('http://localhost:5000');
        expect(element(by.className('heading')).getText()).toEqual('TODOApp');
        expect(element(by.className('subHeading')).getText()).toEqual('Manage Your Tasks');
    });

    it('clicking the button does not change the greeting if text is not inputed', function () {
        element(by.css('.btn-primary')).click();
        expect(element(by.className('modal-title')).getText()).toEqual('Add Task');
    });

    it('clicking the button does not change the greeting if text is not inputed', function () {
        /*element(by.css('.fa-pencil')).click();*/
        expect(element(by.className('modal-title')).getText()).toEqual('Add Task');
    });
});

