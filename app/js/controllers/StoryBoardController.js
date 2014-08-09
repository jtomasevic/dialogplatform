/**
 * Created by jtomasevic on 3/28/14.
 */

'user strict'

chiselApp.controller('StoryBoardController',
    function StoryBoardController($scope, storyBoardDataService){
        $scope.storyItems = storyBoardDataService.allItems();
        $scope.hasImage = function(item){
            return item.imageUrl != null;
        }
        $scope.modalPreview = false;
        $scope.showPreview = function(){
            //console.log('show preview:' + $scope.modalPreview);
            console.log($scope);
            $scope.modalPreview = !$scope.modalPreview;
        }
        $scope.showItemSharing = function(item){
            item.showSharing = true;
            //console("show " + item.title + " sharing " +  item.showSharing);
        }
    }
)