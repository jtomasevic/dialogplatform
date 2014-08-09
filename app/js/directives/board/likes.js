/**
 * Created by jtomasevic on 4/27/14.
 */
chiselApp.directive('likes', function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/directives/board/likes.html' ,
        //scope:true,
        transclude: true
    }
});
