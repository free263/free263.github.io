$(function($){
	// Settings
	$(".maxsize").css({ top : ($(window).width() - $(".maxsize").height())/2  });
	var repeat = localStorage.repeat || 0,
		shuffle = localStorage.shuffle || 'true',
		continous = true,
		autoplay = true,
		playlist = [
{title:"JUST-M~1.MP3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/JUST-M~1.MP3",},
{title:"Just-不怕.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/Just-不怕.mp3",},
{title:"JustinTimberlake-CAN'TSTOPTHEFEELING!.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/JustinTimberlake-CAN'TSTOPTHEFEELING!.mp3",},
{title:"Kis-My-Ft2-Gravity.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/Kis-My-Ft2-Gravity.mp3",},
{title:"LosBunkers-AlFinalDeEsteViajeEnLaVida.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/LosBunkers-AlFinalDeEsteViajeEnLaVida.mp3",},
{title:"MIC男团-天使在身边.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/MIC男团-天使在身边.mp3",},
{title:"Postmen-想你了(MissYou).mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/Postmen-想你了(MissYou).mp3",},
{title:"Rain-假装.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/Rain-假装.mp3",},
{title:"Rain、Ravi-克拉恋人.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/Rain、Ravi-克拉恋人.mp3",},
{title:"Salt-N-Pepa-Shoop.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/Salt-N-Pepa-Shoop.mp3",},
{title:"Sara-微小的失落.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/Sara-微小的失落.mp3",},
{title:"ScarlettJohansson-TrustinMe.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/ScarlettJohansson-TrustinMe.mp3",},
{title:"Shakira-TryEverything.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/Shakira-TryEverything.mp3",},
{title:"SPICA-因为你.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/SPICA-因为你.mp3",},
{title:"SunnyHill-SayILoveYou.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/SunnyHill-SayILoveYou.mp3",},
{title:"TFBOYS-未来的进击.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/TFBOYS-未来的进击.mp3",},
{title:"Wable-???.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/Wable-???.mp3",},
{title:"WizKhalifa、CharliePuth-SeeYouAgain.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/WizKhalifa、CharliePuth-SeeYouAgain.mp3",},
{title:"Younha-Sunflower.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/Younha-Sunflower.mp3",},
{title:"Younha-祈祷.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/Younha-祈祷.mp3",},
{title:"中央少年广播合唱团、李烨琳-我是中国的孩子.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/中央少年广播合唱团、李烨琳-我是中国的孩子.mp3",},
{title:"井柏然、白百何-明天你会在哪里.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/井柏然、白百何-明天你会在哪里.mp3",},
{title:"任容萱-爱不爱都寂寞.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/任容萱-爱不爱都寂寞.mp3",},
{title:"任贤齐、王子文-时光诛仙.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/任贤齐、王子文-时光诛仙.mp3",},
{title:"何晟铭-幸福的方向.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/何晟铭-幸福的方向.mp3",},
{title:"何洁-不可能的人.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/何洁-不可能的人.mp3",},
{title:"何雁诗-TheOnlyOne.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/何雁诗-TheOnlyOne.mp3",},
{title:"何雁诗-我和你.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/何雁诗-我和你.mp3",},
{title:"何雁诗-最真心一对.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/何雁诗-最真心一对.mp3",},
{title:"何雁诗-爱情食物链.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/何雁诗-爱情食物链.mp3",},
{title:"佟丽娅-管你爱不爱.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/佟丽娅-管你爱不爱.mp3",},
{title:"侧田-同步.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/侧田-同步.mp3",},
{title:"侧田、李思捷-出口.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/侧田、李思捷-出口.mp3",},
{title:"信-远得要命的爱情.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/信-远得要命的爱情.mp3",},
{title:"信乐团-离歌.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/信乐团-离歌.mp3",},
{title:"关诗敏-别说.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/关诗敏-别说.mp3",},
{title:"凤凰传奇-一路惊喜.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/凤凰传奇-一路惊喜.mp3",},
{title:"刘一祯-梦一场.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/刘一祯-梦一场.mp3",},
{title:"刘伟男-如果能再见.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/刘伟男-如果能再见.mp3",},
{title:"刘力扬-属于你的歌.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/刘力扬-属于你的歌.mp3",},
{title:"刘庭羽-勿忘我.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/刘庭羽-勿忘我.mp3",},
{title:"刘德华-原谅我.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/刘德华-原谅我.mp3",},
{title:"刘德华、李宇春-恭喜发财2016.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/刘德华、李宇春-恭喜发财2016.mp3",},
{title:"刘德华、黄晓明、沈腾-笑一笑.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/刘德华、黄晓明、沈腾-笑一笑.mp3",},
{title:"刘恺威-抓不住的温柔.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/刘恺威-抓不住的温柔.mp3",},
{title:"刘恺威-无终.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/刘恺威-无终.mp3",},
{title:"刘惜君-直到那一天.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/刘惜君-直到那一天.mp3",},
{title:"刘欢、吉克隽逸-奋不顾身.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/刘欢、吉克隽逸-奋不顾身.mp3",},
{title:"刘涛-红颜旧.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/刘涛-红颜旧.mp3",},
{title:"刘涛-错爱.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/刘涛-错爱.mp3",},
{title:"刘珂、陈冰-告别昨天.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/刘珂、陈冰-告别昨天.mp3",},
{title:"刘端端-疯狂爱.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/刘端端-疯狂爱.mp3",},
{title:"华晨宇-火星情报局.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/华晨宇-火星情报局.mp3",},
{title:"南征北战-萨瓦迪卡.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/南征北战-萨瓦迪卡.mp3",},
{title:"印子月-落空.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/印子月-落空.mp3",},
{title:"原子霏-繁花.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/原子霏-繁花.mp3",},
{title:"原子霏-芈月传.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/原子霏-芈月传.mp3",},
{title:"反光镜-来到你身边.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/反光镜-来到你身边.mp3",},
{title:"吉克隽逸-幸福加油.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/吉克隽逸-幸福加油.mp3",},
{title:"吉克隽逸-我是女王.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/吉克隽逸-我是女王.mp3",},
{title:"吴亦凡-从此以后.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/吴亦凡-从此以后.mp3",},
{title:"吴亦凡-花房姑娘.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/吴亦凡-花房姑娘.mp3",},
{title:"吴婧-浮生梦.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/吴婧-浮生梦.mp3",},
{title:"吴若希-完美的生活.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/吴若希-完美的生活.mp3",},
{title:"吴若希-我们都受伤.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/吴若希-我们都受伤.mp3",},
{title:"吴若希-美好的时光.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/吴若希-美好的时光.mp3",},
{title:"吴莫愁-舞底线.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/吴莫愁-舞底线.mp3",},
{title:"周杰伦、aMEI-不该.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/周杰伦、aMEI-不该.mp3",},
{title:"周笔畅-我选择喜欢你.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/周笔畅-我选择喜欢你.mp3",},
{title:"周笔畅-新步步惊心.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/周笔畅-新步步惊心.mp3",},
{title:"周笔畅-片羽时光.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/周笔畅-片羽时光.mp3",},
{title:"周笔畅-若不是那次夜空.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/周笔畅-若不是那次夜空.mp3",},
{title:"周诗雅-爱难抗拒.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/周诗雅-爱难抗拒.mp3",},
{title:"周迅-幸福的开关.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/周迅-幸福的开关.mp3",},
{title:"和汇慧-两个人一支烟.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/和汇慧-两个人一支烟.mp3",},
{title:"和汇慧-记忆中的未来.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/和汇慧-记忆中的未来.mp3",},
{title:"品冠-一个人不一定就不快乐.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/品冠-一个人不一定就不快乐.mp3",},
{title:"品冠-我一个人记得就好.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/品冠-我一个人记得就好.mp3",},
{title:"品冠-还好有你.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/品冠-还好有你.mp3",},
{title:"唐嫣-好久不见.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/唐嫣-好久不见.mp3",},
{title:"唐禹哲-寻找爱的冒险.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/唐禹哲-寻找爱的冒险.mp3",},
{title:"圈住那个9、不才-飞鸟和她.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/圈住那个9、不才-飞鸟和她.mp3",},
{title:"圭贤-直到抵达你的星球.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/圭贤-直到抵达你的星球.mp3",},
{title:"多亮-诉衷情.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/多亮-诉衷情.mp3",},
{title:"好妹妹乐队-不说再见.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/好妹妹乐队-不说再见.mp3",},
{title:"好妹妹乐队-门.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/好妹妹乐队-门.mp3",},
{title:"姚笛-Angel.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/姚笛-Angel.mp3",},
{title:"孙子涵-回忆那么伤.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/孙子涵-回忆那么伤.mp3",},
{title:"孙楠-一起奔放.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/孙楠-一起奔放.mp3",},
{title:"孙楠-大秧歌序曲.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/孙楠-大秧歌序曲.mp3",},
{title:"孙楠、吴京-你来不来.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/孙楠、吴京-你来不来.mp3",},
{title:"孙燕姿-在,也不见.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/孙燕姿-在,也不见.mp3",},
{title:"孙铭宇-英雄泪.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/孙铭宇-英雄泪.mp3",},
{title:"宁桓宇-替你爱我.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/宁桓宇-替你爱我.mp3",},
{title:"宋冬野-万物生长.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/宋冬野-万物生长.mp3",},
{title:"宋小宝、岳云鹏-往事只能回味.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/宋小宝、岳云鹏-往事只能回味.mp3",},
{title:"宋茜-IBelieve.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/宋茜-IBelieve.mp3",},
{title:"宋茜-星星泪.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/宋茜-星星泪.mp3",},
{title:"宥胜-昨日.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/宥胜-昨日.mp3",},
{title:"小柯-对不起.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/小柯-对不起.mp3",},
{title:"小沈阳-八戒八戒.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/小沈阳-八戒八戒.mp3",},
{title:"小爱的妈-神通.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/小爱的妈-神通.mp3",},
{title:"小野丽莎-等待你出现.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/小野丽莎-等待你出现.mp3",},
{title:"尚雯婕-为爱归来.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/尚雯婕-为爱归来.mp3",},
{title:"尚雯婕-侠客行.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/尚雯婕-侠客行.mp3",},
{title:"尚雯婕-时间的力量.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/尚雯婕-时间的力量.mp3",},
{title:"尹美莱-ALWAYS.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/尹美莱-ALWAYS.mp3",},
{title:"崔子格-匆匆.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/崔子格-匆匆.mp3",},
{title:"崔子格-可念不可说.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/崔子格-可念不可说.mp3",},
{title:"崔子格、盛一伦-可念不可说.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/崔子格、盛一伦-可念不可说.mp3",},
{title:"崔恕、赵佳霖-长安乱.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/崔恕、赵佳霖-长安乱.mp3",},
{title:"帕尔哈提-忘了她.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/帕尔哈提-忘了她.mp3",},
{title:"常石磊-这里的黎明静悄悄.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/常石磊-这里的黎明静悄悄.mp3",},
{title:"平原綾香-明日.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/平原綾香-明日.mp3",},
{title:"张一山、张承、葛铮-落日谣.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/张一山、张承、葛铮-落日谣.mp3",},
{title:"张一山、葛铮、张承-打屁歌.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/张一山、葛铮、张承-打屁歌.mp3",},
{title:"张丹峰-地老天荒.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/张丹峰-地老天荒.mp3",},
{title:"张信哲-IBelieve.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/张信哲-IBelieve.mp3",},
{title:"张信哲-焚情.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/张信哲-焚情.mp3",},
{title:"张含韵-相思赋.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/张含韵-相思赋.mp3",},
{title:"张含韵-问别.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/张含韵-问别.mp3",},
{title:"张家辉-你是我心爱的姑娘.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/张家辉-你是我心爱的姑娘.mp3",},
{title:"张惠妹-灵魂尽头.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/张惠妹-灵魂尽头.mp3",},
{title:"张曼玉-如果没了你.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/张曼玉-如果没了你.mp3",},
{title:"张杰-LostintheStars.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/张杰-LostintheStars.mp3",},
{title:"张杰-娑婆世界.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/张杰-娑婆世界.mp3",},
{title:"张杰、莫文蔚-一念之间.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/张杰、莫文蔚-一念之间.mp3",},
{title:"张歆艺-真·真.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/张歆艺-真·真.mp3",},
{title:"张江-欢乐颂.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/张江-欢乐颂.mp3",},
{title:"张玮-追爱.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/张玮-追爱.mp3",},
{title:"张碧晨-下一秒.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/张碧晨-下一秒.mp3",},
{title:"张碧晨-年少轻狂.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/张碧晨-年少轻狂.mp3",},
{title:"张碧晨-年轮.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/张碧晨-年轮.mp3",},
{title:"张磊-一念天堂.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/张磊-一念天堂.mp3",},
{title:"张磊-人生是一次热血的流浪.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/张磊-人生是一次热血的流浪.mp3",},
{title:"张磊-伤心是留给回忆的糖.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/张磊-伤心是留给回忆的糖.mp3",},
{title:"张磊-相爱恨晚.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/张磊-相爱恨晚.mp3",},
{title:"张磊-路远.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/张磊-路远.mp3",},
{title:"张继聪-月无声.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/张继聪-月无声.mp3",},
{title:"张翰-滚蛋歌.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/张翰-滚蛋歌.mp3",},
{title:"张艺兴、姜雯、李小璐-青春快乐.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/张艺兴、姜雯、李小璐-青春快乐.mp3",},
{title:"张若昀-最长的旅途.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/张若昀-最长的旅途.mp3",},
{title:"张赫、白宇、张彬彬、崔航、郑业成-一笑倾城.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/张赫、白宇、张彬彬、崔航、郑业成-一笑倾城.mp3",},
{title:"张赫宣-我们不该这样的.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/张赫宣-我们不该这样的.mp3",},
{title:"张靓颖-Can'tHelpFallingInLove.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/张靓颖-Can'tHelpFallingInLove.mp3",},
{title:"张靓颖、BigSean-FightingShadows.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/张靓颖、BigSean-FightingShadows.mp3",},
{title:"弦子-翻身吧!姐妹.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/弦子-翻身吧!姐妹.mp3",},
{title:"弦子、孟庭苇-还舍不得离别.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/弦子、孟庭苇-还舍不得离别.mp3",},
{title:"彭佳慧、F.I.R.-心之火.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/彭佳慧、F.I.R.-心之火.mp3",},
{title:"徐佳莹-女人花.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/徐佳莹-女人花.mp3",},
{title:"徐佳莹-潇洒走一回.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/徐佳莹-潇洒走一回.mp3",},
{title:"徐佳莹-遗忘之前.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/徐佳莹-遗忘之前.mp3",},
{title:"徐梵溪-燃烧翅膀.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/徐梵溪-燃烧翅膀.mp3",},
{title:"徐申东、阿宝-天天有喜.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/徐申东、阿宝-天天有喜.mp3",},
{title:"徐菲-树叶的光.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/徐菲-树叶的光.mp3",},
{title:"徐贤-我会等你.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/徐贤-我会等你.mp3",},
{title:"戚薇-陪你天涯.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/戚薇-陪你天涯.mp3",},
{title:"戴佩妮-非诚勿扰.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/戴佩妮-非诚勿扰.mp3",},
{title:"手嶌葵-明日への手紙.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/手嶌葵-明日への手紙.mp3",},
{title:"星-Remember.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/星-Remember.mp3",},
{title:"曹洋-解开.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/曹洋-解开.mp3",},
{title:"曹璐-等你开口.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/曹璐-等你开口.mp3",},
{title:"曹轩宾-轻轻.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/曹轩宾-轻轻.mp3",},
{title:"曾一鸣-冷红颜.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/曾一鸣-冷红颜.mp3",},
{title:"曾一鸣-时光尽头的恋人.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/曾一鸣-时光尽头的恋人.mp3",},
{title:"曾咏欣-心的构造.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/曾咏欣-心的构造.mp3",},
{title:"曾沛慈-我不是你该爱的那个人.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/曾沛慈-我不是你该爱的那个人.mp3",},
{title:"曾雨轩-幸福的味道.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/曾雨轩-幸福的味道.mp3",},
{title:"朱明-好好爱你一辈子.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/朱明-好好爱你一辈子.mp3",},
{title:"朴容仁、权顺日-NoWay.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/朴容仁、权顺日-NoWay.mp3",},
{title:"朴树-在木星.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/朴树-在木星.mp3",},
{title:"权振东-你什么都想要.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/权振东-你什么都想要.mp3",},
{title:"李健-假如爱有天意.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/李健-假如爱有天意.mp3",},
{title:"李宇春-山河故人.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/李宇春-山河故人.mp3",},
{title:"李小璐、贾乃亮-多面娇娃.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/李小璐、贾乃亮-多面娇娃.mp3",},
{title:"李易峰-年少有你.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/李易峰-年少有你.mp3",},
{title:"李易峰-请跟我联络.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/李易峰-请跟我联络.mp3",},
{title:"李晓杰、陈星、程巍、牛朝阳-美人酒.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/李晓杰、陈星、程巍、牛朝阳-美人酒.mp3",},
{title:"李泰-冷战.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/李泰-冷战.mp3",},
{title:"李维真-你一直在我心里.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/李维真-你一直在我心里.mp3",},
{title:"李荣浩-不将就.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/李荣浩-不将就.mp3",},
{title:"李荣浩-不说.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/李荣浩-不说.mp3",},
{title:"李锡勋-I'llBeThere.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/李锡勋-I'llBeThere.mp3",},
{title:"李阳-给我点时间.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/李阳-给我点时间.mp3",},
{title:"李雅萱-不一样的女人.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/李雅萱-不一样的女人.mp3",},
{title:"杨坤-爱简单.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/杨坤-爱简单.mp3",},
{title:"杨坤、陈学冬、张杰、郑元畅、佟大为、朱亚文-真心英雄.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/杨坤、陈学冬、张杰、郑元畅、佟大为、朱亚文-真心英雄.mp3",},
{title:"杨宗纬-一次就好.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/杨宗纬-一次就好.mp3",},
{title:"杨宗纬-真相禁区.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/杨宗纬-真相禁区.mp3",},
{title:"杨洋-微微一笑很倾城.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/杨洋-微微一笑很倾城.mp3",},
{title:"杨珏婷-NeverSayGoodbye.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/杨珏婷-NeverSayGoodbye.mp3",},
{title:"杨紫-开得比花香.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/杨紫-开得比花香.mp3",},
{title:"林峯-心有灵犀.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/林峯-心有灵犀.mp3",},
{title:"林明祯-小秘密.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/林明祯-小秘密.mp3",},
{title:"林采欣-一秒时光.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/林采欣-一秒时光.mp3",},
{title:"柯有伦、崔允素-为爱.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/柯有伦、崔允素-为爱.mp3",},
{title:"梁文音-寂寞之光.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/梁文音-寂寞之光.mp3",},
{title:"梁静茹-在爱里等你.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/梁静茹-在爱里等你.mp3",},
{title:"樊凡-转身.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/樊凡-转身.mp3",},
{title:"樊凡-逆向爱情.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/樊凡-逆向爱情.mp3",},
{title:"樊凡-非我不可.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/樊凡-非我不可.mp3",},
{title:"橋本環奈-セーラー服と機関銃.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/橋本環奈-セーラー服と機関銃.mp3",},
{title:"欧豪、杨洋、胡夏-放心去飞.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/欧豪、杨洋、胡夏-放心去飞.mp3",},
{title:"欧阳娜娜-温暖你的冬.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/欧阳娜娜-温暖你的冬.mp3",},
{title:"毛泽少-思雨蝶.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/毛泽少-思雨蝶.mp3",},
{title:"水木年华-唯你一生.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/水木年华-唯你一生.mp3",},
{title:"江一燕-我不.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/江一燕-我不.mp3",},
{title:"江映蓉-爱如传奇.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/江映蓉-爱如传奇.mp3",},
{title:"池城-紫罗兰.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/池城-紫罗兰.mp3",},
{title:"汤唯-我曾经也想过一了百了.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/汤唯-我曾经也想过一了百了.mp3",},
{title:"汪小敏-空.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/汪小敏-空.mp3",},
{title:"汪苏泷-π之歌.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/汪苏泷-π之歌.mp3",},
{title:"汪苏泷-一笑倾城.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/汪苏泷-一笑倾城.mp3",},
{title:"汪苏泷-严小姐.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/汪苏泷-严小姐.mp3",},
{title:"汪苏泷-如果时光倒流.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/汪苏泷-如果时光倒流.mp3",},
{title:"汪苏泷-心跳.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/汪苏泷-心跳.mp3",},
{title:"汪苏泷-爱让我勇敢.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/汪苏泷-爱让我勇敢.mp3",},
{title:"沈依莎-时过境迁.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/沈依莎-时过境迁.mp3",},
{title:"沈腾-一次就好.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/沈腾-一次就好.mp3",},
{title:"沈震轩-蓝天白云.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/沈震轩-蓝天白云.mp3",},
{title:"沙宝亮-有种你爱我.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/沙宝亮-有种你爱我.mp3",},
{title:"温岚-FlyWithMe.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/温岚-FlyWithMe.mp3",},
{title:"满江-Mr.Man.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/满江-Mr.Man.mp3",},
{title:"潘长江-灯火.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/潘长江-灯火.mp3",},
{title:"焕熙-??????.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/焕熙-??????.mp3",},
{title:"爱纱、呆宝静-真相.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/爱纱、呆宝静-真相.mp3",},
{title:"牛奶咖啡-星星.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/牛奶咖啡-星星.mp3",},
{title:"王凯-赤血长殷.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/王凯-赤血长殷.mp3",},
{title:"王力宏-就是现在我看你有戏.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/王力宏-就是现在我看你有戏.mp3",},
{title:"王大文-云霄飞车.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/王大文-云霄飞车.mp3",},
{title:"王大文-其实你已经知道.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/王大文-其实你已经知道.mp3",},
{title:"王思远-逐鹿.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/王思远-逐鹿.mp3",},
{title:"王栎鑫-最好的我们.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/王栎鑫-最好的我们.mp3",},
{title:"王珞丹-如果遇见.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/王珞丹-如果遇见.mp3",},
{title:"王祖蓝、刘维-Brother.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/王祖蓝、刘维-Brother.mp3",},
{title:"王蓉-高跟鞋先生.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/王蓉-高跟鞋先生.mp3",},
{title:"王蓉、东山少爷-叶问.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/王蓉、东山少爷-叶问.mp3",},
{title:"王蓉、老猫、杨望-叶问.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/王蓉、老猫、杨望-叶问.mp3",},
{title:"王诗龄、Kimi、张悦轩、郭子睿-爸爸的假期.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/王诗龄、Kimi、张悦轩、郭子睿-爸爸的假期.mp3",},
{title:"王铮亮-相爱一场.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/王铮亮-相爱一场.mp3",},
{title:"王铮亮-越走越远的旅客.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/王铮亮-越走越远的旅客.mp3",},
{title:"田雷-找找爱.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/田雷-找找爱.mp3",},
{title:"白举纲、于湉-一首热血的歌.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/白举纲、于湉-一首热血的歌.mp3",},
{title:"白智英-BecauseOfYou.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/白智英-BecauseOfYou.mp3",},
{title:"盛一伦-漩涡.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/盛一伦-漩涡.mp3",},
{title:"祖峰-空气.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/祖峰-空气.mp3",},
{title:"祖峰-陪你左右.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/祖峰-陪你左右.mp3",},
{title:"秦勇-回家的路.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/秦勇-回家的路.mp3",},
{title:"秦基博-スミレ.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/秦基博-スミレ.mp3",},
{title:"程堃-如果,再见.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/程堃-如果,再见.mp3",},
{title:"筷子兄弟-奔跑吧兄弟.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/筷子兄弟-奔跑吧兄弟.mp3",},
{title:"筷子兄弟-铁拳.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/筷子兄弟-铁拳.mp3",},
{title:"简弘亦-情义盖过天.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/简弘亦-情义盖过天.mp3",},
{title:"简弘亦-战鹰.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/简弘亦-战鹰.mp3",},
{title:"简弘亦-第九十九滴眼泪.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/简弘亦-第九十九滴眼泪.mp3",},
{title:"罗中旭-恋人.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/罗中旭-恋人.mp3",},
{title:"罗大佑、台北爱乐合唱团-穿越漩涡.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/罗大佑、台北爱乐合唱团-穿越漩涡.mp3",},
{title:"罗晋-如果我答应你.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/罗晋-如果我答应你.mp3",},
{title:"翟天临、江铠同-潜爱.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/翟天临、江铠同-潜爱.mp3",},
{title:"胡夏-他比我更适合.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/胡夏-他比我更适合.mp3",},
{title:"胡夏-爱你步步惊心.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/胡夏-爱你步步惊心.mp3",},
{title:"胡夏-给我的快乐.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/胡夏-给我的快乐.mp3",},
{title:"胡彦斌-还魂门.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/胡彦斌-还魂门.mp3",},
{title:"胡杏儿-天使.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/胡杏儿-天使.mp3",},
{title:"胡歌-风起时.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/胡歌-风起时.mp3",},
{title:"胡莎莎-我是你的女侠.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/胡莎莎-我是你的女侠.mp3",},
{title:"胡莎莎-离人劫.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/胡莎莎-离人劫.mp3",},
{title:"胡鸿钧-天地不容.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/胡鸿钧-天地不容.mp3",},
{title:"胡鸿钧-灵魂的痛.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/胡鸿钧-灵魂的痛.mp3",},
{title:"苏盈之、陈晓东-幸福满满.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/苏盈之、陈晓东-幸福满满.mp3",},
{title:"范逸臣-秀丽江山.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/范逸臣-秀丽江山.mp3",},
{title:"蒋卓嘉-伤寒.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/蒋卓嘉-伤寒.mp3",},
{title:"蒋卓嘉-预告.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/蒋卓嘉-预告.mp3",},
{title:"蔡健雅-停格.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/蔡健雅-停格.mp3",},
{title:"薛之谦、黄龄-来日方长.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/薛之谦、黄龄-来日方长.mp3",},
{title:"藏古西烈、王叠-月恋.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/藏古西烈、王叠-月恋.mp3",},
{title:"西内まりや-SaveMe.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/西内まりや-SaveMe.mp3",},
{title:"西瓜JUN-海洋之歌.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/西瓜JUN-海洋之歌.mp3",},
{title:"许嵩-不语.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/许嵩-不语.mp3",},
{title:"许廷铿-迷宫.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/许廷铿-迷宫.mp3",},
{title:"许飞-不说再见.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/许飞-不说再见.mp3",},
{title:"许魏洲-向着光亮那方.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/许魏洲-向着光亮那方.mp3",},
{title:"许魏洲-慢慢走.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/许魏洲-慢慢走.mp3",},
{title:"谢安琪-诸神混乱.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/谢安琪-诸神混乱.mp3",},
{title:"谢容儿-血娃娃.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/谢容儿-血娃娃.mp3",},
{title:"谭维维-三十岁的女人.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/谭维维-三十岁的女人.mp3",},
{title:"谭维维-地狱就是天堂.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/谭维维-地狱就是天堂.mp3",},
{title:"谭维维-无问.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/谭维维-无问.mp3",},
{title:"谭维维-煎饼侠.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/谭维维-煎饼侠.mp3",},
{title:"谭维维-爱到底.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/谭维维-爱到底.mp3",},
{title:"贾乃亮-炽热的青春.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/贾乃亮-炽热的青春.mp3",},
{title:"贾乃亮-讨喜.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/贾乃亮-讨喜.mp3",},
{title:"贾青-傻得可以.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/贾青-傻得可以.mp3",},
{title:"赵丽颖-心念.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/赵丽颖-心念.mp3",},
{title:"赵丽颖、许志安-乱世俱灭.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/赵丽颖、许志安-乱世俱灭.mp3",},
{title:"赵婧贻-直到时间尽头.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/赵婧贻-直到时间尽头.mp3",},
{title:"赵照-你就是我最想要的丫头.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/赵照-你就是我最想要的丫头.mp3",},
{title:"赵照-当你老了.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/赵照-当你老了.mp3",},
{title:"赵英俊-大王叫我来巡山.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/赵英俊-大王叫我来巡山.mp3",},
{title:"赵英俊、万万天团-万万.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/赵英俊、万万天团-万万.mp3",},
{title:"赵薇-左耳.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/赵薇-左耳.mp3",},
{title:"迪克牛仔-蒸发太平洋.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/迪克牛仔-蒸发太平洋.mp3",},
{title:"邓超-娘娘我错了.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/邓超-娘娘我错了.mp3",},
{title:"邓超、小臭臭-小尾巴之歌.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/邓超、小臭臭-小尾巴之歌.mp3",},
{title:"那英-对的人.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/那英-对的人.mp3",},
{title:"那英-有个爱你的人不容易.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/那英-有个爱你的人不容易.mp3",},
{title:"那英-相爱恨早.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/那英-相爱恨早.mp3",},
{title:"那英-默.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/那英-默.mp3",},
{title:"郁可唯-我们都爱过.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/郁可唯-我们都爱过.mp3",},
{title:"郁可唯-爱情是青春的旅行.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/郁可唯-爱情是青春的旅行.mp3",},
{title:"郁可唯-风中芭蕾.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/郁可唯-风中芭蕾.mp3",},
{title:"郑俊弘-火线下.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/郑俊弘-火线下.mp3",},
{title:"郑恺-时光倒回.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/郑恺-时光倒回.mp3",},
{title:"郑烨-耀眼的一天.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/郑烨-耀眼的一天.mp3",},
{title:"郑烨-??(愛).mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/郑烨-??(愛).mp3",},
{title:"郑胜焕-????.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/郑胜焕-????.mp3",},
{title:"郑雅文-寂寞旅途.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/郑雅文-寂寞旅途.mp3",},
{title:"郭子睿-小猪歌.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/郭子睿-小猪歌.mp3",},
{title:"郭富城-就是孙悟空.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/郭富城-就是孙悟空.mp3",},
{title:"都智文-将就.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/都智文-将就.mp3",},
{title:"金志文-尘.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/金志文-尘.mp3",},
{title:"金志文-我们结婚吧.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/金志文-我们结婚吧.mp3",},
{title:"金志文、谭维维、陈楚生、吉克隽逸-巴黎假期.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/金志文、谭维维、陈楚生、吉克隽逸-巴黎假期.mp3",},
{title:"金桢勋-英雄.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/金桢勋-英雄.mp3",},
{title:"金池-勇气.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/金池-勇气.mp3",},
{title:"金池-好过纠缠.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/金池-好过纠缠.mp3",},
{title:"金池-爱过了站.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/金池-爱过了站.mp3",},
{title:"金莎-诺.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/金莎-诺.mp3",},
{title:"金韩一-不能做朋友.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/金韩一-不能做朋友.mp3",},
{title:"钟嘉欣-你懂我.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/钟嘉欣-你懂我.mp3",},
{title:"钟嘉欣-我不够好.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/钟嘉欣-我不够好.mp3",},
{title:"钟汉良-何以爱情.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/钟汉良-何以爱情.mp3",},
{title:"钟汉良-奇书.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/钟汉良-奇书.mp3",},
{title:"钟汉良-普通人.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/钟汉良-普通人.mp3",},
{title:"长宇-我想.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/长宇-我想.mp3",},
{title:"阚立文-谢谢你对不起.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/阚立文-谢谢你对不起.mp3",},
{title:"阿兰-千古.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/阿兰-千古.mp3",},
{title:"阿悄、童可可、微胖女神-气质少女.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/阿悄、童可可、微胖女神-气质少女.mp3",},
{title:"阿鲁阿卓-西风.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/阿鲁阿卓-西风.mp3",},
{title:"陆星材、朴慧秀-LoveSong.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/陆星材、朴慧秀-LoveSong.mp3",},
{title:"陈伟霆-我门.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/陈伟霆-我门.mp3",},
{title:"陈坤-寻龙诀.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/陈坤-寻龙诀.mp3",},
{title:"陈奕、沈建宏-爱她.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/陈奕、沈建宏-爱她.mp3",},
{title:"陈奕迅-恐龙进化论.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/陈奕迅-恐龙进化论.mp3",},
{title:"陈奕迅-陪你度过漫长岁月.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/陈奕迅-陪你度过漫长岁月.mp3",},
{title:"陈学冬-岁月缝花.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/陈学冬-岁月缝花.mp3",},
{title:"陈学冬-碎碎恋.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/陈学冬-碎碎恋.mp3",},
{title:"陈建斌、羽·泉-向雪祈祷.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/陈建斌、羽·泉-向雪祈祷.mp3",},
{title:"陈思思-满月.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/陈思思-满月.mp3",},
{title:"陈思诚、王宝强-往事只能回味.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/陈思诚、王宝强-往事只能回味.mp3",},
{title:"陈意涵-最美的情书.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/陈意涵-最美的情书.mp3",},
{title:"陈明-爱需要练习.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/陈明-爱需要练习.mp3",},
{title:"陈明-谁懂女人心.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/陈明-谁懂女人心.mp3",},
{title:"陈楚生-后来的事.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/陈楚生-后来的事.mp3",},
{title:"陈洁仪-从前的我.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/陈洁仪-从前的我.mp3",},
{title:"陈洁仪-心动.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/陈洁仪-心动.mp3",},
{title:"陈洁仪-祝君好.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/陈洁仪-祝君好.mp3",},
{title:"陈翔-到不了.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/陈翔-到不了.mp3",},
{title:"陈翔-只是朋友.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/陈翔-只是朋友.mp3",},
{title:"陈翔-热血.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/陈翔-热血.mp3",},
{title:"陈赫、姚晨、窦骁、叶一云-一封家书.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/陈赫、姚晨、窦骁、叶一云-一封家书.mp3",},
{title:"陈雅菁-开始想你的好.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/陈雅菁-开始想你的好.mp3",},
{title:"霍尊-之子于归.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/霍尊-之子于归.mp3",},
{title:"霍尊-伊人如梦.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/霍尊-伊人如梦.mp3",},
{title:"霍尊-梨花落.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/霍尊-梨花落.mp3",},
{title:"霍建华、赵丽颖-不可说.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/霍建华、赵丽颖-不可说.mp3",},
{title:"韩东君-无法说爱.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/韩东君-无法说爱.mp3",},
{title:"韩磊-千年一般若.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/韩磊-千年一般若.mp3",},
{title:"韩磊-道在何方.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/韩磊-道在何方.mp3",},
{title:"韩红-灵犀一动.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/韩红-灵犀一动.mp3",},
{title:"韩红-青春.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/韩红-青春.mp3",},
{title:"音频怪物-典狱司.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/音频怪物-典狱司.mp3",},
{title:"音频怪物-英雄难做.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/音频怪物-英雄难做.mp3",},
{title:"颖儿-他们.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/颖儿-他们.mp3",},
{title:"香香-初见爱已晚.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/香香-初见爱已晚.mp3",},
{title:"香香-恋歌.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/香香-恋歌.mp3",},
{title:"香香-爱情砂砾.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/香香-爱情砂砾.mp3",},
{title:"马振桓、熊梓淇-剑心飞扬.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/马振桓、熊梓淇-剑心飞扬.mp3",},
{title:"魏大勋-像你这样的女孩.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/魏大勋-像你这样的女孩.mp3",},
{title:"魏晨-烈火神盾.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/魏晨-烈火神盾.mp3",},
{title:"魏晨-爱我就陪我看电影.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/魏晨-爱我就陪我看电影.mp3",},
{title:"魏晨-相爱不能见.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/魏晨-相爱不能见.mp3",},
{title:"魏晨-破绽.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/魏晨-破绽.mp3",},
{title:"魏语诺-星语心愿.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/魏语诺-星语心愿.mp3",},
{title:"鲁士郎-相信你,相信我.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/鲁士郎-相信你,相信我.mp3",},
{title:"鲁士郎、钟纯妍-再见少年.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/鲁士郎、钟纯妍-再见少年.mp3",},
{title:"鹿晗-勋章.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/鹿晗-勋章.mp3",},
{title:"鹿晗-甜蜜蜜.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/鹿晗-甜蜜蜜.mp3",},
{title:"黄晓明-缘.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/黄晓明-缘.mp3",},
{title:"黄渤、小柯-我也曾经像你一样.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/黄渤、小柯-我也曾经像你一样.mp3",},
{title:"黄磊、多多、曹格、曹三丰、Grace、杨威、杨阳洋、陆毅、贝儿-么么哒.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/黄磊、多多、曹格、曹三丰、Grace、杨威、杨阳洋、陆毅、贝儿-么么哒.mp3",},
{title:"黄阅-守望.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/黄阅-守望.mp3",},
{title:"黄雅莉-古耐.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/黄雅莉-古耐.mp3",},
{title:"黄龄-禁区.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/黄龄-禁区.mp3",},
{title:"黎明-情愿错过白天.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/黎明-情愿错过白天.mp3",},
{title:"龙梅子、葛荟婕-怒放.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/龙梅子、葛荟婕-怒放.mp3",},
{title:"龚淑均-思归.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/龚淑均-思归.mp3",},
{title:"龚琳娜-一个人没有同类.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://vercel.rryyz.com/free163person/音乐视听/经典音乐大收藏/影视金曲榜/龚琳娜-一个人没有同类.mp3",}

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