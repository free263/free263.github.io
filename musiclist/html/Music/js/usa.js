$(function($){
	// Settings
	$(".maxsize").css({ top : ($(window).width() - $(".maxsize").height())/2  });
	var repeat = localStorage.repeat || 0,
		shuffle = localStorage.shuffle || 'true',
		continous = true,
		autoplay = true,
		playlist = [
{title:"adaro-Es_Ist_Ein_Schnee_Gefallen",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/adaro-Es_Ist_Ein_Schnee_Gefallen.mp3",},
{title:"AdeleRolling in the Deep(Explicit)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/AdeleRolling in the Deep(Explicit).mp3",},
{title:"Alan WalkerAlone",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/Alan WalkerAlone.mp3",},
{title:"Alan WalkerFaded",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/Alan WalkerFaded.mp3",},
{title:"AmyDiamond-Heartbeats",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/AmyDiamond-Heartbeats.mp3",},
{title:"Ann WinsbornLa La Love On My Mind",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/Ann WinsbornLa La Love On My Mind.mp3",},
{title:"AquaMy Oh My",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/AquaMy Oh My.mp3",},
{title:"AtlantaRhythmSection-DoItOrDie",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/AtlantaRhythmSection-DoItOrDie.mp3",},
{title:"Ava MaxSalt",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/Ava MaxSalt.mp3",},
{title:"AvrilLavigne-17",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/AvrilLavigne-17.mp3",},
{title:"AvrilLavigne-4Real",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/AvrilLavigne-4Real.mp3",},
{title:"AvrilLavigne-Alice",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/AvrilLavigne-Alice.mp3",},
{title:"AvrilLavigne-Complicated",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/AvrilLavigne-Complicated.mp3",},
{title:"AvrilLavigne-EverybodyHurts",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/AvrilLavigne-EverybodyHurts.mp3",},
{title:"AvrilLavigne-Fly",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/AvrilLavigne-Fly.mp3",},
{title:"AvrilLavigne-GiveYouWhatYouLike",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/AvrilLavigne-GiveYouWhatYouLike.mp3",},
{title:"AvrilLavigne-HeresToNeverGrowingUp(Explicit)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/AvrilLavigne-HeresToNeverGrowingUp(Explicit).mp3",},
{title:"AvrilLavigne-HowYouRemindMe",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/AvrilLavigne-HowYouRemindMe.mp3",},
{title:"AvrilLavigne-IamWithYou",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/AvrilLavigne-IamWithYou.mp3",},
{title:"AvrilLavigne-Innocence",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/AvrilLavigne-Innocence.mp3",},
{title:"AvrilLavigne-NobodysHome",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/AvrilLavigne-NobodysHome.mp3",},
{title:"AvrilLavigne-RocknRoll",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/AvrilLavigne-RocknRoll.mp3",},
{title:"AvrilLavigne-WishYouWereHere",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/AvrilLavigne-WishYouWereHere.mp3",},
{title:"Backstreet BoysEverybody",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/Backstreet BoysEverybody.mp3",},
{title:"Backstreet Boysi want it that way",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/Backstreet Boysi want it that way.mp3",},
{title:"BackstreetBoys-As_Long_As_You_Love_M",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/BackstreetBoys-As_Long_As_You_Love_M.mp3",},
{title:"BertieHiggins-Casablanca",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/BertieHiggins-Casablanca.mp3",},
{title:"BertieHiggins-KeyLargo",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/BertieHiggins-KeyLargo.mp3",},
{title:"BrunoMars-MarryYou",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/BrunoMars-MarryYou.mp3",},
{title:"CaraDillon-Craigie_Hill",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/CaraDillon-Craigie_Hill.mp3",},
{title:"ChrisMedina-WhatAreWords",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/ChrisMedina-WhatAreWords.mp3",},
{title:"ColdplayYellow",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/ColdplayYellow.mp3",},
{title:"Daniel PowterFree Loop",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/Daniel PowterFree Loop.mp3",},
{title:"DemiLovato-LetItGo",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/DemiLovato-LetItGo.mp3",},
{title:"djokawari-luv_letter",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/djokawari-luv_letter.mp3",},
{title:"EdSheeran-ShapeOfYou",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/EdSheeran-ShapeOfYou.mp3",},
{title:"emilia-big_big_world",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/emilia-big_big_world.mp3",},
{title:"Eminem、Rihanna-LoveTheWayYouLie",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/Eminem、Rihanna-LoveTheWayYouLie.mp3",},
{title:"Enya-May It Be",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/Enya-May It Be.mp3",},
{title:"enya-Only_Time",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/enya-Only_Time.mp3",},
{title:"EraThe Mass",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/EraThe Mass.mp3",},
{title:"Gabriel MarianIts My Life",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/Gabriel MarianIts My Life.mp3",},
{title:"GrooveCoverage-farAwayFromHome ",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/GrooveCoverage-farAwayFromHome .mp3",},
{title:"GrooveCoverage-GodIsaGirl ",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/GrooveCoverage-GodIsaGirl .mp3",},
{title:"Hawk Nelson、Jonathan SteingardSold Out",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/Hawk Nelson、Jonathan SteingardSold Out.mp3",},
{title:"hayleyWestenra-never say goodbye",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/hayleyWestenra-never say goodbye.mp3",},
{title:"Justin Bieber、Luis Fonsi、Daddy Yankee-Despacito(Remix)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/Justin Bieber、Luis Fonsi、Daddy Yankee-Despacito(Remix).mp3",},
{title:"JustinBieber-Baby",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/JustinBieber-Baby.mp3",},
{title:"Kelly ClarksonCatch My Breath",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/Kelly ClarksonCatch My Breath.mp3",},
{title:"Klymaxx-IMissYou",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/Klymaxx-IMissYou.mp3",},
{title:"Ladygaga-Poker Face",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/Ladygaga-Poker Face.mp3",},
{title:"Lenka-TheShow",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/Lenka-TheShow.mp3",},
{title:"Lenka-TroubleIsaFriend",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/Lenka-TroubleIsaFriend.mp3",},
{title:"LeoSayer-MoreThanICanSay",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/LeoSayer-MoreThanICanSay.mp3",},
{title:"LionelRichie-SayYouSayMe",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/LionelRichie-SayYouSayMe.mp3",},
{title:"LovestonedBye Bye Bye",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/LovestonedBye Bye Bye.mp3",},
{title:"Luis Fonsi-Despacito",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/Luis Fonsi-Despacito.mp3",},
{title:"M2MPretty Boy",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/M2MPretty Boy.mp3",},
{title:"M2MThe Day You Went Away",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/M2MThe Day You Went Away.mp3",},
{title:"MariaArredondo-Burning",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/MariaArredondo-Burning.mp3",},
{title:"MariahCarey-when you believe",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/MariahCarey-when you believe.mp3",},
{title:"MariahCarey-withoutyou",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/MariahCarey-withoutyou.mp3",},
{title:"Meg MyersRunning Up That Hill",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/Meg MyersRunning Up That Hill.mp3",},
{title:"Michael JacksonYou Are Not Alone",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/Michael JacksonYou Are Not Alone.mp3",},
{title:"MinnieRiperton-loving you",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/MinnieRiperton-loving you.mp3",},
{title:"MinnieRiperton-LovingYou",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/MinnieRiperton-LovingYou.mp3",},
{title:"nana-lonely",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/nana-lonely.mp3",},
{title:"Nu VirgosStop!StopStop",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/Nu VirgosStop!StopStop.mp3",},
{title:"Olly MursThat Girl",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/Olly MursThat Girl.mp3",},
{title:"OnlyTime",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/OnlyTime.mp3",},
{title:"Rachel PlattenLone Ranger",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/Rachel PlattenLone Ranger.mp3",},
{title:"Robbie WilliamsBetter Man",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/Robbie WilliamsBetter Man.mp3",},
{title:"sarahBrightman-斯卡布罗集市",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/sarahBrightman-斯卡布罗集市.mp3",},
{title:"SarahConnor-EveryMomentOfMyLife",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/SarahConnor-EveryMomentOfMyLife.mp3",},
{title:"SarahCoonor",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/SarahCoonor.mp3",},
{title:"SarahCoonor-Are You Ready To Ride",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/SarahCoonor-Are You Ready To Ride.mp3",},
{title:"SarahCoonor-color",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/SarahCoonor-color.mp3",},
{title:"SarahCoonor-From_Sarah_With_Love",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/SarahCoonor-From_Sarah_With_Love.mp3",},
{title:"SarahCoonor-just one last dance",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/SarahCoonor-just one last dance.mp3",},
{title:"Sasha Alex SloanDancing With Your Ghost",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/Sasha Alex SloanDancing With Your Ghost.mp3",},
{title:"Savage GardenTruly Madly Deeply",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/Savage GardenTruly Madly Deeply.mp3",},
{title:"ShakinStevens-BecauseILoveYou",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/ShakinStevens-BecauseILoveYou.mp3",},
{title:"SiaMove Your Body(Alan Walker Remix)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/SiaMove Your Body(Alan Walker Remix).mp3",},
{title:"SiaUnstoppable",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/SiaUnstoppable.mp3",},
{title:"Sting-ShapeOfMyHeart ",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/Sting-ShapeOfMyHeart .mp3",},
{title:"tatu-30_Minutes",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/tatu-30_Minutes.mp3",},
{title:"Taylor SwiftLove Story",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/Taylor SwiftLove Story.mp3",},
{title:"TrademarkOnly Love",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/TrademarkOnly Love.mp3",},
{title:"Vicetone、Meron RyanWalk Thru Fire",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/Vicetone、Meron RyanWalk Thru Fire.mp3",},
{title:"WestlifeMy Love",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/WestlifeMy Love.mp3",},
{title:"WhitneyHouston-CallYouTonight",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/WhitneyHouston-CallYouTonight.mp3",},
{title:"WhitneyHouston-IHaveNothing",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/WhitneyHouston-IHaveNothing.mp3",},
{title:"WhitneyHouston-IWillAlwaysLoveYou",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/WhitneyHouston-IWillAlwaysLoveYou.mp3",},
{title:"Wiz Khalifa、Charlie PuthSee You Again (feat. Charlie Puth)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/Wiz Khalifa、Charlie PuthSee You Again (feat. Charlie Puth).mp3",},
{title:"WizKhalifa-See You Again",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/WizKhalifa-See You Again.mp3",},
{title:"布兰妮-BabyOneMoreTime",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/布兰妮-BabyOneMoreTime.mp3",},
{title:"布兰妮-everytime",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/布兰妮-everytime.mp3",},
{title:"卡洛儿-假如爱有天意",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/卡洛儿-假如爱有天意.mp3",},
{title:"卡洛儿-写给海洋",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/卡洛儿-写给海洋.mp3",},
{title:"卡朋特-YesterdayOnceMore",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/卡朋特-YesterdayOnceMore.mp3",},
{title:"马克尔杰克逊-HealTheWorld",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/马克尔杰克逊-HealTheWorld.mp3",},
{title:"欧美群星-WeAreTheWorld",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/欧美群星-WeAreTheWorld.mp3",},
{title:"手嶌葵-the rose",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/手嶌葵-the rose.mp3",},
{title:"斯维特拉娜 斯维吉科娃-天使消逝的地方",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/斯维特拉娜 斯维吉科娃-天使消逝的地方.mp3",},
{title:"铁达尼号主题曲-MyHeartWillGoOn",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/铁达尼号主题曲-MyHeartWillGoOn.mp3",},
{title:"维塔斯-海豚音",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/维塔斯-海豚音.mp3",},
{title:"英文经典-我的名字叫伊莲",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/英文经典-我的名字叫伊莲.mp3",},
{title:"有里知花-I_Cry",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/有里知花-I_Cry.mp3",}

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