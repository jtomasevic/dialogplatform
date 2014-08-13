/**
 * Created by jtomasevic on 3/28/14.
 */
'user strict'

chiselApp.controller('HomeController',
    function HomeController($scope, userService, $cookies){
        $scope.user = {
            email : 'pedja@gmail.com',
            password : '123456'
        }
        $scope.signupVisible = false;
        $scope.signup = function(user){
            console.log(user);
            userService.signup(user)
                .then(function(data){
                    $cookies.user_id = data.body.user.id;
                    console.log("signup", data.body.user);
                    window.location.href = '#/topics';
                });

        }
        $scope.signin = function(user){
            console.log(user);
            userService.signin(user.email, user.password)
                .then(function(data){
                    $cookies.user_id = data.body.user.id;
                    $cookies.user_name = user.email;
                    $cookies.role = data.body.user.role;

                    console.log("signin", data.body.user);
                    window.location.href = '#/topics';
                });
        }

    }
)