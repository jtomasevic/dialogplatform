/**
 * Created by jtomasevic on 8/12/14.
 */
chiselApp.factory("userService", function($http, $q){
    return{
        signin:function(userName, password){
            var def = $q.defer();
            var response = {
                body:{

                }
            };
            response.body.user = getUser(userName,password);
            console.log(response.body.user);
            def.resolve(response);
            return def.promise;
        }
    }
});

function getUser(username, pass){
    console.log(username, pass);
    for(var i = 0; i<users.length; i++){
        var user = users[i];
        if(user.username == username && user.password == pass){
            return user;
        }
    }


    return null;
}

var users = [{
        id:'1',
        username:'jtomasevic@gmail.com',
        password:'123456',
        role:'user'
    },{
        id:'2',
        username:'pedja@gmail.com',
        password:'123456',
        role:'moderator'
    }
]