$(function($){
	// Settings
	$(".maxsize").css({ top : ($(window).width() - $(".maxsize").height())/2  });
	var repeat = localStorage.repeat || 0,
		shuffle = localStorage.shuffle || 'true',
		continous = true,
		autoplay = true,
		playlist = [
{title:"2NE1-Fire",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/2NE1-Fire.mp3",},
{title:"Baby V.O.X-Get Up",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/Baby V.O.X-Get Up.mp3",},
{title:"Baby V.O.X-Killer",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/Baby V.O.X-Killer.mp3",},
{title:"Baby V.O.X-Why",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/Baby V.O.X-Why.mp3",},
{title:"Baby V.O.X-偶然",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/Baby V.O.X-偶然.mp3",},
{title:"BoA-AmazingKiss",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/BoA-AmazingKiss.mp3",},
{title:"BoA-ListenToMyHeart",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/BoA-ListenToMyHeart.mp3",},
{title:"BoA-No1",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/BoA-No1.mp3",},
{title:"Dana-到世界尽头",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/Dana-到世界尽头.mp3",},
{title:"Davichi-爱情和战争",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/Davichi-爱情和战争.mp3",},
{title:"Davichi-悲伤的约定",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/Davichi-悲伤的约定.mp3",},
{title:"Davichi-即使恨也爱你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/Davichi-即使恨也爱你.mp3",},
{title:"Davichi-可笑的爱情",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/Davichi-可笑的爱情.mp3",},
{title:"Davichi-这份爱",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/Davichi-这份爱.mp3",},
{title:"DreamGirls殆死悲爱-ImSorry",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/DreamGirls殆死悲爱-ImSorry.mp3",},
{title:"Fin.K.L-BlueRain",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/Fin.K.L-BlueRain.mp3",},
{title:"i-dle-Queencard",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/i-dle-Queencard.mp3",},
{title:"i-dle-TOMBOY",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/i-dle-TOMBOY.mp3",},
{title:"jewelry-again",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/jewelry-again.mp3",},
{title:"jewelry-Super_Star",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/jewelry-Super_Star.mp3",},
{title:"Jewelry-更喜欢你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/Jewelry-更喜欢你.mp3",},
{title:"Kara-Honey",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/Kara-Honey.mp3",},
{title:"kiss-因为是女子",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/kiss-因为是女子.mp3",},
{title:"Lyn-爱情都是谎言",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/Lyn-爱情都是谎言.mp3",},
{title:"Lyn-歌信",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/Lyn-歌信.mp3",},
{title:"Psy-江南Style",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/Psy-江南Style.mp3",},
{title:"rania-DrFeelGood",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/rania-DrFeelGood.mp3",},
{title:"S.E.S.-Dreams Come True",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/S.E.S.-Dreams Come True.mp3",},
{title:"S.E.S.-Just In Love",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/S.E.S.-Just In Love.mp3",},
{title:"S.E.S.-Love",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/S.E.S.-Love.mp3",},
{title:"S.E.S.-Oh My Love",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/S.E.S.-Oh My Love.mp3",},
{title:"S.E.S.-Sha-La-La",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/S.E.S.-Sha-La-La.mp3",},
{title:"S.E.S.-Twilight Zone",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/S.E.S.-Twilight Zone.mp3",},
{title:"S.E.S.-U",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/S.E.S.-U.mp3",},
{title:"sHarp-我的嘴唇如暖暖的咖啡",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/sHarp-我的嘴唇如暖暖的咖啡.mp3",},
{title:"T-ara-DAY BY DAY",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/T-ara-DAY BY DAY.mp3",},
{title:"T-ara-LoveyDovey",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/T-ara-LoveyDovey.mp3",},
{title:"T-ara-Sexy Love",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/T-ara-Sexy Love.mp3",},
{title:"WAX",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/WAX.mp3",},
{title:"WAX-Money",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/WAX-Money.mp3",},
{title:"WAX-改变化装",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/WAX-改变化装.mp3",},
{title:"WAX-渴望爱情",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/WAX-渴望爱情.mp3",},
{title:"WAX-一通电话也不行",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/WAX-一通电话也不行.mp3",},
{title:"WAX-余情",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/WAX-余情.mp3",},
{title:"WAX-只有眼泪只有眼泪",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/WAX-只有眼泪只有眼泪.mp3",},
{title:"WAX-坐着地铁",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/WAX-坐着地铁.mp3",},
{title:"WonderGirls-nobody",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/WonderGirls-nobody.mp3",},
{title:"白智英-不再爱了",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/白智英-不再爱了.mp3",},
{title:"白智英-那个女人",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/白智英-那个女人.mp3",},
{title:"白智英-像中枪一样",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/白智英-像中枪一样.mp3",},
{title:"蔡妍-My Love",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/蔡妍-My Love.mp3",},
{title:"蔡妍-两个人",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/蔡妍-两个人.mp3",},
{title:"蔡妍-危险的演出",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/蔡妍-危险的演出.mp3",},
{title:"蔡妍-摇摆",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/蔡妍-摇摆.mp3",},
{title:"冬季恋歌-从开始到现在",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/冬季恋歌-从开始到现在.mp3",},
{title:"高耀太-悲梦",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/高耀太-悲梦.mp3",},
{title:"高耀太-波澜",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/高耀太-波澜.mp3",},
{title:"高耀太-纯情",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/高耀太-纯情.mp3",},
{title:"高耀太-飞翔",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/高耀太-飞翔.mp3",},
{title:"高耀太-火花",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/高耀太-火花.mp3",},
{title:"高耀太-失恋",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/高耀太-失恋.mp3",},
{title:"高耀太-英雄",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/高耀太-英雄.mp3",},
{title:"高耀太-诱惑",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/高耀太-诱惑.mp3",},
{title:"洪真英-活着",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/洪真英-活着.mp3",},
{title:"金智贤-呼唤1",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/金智贤-呼唤1.mp3",},
{title:"李宝蓝-红豆2",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/李宝蓝-红豆2.mp3",},
{title:"李海丽-红豆1",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/李海丽-红豆1.mp3",},
{title:"李孝利-10minutes",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/李孝利-10minutes.mp3",},
{title:"李秀英-AlsoILoveYou",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/李秀英-AlsoILoveYou.mp3",},
{title:"李秀英-NEVERAGAIN",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/李秀英-NEVERAGAIN.mp3",},
{title:"李秀英-我们",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/李秀英-我们.mp3",},
{title:"李贞贤-阿里阿里",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/李贞贤-阿里阿里.mp3",},
{title:"李贞贤-半",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/李贞贤-半.mp3",},
{title:"李贞贤-发疯",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/李贞贤-发疯.mp3",},
{title:"李贞贤-换掉",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/李贞贤-换掉.mp3",},
{title:"李贞贤-哇",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/李贞贤-哇.mp3",},
{title:"李贞贤-月亮啊月亮",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/李贞贤-月亮啊月亮.mp3",},
{title:"柳真-ChaCha",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/柳真-ChaCha.mp3",},
{title:"米娜-Kiss Kiss",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/米娜-Kiss Kiss.mp3",},
{title:"米娜-电话情缘",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/米娜-电话情缘.mp3",},
{title:"米娜-转",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/米娜-转.mp3",},
{title:"裴勇俊-MyMemory",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/裴勇俊-MyMemory.mp3",},
{title:"朴惠京-RAIN",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/朴惠京-RAIN.mp3",},
{title:"朴慧京-yesterday",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/朴慧京-yesterday.mp3",},
{title:"朴慧京-结婚",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/朴慧京-结婚.mp3",},
{title:"朴孝信-花信",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/朴孝信-花信.mp3",},
{title:"朴孝信-雪之花",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/朴孝信-雪之花.mp3",},
{title:"朴志胤-Steal Away",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/朴志胤-Steal Away.mp3",},
{title:"朴志胤-成人礼",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/朴志胤-成人礼.mp3",},
{title:"少女时代-Animal",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/少女时代-Animal.mp3",},
{title:"少女时代-BeepBeep",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/少女时代-BeepBeep.mp3",},
{title:"少女时代-GalaxySupernova",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/少女时代-GalaxySupernova.mp3",},
{title:"少女时代-Gee(Japanesever.)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/少女时代-Gee(Japanesever.).mp3",},
{title:"少女时代-Gee",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/少女时代-Gee.mp3",},
{title:"少女时代-Holiday",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/少女时代-Holiday.mp3",},
{title:"少女时代-HOOT",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/少女时代-HOOT.mp3",},
{title:"少女时代-IntoTheNewWorld",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/少女时代-IntoTheNewWorld.mp3",},
{title:"少女时代-Mr.Mr.(Japanesever.)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/少女时代-Mr.Mr.(Japanesever.).mp3",},
{title:"少女时代-MrTaxi",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/少女时代-MrTaxi.mp3",},
{title:"少女时代-Oh!(Japanesever.)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/少女时代-Oh!(Japanesever.).mp3",},
{title:"少女时代-Oh!",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/少女时代-Oh!.mp3",},
{title:"少女时代-Paparazzi",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/少女时代-Paparazzi.mp3",},
{title:"少女时代-PARTY",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/少女时代-PARTY.mp3",},
{title:"少女时代-RunDevilRun",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/少女时代-RunDevilRun.mp3",},
{title:"少女时代-TheBoys",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/少女时代-TheBoys.mp3",},
{title:"申彗星-LoveLetter",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/申彗星-LoveLetter.mp3",},
{title:"申彗星-爱情病",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/申彗星-爱情病.mp3",},
{title:"申彗星-我慢慢死去",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/申彗星-我慢慢死去.mp3",},
{title:"申彗星-在那个位置",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/申彗星-在那个位置.mp3",},
{title:"申升勋-我相信",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/申升勋-我相信.mp3",},
{title:"淑熙-啦啦啦",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/淑熙-啦啦啦.mp3",},
{title:"宋雨琦-Radio",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/宋雨琦-Radio.mp3",},
{title:"孙丹菲-星期六晚上",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/孙丹菲-星期六晚上.mp3",},
{title:"太妍-如果",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/太妍-如果.mp3",},
{title:"太妍-四季",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/太妍-四季.mp3",},
{title:"吴贤兰-Remember",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/吴贤兰-Remember.mp3",},
{title:"孝琳-再见",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/孝琳-再见.mp3",},
{title:"严正花-都走吧",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/严正花-都走吧.mp3",},
{title:"玉珠铉-仲夏夜之梦",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/玉珠铉-仲夏夜之梦.mp3",},
{title:"张娜拉-Sweet Dream",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/张娜拉-Sweet Dream.mp3",},
{title:"郑日英-祈祷",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/韩国音乐/郑日英-祈祷.mp3",}

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