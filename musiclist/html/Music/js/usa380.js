$(function($){
	// Settings
	$(".maxsize").css({ top : ($(window).width() - $(".maxsize").height())/2  });
	var repeat = localStorage.repeat || 0,
		shuffle = localStorage.shuffle || 'true',
		continous = true,
		autoplay = true,
		playlist = [
{title:"25ToLife",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/25ToLife.mp3",},
{title:"ABETTERMAN",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/ABETTERMAN.mp3",},
{title:"AddictedToYou",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/AddictedToYou.mp3",},
{title:"AfterParty",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/AfterParty.mp3",},
{title:"Akeeperforeveryflame",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Akeeperforeveryflame.mp3",},
{title:"AllByMyself",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/AllByMyself.mp3",},
{title:"AlmostFamous",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/AlmostFamous.mp3",},
{title:"Alone",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Alone.mp3",},
{title:"ALWAYS",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/ALWAYS.mp3",},
{title:"AlwaysAndForever",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/AlwaysAndForever.mp3",},
{title:"ANAESTHESIA麻醉（麦斯米兰-海克）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/ANAESTHESIA麻醉（麦斯米兰-海克）.mp3",},
{title:"ANDILOVEYOU",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/ANDILOVEYOU.mp3",},
{title:"ANewDayHasCome(RadioRemix)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/ANewDayHasCome(RadioRemix).mp3",},
{title:"AnswerMe",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/AnswerMe.mp3",},
{title:"AntesDeLasSeis",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/AntesDeLasSeis.mp3",},
{title:"Anything",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Anything.mp3",},
{title:"ANYTIME任何时间",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/ANYTIME任何时间.mp3",},
{title:"ASingerMustDie",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/ASingerMustDie.mp3",},
{title:"AsTimeGoesBy",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/AsTimeGoesBy.mp3",},
{title:"ATasteOfHoney",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/ATasteOfHoney.mp3",},
{title:"AutumnLeaves",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/AutumnLeaves.mp3",},
{title:"BackForth",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/BackForth.mp3",},
{title:"Bad",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Bad.mp3",},
{title:"BeatIt",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/BeatIt.mp3",},
{title:"BeautifullGirls",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/BeautifullGirls.mp3",},
{title:"BeautyAndTheBeast(Feat.PeaboBryson)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/BeautyAndTheBeast(Feat.PeaboBryson).mp3",},
{title:"BecauseYouLovedMe",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/BecauseYouLovedMe.mp3",},
{title:"BEENWAITING等待",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/BEENWAITING等待.mp3",},
{title:"BeneathYourBeautifull",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/BeneathYourBeautifull.mp3",},
{title:"BillieJean",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/BillieJean.mp3",},
{title:"BirdOnAWire",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/BirdOnAWire.mp3",},
{title:"BlackOrWhite",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/BlackOrWhite.mp3",},
{title:"BleedingLove",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/BleedingLove.mp3",},
{title:"BoyYouKnockMeOut",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/BoyYouKnockMeOut.mp3",},
{title:"Breathe",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Breathe.mp3",},
{title:"BreatheAgain",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/BreatheAgain.mp3",},
{title:"BustYourWindows",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/BustYourWindows.mp3",},
{title:"CaldoniA",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Caldonia.mp3",},
{title:"CallTheMan",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/CallTheMan.mp3",},
{title:"CameSoFarForBeauty",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/CameSoFarForBeauty.mp3",},
{title:"CasablancA",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Casablanca.mp3",},
{title:"Charlene",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Charlene.mp3",},
{title:"Charlie,LastNameWilson",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Charlie,LastNameWilson.mp3",},
{title:"CinderellaMan",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/CinderellaMan.mp3",},
{title:"ColdWindBlows",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/ColdWindBlows.mp3",},
{title:"COMEONOVERHERE",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/COMEONOVERHERE.mp3",},
{title:"ComingBackToYou",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/ComingBackToYou.mp3",},
{title:"COULDIHAVETHISKISSFOREVER永恒之吻",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/COULDIHAVETHISKISSFOREVER永恒之吻.mp3",},
{title:"Crazy",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Crazy.mp3",},
{title:"CryMeaRiver",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/CryMeaRiver.mp3",},
{title:"CRYMEOUT我哭了",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/CRYMEOUT我哭了.mp3",},
{title:"Damage",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Damage.mp3",},
{title:"Dancewithmyfather",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Dancewithmyfather.mp3",},
{title:"Dangerous",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Dangerous.mp3",},
{title:"DannyBoy",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/DannyBoy.mp3",},
{title:"Darling,JeVousAimeBeaucoupLaVieEnRose",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Darling,JeVousAimeBeaucoupLaVieEnRose.mp3",},
{title:"Devocion",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Devocion.mp3",},
{title:"DISGUISE假装（琳恩-玛莲）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/DISGUISE假装（琳恩-玛莲）.mp3",},
{title:"Down(Feat.KanyeWest)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Down(Feat.KanyeWest).mp3",},
{title:"Eibodeguero",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Eibodeguero.mp3",},
{title:"EndlessLove",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/EndlessLove.mp3",},
{title:"ENDOFMAY五月底（凯伦-安）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/ENDOFMAY五月底（凯伦-安）.mp3",},
{title:"Evergreen",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Evergreen.mp3",},
{title:"EverybodyinLove",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/EverybodyinLove.mp3",},
{title:"Everybodyplaysthefool",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Everybodyplaysthefool.mp3",},
{title:"EyesOnMe",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/EyesOnMe.mp3",},
{title:"FAIRYTALE",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/FAIRYTALE.mp3",},
{title:"FallingIntoYou",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/FallingIntoYou.mp3",},
{title:"FamousBlueRaincoat",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/FamousBlueRaincoat.mp3",},
{title:"FirstWeTakeManhattan",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/FirstWeTakeManhattan.mp3",},
{title:"FiveLongYears",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/FiveLongYears.mp3",},
{title:"FreakMe",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/FreakMe.mp3",},
{title:"GeorgiaOnMyMind",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/GeorgiaOnMyMind.mp3",},
{title:"GetAtYA",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/GetAtYa.mp3",},
{title:"GimmeWhatchaGot(Feat.LilWayne)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/GimmeWhatchaGot(Feat.LilWayne).mp3",},
{title:"Girlfriend",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Girlfriend.mp3",},
{title:"GiveMeEverything",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/GiveMeEverything.mp3",},
{title:"GoingThroughChanges",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/GoingThroughChanges.mp3",},
{title:"Gordita(feat.ResidenteCalle13)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Gordita(feat.ResidenteCalle13).mp3",},
{title:"GOTTAHAVEYOU必须拥有你（哭泣乐队）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/GOTTAHAVEYOU必须拥有你（哭泣乐队）.mp3",},
{title:"GottaWork",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/GottaWork.mp3",},
{title:"HaveIToldYouLatelyThatILoveYou",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/HaveIToldYouLatelyThatILoveYou.mp3",},
{title:"HaveYouEverBeenInLove",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/HaveYouEverBeenInLove.mp3",},
{title:"HealTheWorld",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/HealTheWorld.mp3",},
{title:"HelpMe",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/HelpMe.mp3",},
{title:"History",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/History.mp3",},
{title:"HOLDONMYHEART请珍惜我心",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/HOLDONMYHEART请珍惜我心.mp3",},
{title:"HoldUp(Feat.BigBoi)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/HoldUp(Feat.BigBoi).mp3",},
{title:"HotelCaliforniA",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/HotelCalifornia.mp3",},
{title:"HowBlueCanYouGet",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/HowBlueCanYouGet.mp3",},
{title:"HOWCOULDANANGELBREAKMYHEART",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/HOWCOULDANANGELBREAKMYHEART.mp3",},
{title:"HowYouGonnaActLikeThat",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/HowYouGonnaActLikeThat.mp3",},
{title:"IApologize",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/IApologize.mp3",},
{title:"ICanHaveEyesForYou",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/ICanHaveEyesForYou.mp3",},
{title:"IceBox",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/IceBox.mp3",},
{title:"IDroveAllNight",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/IDroveAllNight.mp3",},
{title:"IfYouHadmyLove",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/IfYouHadmyLove.mp3",},
{title:"IfYouLoveMe",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/IfYouLoveMe.mp3",},
{title:"Ignition(remix)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Ignition(remix).mp3",},
{title:"IGottaMoveOutOfThisNeighbourhood",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/IGottaMoveOutOfThisNeighbourhood.mp3",},
{title:"ILOVEMESOMEHIM",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/ILOVEMESOMEHIM.mp3",},
{title:"ILoveToLiveTheLife",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/ILoveToLiveTheLife.mp3",},
{title:"Immortality(Feat.TheBeeGees)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Immortality(Feat.TheBeeGees).mp3",},
{title:"IREMEMBER我记起来了（郭采洁）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/IREMEMBER我记起来了（郭采洁）.mp3",},
{title:"Islands",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Islands.mp3",},
{title:"ISwear",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/ISwear.mp3",},
{title:"Itfeelslikerain",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Itfeelslikerain.mp3",},
{title:"ItHadToBeYou",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/ItHadToBeYou.mp3",},
{title:"IWannaBe",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/IWannaBe.mp3",},
{title:"IWannaKnow",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/IWannaKnow.mp3",},
{title:"IWillAlwaysLoveYou",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/IWillAlwaysLoveYou.mp3",},
{title:"IWillNeverLetYouDown",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/IWillNeverLetYouDown.mp3",},
{title:"IWishyouLove",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/IWishyouLove.mp3",},
{title:"JEMAPPELLEHELENE我是伊莲",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/JEMAPPELLEHELENE我是伊莲.mp3",},
{title:"JoanOfArc",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/JoanOfArc.mp3",},
{title:"JUMPTHENFALL就在这时到来",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/JUMPTHENFALL就在这时到来.mp3",},
{title:"Justonelastdance",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Justonelastdance.mp3",},
{title:"KillingMeSoftlyWithHisSong",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/KillingMeSoftlyWithHisSong.mp3",},
{title:"Kinderspiele",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Kinderspiele.mp3",},
{title:"KissKiss(Feat.T-Pain)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/KissKiss(Feat.T-Pain).mp3",},
{title:"Kissoflife",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Kissoflife.mp3",},
{title:"Lady",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Lady.mp3",},
{title:"LastNight",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/LastNight.mp3",},
{title:"LETITFLOW",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/LETITFLOW.mp3",},
{title:"LetMeLoveYou",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/LetMeLoveYou.mp3",},
{title:"LetTheGoodTimesRoll",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/LetTheGoodTimesRoll.mp3",},
{title:"LifeInTheFastLane",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/LifeInTheFastLane.mp3",},
{title:"LikeYou",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/LikeYou.mp3",},
{title:"LIVINGTOLOVEYOU活着只为爱你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/LIVINGTOLOVEYOU活着只为爱你.mp3",},
{title:"Loca(feat.DizzeeRascal)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Loca(feat.DizzeeRascal).mp3",},
{title:"Loca(feat.ElCata)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Loca(feat.ElCata).mp3",},
{title:"LoQueMas",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/LoQueMas.mp3",},
{title:"Lottery",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Lottery.mp3",},
{title:"Louisiana1927",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Louisiana1927.mp3",},
{title:"LoveCanMoveMountains",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/LoveCanMoveMountains.mp3",},
{title:"LoveIsaManySplendoredThing",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/LoveIsaManySplendoredThing.mp3",},
{title:"Loveiscolorblind",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Loveiscolorblind.mp3",},
{title:"LoveLikeThis",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/LoveLikeThis.mp3",},
{title:"LoveMeTender",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/LoveMeTender.mp3",},
{title:"LoveSexMagic",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/LoveSexMagic.mp3",},
{title:"Lovesong",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Lovesong.mp3",},
{title:"LoveTheWayYouLie",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/LoveTheWayYouLie.mp3",},
{title:"MamA",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Mama.mp3",},
{title:"ManInTheMirror",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/ManInTheMirror.mp3",},
{title:"Mariposas",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Mariposas.mp3",},
{title:"Misled",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Misled.mp3",},
{title:"Misty",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Misty.mp3",},
{title:"MoonlightBecomesYou",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/MoonlightBecomesYou.mp3",},
{title:"MORETHANLOVE爱的更多",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/MORETHANLOVE爱的更多.mp3",},
{title:"Ms.Jackson",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Ms.Jackson.mp3",},
{title:"MyFunnyValentine",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/MyFunnyValentine.mp3",},
{title:"MyHeartWillGoOn",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/MyHeartWillGoOn.mp3",},
{title:"MYHEARTWILLGOON我心永恒",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/MYHEARTWILLGOON我心永恒.mp3",},
{title:"Mylastserenade",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Mylastserenade.mp3",},
{title:"MyLove(LiveVersion)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/MyLove(LiveVersion).mp3",},
{title:"MyLOveIsYourLove",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/MyLOveIsYourLove.mp3",},
{title:"NEVERBETHESAMEAGSIN永远不会一样了（C-麦伦尼）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/NEVERBETHESAMEAGSIN永远不会一样了（C-麦伦尼）.mp3",},
{title:"NeverGonnaLetYouGo(KellyG.Bump-N-GoEdit)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/NeverGonnaLetYouGo(KellyG.Bump-N-GoEdit).mp3",},
{title:"NEVERGROWOLD青春永驻（卡百利乐队）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/NEVERGROWOLD青春永驻（卡百利乐队）.mp3",},
{title:"NEVERJUSTFORARING",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/NEVERJUSTFORARING.mp3",},
{title:"NewKidInTown",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/NewKidInTown.mp3",},
{title:"Nice(Feat.Game))",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Nice(Feat.Game)).mp3",},
{title:"NightLife",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/NightLife.mp3",},
{title:"NoAir",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/NoAir.mp3",},
{title:"NobodyKnows",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/NobodyKnows.mp3",},
{title:"NoLove",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/NoLove.mp3",},
{title:"NoMore",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/NoMore.mp3",},
{title:"NOMOREYOU你不在",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/NOMOREYOU你不在.mp3",},
{title:"NoOtherLove",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/NoOtherLove.mp3",},
{title:"NoScrubs",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/NoScrubs.mp3",},
{title:"NotAfraid",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/NotAfraid.mp3",},
{title:"OneandOnly",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/OneandOnly.mp3",},
{title:"OneHeart",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/OneHeart.mp3",},
{title:"OnFire",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/OnFire.mp3",},
{title:"OnlyOneRoad",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/OnlyOneRoad.mp3",},
{title:"PayingTheCostToBeTheBoss",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/PayingTheCostToBeTheBoss.mp3",},
{title:"PicturePerfect(Feat.Will.I.Am)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/PicturePerfect(Feat.Will.I.Am).mp3",},
{title:"Pony",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Pony.mp3",},
{title:"PrettyMaidsAllInARow",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/PrettyMaidsAllInARow.mp3",},
{title:"PrettyWings",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/PrettyWings.mp3",},
{title:"PUTYOURARMSAROUNDME将我拥抱（娜塔莎-贝汀菲儿）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/PUTYOURARMSAROUNDME将我拥抱（娜塔莎-贝汀菲儿）.mp3",},
{title:"Rabiosa(feat.ElCata)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Rabiosa(feat.ElCata).mp3",},
{title:"Rabiosa(feat.Pitbull)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Rabiosa(feat.Pitbull).mp3",},
{title:"RightHere(HumanNaturemix)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/RightHere(HumanNaturemix).mp3",},
{title:"RiverDeep,MountainHigh",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/RiverDeep,MountainHigh.mp3",},
{title:"RollingintheDeep",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/RollingintheDeep.mp3",},
{title:"RumourHasIt",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/RumourHasIt.mp3",},
{title:"SaleElSol",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/SaleElSol.mp3",},
{title:"Scream",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Scream.mp3",},
{title:"Sealedwithakiss",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Sealedwithakiss.mp3",},
{title:"SecretLove",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/SecretLove.mp3",},
{title:"SeducesMe",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/SeducesMe.mp3",},
{title:"Seduction",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Seduction.mp3",},
{title:"SetFiretotheRain",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/SetFiretotheRain.mp3",},
{title:"SEVENYEARS七年（诺拉-琼斯）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/SEVENYEARS七年（诺拉-琼斯）.mp3",},
{title:"SheBelievesInMe",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/SheBelievesInMe.mp3",},
{title:"SmokeGetsinYourEyes",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/SmokeGetsinYourEyes.mp3",},
{title:"SoBad",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/SoBad.mp3",},
{title:"SoGone",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/SoGone.mp3",},
{title:"SomeoneLikeYou",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/SomeoneLikeYou.mp3",},
{title:"SomewhereMyLove",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/SomewhereMyLove.mp3",},
{title:"SomewhereOverTheRainbow",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/SomewhereOverTheRainbow.mp3",},
{title:"Somewheresomebody",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Somewheresomebody.mp3",},
{title:"SongOfBernadette",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/SongOfBernadette.mp3",},
{title:"SpaceBound",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/SpaceBound.mp3",},
{title:"SpanishEyes",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/SpanishEyes.mp3",},
{title:"SPANISHGUITAR",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/SPANISHGUITAR.mp3",},
{title:"Spotlight",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Spotlight.mp3",},
{title:"Stardust",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Stardust.mp3",},
{title:"StormyMondayBlues",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/StormyMondayBlues.mp3",},
{title:"StrangerInMoscow",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/StrangerInMoscow.mp3",},
{title:"StrangerinParadise",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/StrangerinParadise.mp3",},
{title:"SUMMERDAYSBLOOM盛夏的日子（麦斯米兰-海克）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/SUMMERDAYSBLOOM盛夏的日子（麦斯米兰-海克）.mp3",},
{title:"SureThing",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/SureThing.mp3",},
{title:"TAKEABOW落幕的恋情",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/TAKEABOW落幕的恋情.mp3",},
{title:"TakeitAll",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/TakeitAll.mp3",},
{title:"TakeYouDown",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/TakeYouDown.mp3",},
{title:"Takeyouout",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Takeyouout.mp3",},
{title:"TakingChances",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/TakingChances.mp3",},
{title:"TearsInHeaven",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/TearsInHeaven.mp3",},
{title:"TellHim(Feat.BarbraStreisand)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/TellHim(Feat.BarbraStreisand).mp3",},
{title:"TellMe",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/TellMe.mp3",},
{title:"THATSOMEBOOYWASYOU",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/THATSOMEBOOYWASYOU.mp3",},
{title:"ThatSunday",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/ThatSunday.mp3",},
{title:"TheBeatGoesOn",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/TheBeatGoesOn.mp3",},
{title:"TheColorofLove",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/TheColorofLove.mp3",},
{title:"TheFirstTimeEverISawYourFace",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/TheFirstTimeEverISawYourFace.mp3",},
{title:"TheGirlIsMine",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/TheGirlIsMine.mp3",},
{title:"TheLastResort",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/TheLastResort.mp3",},
{title:"THELITTLETHINGS",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/THELITTLETHINGS.mp3",},
{title:"ThePowerOfLove",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/ThePowerOfLove.mp3",},
{title:"ThePrayer(Feat.AndreaBocelli)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/ThePrayer(Feat.AndreaBocelli).mp3",},
{title:"TheReason",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/TheReason.mp3",},
{title:"ThereComesATime",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/ThereComesATime.mp3",},
{title:"ThereYouGo",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/ThereYouGo.mp3",},
{title:"THESTORY故事（诺拉-琼斯）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/THESTORY故事（诺拉-琼斯）.mp3",},
{title:"TheThrillIsGone",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/TheThrillIsGone.mp3",},
{title:"TheWayitUsedToBe",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/TheWayitUsedToBe.mp3",},
{title:"TheWindBeneathMyWings",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/TheWindBeneathMyWings.mp3",},
{title:"ThinkTwice",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/ThinkTwice.mp3",},
{title:"Thriller",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Thriller.mp3",},
{title:"ThroughTheYears",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/ThroughTheYears.mp3",},
{title:"Throwed",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Throwed.mp3",},
{title:"ToLoveYouMore",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/ToLoveYouMore.mp3",},
{title:"TOMMAIMAIRUBSAKTEE为什么你不接我的电话（莉蒂亚）（泰语）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/TOMMAIMAIRUBSAKTEE为什么你不接我的电话（莉蒂亚）（泰语）.mp3",},
{title:"TooClose",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/TooClose.mp3",},
{title:"TooYoung",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/TooYoung.mp3",},
{title:"TryAndLoveAgain",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/TryAndLoveAgain.mp3",},
{title:"TrySleepingwithaBrokenHeart",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/TrySleepingwithaBrokenHeart.mp3",},
{title:"TuBocA",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/TuBoca.mp3",},
{title:"TurningTables",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/TurningTables.mp3",},
{title:"UGotItBad",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/UGotItBad.mp3",},
{title:"UN-BREAKMYHEART",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/UN-BREAKMYHEART.mp3",},
{title:"UnaMaticadeRudA",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/UnaMaticadeRuda.mp3",},
{title:"UNBREAKMYHEART勿伤我心",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/UNBREAKMYHEART勿伤我心.mp3",},
{title:"UnchainedMelody",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/UnchainedMelody.mp3",},
{title:"Unforgettable",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Unforgettable.mp3",},
{title:"Untitled[HiddenTrack]",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Untitled[HiddenTrack].mp3",},
{title:"UsedtoLoveU",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/UsedtoLoveU.mp3",},
{title:"VALDERFIELDS瓦尔德田野（邦金-威尔斯）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/VALDERFIELDS瓦尔德田野（邦金-威尔斯）.mp3",},
{title:"VictimOfLove",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/VictimOfLove.mp3",},
{title:"W.T.P.",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/W.T.P..mp3",},
{title:"Waitforlove",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Waitforlove.mp3",},
{title:"WakaWaka(ClubMix)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/WakaWaka(ClubMix).mp3",},
{title:"WakaWaka(EnglishVersion)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/WakaWaka(EnglishVersion).mp3",},
{title:"WakaWaka(EstoEsAfrica)[K-Mix]",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/WakaWaka(EstoEsAfrica)[K-Mix].mp3",},
{title:"WakaWaka(ThisTimeForAfrica)[K-Mix]",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/WakaWaka(ThisTimeForAfrica)[K-Mix].mp3",},
{title:"WallToWall",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/WallToWall.mp3",},
{title:"WastedTime(reprise)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/WastedTime(reprise).mp3",},
{title:"WastedTime",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/WastedTime.mp3",},
{title:"Weekend",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Weekend.mp3",},
{title:"Westside",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Westside.mp3",},
{title:"WhatADifferenceADayMade",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/WhatADifferenceADayMade.mp3",},
{title:"WhataGirlWants",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/WhataGirlWants.mp3",},
{title:"WhenAManLovesAWoman",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/WhenAManLovesAWoman.mp3",},
{title:"WhenIFallInLove",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/WhenIFallInLove.mp3",},
{title:"WhenISeeU",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/WhenISeeU.mp3",},
{title:"WhenLoveComesToTown",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/WhenLoveComesToTown.mp3",},
{title:"WHENYOUSAYNOTHINGATALL当你什么都没说（罗南-基汀）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/WHENYOUSAYNOTHINGATALL当你什么都没说（罗南-基汀）.mp3",},
{title:"Windmillsofyourmind",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Windmillsofyourmind.mp3",},
{title:"WinterWorldOfLove",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/WinterWorldOfLove.mp3",},
{title:"WithYou",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/WithYou.mp3",},
{title:"Work",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/Work.mp3",},
{title:"YESTERDAY",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/YESTERDAY.mp3",},
{title:"You",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/You.mp3",},
{title:"YOUAREMYHEART你是我的心肝",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/YOUAREMYHEART你是我的心肝.mp3",},
{title:"YouAreNotAlone",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/YouAreNotAlone.mp3",},
{title:"YouAreSoBeautiful",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/YouAreSoBeautiful.mp3",},
{title:"YouDecoratedMyLife",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/YouDecoratedMyLife.mp3",},
{title:"YouI",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/YouI.mp3",},
{title:"YouLightUpMyLife",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/YouLightUpMyLife.mp3",},
{title:"YouSendMe",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/YouSendMe.mp3",},
{title:"不要带走我的心",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/不要带走我的心.mp3",},
{title:"今晚你感受到爱了吗",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/今晚你感受到爱了吗.mp3",},
{title:"伦巴达",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/伦巴达.mp3",},
{title:"你好",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/你好.mp3",},
{title:"你走的原因",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/你走的原因.mp3",},
{title:"全新世界",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/全新世界.mp3",},
{title:"到此为止",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/到此为止.mp3",},
{title:"加洲旅馆",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/加洲旅馆.mp3",},
{title:"勿伤我心",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/勿伤我心.mp3",},
{title:"南加州从不下雨",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/南加州从不下雨.mp3",},
{title:"卡萨布兰卡",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/卡萨布兰卡.mp3",},
{title:"友谊天常地久",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/友谊天常地久.mp3",},
{title:"只有你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/只有你.mp3",},
{title:"奔放的旋律",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/奔放的旋律.mp3",},
{title:"如此艰难",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/如此艰难.mp3",},
{title:"巴比伦河",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/巴比伦河.mp3",},
{title:"带走你的呼吸",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/带走你的呼吸.mp3",},
{title:"常在我心间",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/常在我心间.mp3",},
{title:"当你相信",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/当你相信.mp3",},
{title:"当男女相爱时",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/当男女相爱时.mp3",},
{title:"我会让你爱上我",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/我会让你爱上我.mp3",},
{title:"我将永远爱你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/我将永远爱你.mp3",},
{title:"我所做的一切都为了你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/我所做的一切都为了你.mp3",},
{title:"我相信我能飞",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/我相信我能飞.mp3",},
{title:"斯卡布罗集市",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/斯卡布罗集市.mp3",},
{title:"无心快语",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/无心快语.mp3",},
{title:"昨天",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/昨天.mp3",},
{title:"昨日重现",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/昨日重现.mp3",},
{title:"月亮河",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/月亮河.mp3",},
{title:"此情可待",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/此情可待.mp3",},
{title:"此情永不移",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/此情永不移.mp3",},
{title:"永不放弃你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/永不放弃你.mp3",},
{title:"永恒的火焰",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/永恒的火焰.mp3",},
{title:"没有你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/没有你.mp3",},
{title:"泪洒天堂",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/泪洒天堂.mp3",},
{title:"爱你在心口难开",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/爱你在心口难开.mp3",},
{title:"爱情故事",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/爱情故事.mp3",},
{title:"爱无止境",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/爱无止境.mp3",},
{title:"电话诉衷肠",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/电话诉衷肠.mp3",},
{title:"美女与野兽",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/美女与野兽.mp3",},
{title:"航行",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/航行.mp3",},
{title:"英雄",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/英雄.mp3",},
{title:"说你说我",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/说你说我.mp3",},
{title:"诺言来之不易",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/诺言来之不易.mp3",},
{title:"雨中的节奏",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/雨中的节奏.mp3",},
{title:"风之彩",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/风之彩.mp3",},
{title:"高无上的爱",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.11.wf/free163person/音乐视听/经典音乐大收藏/英文歌曲380首/高无上的爱.mp3",}

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