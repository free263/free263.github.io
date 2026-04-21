$(function($){
	// Settings
	$(".maxsize").css({ top : ($(window).width() - $(".maxsize").height())/2  });
	var repeat = localStorage.repeat || 0,
		shuffle = localStorage.shuffle || 'true',
		continous = true,
		autoplay = true,
		playlist = [
{title:"周深 李克勤-那片海",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深 李克勤-那片海.mp3",},
{title:"周深 李克勤-天下有情人",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深 李克勤-天下有情人.mp3",},
{title:"周深 宋亚轩-桃花诺",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深 宋亚轩-桃花诺.mp3",},
{title:"周深 张韶涵-一路生花",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深 张韶涵-一路生花.mp3",},
{title:"周深、Terry Zhong 钟天利-春雪",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深、Terry Zhong 钟天利-春雪.mp3",},
{title:"周深、安达组合-乌兰巴托的夜 (Live)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深、安达组合-乌兰巴托的夜 (Live).mp3",},
{title:"周深、胡夏-天涯尽处",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深、胡夏-天涯尽处.mp3",},
{title:"周深、郎朗-幽灵公主",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深、郎朗-幽灵公主.mp3",},
{title:"周深、李琦-你要的爱",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深、李琦-你要的爱.mp3",},
{title:"周深、李维-偶然",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深、李维-偶然.mp3",},
{title:"周深、李维-请跟我来",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深、李维-请跟我来.mp3",},
{title:"周深、陆虎-缘落",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深、陆虎-缘落.mp3",},
{title:"周深、王者荣耀-很高兴遇见你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深、王者荣耀-很高兴遇见你.mp3",},
{title:"周深、王者荣耀-看见我",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深、王者荣耀-看见我.mp3",},
{title:"周深、王者荣耀-奇迹时刻",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深、王者荣耀-奇迹时刻.mp3",},
{title:"周深、王者荣耀-祈愿山海",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深、王者荣耀-祈愿山海.mp3",},
{title:"周深、王者荣耀-时结",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深、王者荣耀-时结.mp3",},
{title:"周深、王者荣耀-微光海洋",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深、王者荣耀-微光海洋.mp3",},
{title:"周深、王者荣耀-信念",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深、王者荣耀-信念.mp3",},
{title:"周深、于文文-暗香",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深、于文文-暗香.mp3",},
{title:"周深-Burning",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-Burning.mp3",},
{title:"周深-I See Us",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-I See Us.mp3",},
{title:"周深-La Danza Del Dios Sol",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-La Danza Del Dios Sol.mp3",},
{title:"周深-LetItGo",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-LetItGo.mp3",},
{title:"周深-Monsters",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-Monsters.mp3",},
{title:"周深-My Only",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-My Only.mp3",},
{title:"周深-Rubia",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-Rubia.mp3",},
{title:"周深-爱若琉璃",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-爱若琉璃.mp3",},
{title:"周深-白墙",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-白墙.mp3",},
{title:"周深-奔向你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-奔向你.mp3",},
{title:"周深-彼岸花",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-彼岸花.mp3",},
{title:"周深-不说话",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-不说话.mp3",},
{title:"周深-不再流浪",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-不再流浪.mp3",},
{title:"周深-曾经沧海",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-曾经沧海.mp3",},
{title:"周深-超级玩家",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-超级玩家.mp3",},
{title:"周深-沉默的羔羊",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-沉默的羔羊.mp3",},
{title:"周深-出场",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-出场.mp3",},
{title:"周深-触不可及",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-触不可及.mp3",},
{title:"周深-传家",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-传家.mp3",},
{title:"周深-此生惟你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-此生惟你.mp3",},
{title:"周深-匆匆那年",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-匆匆那年.mp3",},
{title:"周深-璀璨冒险人",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-璀璨冒险人.mp3",},
{title:"周深-达拉崩吧",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-达拉崩吧.mp3",},
{title:"周深-大鱼",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-大鱼.mp3",},
{title:"周深-胆小鬼",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-胆小鬼.mp3",},
{title:"周深-等着我",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-等着我.mp3",},
{title:"周深-东游",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-东游.mp3",},
{title:"周深-独白",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-独白.mp3",},
{title:"周深-繁星璀璨的天空",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-繁星璀璨的天空.mp3",},
{title:"周深-放鹤图",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-放鹤图.mp3",},
{title:"周深-放心去飞",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-放心去飞.mp3",},
{title:"周深-风景",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-风景.mp3",},
{title:"周深-风起流年",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-风起流年.mp3",},
{title:"周深-风筝是风的信",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-风筝是风的信.mp3",},
{title:"周深-奉时光予你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-奉时光予你.mp3",},
{title:"周深-浮游",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-浮游.mp3",},
{title:"周深-哥哥",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-哥哥.mp3",},
{title:"周深-光亮",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-光亮.mp3",},
{title:"周深-光字片",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-光字片.mp3",},
{title:"周深-归处",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-归处.mp3",},
{title:"周深-过尽千帆",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-过尽千帆.mp3",},
{title:"周深-海藏",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-海藏.mp3",},
{title:"周深-海上蝶",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-海上蝶.mp3",},
{title:"周深-好好",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-好好.mp3",},
{title:"周深-好好生活就是美好生活",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-好好生活就是美好生活.mp3",},
{title:"周深-和光同尘",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-和光同尘.mp3",},
{title:"周深-和光同春",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-和光同春.mp3",},
{title:"周深-嗨",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-嗨.mp3",},
{title:"周深-后来没有你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-后来没有你.mp3",},
{title:"周深-花开",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-花开.mp3",},
{title:"周深-花开忘忧",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-花开忘忧.mp3",},
{title:"周深-花西子",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-花西子.mp3",},
{title:"周深-化身孤岛的鲸",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-化身孤岛的鲸.mp3",},
{title:"周深-画绢",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-画绢.mp3",},
{title:"周深-欢颜",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-欢颜.mp3",},
{title:"周深-荒城渡",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-荒城渡.mp3",},
{title:"周深-荒原星火",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-荒原星火.mp3",},
{title:"周深-回到你身边",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-回到你身边.mp3",},
{title:"周深-回声",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-回声.mp3",},
{title:"周深-茧",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-茧.mp3",},
{title:"周深-江湖觅知音",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-江湖觅知音.mp3",},
{title:"周深-交换",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-交换.mp3",},
{title:"周深-鲛人之歌",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-鲛人之歌.mp3",},
{title:"周深-借给我一盒火柴",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-借给我一盒火柴.mp3",},
{title:"周深-敬时光",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-敬时光.mp3",},
{title:"周深-卷珠帘",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-卷珠帘.mp3",},
{title:"周深-玦恋",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-玦恋.mp3",},
{title:"周深-卡布叻船长",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-卡布叻船长.mp3",},
{title:"周深-可梦",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-可梦.mp3",},
{title:"周深-可它爱着这个世界",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-可它爱着这个世界.mp3",},
{title:"周深-渴望遇见",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-渴望遇见.mp3",},
{title:"周深-垃圾别烦我",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-垃圾别烦我.mp3",},
{title:"周深-来不及勇敢",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-来不及勇敢.mp3",},
{title:"周深-蓝色降落伞",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-蓝色降落伞.mp3",},
{title:"周深-临安初雨",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-临安初雨.mp3",},
{title:"周深-铃芽之旅",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-铃芽之旅.mp3",},
{title:"周深-流光",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-流光.mp3",},
{title:"周深-落花",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-落花.mp3",},
{title:"周深-没有说完的故事",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-没有说完的故事.mp3",},
{title:"周深-玫瑰与小鹿",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-玫瑰与小鹿.mp3",},
{title:"周深-梅香如故",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-梅香如故.mp3",},
{title:"周深-美错",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-美错.mp3",},
{title:"周深-美好的世界",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-美好的世界.mp3",},
{title:"周深-美美",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-美美.mp3",},
{title:"周深-梦回神都",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-梦回神都.mp3",},
{title:"周深-梦留别",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-梦留别.mp3",},
{title:"周深-梦想的远征",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-梦想的远征.mp3",},
{title:"周深-梦想指路",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-梦想指路.mp3",},
{title:"周深-明暗之间",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-明暗之间.mp3",},
{title:"周深-明明",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-明明.mp3",},
{title:"周深-明天的世界更美好",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-明天的世界更美好.mp3",},
{title:"周深-明月传说",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-明月传说.mp3",},
{title:"周深-你的样子",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-你的样子.mp3",},
{title:"周深-你是我的城",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-你是我的城.mp3",},
{title:"周深-妳",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-妳.mp3",},
{title:"周深-年轮",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-年轮.mp3",},
{title:"周深-念",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-念.mp3",},
{title:"周深-念归去",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-念归去.mp3",},
{title:"周深-浓情淡如你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-浓情淡如你.mp3",},
{title:"周深-漂洋过海来看你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-漂洋过海来看你.mp3",},
{title:"周深-启示",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-启示.mp3",},
{title:"周深-起风了",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-起风了.mp3",},
{title:"周深-牵丝戏",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-牵丝戏.mp3",},
{title:"周深-浅浅",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-浅浅.mp3",},
{title:"周深-亲爱的旅人啊",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-亲爱的旅人啊.mp3",},
{title:"周深-情不由衷",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-情不由衷.mp3",},
{title:"周深-情是何物",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-情是何物.mp3",},
{title:"周深-情意结",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-情意结.mp3",},
{title:"周深-请带着浪漫远航",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-请带着浪漫远航.mp3",},
{title:"周深-去明天",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-去明天.mp3",},
{title:"周深-人间星河",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-人间星河.mp3",},
{title:"周深-人是",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-人是.mp3",},
{title:"周深-如许",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-如许.mp3",},
{title:"周深-若梦",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-若梦.mp3",},
{title:"周深-若思念便思念",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-若思念便思念.mp3",},
{title:"周深-身骑白马",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-身骑白马.mp3",},
{title:"周深-蜃楼",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-蜃楼.mp3",},
{title:"周深-时间之海",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-时间之海.mp3",},
{title:"周深-水形物语",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-水形物语.mp3",},
{title:"周深-睡个好觉",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-睡个好觉.mp3",},
{title:"周深-说声你好",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-说声你好.mp3",},
{title:"周深-斯卡布罗集市",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-斯卡布罗集市.mp3",},
{title:"周深-随风",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-随风.mp3",},
{title:"周深-她",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-她.mp3",},
{title:"周深-她说老啦",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-她说老啦.mp3",},
{title:"周深-太阳升起的舞蹈",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-太阳升起的舞蹈.mp3",},
{title:"周深-天地为念",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-天地为念.mp3",},
{title:"周深-田埂五月风",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-田埂五月风.mp3",},
{title:"周深-跳舞的月光",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-跳舞的月光.mp3",},
{title:"周深-同行同往",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-同行同往.mp3",},
{title:"周深-瞳",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-瞳.mp3",},
{title:"周深-蜕",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-蜕.mp3",},
{title:"周深-万里挑一",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-万里挑一.mp3",},
{title:"周深-威凤吟",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-威凤吟.mp3",},
{title:"周深-微光海洋",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-微光海洋.mp3",},
{title:"周深-为爱追寻",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-为爱追寻.mp3",},
{title:"周深-问花",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-问花.mp3",},
{title:"周深-我的答案",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-我的答案.mp3",},
{title:"周深-我是你的谁",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-我是你的谁.mp3",},
{title:"周深-我以渺小爱你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-我以渺小爱你.mp3",},
{title:"周深-我在这 挺好的",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-我在这 挺好的.mp3",},
{title:"周深-无关",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-无关.mp3",},
{title:"周深-无疾而终",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-无疾而终.mp3",},
{title:"周深-无所畏惧",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-无所畏惧.mp3",},
{title:"周深-无问",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-无问.mp3",},
{title:"周深-夏日友晴天",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-夏日友晴天.mp3",},
{title:"周深-相守",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-相守.mp3",},
{title:"周深-相思",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-相思.mp3",},
{title:"周深-向光而行",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-向光而行.mp3",},
{title:"周深-像鸟儿一样",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-像鸟儿一样.mp3",},
{title:"周深-小美满",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-小美满.mp3",},
{title:"周深-小舍得",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-小舍得.mp3",},
{title:"周深-小幸运",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-小幸运.mp3",},
{title:"周深-心归处是吾乡",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-心归处是吾乡.mp3",},
{title:"周深-心同此愿",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-心同此愿.mp3",},
{title:"周深-星鱼",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-星鱼.mp3",},
{title:"周深-悬崖之上",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-悬崖之上.mp3",},
{title:"周深-雪落下的声音",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-雪落下的声音.mp3",},
{title:"周深-芽",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-芽.mp3",},
{title:"周深-焰火",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-焰火.mp3",},
{title:"周深-要一起",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-要一起.mp3",},
{title:"周深-也很值得",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-也很值得.mp3",},
{title:"周深-叶子",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-叶子.mp3",},
{title:"周深-一缕执念",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-一缕执念.mp3",},
{title:"周深-一试有成",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-一试有成.mp3",},
{title:"周深-以无旁骛之吻",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-以无旁骛之吻.mp3",},
{title:"周深-意犹在",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-意犹在.mp3",},
{title:"周深-迎刃",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-迎刃.mp3",},
{title:"周深-永恒孤独",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-永恒孤独.mp3",},
{title:"周深-勇气",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-勇气.mp3",},
{title:"周深-有我",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-有我.mp3",},
{title:"周深-余情",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-余情.mp3",},
{title:"周深-与卿",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-与卿.mp3",},
{title:"周深-缘起",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-缘起.mp3",},
{title:"周深-愿",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-愿.mp3",},
{title:"周深-愿得一心人",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-愿得一心人.mp3",},
{title:"周深-云裳羽衣曲",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-云裳羽衣曲.mp3",},
{title:"周深-在意",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-在意.mp3",},
{title:"周深-照耀星河",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-照耀星河.mp3",},
{title:"周深-征途",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-征途.mp3",},
{title:"周深-只为真相",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-只为真相.mp3",},
{title:"周深-直破穹苍",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-直破穹苍.mp3",},
{title:"周深-重生",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-重生.mp3",},
{title:"周深-逐月",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-逐月.mp3",},
{title:"周深-祝福",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-祝福.mp3",},
{title:"周深-追赶春天的人",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-追赶春天的人.mp3",},
{title:"周深-拙慕",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-拙慕.mp3",},
{title:"周深-最好的礼物",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-最好的礼物.mp3",},
{title:"周深-最珍贵的你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/周深/周深-最珍贵的你.mp3",}

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