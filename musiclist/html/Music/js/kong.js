$(function($){
	// Settings
	$(".maxsize").css({ top : ($(window).width() - $(".maxsize").height())/2  });
	var repeat = localStorage.repeat || 0,
		shuffle = localStorage.shuffle || 'true',
		continous = true,
		autoplay = true,
		playlist = [
{title:"Chunyy-爱在四月雪.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-爱在四月雪.mp3",},
{title:"Chunyy-安魂曲.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-安魂曲.mp3",},
{title:"Chunyy-安妮的歌.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-安妮的歌.mp3",},
{title:"Chunyy-宝贝珍之歌.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-宝贝珍之歌.mp3",},
{title:"Chunyy-沉睡的森林.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-沉睡的森林.mp3",},
{title:"Chunyy-沉思曲.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-沉思曲.mp3",},
{title:"Chunyy-初恋的地方.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-初恋的地方.mp3",},
{title:"Chunyy-春之声圆舞曲 古典钢琴.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-春之声圆舞曲 古典钢琴.mp3",},
{title:"Chunyy-大溪地清流 米奴哀舞.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-大溪地清流 米奴哀舞.mp3",},
{title:"Chunyy-第六感生死恋.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-第六感生死恋.mp3",},
{title:"Chunyy-断情殇.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-断情殇.mp3",},
{title:"Chunyy-飞鼠溪.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-飞鼠溪.mp3",},
{title:"Chunyy-风的气息.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-风的气息.mp3",},
{title:"Chunyy-风中之尘.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-风中之尘.mp3",},
{title:"Chunyy-格里格索尔维格之歌.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-格里格索尔维格之歌.mp3",},
{title:"Chunyy-和兰花在一起.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-和兰花在一起.mp3",},
{title:"Chunyy-很好听.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-很好听.mp3",},
{title:"Chunyy-火宵之月.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-火宵之月.mp3",},
{title:"Chunyy-卡布里的月光.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-卡布里的月光.mp3",},
{title:"Chunyy-卡农钢琴曲.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-卡农钢琴曲.mp3",},
{title:"Chunyy-蓝色的爱.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-蓝色的爱.mp3",},
{title:"Chunyy-梁祝之化蝶 笛子.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-梁祝之化蝶 笛子.mp3",},
{title:"Chunyy-绵雪.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-绵雪.mp3",},
{title:"Chunyy-茉莉花.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-茉莉花.mp3",},
{title:"Chunyy-森林中的一天.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-森林中的一天.mp3",},
{title:"Chunyy-似曾相识.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-似曾相识.mp3",},
{title:"Chunyy-守护你的天使.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-守护你的天使.mp3",},
{title:"Chunyy-树蛙之歌.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-树蛙之歌.mp3",},
{title:"Chunyy-水之轮回.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-水之轮回.mp3",},
{title:"Chunyy-天鹅湖.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-天鹅湖.mp3",},
{title:"Chunyy-万福玛丽亚.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-万福玛丽亚.mp3",},
{title:"Chunyy-我的海洋.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-我的海洋.mp3",},
{title:"Chunyy-西班牙斗牛士进行曲.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-西班牙斗牛士进行曲.mp3",},
{title:"Chunyy-西藏的月.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-西藏的月.mp3",},
{title:"Chunyy-昔日情怀.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-昔日情怀.mp3",},
{title:"Chunyy-夏日华尔兹.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-夏日华尔兹.mp3",},
{title:"Chunyy-乡间晚风.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-乡间晚风.mp3",},
{title:"Chunyy-相识也是缘份.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-相识也是缘份.mp3",},
{title:"Chunyy-小步舞曲.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-小步舞曲.mp3",},
{title:"Chunyy-小雨落在你脸上.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-小雨落在你脸上.mp3",},
{title:"Chunyy-雪之梦.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-雪之梦.mp3",},
{title:"Chunyy-野鸟情歌.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-野鸟情歌.mp3",},
{title:"Chunyy-印象之旅.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-印象之旅.mp3",},
{title:"Chunyy-雨林深处.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-雨林深处.mp3",},
{title:"Chunyy-雨中漫步.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-雨中漫步.mp3",},
{title:"Chunyy-月光下的凤尾竹.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-月光下的凤尾竹.mp3",},
{title:"Chunyy-云淡风轻.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-云淡风轻.mp3",},
{title:"Chunyy-只此一生.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-只此一生.mp3",},
{title:"Chunyy-最终幻想.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Chunyy-最终幻想.mp3",},
{title:"Joanie madden-The level plain.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/Joanie madden-The level plain.mp3",},
{title:"yiruma-雨的印记.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/yiruma-雨的印记.mp3",},
{title:"爱尔兰风笛 漫步神秘园.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/爱尔兰风笛 漫步神秘园.mp3",},
{title:"爱尔兰口哨女皇madden-爱尔兰画眉.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/爱尔兰口哨女皇madden-爱尔兰画眉.mp3",},
{title:"班得瑞-chariots of fire.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/班得瑞-chariots of fire.mp3",},
{title:"班得瑞-diamonds.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/班得瑞-diamonds.mp3",},
{title:"班得瑞-EI condor pasa.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/班得瑞-EI condor pasa.mp3",},
{title:"班得瑞-i want to know love is.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/班得瑞-i want to know love is.mp3",},
{title:"班得瑞-i_swear.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/班得瑞-i_swear.mp3",},
{title:"班得瑞-imagine.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/班得瑞-imagine.mp3",},
{title:"班得瑞-into red velvet.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/班得瑞-into red velvet.mp3",},
{title:"班得瑞-moment of fantasy.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/班得瑞-moment of fantasy.mp3",},
{title:"班得瑞-one moment in time.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/班得瑞-one moment in time.mp3",},
{title:"班得瑞-tenderness.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/班得瑞-tenderness.mp3",},
{title:"班得瑞-the sounds of silence.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/班得瑞-the sounds of silence.mp3",},
{title:"班得瑞-tim's lullaby.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/班得瑞-tim's lullaby.mp3",},
{title:"班得瑞-安妮的仙境.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/班得瑞-安妮的仙境.mp3",},
{title:"班得瑞-变幻之风.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/班得瑞-变幻之风.mp3",},
{title:"班得瑞-晨光.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/班得瑞-晨光.mp3",},
{title:"班得瑞-初雪.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/班得瑞-初雪.mp3",},
{title:"班得瑞-春水.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/班得瑞-春水.mp3",},
{title:"班得瑞-春野.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/班得瑞-春野.mp3",},
{title:"班得瑞-非洲日落.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/班得瑞-非洲日落.mp3",},
{title:"班得瑞-风的呢喃.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/班得瑞-风的呢喃.mp3",},
{title:"班得瑞-海王星.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/班得瑞-海王星.mp3",},
{title:"班得瑞-火战车.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/班得瑞-火战车.mp3",},
{title:"班得瑞-涟漪.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/班得瑞-涟漪.mp3",},
{title:"班得瑞-马可波罗.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/班得瑞-马可波罗.mp3",},
{title:"班得瑞-满天星.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/班得瑞-满天星.mp3",},
{title:"班得瑞-秘密.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/班得瑞-秘密.mp3",},
{title:"班得瑞-排箫 老鹰之歌.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/班得瑞-排箫 老鹰之歌.mp3",},
{title:"班得瑞-清晨.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/班得瑞-清晨.mp3",},
{title:"班得瑞-日光海岸.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/班得瑞-日光海岸.mp3",},
{title:"班得瑞-天堂之门.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/班得瑞-天堂之门.mp3",},
{title:"班得瑞-微风山谷.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/班得瑞-微风山谷.mp3",},
{title:"班得瑞-无止境的见识.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/班得瑞-无止境的见识.mp3",},
{title:"班得瑞-夏日华尔兹.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/班得瑞-夏日华尔兹.mp3",},
{title:"班得瑞-仙境.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/班得瑞-仙境.mp3",},
{title:"班得瑞-依卡路斯的羽翼.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/班得瑞-依卡路斯的羽翼.mp3",},
{title:"班得瑞-忧郁的爱.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/班得瑞-忧郁的爱.mp3",},
{title:"班得瑞-月光 .mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/班得瑞-月光 .mp3",},
{title:"班得瑞-月光.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/班得瑞-月光.mp3",},
{title:"班得瑞-追梦人.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/班得瑞-追梦人.mp3",},
{title:"班得瑞-紫蝴蝶.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/班得瑞-紫蝴蝶.mp3",},
{title:"班德瑞-巴格达的星星.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/班德瑞-巴格达的星星.mp3",},
{title:"贝多芬-悲怆奏鸣曲.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/贝多芬-悲怆奏鸣曲.mp3",},
{title:"贝多芬-命运交响乐.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/贝多芬-命运交响乐.mp3",},
{title:"贝多芬-田园交响曲.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/贝多芬-田园交响曲.mp3",},
{title:"贝多芬-月光奏鸣曲.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/贝多芬-月光奏鸣曲.mp3",},
{title:"杜普雷-殇.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/杜普雷-殇.mp3",},
{title:"宫崎骏 龙猫-水晶音乐.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/宫崎骏 龙猫-水晶音乐.mp3",},
{title:"久石让-天空之城.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/久石让-天空之城.mp3",},
{title:"凯文柯恩-走过绿意.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/凯文柯恩-走过绿意.mp3",},
{title:"浪客剑心-In Memories “A boy meets The Man”.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/浪客剑心-In Memories “A boy meets The Man”.mp3",},
{title:"李斯特-钟.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/李斯特-钟.mp3",},
{title:"理查德 克莱德曼-爱的纪念.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/理查德 克莱德曼-爱的纪念.mp3",},
{title:"理查德 克莱德曼-爱的协奏曲.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/理查德 克莱德曼-爱的协奏曲.mp3",},
{title:"理查德 克莱德曼-爱之梦.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/理查德 克莱德曼-爱之梦.mp3",},
{title:"理查德 克莱德曼-出埃及记.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/理查德 克莱德曼-出埃及记.mp3",},
{title:"理查德 克莱德曼-给母亲的信.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/理查德 克莱德曼-给母亲的信.mp3",},
{title:"理查德 克莱德曼-海边的祈祷.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/理查德 克莱德曼-海边的祈祷.mp3",},
{title:"理查德 克莱德曼-海边的星空(1).mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/理查德 克莱德曼-海边的星空(1).mp3",},
{title:"理查德 克莱德曼-海边的星空.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/理查德 克莱德曼-海边的星空.mp3",},
{title:"理查德 克莱德曼-欢乐颂.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/理查德 克莱德曼-欢乐颂.mp3",},
{title:"理查德 克莱德曼-欢乐之歌.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/理查德 克莱德曼-欢乐之歌.mp3",},
{title:"理查德 克莱德曼-蓝色的爱.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/理查德 克莱德曼-蓝色的爱.mp3",},
{title:"理查德 克莱德曼-蓝色狂想曲.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/理查德 克莱德曼-蓝色狂想曲.mp3",},
{title:"理查德 克莱德曼-罗密欧与朱丽叶.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/理查德 克莱德曼-罗密欧与朱丽叶.mp3",},
{title:"理查德 克莱德曼-玫瑰色的人生.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/理查德 克莱德曼-玫瑰色的人生.mp3",},
{title:"理查德 克莱德曼-梦中的婚礼.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/理查德 克莱德曼-梦中的婚礼.mp3",},
{title:"理查德 克莱德曼-梦中的鸟.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/理查德 克莱德曼-梦中的鸟.mp3",},
{title:"理查德 克莱德曼-秘密的庭院.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/理查德 克莱德曼-秘密的庭院.mp3",},
{title:"理查德 克莱德曼-乒乓之恋.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/理查德 克莱德曼-乒乓之恋.mp3",},
{title:"理查德 克莱德曼-秋日私语.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/理查德 克莱德曼-秋日私语.mp3",},
{title:"理查德 克莱德曼-柔如彩虹.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/理查德 克莱德曼-柔如彩虹.mp3",},
{title:"理查德 克莱德曼-伤感乐曲.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/理查德 克莱德曼-伤感乐曲.mp3",},
{title:"理查德 克莱德曼-少女的祈祷.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/理查德 克莱德曼-少女的祈祷.mp3",},
{title:"理查德 克莱德曼-水边的阿狄丽娜.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/理查德 克莱德曼-水边的阿狄丽娜.mp3",},
{title:"理查德 克莱德曼-思乡曲.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/理查德 克莱德曼-思乡曲.mp3",},
{title:"理查德 克莱德曼-瓦妮莎的微笑.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/理查德 克莱德曼-瓦妮莎的微笑.mp3",},
{title:"理查德 克莱德曼-忘却的悲伤.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/理查德 克莱德曼-忘却的悲伤.mp3",},
{title:"理查德 克莱德曼-威尼斯之旅.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/理查德 克莱德曼-威尼斯之旅.mp3",},
{title:"理查德 克莱德曼-午后的旅行.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/理查德 克莱德曼-午后的旅行.mp3",},
{title:"理查德 克莱德曼-星空.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/理查德 克莱德曼-星空.mp3",},
{title:"理查德 克莱德曼-野花.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/理查德 克莱德曼-野花.mp3",},
{title:"理查德 克莱德曼-英雄交响曲.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/理查德 克莱德曼-英雄交响曲.mp3",},
{title:"理查德 克莱德曼-永远爱你.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/理查德 克莱德曼-永远爱你.mp3",},
{title:"理查德 克莱德曼-致爱丽丝.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/理查德 克莱德曼-致爱丽丝.mp3",},
{title:"绿钢琴 乐曲.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/绿钢琴 乐曲.mp3",},
{title:"马克西姆-克罗地亚狂想曲.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/马克西姆-克罗地亚狂想曲.mp3",},
{title:"马友友-天鹅 大提琴演奏.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/马友友-天鹅 大提琴演奏.mp3",},
{title:"莫扎特 c大调小星星变奏曲.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/莫扎特 c大调小星星变奏曲.mp3",},
{title:"莫扎特-安魂曲.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/莫扎特-安魂曲.mp3",},
{title:"莫扎特-魔笛.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/莫扎特-魔笛.mp3",},
{title:"莫扎特-土耳其进行曲.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/莫扎特-土耳其进行曲.mp3",},
{title:"莫扎特-小步舞曲.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/莫扎特-小步舞曲.mp3",},
{title:"莫扎特-摇篮曲.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/莫扎特-摇篮曲.mp3",},
{title:"莫扎特-幽默曲.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/莫扎特-幽默曲.mp3",},
{title:"齐普利安·波隆贝斯库-永恒的记忆.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/齐普利安·波隆贝斯库-永恒的记忆.mp3",},
{title:"犬夜叉-哀歌.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/犬夜叉-哀歌.mp3",},
{title:"犬夜叉-跨越时代的思念.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/犬夜叉-跨越时代的思念.mp3",},
{title:"神秘园-莲花.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/神秘园-莲花.mp3",},
{title:"神秘园-夜曲.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/神秘园-夜曲.mp3",},
{title:"神秘园-月亮门.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/神秘园-月亮门.mp3",},
{title:"神秘园之歌-月亮门.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/神秘园之歌-月亮门.mp3",},
{title:"神思者-Project.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/神思者-Project.mp3",},
{title:"神思者-悲情城市.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/神思者-悲情城市.mp3",},
{title:"神思者-故宫的记忆.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/神思者-故宫的记忆.mp3",},
{title:"神思者-海之女神.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/神思者-海之女神.mp3",},
{title:"舒伯特-圣母颂.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/舒伯特-圣母颂.mp3",},
{title:"舒曼-梦幻曲.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/舒曼-梦幻曲.mp3",},
{title:"威尔第 茶花女-普罗旺斯的陆地和海洋.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/威尔第 茶花女-普罗旺斯的陆地和海洋.mp3",},
{title:"乌鸦 片尾曲-月光石 Rurutia.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/乌鸦 片尾曲-月光石 Rurutia.mp3",},
{title:"喜多郎-飞天.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/喜多郎-飞天.mp3",},
{title:"喜多郎-菩提树.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/喜多郎-菩提树.mp3",},
{title:"萧邦-幻想即兴曲.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/萧邦-幻想即兴曲.mp3",},
{title:"徐仁修-森林狂想曲.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/徐仁修-森林狂想曲.mp3",},
{title:"姚斯婷-寂静之声.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/姚斯婷-寂静之声.mp3",},
{title:"约翰 施特劳斯-溜冰圆舞曲.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/约翰 施特劳斯-溜冰圆舞曲.mp3",},
{title:"约翰 施特劳斯-闲聊波尔卡.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/约翰 施特劳斯-闲聊波尔卡.mp3",},
{title:"约翰·施特劳斯-蓝色多瑙河.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/约翰·施特劳斯-蓝色多瑙河.mp3",},
{title:"约翰·施特劳斯-维也纳森林的故事.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/约翰·施特劳斯-维也纳森林的故事.mp3",},
{title:"约纳森-杜鹃圆舞曲.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/约纳森-杜鹃圆舞曲.mp3",},
{title:"宗次郎-故乡的原风景(1).mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/宗次郎-故乡的原风景(1).mp3",},
{title:"宗次郎-故乡的原风景.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/简选/空灵/宗次郎-故乡的原风景.mp3",}

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