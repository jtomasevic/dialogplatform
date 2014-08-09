/**
 * Created by jtomasevic on 3/29/14.
 */




var test =
[{
    id:'1',
    title : 'Drumska klanica',
    plot: 'Sukob između Galdajevog i Senakovog esnafa na...',
    body : '...',
    imageUrl: 'img/ch/battle2.jpg',
    reads : 12,
    comments : 13,
    likes : 10,
    readers:[{
        userName:'',
        profileImage:''
    }],
    commentators:[{
        userName:'',
        profileImage:'',
        comment:''
    }],
    likers:[{
        userName:'',
        profileImage:''
    }],
    helpRequests:[
    ],
    collaborationRequests:[

    ]
}];







chiselApp.factory("storyBoardDataService", function(){
    return {
        allItems: function(){

            var model =  [{
                id:'1',
                title : 'Elin Galdaj',
                plot: 'Poreklom je iz Kovačkog klana a živi u Adonisu gde je vođa Drumarskog Esnafa Galdajavi.',
                body : 'Porodica Elina Galdaja Živi u Grad Anonisu, ali vuku poreklo od Kovačkog klana. Ozirom da se klanaši ne mogu baviti kovačkim poslom Elejeov otac bio je vodič i tumač, a zatim pregovarač i pomoćnik gradskih trgovaca, a na kraju i posrednik koji je obezbedjivao transport kroz nebezbedne puteve kojima su cesto harale bande divljaih plemena. Kao transporter zarađivao je više nego trgovci ali je zadrža relativno skroman način života. Za četrdesetak godina Elejov otac i Elej razradili su mrežu trgovine i posredovanja koja su isključivo vodili pripadnici Klana. Elej je postao trn u oku većini gradski trgovaca.',
                imageUrl: 'img/ch/elin.jpg',
                reads : 21,
                likes : getLikes(11),
                comments: getComments(11)
            },{
                id: '99',
                title : 'Drumska klanica',
                plot: 'Sukob između Galdajevog i Senakovog esnafa na drumu za Golijskim zemljama. Svi Senakovi su pobijeni. Elin traži način da sakrije istinu i pokušava krivicu da svali na divlje Horde sa zapada koje povremeno organizuju pljačkaške pohode.',
                body : '',
                imageUrl: 'img/ch/battle2.jpg',
                reads : 12,
                comments: getComments(2),
                likes : getLikes(3)
            },{
                id:'2',
                title : 'Adonis',
                plot: 'Najveći od slobodnih gradova. Adonisom upravlja senat sa vojskom na čelu. Nekada je bio kraljevina. Poslednji kralj Anonisa poginuo je u ratu sa Dorinima. Pošto je saznao za proročanstvo da će pobediti strana koja izgubi kralja, prerušio se u drvoseču i otišao u neprijateljski logor. Tamo je napao dorske vojnike i junački poginuo u boju. Posle njegove smrti Adonižani više nisu birali kraljeve jer nije bilo građanina dostojnog da ga nasledi.',
                body: '',
                imageUrl: 'img/ch/coatofarms.jpg',
                reads : 101,
                comments: getComments(8),
                likes : getLikes(8)
            },{
                id:'3',
                title : 'Lokvudi',
                plot: 'Porodica koja u Adonisu kotroliše trgovinu začinima, nakitom, zlatom i ostalom luksuznom robom na tržnici. U vezi su sa određenim slojevima aristokratije jer su oni darežljivi kupci. Druga strana: Sarađuju sa Galdajevima u švercu oružja. Oružje se švercuje u druge gradove i na jug pa na zapad u zemlje kraljeva, gde postoje određene interesne grupe. Lokvudi u sva tri grada imaju svoju ćeliju.',
                body : '',
                imageUrl: null,
                reads : 52,
                comments: getComments(5),
                likes : getLikes(1)
            },{
                id:'4',
                title : 'Visoravan Ejl - Velika ledena pustinja',
                plot: 'Razdvaja zemlje Gradove i Klanovima od Pet kraljevina. Ni gradovi ni kraljevi ne polažu pravo na tu zemlju niti je smatraju svojom.',
                body : '',
                imageUrl: null,
                reads : 67,
                likes : getLikes(0)
            },{
                id:'5',
                title : 'Rogizi',
                plot: 'Jedini narod koji živi na Ejl-u u pograničnim zonama gde je život jedino moguć. Bave se lovom, a retko trgovinom sa lokalnim stanovništvom.',
                body : '',
                imageUrl: 'null',
                reads : '20k',
                likes : getLikes(10),
                comments: getComments(11)
            },{
                id:'6',
                title : 'Godin Hagrom',
                plot: 'Glavešina bratstva Hagrom iz Kovačkog Klana, najuitcajnijeg bratstva, polavičin brat od strica. Stariji od njega četiri godine. Jedan od trojice njegovih najbližih ljudi. Protivi se trgovanju sa Galdajevima koje smatra otpadnicima Klana',
                body : '',
                imageUrl: null,
                reads : 3,
                comments: getComments(0),
                likes : getLikes(0)
            },{
                id:'7',
                title : 'Trgovačka četvrt',
                plot: 'Veliki trg sa okolnim ulicama u južnom delu Adonisa, na kome se izlaže samo najkvalitetnija roba. Za izlaganje robe na trgu trgovac je morao da ima specijalnu dozvolu. To je ispalo loše i dovelo je do korupcije i kriminala na visokom nivou. Mafijaši koji su kontrolisali tržnicu išli su toliko daleko u svojim monopolističkim željama da su proterivali slobodne trgovce koji su izlagali van Tržnice. Tako su mogli da kontrolišu cene na tržištu, a narvno ucenjivali su trgovce bez dozvola da preko njih posreduju u prodaji. To se smarta velikim prekršajem koji se kažnjava smrću. Četiri grupe kontrolišu tri četiri petine tržnice, a ostatak su nezavisni trgovci.',
                body : '',
                imageUrl: null,
                reads : 606,
                comments: getComments(3),
                likes : getLikes(5)
            },{
                id:'8',
                title : 'Grof Senaka, Lord Anonisa',
                plot: 'Vladar grada Anonisa. Osnovao svoj drumski esnaf udruzivsi se sa trgovcima u nameri da istisnu Galdaje i povecaju svoju dobit.',
                body : '',
                imageUrl: 'img/ch/lord.jpg',
                reads : '20k',
                comments: getComments(0),
                likes : getLikes(11)
            },{
                id:'9',
                title : 'Helig',
                plot: 'Prvi Rogiz koji je počeo da trguje prevozeći robu iz gradova u kraljevine i nazad preko ledenog Ejla. Ubrzo je trgovina toliko narasla da je morao da uključi svoju porodicu, pa širi rodbinu, pa čitavo svoje pleme. Oko njega se počela formirati bogat sloj Rogiza sto je oznacilo pocetak transformacije siromasnih nomada u snaznu drzavu.',
                body : '',
                imageUrl: 'null',
                reads : '20k',
                comments: getComments(1),
                likes : getLikes(3)
            }
        ];
            // add ui elements

            for(var i = 0;i<model.length;i++){
                model[i] = new StoryBlock(model[i]);
                //model[i].comments =
                //var comments;

            }


            return model;
        }
    }
})


function getComments(count){
    var result = [];
    for(var i = 0; i<count;i++){
        result.push(_comments[i])
    }
    return result;
}

function getLikes(count){
    var result = [];
    for(var i = 0; i<count;i++){
        result.push(_likes[i])
    }
    return result;
}

function StoryBlock(model){
    var self = this;
    self = model;
    var id = model.id;
    self.ui = {
        rootElementId : self.id + '-root',
        toggleHelpRequestId: self.id + "-toggleHelpRequest",
        toggleCommentsId: self.id + '-comments',
        toggleLikesId: self.id + '-likes',
        toogleBlockId: self.id + "-toogleBlockId",

        rootElement: function(){
            return $("#" + self.ui.rootElementId);
        }
    }
    return self;
}



var _comments = [{
    text:'This is great!',
    like:true,
    profile:{
        img:'img/profiles/jalal_sela.jpg',
        userName: 'Jennifer Velazquez'
    }
}, {
    text:'Mauris dictum varius odio sit amet pharetra. Vivamus aliquam augue ipsum, at dapibus urna convallis nec aenean suscipit.',
    like:false,
    profile:{
        img:'img/profiles/lewis_deng.jpg',
        userName: 'Georg Grey'
    }
}, {
    text:'Maecenas augue urna, rutrum sed imperdiet id, varius eu elit.',
    profile:{
        img:'img/profiles/asus_roy.jpg',
        userName: 'Asus Roy'
    }
}, {
    text:'Pellentesque elementum tellus sodales egestas blandit. Praesent quis purus vitae augue dapibus scelerisque vel sit amet tellus. Praesent ornare eros et nunc tristique commodo. Fusce molestie tristique pulvinar. Sed viverra.',
    like:true,
    profile:{
        img:'img/profiles/unkonown.png',
        userName: 'Andrija Momcilovic'
    }
}, {
    text:'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis vitae.',
    like:true,
    profile:{
        img:'img/profiles/james_parkington.jpg',
        userName: 'James Parkington'
    }
}, {
    text:'Aliquam mollis leo vel semper.',
    like:false,
    profile:{
        img:'img/profiles/joy_sussman.jpg',
        userName: 'Joy Sussman'
    }
}, {
    text:'Maecenas posuere odio at malesuada ultricies. Suspendisse id adipiscing sapien, sit amet porta urna. Etiam commodo nunc congue lacus consectetur, sed venenatis nulla posuere. Nam viverra varius turpis non viverra. Sed bibendum dui eu tincidunt tempor. Vivamus sit amet ipsum ut turpis elementum pharetra et id velit. Morbi in egestas.',
    like:true,
    profile:{
        img:'img/profiles/jalal_sela.jpg',
        userName: 'Jalal_Sela'
    }
}, {
    text:'Phasellus rutrum sem aliquet augue eleifend rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;.',
    like:false,
    profile:{
        img:'img/profiles/lewis_deng.jpg',
        userName: 'Lewis Deng'
    }
}, {
    text:'Nunc commodo felis quis metus.',
    like:false,
    profile:{
        img:'img/profiles/maria_roco.jpg',
        userName: 'Maria Roco'
    }
}, {
    text:'Integer lacinia nisl quis lectus mollis venenatis. Integer tempor, sem a nullam.',
    like:true,
    profile:{
        img:'img/profiles/unkonown.png',
        userName: 'Pera Peric'
    }
}, {
    text:'Quisque non iaculis nisi. Ut turpis turpis, euismod eleifend tempus eget, eleifend ac nunc. Vestibulum tincidunt nullam.',
    like:true,
    profile:{
        img:'img/profiles/miguel_angel.jpg',
        userName: 'Miguel Angel'
    }
}

];

var _likes = _comments;