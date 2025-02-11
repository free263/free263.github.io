$(function($){
	// Settings
	$(".maxsize").css({ top : ($(window).width() - $(".maxsize").height())/2  });
	var repeat = localStorage.repeat || 0,
		shuffle = localStorage.shuffle || 'true',
		continous = true,
		autoplay = true,
		playlist = [
{title:"BoA-Action",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Action.mp3",},
{title:"BoA-Addiction(Bo)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Addiction(Bo).mp3",},
{title:"BoA-Adrenaline",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Adrenaline.mp3",},
{title:"BoA-Again",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Again.mp3",},
{title:"BoA-Aggressive",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Aggressive.mp3",},
{title:"BoA-AllThatJazz",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-AllThatJazz.mp3",},
{title:"BoA-AmazingKiss(EnglishVersion)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-AmazingKiss(EnglishVersion).mp3",},
{title:"BoA-AmazingKiss",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-AmazingKiss.mp3",},
{title:"BoA-Atl(AtlantisPrincess)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Atl(AtlantisPrincess).mp3",},
{title:"BoA-Azalea",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Azalea.mp3",},
{title:"BoA-BadDrive",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-BadDrive.mp3",},
{title:"BoA-BeautifulFlowers",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-BeautifulFlowers.mp3",},
{title:"BoA-BelieveinLOVE",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-BelieveinLOVE.mp3",},
{title:"BoA-BesideYou",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-BesideYou.mp3",},
{title:"BoA-BestFriend",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-BestFriend.mp3",},
{title:"BoA-BIO",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-BIO.mp3",},
{title:"BoA-BoA",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-BoA.mp3",},
{title:"BoA-BokuWoYuboKoe",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-BokuWoYuboKoe.mp3",},
{title:"BoA-Brave",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Brave.mp3",},
{title:"BoA-Butterfly",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Butterfly.mp3",},
{title:"BoA-CAMO",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-CAMO.mp3",},
{title:"BoA-CandleLights",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-CandleLights.mp3",},
{title:"BoA-CantLetGo",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-CantLetGo.mp3",},
{title:"BoA-CloseToMe",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-CloseToMe.mp3",},
{title:"BoA-Cloud",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Cloud.mp3",},
{title:"BoA-Control",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Control.mp3",},
{title:"BoA-Copy&Paste",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Copy&Paste.mp3",},
{title:"BoA-CrazyAbout",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-CrazyAbout.mp3",},
{title:"BoA-CutMeOff",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-CutMeOff.mp3",},
{title:"BoA-Dangerous",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Dangerous.mp3",},
{title:"BoA-DearMyLove..",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-DearMyLove...mp3",},
{title:"BoA-DiamondHeart",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-DiamondHeart.mp3",},
{title:"BoA-DidYa",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-DidYa.mp3",},
{title:"BoA-Dis(Disturbance)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Dis(Disturbance).mp3",},
{title:"BoA-Discovery",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Discovery.mp3",},
{title:"BoA-Distance",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Distance.mp3",},
{title:"BoA-Distiny",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Distiny.mp3",},
{title:"BoA-DontKnowWhatToSay",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-DontKnowWhatToSay.mp3",},
{title:"BoA-DontStartNow(EnglishVersion)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-DontStartNow(EnglishVersion).mp3",},
{title:"BoA-DontStartNow(KoreanVersion)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-DontStartNow(KoreanVersion).mp3",},
{title:"BoA-DontStartNow",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-DontStartNow.mp3",},
{title:"BoA-DoTheMotion",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-DoTheMotion.mp3",},
{title:"BoA-Double",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Double.mp3",},
{title:"BoA-DoYouLoveMe()-Bo)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-DoYouLoveMe()-Bo).mp3",},
{title:"BoA-DreamsComeTrue",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-DreamsComeTrue.mp3",},
{title:"BoA-DressOff",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-DressOff.mp3",},
{title:"BoA-Duvet",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Duvet.mp3",},
{title:"BoA-Earthsong",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Earthsong.mp3",},
{title:"BoA-EatYouUp",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-EatYouUp.mp3",},
{title:"BoA-Energetic",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Energetic.mp3",},
{title:"BoA-Everlasting",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Everlasting.mp3",},
{title:"BoA-EVERYBODYKNOWS",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-EVERYBODYKNOWS.mp3",},
{title:"BoA-EveryHeart",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-EveryHeart.mp3",},
{title:"BoA-EverythingNeedsLove",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-EverythingNeedsLove.mp3",},
{title:"BoA-FeelMe",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-FeelMe.mp3",},
{title:"BoA-FeelTheSame",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-FeelTheSame.mp3",},
{title:"BoA-FirstSnow",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-FirstSnow.mp3",},
{title:"BoA-Flower",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Flower.mp3",},
{title:"BoA-Fox",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Fox.mp3",},
{title:"BoA-GardenInTheAir",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-GardenInTheAir.mp3",},
{title:"BoA-GirlsOnTop(KoreanVer.)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-GirlsOnTop(KoreanVer.).mp3",},
{title:"BoA-GotMeGood",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-GotMeGood.mp3",},
{title:"BoA-GraciousDays",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-GraciousDays.mp3",},
{title:"BoA-Gravity",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Gravity.mp3",},
{title:"BoA-GreenLight",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-GreenLight.mp3",},
{title:"BoA-Happiness",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Happiness.mp3",},
{title:"BoA-HappinessLies",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-HappinessLies.mp3",},
{title:"BoA-HappyBirthday",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-HappyBirthday.mp3",},
{title:"BoA-Heroine(Bo)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Heroine(Bo).mp3",},
{title:"BoA-HoneyDiamonds",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-HoneyDiamonds.mp3",},
{title:"BoA-HurricaneVenus",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-HurricaneVenus.mp3",},
{title:"BoA-HurricanVenus",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-HurricanVenus.mp3",},
{title:"BoA-HypnoticDancefloor",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-HypnoticDancefloor.mp3",},
{title:"BoA-Ibelieve",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Ibelieve.mp3",},
{title:"BoA-IDontMind",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-IDontMind.mp3",},
{title:"BoA-IdPeaceB(EnglishVersion)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-IdPeaceB(EnglishVersion).mp3",},
{title:"BoA-IdPeaceB",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-IdPeaceB.mp3",},
{title:"BoA-ImSorry",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-ImSorry.mp3",},
{title:"BoA-ImYourLadyTonight",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-ImYourLadyTonight.mp3",},
{title:"BoA-ISpy",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-ISpy.mp3",},
{title:"BoA-JewelSong",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-JewelSong.mp3",},
{title:"BoA-JoyfulSmile",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-JoyfulSmile.mp3",},
{title:"BoA-KeyOfHeart",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-KeyOfHeart.mp3",},
{title:"BoA-KissMyLips",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-KissMyLips.mp3",},
{title:"BoA-LALLAOLALOVESONG",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-LALLAOLALOVESONG.mp3",},
{title:"BoA-LastCristmas",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-LastCristmas.mp3",},
{title:"BoA-LetMe",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-LetMe.mp3",},
{title:"BoA-LetUGo",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-LetUGo.mp3",},
{title:"BoA-ListenToMyHeart(BonusTrack)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-ListenToMyHeart(BonusTrack).mp3",},
{title:"BoA-LISTENTOMYHEART(EnglishVersion)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-LISTENTOMYHEART(EnglishVersion).mp3",},
{title:"BoA-LittleBird",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-LittleBird.mp3",},
{title:"BoA-LittleMore",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-LittleMore.mp3",},
{title:"BoA-LOLLIPOP",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-LOLLIPOP.mp3",},
{title:"BoA-LongTimeNoSee",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-LongTimeNoSee.mp3",},
{title:"BoA-LookWhosTalking",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-LookWhosTalking.mp3",},
{title:"BoA-LOVE",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-LOVE.mp3",},
{title:"BoA-LoveCanMakeAMiracle",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-LoveCanMakeAMiracle.mp3",},
{title:"BoA-LoveHurts",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-LoveHurts.mp3",},
{title:"BoA-LoveIsJustWhatYouCan’tSee",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-LoveIsJustWhatYouCan’tSee.mp3",},
{title:"BoA-LoveLetter",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-LoveLetter.mp3",},
{title:"BoA-MakeASecret",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-MakeASecret.mp3",},
{title:"BoA-MASAYUMECHASING",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-MASAYUMECHASING.mp3",},
{title:"BoA-MaydayMayday",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-MaydayMayday.mp3",},
{title:"BoA-MegaStep",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-MegaStep.mp3",},
{title:"BoA-MEP(MyElectronicPiano)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-MEP(MyElectronicPiano).mp3",},
{title:"BoA-Milestone",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Milestone.mp3",},
{title:"BoA-MilkyWay",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-MilkyWay.mp3",},
{title:"BoA-MoonSunrise",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-MoonSunrise.mp3",},
{title:"BoA-Moto",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Moto.mp3",},
{title:"BoA-MyGenie",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-MyGenie.mp3",},
{title:"BoA-MyName(KroeanVer.)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-MyName(KroeanVer.).mp3",},
{title:"BoA-MyOnlyOne",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-MyOnlyOne.mp3",},
{title:"BoA-MySweetie",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-MySweetie.mp3",},
{title:"BoA-NEGADOLA",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-NEGADOLA.mp3",},
{title:"BoA-NextStep",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-NextStep.mp3",},
{title:"BoA-No1",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-No1.mp3",},
{title:"BoA-NobodyButYou",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-NobodyButYou.mp3",},
{title:"BoA-NoMoreMakeMeSick",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-NoMoreMakeMeSick.mp3",},
{title:"BoA-NothingsGonnaChange",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-NothingsGonnaChange.mp3",},
{title:"BoA-NotOverU",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-NotOverU.mp3",},
{title:"BoA-Obsessed",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Obsessed.mp3",},
{title:"BoA-OndWingsEmbracingEachOther",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-OndWingsEmbracingEachOther.mp3",},
{title:"BoA-ONESHOTTWOSHOT",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-ONESHOTTWOSHOT.mp3",},
{title:"BoA-OnlyOne(Instrumental)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-OnlyOne(Instrumental).mp3",},
{title:"BoA-OnlyOne",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-OnlyOne.mp3",},
{title:"BoA-Op",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Op.mp3",},
{title:"BoA-OurLoveToMyParents",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-OurLoveToMyParents.mp3",},
{title:"BoA-OutgrowReadyButterfly",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-OutgrowReadyButterfly.mp3",},
{title:"BoA-PainLove",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-PainLove.mp3",},
{title:"BoA-POL(PowerOfLove)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-POL(PowerOfLove).mp3",},
{title:"BoA-Power",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Power.mp3",},
{title:"BoA-pr(SpringRain)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-pr(SpringRain).mp3",},
{title:"BoA-Precious",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Precious.mp3",},
{title:"BoA-REALIZE(staywithme)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-REALIZE(staywithme).mp3",},
{title:"BoA-RECOLLECTION",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-RECOLLECTION.mp3",},
{title:"BoA-RightHereRightEverywhere",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-RightHereRightEverywhere.mp3",},
{title:"BoA-RockWithYou",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-RockWithYou.mp3",},
{title:"BoA-SARA",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-SARA.mp3",},
{title:"BoA-Sars",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Sars.mp3",},
{title:"BoA-SearchingForTruth",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-SearchingForTruth.mp3",},
{title:"BoA-ShareYourHeart(WithMe)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-ShareYourHeart(WithMe).mp3",},
{title:"BoA-Shattered",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Shattered.mp3",},
{title:"BoA-ShineWeAre!(Instrumental)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-ShineWeAre!(Instrumental).mp3",},
{title:"BoA-ShineWeAre!",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-ShineWeAre!.mp3",},
{title:"BoA-shinewoare",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-shinewoare.mp3",},
{title:"BoA-ShyLove",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-ShyLove.mp3",},
{title:"BoA-SilentScreamerz",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-SilentScreamerz.mp3",},
{title:"BoA-SmileAgain",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-SmileAgain.mp3",},
{title:"BoA-SnowWhite",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-SnowWhite.mp3",},
{title:"BoA-SomedaySomewhere",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-SomedaySomewhere.mp3",},
{title:"BoA-SongWithNoName",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-SongWithNoName.mp3",},
{title:"BoA-SoReal",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-SoReal.mp3",},
{title:"BoA-Soundscape",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Soundscape.mp3",},
{title:"BoA-Sparkling",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Sparkling.mp3",},
{title:"BoA-StartOver",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-StartOver.mp3",},
{title:"BoA-StayMyGold",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-StayMyGold.mp3",},
{title:"BoA-Still.",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Still..mp3",},
{title:"BoA-Style",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Style.mp3",},
{title:"BoA-Sunshine",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Sunshine.mp3",},
{title:"BoA-SweetImpact",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-SweetImpact.mp3",},
{title:"BoA-Temptations",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Temptations.mp3",},
{title:"BoA-TheChristmasSong",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-TheChristmasSong.mp3",},
{title:"BoA-TheLightsOfSeoul",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-TheLightsOfSeoul.mp3",},
{title:"BoA-TheShadow",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-TheShadow.mp3",},
{title:"BoA-TheShowMustGoOn",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-TheShowMustGoOn.mp3",},
{title:"BoA-TheTop",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-TheTop.mp3",},
{title:"BoA-TimeToBegin",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-TimeToBegin.mp3",},
{title:"BoA-Touch",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Touch.mp3",},
{title:"BoA-Touched",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Touched.mp3",},
{title:"BoA-Tragic",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Tragic.mp3",},
{title:"BoA-Tree",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Tree.mp3",},
{title:"BoA-ve(EveryBreathYouTake)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-ve(EveryBreathYouTake).mp3",},
{title:"BoA-We(Bo)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-We(Bo).mp3",},
{title:"BoA-Whatever",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Whatever.mp3",},
{title:"BoA-WhiteChristmas",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-WhiteChristmas.mp3",},
{title:"BoA-WhiteWishes(EnglishVersion)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-WhiteWishes(EnglishVersion).mp3",},
{title:"BoA-WhiteWishes",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-WhiteWishes.mp3",},
{title:"BoA-WinterLove",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-WinterLove.mp3",},
{title:"BoA-WithU",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-WithU.mp3",},
{title:"BoA-WithYou",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-WithYou.mp3",},
{title:"BoA-Woman",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-Woman.mp3",},
{title:"BoA-WOOWEEKEND",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-WOOWEEKEND.mp3",},
{title:"BoA-YourColor",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-YourColor.mp3",},
{title:"BoA-ギャップにやられた!",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-ギャップにやられた!.mp3",},
{title:"BoA-メリクリ(BEST&USAVersion)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-メリクリ(BEST&USAVersion).mp3",},
{title:"BoA-メリクリ",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-メリクリ.mp3",},
{title:"BoA-世界の片隅で",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-世界の片隅で.mp3",},
{title:"BoA-世界的象征",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-世界的象征.mp3",},
{title:"BoA-大家的心情",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-大家的心情.mp3",},
{title:"BoA-奇蹟",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-奇蹟.mp3",},
{title:"BoA-心の手紙",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-心の手紙.mp3",},
{title:"BoA-抱きしめる",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-抱きしめる.mp3",},
{title:"BoA-气持ちはつたわる",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-气持ちはつたわる.mp3",},
{title:"BoA-永远",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-永远.mp3",},
{title:"BoA-红鼻子的驯鹿",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-红鼻子的驯鹿.mp3",},
{title:"BoA-薄雾",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-薄雾.mp3",},
{title:"BoA-???",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-???.mp3",},
{title:"BoA-NoWay",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA-NoWay.mp3",},
{title:"BoA、Akon、KardinalOffishall-Beautiful",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA、Akon、KardinalOffishall-Beautiful.mp3",},
{title:"BoA、BeatBurger-MusicIsWonderful",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA、BeatBurger-MusicIsWonderful.mp3",},
{title:"BoA、Beenzino-NoMatterWhat",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA、Beenzino-NoMatterWhat.mp3",},
{title:"BoA、Crush-StarryNight(Feat.Crush)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA、Crush-StarryNight(Feat.Crush).mp3",},
{title:"BoA、CrystalKay-Girlfriend",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA、CrystalKay-Girlfriend.mp3",},
{title:"BoA、DABO-WindingRoad",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA、DABO-WindingRoad.mp3",},
{title:"BoA、EddyKim-DoubleJack",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA、EddyKim-DoubleJack.mp3",},
{title:"BoA、Gaeko-WhoAreYou",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA、Gaeko-WhoAreYou.mp3",},
{title:"BoA、SEAMO-HeyBoy,HeyGirl",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA、SEAMO-HeyBoyHeyGirl.mp3",},
{title:"BoA、SeanGarrett-IDidItForLove",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA、SeanGarrett-IDidItForLove.mp3",},
{title:"BoA、VERBAL-BUMPBUMP!",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA、VERBAL-BUMPBUMP!.mp3",},
{title:"BoA、WISE-MyWayYourWay",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA、WISE-MyWayYourWay.mp3",},
{title:"BoA、YutakaFurukawa-LOSEYOURMIND",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA、YutakaFurukawa-LOSEYOURMIND.mp3",},
{title:"BoA、郑允浩-Swing",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/BoA、郑允浩-Swing.mp3",},
{title:"Dana-到世界尽头",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/Dana-到世界尽头.mp3",},
{title:"davichi-即使恨也爱你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/davichi-即使恨也爱你.mp3",},
{title:"Davichi-可笑的爱情",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/Davichi-可笑的爱情.mp3",},
{title:"davichi-悲伤的约定",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/davichi-悲伤的约定.mp3",},
{title:"davichi-爱情和战争",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/davichi-爱情和战争.mp3",},
{title:"DreamGirls殆死悲爱-ImSorry",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/DreamGirls殆死悲爱-ImSorry.mp3",},
{title:"Fin.K.L-BlueRain",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/Fin.K.L-BlueRain.mp3",},
{title:"jewelry-again",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/jewelry-again.mp3",},
{title:"jewelry-Super_Star",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/jewelry-Super_Star.mp3",},
{title:"Jewelry-更喜欢你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/Jewelry-更喜欢你.mp3",},
{title:"Kara-Honey",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/Kara-Honey.mp3",},
{title:"kiss-因为是女子",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/kiss-因为是女子.mp3",},
{title:"Lyn-歌信",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/Lyn-歌信.mp3",},
{title:"Lyn-爱情都是谎言",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/Lyn-爱情都是谎言.mp3",},
{title:"Psy-江南Style",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/Psy-江南Style.mp3",},
{title:"rania-DrFeelGood",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/rania-DrFeelGood.mp3",},
{title:"sHarp-我的嘴唇如暖暖的咖啡",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/sHarp-我的嘴唇如暖暖的咖啡.mp3",},
{title:"tara-LoveyDovey",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/tara-LoveyDovey.mp3",},
{title:"WAX-Money",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/WAX-Money.mp3",},
{title:"WAX-一通电话也不行",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/WAX-一通电话也不行.mp3",},
{title:"WAX-余情",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/WAX-余情.mp3",},
{title:"WAX-只有眼泪只有眼泪",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/WAX-只有眼泪只有眼泪.mp3",},
{title:"WAX-坐着地铁",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/WAX-坐着地铁.mp3",},
{title:"WAX-改变化装",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/WAX-改变化装.mp3",},
{title:"WAX-渴望爱情",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/WAX-渴望爱情.mp3",},
{title:"WAX",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/WAX.mp3",},
{title:"WonderGirls-nobody",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/WonderGirls-nobody.mp3",},
{title:"严正花-都走吧",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/严正花-都走吧.mp3",},
{title:"冬季恋歌-从开始到现在",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/冬季恋歌-从开始到现在.mp3",},
{title:"孙丹菲-星期六晚上",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/孙丹菲-星期六晚上.mp3",},
{title:"少女时代-Animal",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/少女时代-Animal.mp3",},
{title:"少女时代-BeepBeep",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/少女时代-BeepBeep.mp3",},
{title:"少女时代-GalaxySupernova",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/少女时代-GalaxySupernova.mp3",},
{title:"少女时代-Gee(Japanesever.)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/少女时代-Gee(Japanesever.).mp3",},
{title:"少女时代-Gee",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/少女时代-Gee.mp3",},
{title:"少女时代-Holiday",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/少女时代-Holiday.mp3",},
{title:"少女时代-HOOT",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/少女时代-HOOT.mp3",},
{title:"少女时代-IntoTheNewWorld",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/少女时代-IntoTheNewWorld.mp3",},
{title:"少女时代-Mr.Mr.(Japanesever.)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/少女时代-Mr.Mr.(Japanesever.).mp3",},
{title:"少女时代-MrTaxi",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/少女时代-MrTaxi.mp3",},
{title:"少女时代-Oh!(Japanesever.)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/少女时代-Oh!(Japanesever.).mp3",},
{title:"少女时代-Oh!",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/少女时代-Oh!.mp3",},
{title:"少女时代-Paparazzi",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/少女时代-Paparazzi.mp3",},
{title:"少女时代-PARTY",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/少女时代-PARTY.mp3",},
{title:"少女时代-RunDevilRun",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/少女时代-RunDevilRun.mp3",},
{title:"少女时代-TheBoys",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/少女时代-TheBoys.mp3",},
{title:"我的野蛮女友-我相信",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/我的野蛮女友-我相信.mp3",},
{title:"朴孝信-雪之花",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/朴孝信-雪之花.mp3",},
{title:"朴惠京-RAIN",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/朴惠京-RAIN.mp3",},
{title:"朴慧京-yesterday",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/朴慧京-yesterday.mp3",},
{title:"朴慧京-结婚",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/朴慧京-结婚.mp3",},
{title:"李孝利-10minutes",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/李孝利-10minutes.mp3",},
{title:"李秀英-AlsoILoveYou",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/李秀英-AlsoILoveYou.mp3",},
{title:"李秀英-NEVERAGAIN",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/李秀英-NEVERAGAIN.mp3",},
{title:"李秀英-我们",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/李秀英-我们.mp3",},
{title:"李贞贤-月亮啊月亮",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/李贞贤-月亮啊月亮.mp3",},
{title:"李贞贤-独一无二",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/李贞贤-独一无二.mp3",},
{title:"李贞贤-眉飞色舞",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/李贞贤-眉飞色舞.mp3",},
{title:"柳真-ChaCha",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/柳真-ChaCha.mp3",},
{title:"淑熙-啦啦啦",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/淑熙-啦啦啦.mp3",},
{title:"玉珠铉-仲夏夜之梦",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/玉珠铉-仲夏夜之梦.mp3",},
{title:"申彗星-LoveLetter",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/申彗星-LoveLetter.mp3",},
{title:"申彗星-在那个位置",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/申彗星-在那个位置.mp3",},
{title:"申彗星-我慢慢死去",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/申彗星-我慢慢死去.mp3",},
{title:"申彗星-爱情病",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/申彗星-爱情病.mp3",},
{title:"蓝色生死恋-祈祷",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/蓝色生死恋-祈祷.mp3",},
{title:"裴勇俊-MyMemory",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/韩国音乐/裴勇俊-MyMemory.mp3",}

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