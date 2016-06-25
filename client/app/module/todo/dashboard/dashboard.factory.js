/**
 * Created by Ashish Lamse on 16/6/16.
 */

(function(){

    angular
        .module('todoApp')
        .factory('dashboardFactory', dashboardFactory);

    dashboardFactory.$inject = ['$http', '$q'];


    function dashboardFactory($http,$q){
        var Tasks;
        return {
            readTask : readTask,
           /* filterTask: filterTask,*/
            /*filterPriorities:filterPriorities*/

        };

        /*function filterTask(status){
            var filteredTasks=[];

            for(var i=0;i<Tasks.length;i++){

                if(Tasks[i].status==status){
                    filteredTasks.push(Tasks[i]);
                }
            }

            return filteredTasks;
        }*/

       /* function filterPriorities(tasks,priorities,status)
        {

            var sortPriorities=[];

            if(priorities){
                    for(var i=0;i<tasks.lenght;i++){
                        for(var j=0;j<priorities.length;j++)
                        {
                            if(tasks[i].status==status && tasks[i]==priorities[j].value){
                                sortPriorities.push(tasks[i]);
                            }
                        }
                    }
                return sortPriorities;
            }

            else{
                return tasks;
            }


        }*/

        function readTask(){

            var deferred = $q.defer();

            $http.get('todotasks.json').success(
                function (response) {
                    Tasks=response.todotasks;

                deferred.resolve(response.todotasks);
            },

                function(resion){
                deferred.reject("reject");
                console.log(resion);
            });
            return deferred.promise;
        };
    }
}())

