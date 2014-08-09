'use strict';

var chiselApp =  angular.module('chiselApp', ['ngResource', 'ngRoute', 'ngAnimate'])
    .config(function($routeProvider){
        $routeProvider.when('/board', {
            templateUrl:'templates/board.html',
            controller: 'StoryBoardController'
        });
        $routeProvider.otherwise({redirectTo:'/board'})
    });

/*
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});

}]);
*/
