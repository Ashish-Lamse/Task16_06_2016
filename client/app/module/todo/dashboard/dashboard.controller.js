/**
 * Created by Ashish Lamse on 16/6/16.
 */

(function(){
    angular
        .module('todoApp')

        .controller('dashboardController', dashboardController);

    dashboardController.$inject=['$rootScope','dashboardFactory','$scope'];

    function dashboardController($rootScope,dashboardFactory){
        var dc = this;
        dc.tasks=[];
        dc.loadTasks = loadTasks;
        dc.filterTasks = filterTasks;
        dc.deleteTask=deleteTask;
        dc.checkSelect=checkSelect;

        loadTasks();

        dc.statuses = [
            {value: 'OPENED', name: 'Opened'},
            {value: 'CLOSE',name:'Close'},
            {name:'Invalid',value: 'INVALID'},
            {name:'In progress',value: 'INPROGRESS'}
        ];

        dc.priorityArray = [
            {name:'Low',value: 'LOW'},
            {name:'High',value: 'HIGH'},
            {name:'Medium',value: 'MEDIUM'}
        ];

        function checkSelect(name){
            console.log(name);
            var checkTask=dc.tasks;

                var con=confirm("Do you want to make it as complete..?");
                if(con==true)
                {
                    for (var i = 0; i < checkTask.length; i++) {
                        if (checkTask[i].name == name || checkTask[i].status=="COMPLETED") {
                            checkTask[i].status="COMPLETED";
                        }
                    }
                    dc.tasks = checkTask;
                }

        }

        function deleteTask(name){
            var deleteTask=dc.tasks;
            var txt;
            var r = confirm("Are you sure want to delete Task..?");

            if(r==true) {
                for (var i = 0; i < deleteTask.length; i++) {
                    if (deleteTask[i].name == name) {
                        deleteTask.splice(i, 1);
                    }
                }
                dc.tasks = deleteTask;
            }

            else {
                console.log("You pressed cancle");
            }

        }

        function loadTasks() {
            dashboardFactory.readTask().then(function(response){
                $rootScope.TASKS = response;
                dc.tasks= $rootScope.TASKS;

            });
        }

        function filterTasks(){
            var TASKS=$rootScope.TASKS;
            var status=dc.selectedStatus;
            var priorities=dc.selectedPriority;
            var filteredTasks=[];

            console.log(status+"===this is status"+priorities+"this is priority");

            angular.forEach(TASKS,function(task){
                if (status && priorities && task.status === status.value)/* && 'MEDIUM'.indexOf(task.priority) !== -1) */{
                   angular.forEach(priorities,function(priority){

                        if(priority.value.indexOf(task.priority)!== -1){
                            filteredTasks.push(task);
                        }
                    })
                }
                else if (!priorities && status && task.status === status.value ) {
                    filteredTasks.push(task);
                }

                else if ( !status && priorities){
                    angular.forEach(priorities,function(priority){
                        if(priority.value.indexOf(task.priority)!== -1){
                            filteredTasks.push(task);
                        }
                    })
                }
            });

            if  (status || priorities.length!==0) {
                dc.tasks=filteredTasks;
            }
            else {
                dc.tasks=$rootScope.TASKS;
            }
        }
        /*function filterTasks(){
            var TASKS=$rootScope.TASKS;
            var status=dc.selectedStatus.value.value;
            var priorities=dc.selectedPriority;
            var filteredTasks=[];

            if(priorities){
                if(priorities.length==0){
                    for(var p=0;p<TASKS.length;p++){
                        if(TASKS[p].status==status){
                            filteredTasks.push(TASKS[p]);
                        }
                    }
                }
                else{
                    for(var k=0;k<TASKS.length;k++){
                        for(var l=0;l<priorities.length;l++){
                            if(TASKS[k].status==status && priorities[l].value==TASKS[k].priority)
                            {
                                filteredTasks.push(TASKS[k]);
                            }
                        }
                    }
                }

            }


            else{
                for(var i=0;i<TASKS.length;i++){
                    if(TASKS[i].status==status){
                        filteredTasks.push(TASKS[i]);
                    }
                }
            }

            dc.tasks=filteredTasks;
        }*/
    }

}());