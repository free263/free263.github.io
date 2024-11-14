$(function($){
// Settings
$(".maxsize").css({ top : ($(window).width() - $(".maxsize").height())/2  });
var repeat = localStorage.repeat || 0,
shuffle = localStorage.shuffle || 'true',
continous = true,
autoplay = true,
playlist = [
{title:"Adaro-Es Ist Ein Schnee Gefallen",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Adaro-Es Ist Ein Schnee Gefallen.mp3",},
{title:"Adele-Hello",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Adele-Hello.mp3",},
{title:"Adele-Rolling in the Deep",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Adele-Rolling in the Deep.mp3",},
{title:"Air Supply-Making Love Out Of Nothing At All",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Air Supply-Making Love Out Of Nothing At All.mp3",},
{title:"Alan Walker-Alone",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Alan Walker-Alone.mp3",},
{title:"Alan Walker-Faded",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Alan Walker-Faded.mp3",},
{title:"Alan Walker-The Spectre",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Alan Walker-The Spectre.mp3",},
{title:"AmyDiamond-Heartbeats",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/AmyDiamond-Heartbeats.mp3",},
{title:"Ann Winsborn-La La Love On My Mind",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Ann Winsborn-La La Love On My Mind.mp3",},
{title:"Aqua-My Oh My",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Aqua-My Oh My.mp3",},
{title:"Ava Max-Salt",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Ava Max-Salt.mp3",},
{title:"Ava Max-Sweet but Psycho",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Ava Max-Sweet but Psycho.mp3",},
{title:"AvrilLavigne-IamWithYou",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/AvrilLavigne-IamWithYou.mp3",},
{title:"Backstreet Boys-As Long As You Love Me",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Backstreet Boys-As Long As You Love Me.mp3",},
{title:"Backstreet Boys-Everybody",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Backstreet Boys-Everybody.mp3",},
{title:"Backstreet Boys-I want it that way",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Backstreet Boys-I want it that way.mp3",},
{title:"Backstreet Boys-Larger Than Life",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Backstreet Boys-Larger Than Life.mp3",},
{title:"Bertie Higgins-Casablanca",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Bertie Higgins-Casablanca.mp3",},
{title:"Blue-All Rise",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Blue-All Rise.mp3",},
{title:"Blue-One Love",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Blue-One Love.mp3",},
{title:"Bon Jovi-Its My Life",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Bon Jovi-Its My Life.mp3",},
{title:"BwO-Sunshine In The Rain",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/BwO-Sunshine In The Rain.mp3",},
{title:"CaraDillon-Craigie Hill",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/CaraDillon-Craigie Hill.mp3",},
{title:"Carpenters-Yesterday Once More",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Carpenters-Yesterday Once More.mp3",},
{title:"Celine Dion-All By Myself",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Celine Dion-All By Myself.mp3",},
{title:"Celine Dion-Because You Loved Me",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Celine Dion-Because You Loved Me.mp3",},
{title:"Celine Dion-I Surrender",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Celine Dion-I Surrender.mp3",},
{title:"Celine Dion-My Heart Will Go On",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Celine Dion-My Heart Will Go On.mp3",},
{title:"Celine Dion-The Power Of Love",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Celine Dion-The Power Of Love.mp3",},
{title:"Charlie Puth、Selena Gomez-We Dont Talk Anymore",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Charlie Puth、Selena Gomez-We Dont Talk Anymore.mp3",},
{title:"CHROMANCE-Wrap Me In Plastic",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/CHROMANCE-Wrap Me In Plastic.mp3",},
{title:"Coldplay-Yellow",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Coldplay-Yellow.mp3",},
{title:"Dan Fogelberg-Sutters Mill",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Dan Fogelberg-Sutters Mill.mp3",},
{title:"Dana Winner-Moonlight Shadow",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Dana Winner-Moonlight Shadow.mp3",},
{title:"Daniel Powter-Free Loop",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Daniel Powter-Free Loop.mp3",},
{title:"Darin-Be What You Wanna Be",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Darin-Be What You Wanna Be.mp3",},
{title:"Delacey-Dream It Possible",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Delacey-Dream It Possible.mp3",},
{title:"DemiLovato-LetItGo",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/DemiLovato-LetItGo.mp3",},
{title:"Djokawari-luv letter",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Djokawari-luv letter.mp3",},
{title:"Eagles-Hotel California",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Eagles-Hotel California.mp3",},
{title:"EdSheeran-Shape Of You",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/EdSheeran-Shape Of You.mp3",},
{title:"Emilia-big big world",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Emilia-big big world.mp3",},
{title:"Eminem、Rihanna-Love The Way You Lie",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Eminem、Rihanna-Love The Way You Lie.mp3",},
{title:"Enya-May It Be",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Enya-May It Be.mp3",},
{title:"Enya-Only Time",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Enya-Only Time.mp3",},
{title:"Era-The Mass",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Era-The Mass.mp3",},
{title:"Gabriel MarianI-ts My Life",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Gabriel MarianI-ts My Life.mp3",},
{title:"Gareth Gates-Anyone of Us",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Gareth Gates-Anyone of Us.mp3",},
{title:"George Benson-Nothings Gonna Change My Love For You",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/George Benson-Nothings Gonna Change My Love For You.mp3",},
{title:"George Michael-Careless Whisper",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/George Michael-Careless Whisper.mp3",},
{title:"Grant Miller-Colder Than Ice",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Grant Miller-Colder Than Ice.mp3",},
{title:"Groove Coverage-Far Away From Home",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Groove Coverage-Far Away From Home.mp3",},
{title:"Groove Coverage-God Is a Girl",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Groove Coverage-God Is a Girl.mp3",},
{title:"Groove Coverage-She",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Groove Coverage-She.mp3",},
{title:"Hawk Nelson、Jonathan Steingard-Sold Out",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Hawk Nelson、Jonathan Steingard-Sold Out.mp3",},
{title:"HayleyWestenra-never say goodbye",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/HayleyWestenra-never say goodbye.mp3",},
{title:"Hedy West-500 Miles",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Hedy West-500 Miles.mp3",},
{title:"Ina Wroldsen-I Wanted You",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Ina Wroldsen-I Wanted You.mp3",},
{title:"James Blunt-Youre Beautiful",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/James Blunt-Youre Beautiful.mp3",},
{title:"Jennifer Rush-The Power of Love",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Jennifer Rush-The Power of Love.mp3",},
{title:"Jewel-Stand",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Jewel-Stand.mp3",},
{title:"Joan Jett-I Hate Myself For Loving You",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Joan Jett-I Hate Myself For Loving You.mp3",},
{title:"John Denver-Take Me Home, Country Roads",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/John Denver-Take Me Home, Country Roads.mp3",},
{title:"Justin Bieber、Luis Fonsi、Daddy Yankee-Despacito",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Justin Bieber、Luis Fonsi、Daddy Yankee-Despacito.mp3",},
{title:"Justin Bieber-Baby",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Justin Bieber-Baby.mp3",},
{title:"Kaoma-Lambada",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Kaoma-Lambada.mp3",},
{title:"Katy Perry-Roar",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Katy Perry-Roar.mp3",},
{title:"Kelly Clarkson-Because of You",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Kelly Clarkson-Because of You.mp3",},
{title:"Kelly Clarkson-Catch My Breath",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Kelly Clarkson-Catch My Breath.mp3",},
{title:"Kelly Clarkson-Stronger",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Kelly Clarkson-Stronger.mp3",},
{title:"Kim Taylor-I Am You",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Kim Taylor-I Am You.mp3",},
{title:"Klymaxx-I Miss You",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Klymaxx-I Miss You.mp3",},
{title:"Ladygaga-Poker Face",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Ladygaga-Poker Face.mp3",},
{title:"Lenka-The Show",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Lenka-The Show.mp3",},
{title:"Lenka-Trouble Is a Friend",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Lenka-Trouble Is a Friend.mp3",},
{title:"Leo Sayer-More Than I Can Say",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Leo Sayer-More Than I Can Say.mp3",},
{title:"Linkin Park-Numb",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Linkin Park-Numb.mp3",},
{title:"LionelRichie-SayYouSayMe",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/LionelRichie-SayYouSayMe.mp3",},
{title:"Lovestoned-Bye Bye Bye",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Lovestoned-Bye Bye Bye.mp3",},
{title:"Luis Fonsi-Despacito",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Luis Fonsi-Despacito.mp3",},
{title:"M2M-Pretty Boy",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/M2M-Pretty Boy.mp3",},
{title:"M2M-The Day You Went Away",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/M2M-The Day You Went Away.mp3",},
{title:"Madonna-Papa Dont Preach",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Madonna-Papa Dont Preach.mp3",},
{title:"MariaArredondo-Burning",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/MariaArredondo-Burning.mp3",},
{title:"Maroon 5-Sugar",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Maroon 5-Sugar.mp3",},
{title:"Matthew Lien-Bressanone",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Matthew Lien-Bressanone.mp3",},
{title:"Maxwell-Its Ok",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Maxwell-Its Ok.mp3",},
{title:"Meg Myers-Running Up That Hill",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Meg Myers-Running Up That Hill.mp3",},
{title:"Michael Jackson-Beat It",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Michael Jackson-Beat It.mp3",},
{title:"Michael Jackson-Billie Jean",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Michael Jackson-Billie Jean.mp3",},
{title:"Michael Jackson-Dangerous",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Michael Jackson-Dangerous.mp3",},
{title:"Michael Jackson-HealTheWorld",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Michael Jackson-HealTheWorld.mp3",},
{title:"Michael Jackson-You Are Not Alone",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Michael Jackson-You Are Not Alone.mp3",},
{title:"Michael Learns To Rock-Take Me To Your Heart",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Michael Learns To Rock-Take Me To Your Heart.mp3",},
{title:"MinnieRiperton-LovingYou",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/MinnieRiperton-LovingYou.mp3",},
{title:"Modern Talking-Brother Louie",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Modern Talking-Brother Louie.mp3",},
{title:"Nana-lonely",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Nana-lonely.mp3",},
{title:"Nu Virgos-StopStopStop",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Nu Virgos-StopStopStop.mp3",},
{title:"Olly Murs-That Girl",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Olly Murs-That Girl.mp3",},
{title:"O-Zone-Dragostea din tei",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/O-Zone-Dragostea din tei.mp3",},
{title:"P!nk-Try",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/P!nk-Try.mp3",},
{title:"Queen-We Will Rock You.flac",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Queen-We Will Rock You.flac",},
{title:"R. Kelly-I Believe I Can Fly",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/R. Kelly-I Believe I Can Fly.mp3",},
{title:"Rachel Platten-Lone Ranger",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Rachel Platten-Lone Ranger.mp3",},
{title:"Richard Marx-Right Here Waiting",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Richard Marx-Right Here Waiting.mp3",},
{title:"Ricky Martin-生命之杯",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Ricky Martin-生命之杯.mp3",},
{title:"Robbie Williams-Better Man",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Robbie Williams-Better Man.mp3",},
{title:"Sarah Brightman、Andrea Bocelli-Time To Say Goodbye",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Sarah Brightman、Andrea Bocelli-Time To Say Goodbye.mp3",},
{title:"Sarah Brightman-Scarborough Fair",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Sarah Brightman-Scarborough Fair.mp3",},
{title:"Sarah Coonor-just one last dance",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Sarah Coonor-just one last dance.mp3",},
{title:"SarahCoonor-From Sarah With Love",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/SarahCoonor-From Sarah With Love.mp3",},
{title:"Sasha Alex Sloan-Dancing With Your Ghost",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Sasha Alex Sloan-Dancing With Your Ghost.mp3",},
{title:"Savage Garden-Truly Madly Deeply",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Savage Garden-Truly Madly Deeply.mp3",},
{title:"Secret Garden-Nocturne",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Secret Garden-Nocturne.mp3",},
{title:"Selena Gomez-Wolves",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Selena Gomez-Wolves.mp3",},
{title:"Shakin Stevens-Because I Love You",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Shakin Stevens-Because I Love You.mp3",},
{title:"Shayne Ward-Unchained Melody",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Shayne Ward-Unchained Melody.mp3",},
{title:"Sia-Cheap Thrills",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Sia-Cheap Thrills.mp3",},
{title:"Sia-Move Your Body",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Sia-Move Your Body.mp3",},
{title:"Sia-Unstoppable",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Sia-Unstoppable.mp3",},
{title:"Simon And Garfunkel-The Sound of Silence",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Simon And Garfunkel-The Sound of Silence.mp3",},
{title:"Smile.DK-Butterfly",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Smile.DK-Butterfly.mp3",},
{title:"Starship-Nothings Gonna Stop Us Now",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Starship-Nothings Gonna Stop Us Now.mp3",},
{title:"Stevie Wonder-I Just Called To Say I Love You",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Stevie Wonder-I Just Called To Say I Love You.mp3",},
{title:"Sweetbox-Dont Push Me",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Sweetbox-Dont Push Me.mp3",},
{title:"Tatu-30 Minutes",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Tatu-30 Minutes.mp3",},
{title:"Tatu-Loves Me Not",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Tatu-Loves Me Not.mp3",},
{title:"Taylor Swift-Love Story",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Taylor Swift-Love Story.mp3",},
{title:"The Cascades-Rhythm Of The Rain",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/The Cascades-Rhythm Of The Rain.mp3",},
{title:"The Nolans-Sexy Music",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/The Nolans-Sexy Music.mp3",},
{title:"The Police-Every Breath You Take",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/The Police-Every Breath You Take.mp3",},
{title:"Timbaland-Apologize",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Timbaland-Apologize.mp3",},
{title:"Trademark-Only Love",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Trademark-Only Love.mp3",},
{title:"Tragedie-Hey Oh",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Tragedie-Hey Oh.mp3",},
{title:"U2-With Or Without You",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/U2-With Or Without You.mp3",},
{title:"Usher、Lil Jon、Ludacris-Yeah",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Usher、Lil Jon、Ludacris-Yeah.mp3",},
{title:"Various Artists、Deutschland Sucht Den Superstar-Cry On My Shoulder",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Various Artists、Deutschland Sucht Den Superstar-Cry On My Shoulder.mp3",},
{title:"Vicetone、Meron Ryan-Walk Thru Fire",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Vicetone、Meron Ryan-Walk Thru Fire.mp3",},
{title:"Vitas-歌剧2",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Vitas-歌剧2.mp3",},
{title:"Vitas-星星",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Vitas-星星.mp3",},
{title:"Westlife-My Love",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Westlife-My Love.mp3",},
{title:"Westlife-Nothings Going to Change My Love For You",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Westlife-Nothings Going to Change My Love For You.mp3",},
{title:"Westlife-Seasons in the Sun",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Westlife-Seasons in the Sun.mp3",},
{title:"Whitney Houston-I Have Nothing",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Whitney Houston-I Have Nothing.mp3",},
{title:"Whitney Houston-I will Always Love You",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/Whitney Houston-I will Always Love You.mp3",},
{title:"WizKhalifa-See You Again",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/WizKhalifa-See You Again.mp3",},
{title:"布兰妮-BabyOneMoreTime",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/布兰妮-BabyOneMoreTime.mp3",},
{title:"布兰妮-everytime",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/布兰妮-everytime.mp3",},
{title:"卡洛儿-假如爱有天意",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/卡洛儿-假如爱有天意.mp3",},
{title:"卡洛儿-写给海洋",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/卡洛儿-写给海洋.mp3",},
{title:"欧美群星-WeAreTheWorld",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/欧美群星-WeAreTheWorld.mp3",},
{title:"手嶌葵-the rose",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/手嶌葵-the rose.mp3",},
{title:"斯维特拉娜 斯维吉科娃-天使消逝的地方",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/斯维特拉娜 斯维吉科娃-天使消逝的地方.mp3",},
{title:"伊莲娜罗尔-我的名字叫伊莲",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/伊莲娜罗尔-我的名字叫伊莲.mp3",},
{title:"有里知花-I Cry",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.838383.xyz/free163person/音乐视听/欧美音乐/有里知花-I Cry.mp3",}

];

// Load playlist
for (var i = 0; i < playlist.length; i++) {
var item = playlist[i];
$('#playlist').append('<li>' + item.artist + ' - ' + item.title + '</li>');
}

var time = new Date(),
currentTrack = shuffle === 'true' ? time.getTime() % playlist.length : 0,
audio, timeout, isPlaying, playCounts;

var play = function () {
audio.play();
$('.playback').addClass('playing');
timeout = setInterval(updateProgress, 500);
isPlaying = true;
};

var pause = function () {
audio.pause();
$('.playback').removeClass('playing');
clearInterval(updateProgress);
isPlaying = false;
};

// Update progress
var setProgress = function (value) {
var currentSec = parseInt(value % 60) < 10 ? '0' + parseInt(value % 60) : parseInt(value % 60),
ratio = value / audio.duration * 100;

$('.timer').html(parseInt(value / 60) + ':' + currentSec);
$('.progress .pace').css('width', ratio + '%');
$('.progress .slider a').css('left', ratio + '%');
};

var updateProgress = function () {
setProgress(audio.currentTime);
};

// Progress slider
$('.progress .slider').slider({
step: 0.1,
slide: function (event, ui) {
$(this).addClass('enable');
setProgress(audio.duration * ui.value / 100);
clearInterval(timeout);
},
stop: function (event, ui) {
audio.currentTime = audio.duration * ui.value / 100;
$(this).removeClass('enable');
timeout = setInterval(updateProgress, 500);
}
});

// Volume slider
var setVolume = function (value) {
audio.volume = localStorage.volume = value;
$('.volume .pace').css('width', value * 100 + '%');
$('.volume .slider a').css('left', value * 100 + '%');
};

var volume = localStorage.volume || 0.5;
$('.volume .slider').slider({
max: 1,
min: 0,
step: 0.01,
value: volume,
slide: function (event, ui) {
setVolume(ui.value);
$(this).addClass('enable');
$('.mute').removeClass('enable');
},
stop: function () {
$(this).removeClass('enable');
}
}).children('.pace').css('width', volume * 100 + '%');

$('.mute').click(function () {
if ($(this).hasClass('enable')) {
setVolume($(this).data('volume'));
$(this).removeClass('enable');
} else {
$(this).data('volume', audio.volume).addClass('enable');
setVolume(0);
}
});

// Switch track
var switchTrack = function (i) {
if (i < 0) {
track = currentTrack = playlist.length - 1;
} else if (i >= playlist.length) {
track = currentTrack = 0;
} else {
track = i;
}

$('audio').remove();
loadMusic(track);
if (isPlaying == true) play();
};

// Shuffle
var shufflePlay = function () {
var time = new Date(),
lastTrack = currentTrack;
currentTrack = time.getTime() % playlist.length;
if (lastTrack == currentTrack) ++currentTrack;
switchTrack(currentTrack);
}

// Fire when track ended
var ended = function () {
pause();
audio.currentTime = 0;
playCounts++;
if (continous == true) isPlaying = true;
if (repeat == 1) {
play();
} else {
if (shuffle === 'true') {
shufflePlay();
} else {
if (repeat == 2) {
switchTrack(++currentTrack);
} else {
if (currentTrack < playlist.length) switchTrack(++currentTrack);
}
}
}
}

var beforeLoad = function () {
var endVal = this.seekable && this.seekable.length ? this.seekable.end(0) : 0;
$('.progress .loaded').css('width', (100 / (this.duration || 1) * endVal) + '%');
}

// Fire when track loaded completely
var afterLoad = function () {
if (autoplay == true) play();
}

// Load track
var loadMusic = function (i) {
var item = playlist[i],
newaudio = $('<audio>').html('<source src="' + item.mp3 + '"><source src="' + item.ogg + '">').appendTo('#player');

$('.cover').html('<img src="' + item.cover + '" alt="' + item.album + '">');
$('.tag').html('<strong>' + item.title + '</strong><span class="artist">' + item.artist + '</span><span class="album">' + item.album + '</span>');
$('#playlist li').removeClass('playing').eq(i).addClass('playing');
audio = newaudio[0];
audio.volume = $('.mute').hasClass('enable') ? 0 : volume;
audio.addEventListener('progress', beforeLoad, false);
audio.addEventListener('durationchange', beforeLoad, false);
audio.addEventListener('canplay', afterLoad, false);
audio.addEventListener('ended', ended, false);
}

loadMusic(currentTrack);
$('.playback').on('click', function () {
if ($(this).hasClass('playing')) {
pause();
} else {
play();
}
});
$('.rewind').on('click', function () {
if (shuffle === 'true') {
shufflePlay();
} else {
switchTrack(--currentTrack);
}
});
$('.fastforward').on('click', function () {
if (shuffle === 'true') {
shufflePlay();
} else {
switchTrack(++currentTrack);
}
});
$('#playlist li').each(function (i) {
var _i = i;
$(this).on('click', function () {
switchTrack(_i);
});
});

if (shuffle === 'true') $('.shuffle').addClass('enable');
if (repeat == 1) {
$('.repeat').addClass('once');
} else if (repeat == 2) {
$('.repeat').addClass('all');
}

$('.repeat').on('click', function () {
if ($(this).hasClass('once')) {
repeat = localStorage.repeat = 2;
$(this).removeClass('once').addClass('all');
} else if ($(this).hasClass('all')) {
repeat = localStorage.repeat = 0;
$(this).removeClass('all');
} else {
repeat = localStorage.repeat = 1;
$(this).addClass('once');
}
});

$('.shuffle').on('click', function () {
if ($(this).hasClass('enable')) {
shuffle = localStorage.shuffle = 'false';
$(this).removeClass('enable');
} else {
shuffle = localStorage.shuffle = 'true';
$(this).addClass('enable');
}
});
$(".download img").hover(function(){
$(this).attr({ "src" : "img/link2.png" });
}, function(){
$(this).attr({ "src" : "img/link1.png" });
});
});