/**
 * Created by jtomasevic on 8/12/14.
 */
chiselApp.controller('TopicsController',
    function TopicsController($route, $scope, $cookies){
        $scope.topic = $route.current.locals.data.body.topic;
        $scope.comments = [];
        $scope.selectedTag = null;
        $scope.comment = {
            id:11,
            text:'',
            user:{
                name:$cookies.user_name
            }
        }
        $scope.setComments = function(tag){
            $scope.comments = tag.comments;
            $scope.selectedTag = tag;
        }
        $scope.addComment = function(comment){
            $scope.selectedTag.comments.push(comment);
            $scope.comment = {
                id:11,
                text:'',
                user:{
                    name:$cookies.user_name
                }
            }
        }
    }
);