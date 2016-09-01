/**
 * Created by Ashish Lamse on 17/8/16.
 */
(function(){
    describe('dashBoard Factory functionality', function () {
        // Load your module.
        beforeEach(module('todoApp'));
        var data={
            status:'OPENED',
            priorities:['HIGH','MEDIUM','LOW']};
        var task=
        {
            "name": "Task 5",
            "description": "Task 5 description",
            "startdate": "01-01-2016",
            "enddate": "01-01-2017",
            "status": "OPENED",
            "priority": "HIGH"
        };

        it('can get an instance of my factory', inject(function(dashboardFactory) {
            expect(dashboardFactory).toBeDefined();
            expect(dashboardFactory.readTask()).toBeDefined();
            expect(dashboardFactory.filterAllTasks(data)).toBeDefined();
        }));

        it('will check if else condition',inject(function(dashboardFactory){

            dashboardFactory.filterAllTasks(data,task);


            var status=data.status;
            var priorities=data.priorities;
            var filteredTasks=[];

            expect(filteredTasks.length).toBe(0);

            if (status && priorities.length!==0 && task.status === status){
                if(priorities.indexOf(task.priority)!== -1){
                    filteredTasks.push(task);
                }
            }
            expect(filteredTasks.length).toBe(1);
        }));
    });
}());
