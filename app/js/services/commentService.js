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
    title: "Which book changed your life after you read it, and how?",
    description: "Description for topic",
    tags:[{
        id:1,
        name:'social',
        comments:[{
            id:1,
            text:'Flowers for Algernon. I read this book coincidentally after my grandmother started showing early symptoms of alzheimer, in that incredibly stressful phase where she understood and knew she was about to lose her memory. watching her fade away was heartbreaking, and watching her realize what was about to happen was even worse. It genuinely made me appreciate even my most basic memory and intelligence, as well as my ability to interact socially with people. It is my favorite book by far, and even though I read it every few years, the ending still gets to me. ',
            user:{
                name:'Asus Roy',
                img:'asus_roy.jpg'
            },
            votes:43
        },{
            id:2,
            text:"Reading Isaac Asimov really gave me a lot of new perspectives about pretty much every subject. His collections of short stories would probably be the best example. Foundation is also one great book. If you are not familiar with him I recommend his short story 'The last Question'. It gets posted somewhere on Reddit on a daily basis, but if you are one of the chosen who hasn't checked it out yet you should definitely do it now.",
            user:{
                name:'Jalal Sela',
                img:'jalal_sela.jpg'
            },
            votes:111
        },{
            id:3,
            text:'In seventh grade, I was your typical "Books r dum" jerkoff idiot kid. Then I read Jurassic Park. Now I read a book a week or more. That book cracked my imagination wide open.',
            user:{
                name:'joy_sussman',
                img:'joy_sussman.jpg'
            },
            votes:0
        }]
    },{
        id:2,
        name:'sport',
        comments:[{
            id:4,
            text:"hatchet by gary paulsen- it's not the deepest or most profound book i've ever read but it really opened the door to reading for me. I read it with my 4th grade class and it was the first time I had really felt drawn into a story and a character. Prior to that it was boxcar kids and animorphs.",
            user:{
                name:'lewis_deng',
                img:'lewis_deng.jpg'
            },
            votes:15
        },{
            id:5,
            text:'Dune. I read it in my early twenties. I learned that nothing is as it appears to be. There are almost always plans within plans. I stopped taking things and people at face value and started holding them to higher proofs.',
            user:{
                name:'maria_roco',
                img:'maria_roco.jpg'
            },
            votes:18
        },{
            id:6,
            text:'Watership Down changed how I view friends for the better.',
            user:{
                name:'Elizabeta',
                img:''
            },
            votes:54
        }]
    },{
        id:3,
        name:'politic',
        comments:[{
            id:7,
            text:'Hitchhikers Guide to the Galaxy series. Taught me to recognise the funny side to all the random coincidences that go on daily, amongst many other things. I am never not reading these books. edit: i listened to the the audiobooks as well the other week, first one is read by Stephen Fry and the rest by Martin Freeman. Would recommend.',
            user:{
                name:'miguel_angel',
                img:'miguel_angel.jpg'
            },
            votes:8
        },{
            id:8,
            text:'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
            user:{
                name:'asus_roy',
                img:'asus_roy.jpg'
            },
            votes:90
        },{
            id:9,
            text:'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.',
            user:{
                name:'lewis_deng',
                img:'lewis_deng.jpg'
            },
            votes:21
        },{
            id:10,
            text:'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
            user:{
                name:'joy_sussman',
                img:'joy_sussman.jpg'
            },
            votes:69
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
            },
            votes:77
        }]
    }],
    moderatorTags:[{
        id:1,
        name:'optimistic',
        comments:[]
    },{
        id:2,
        name:'pesimistic',
        comments:[]
    },{
        id:3,
        name:'hate',
        comments:[]
    },{
        id:4,
        name:'love',
        comments:[]
    },{
        id:5,
        name:'success',
        comments:[]
    },{
        id:6,
        name:'fail',
        comments:[]
    }]
};