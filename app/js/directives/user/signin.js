/**
 * Created by alehijan on 5/23/14.
 */
chiselApp.directive('signin', function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/directives/user/signin.html' ,
        transclude: true
    }
});