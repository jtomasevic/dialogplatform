'use strict';

var chiselApp =  angular.module('chiselApp', ['ngResource', 'ngRoute', 'ngAnimate', 'ngCookies'])
    .config(function($routeProvider){
        $routeProvider.when('/topics',{
            templateUrl:'templates/topics.html',
            controller:'TopicsController',
            resolve:{
                data:function($q, $route, commentService){
                    var def = $q.defer();
                    commentService.getTopic(1)
                        .then(function(data){
                            def.resolve(data);
                            console.log('topic:', data);
                            return data;
                        })
                    return def.promise;
                }
            }
        });

        $routeProvider.when('/', {
            templateUrl:'templates/directives/homepage.html',
            controller: 'HomeController'
        });
        $routeProvider.otherwise({
            templateUrl:'templates/directives/homepage.html',
            controller: 'HomeController'
        });
    });

/*
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});

}]);
*/
