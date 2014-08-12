/**
 * Created by alehijan on 5/23/14.
 */
chiselApp.directive('signup', function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/directives/user/signup.html' ,
        transclude: true
    }
});