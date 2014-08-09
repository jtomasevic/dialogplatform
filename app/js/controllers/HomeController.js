/**
 * Created by jtomasevic on 3/28/14.
 */
'user strict'

chiselApp.controller('HomeController',
    function HomeController($scope){
        $scope.user = {
            userName : 'asdf',
            email : 'asd',
            password : 'asdf'
        }

        $scope.signup = function(user){
            //console.log(user);
            window.location = "app.html"
        }
    }
)