/**
 * Created by jtomasevic on 8/12/14.
 */
chiselApp.controller('TopicsController',
    function TopicsController($route, $scope, $cookies){
        $scope.topic = $route.current.locals.data.body.topic;

        $scope.comments = [];
        $scope.mComments = [];

        $scope.selectedTag = null;
        $scope.mSelectedTag = null;

        $scope.transferToMTags = [];

        $scope.toogleTransferToMTags = function(mtag){
            for(var i = $scope.transferToMTags.length - 1; i>=0; i--){
                var mTagForToogle = $scope.transferToMTags[i];
                // if already exist in collection then it should remove it
                if(mTagForToogle.id == mtag.id){
                    var index = $scope.transferToMTags.indexOf(mTagForToogle);
                    // check index just for every case. it should always be bigger then 0
                    if (index > -1) {
                        $scope.transferToMTags.splice(index, 1);
                    } else{
                        console.log("invalide index")
                    }
                    // exit function if tag we find tag
                    return;
                }
            }
            // if for loop is finished and without return, then it means we should add mtag to $scope.transferToMTags array
            $scope.transferToMTags.push(mtag);
            console.log($scope.transferToMTags);
        }

        $scope.user_role =  $cookies.role;
        console.log('role', $scope.user_role);
        $scope.comment = {
            id:11,
            text:'',
            user:{
                name:$cookies.user_name
            },votes:0
        }
        $scope.setComments = function(tag){
            $scope.comments = tag.comments;
            $scope.selectedTag = tag;
        }
        $scope.setModeratorComments = function(mtag){
            $scope.mComments = mtag.comments;
            $scope.mSelectedTag = mtag;
        }
        $scope.addComment = function(comment){
            $scope.selectedTag.comments.push(comment);
            $scope.comment = {
                id:11,
                text:'',
                user:{
                    name:$cookies.user_name
                },votes:0
            }
        }
        $scope.moderateComment = function(comment){
            console.log("will moderate comment: ", comment);
            for(var i = 0; i<$scope.transferToMTags.length; i++){
                var mtag = $scope.transferToMTags[i];
                mtag.comments.push(comment);
                console.log("add comment", comment, "to tag", mtag);
            }
            $scope.transferToMTags = [];
        }
    }
);