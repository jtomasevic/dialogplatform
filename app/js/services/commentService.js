/**
 * Created by jtomasevic on 8/12/14.
 */
chiselApp.factory("commentService", function($http, $q){
    return{
        getTopic:function(id){
            var def = $q.defer();
            var response = {
                body:{

                }
            };
            response.body.topic = sampleTopic;
            def.resolve(response);
            return def.promise;
        }
    }
});

var sampleTopic = {
    title: "Title for topic",
    description: "Description for topic",
    tags:[{
        id:1,
        name:'social',
        comments:[{
            id:1,
            text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            user:{
                name:'Asus Roy',
                img:'asus_roy.jpg'
            }
        },{
            id:2,
            text:'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            user:{
                name:'Jalal Sela',
                img:'jalal_sela.jpg'
            }
        },{
            id:3,
            text:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            user:{
                name:'joy_sussman',
                img:'joy_sussman.jpg'
            }
        }]
    },{
        id:2,
        name:'sport',
        comments:[{
            id:4,
            text:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ',
            user:{
                name:'lewis_deng',
                img:'lewis_deng.jpg'
            }
        },{
            id:5,
            text:'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
            user:{
                name:'maria_roco',
                img:'maria_roco.jpg'
            }
        },{
            id:6,
            text:'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? ',
            user:{
                name:'Elizabeta',
                img:''
            }
        }]
    },{
        id:3,
        name:'politic',
        comments:[{
            id:7,
            text:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. ',
            user:{
                name:'miguel_angel',
                img:'miguel_angel.jpg'
            }
        },{
            id:8,
            text:'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
            user:{
                name:'asus_roy',
                img:'asus_roy.jpg'
            }
        },{
            id:9,
            text:'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.',
            user:{
                name:'lewis_deng',
                img:'lewis_deng.jpg'
            }
        },{
            id:10,
            text:'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
            user:{
                name:'joy_sussman',
                img:'joy_sussman.jpg'
            }
        }]
    },{
        id:4,
        name:'music',
        comments:[{
            id:11,
            text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            user:{
                name:'joy_sussman',
                img:'joy_sussman.jpg'
            }
        }]
    }],
    moderatorTags:[{
        id:1,
        name:'optimistic'
    },{
        id:2,
        name:'pesimistic'
    },{
        id:3,
        name:'hate'
    },{
        id:4,
        name:'love'
    }]
};