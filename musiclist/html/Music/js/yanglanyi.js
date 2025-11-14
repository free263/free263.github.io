$(function($){
	// Settings
	$(".maxsize").css({ top : ($(window).width() - $(".maxsize").height())/2  });
	var repeat = localStorage.repeat || 0,
		shuffle = localStorage.shuffle || 'true',
		continous = true,
		autoplay = true,
		playlist = [
{title:"洋澜一 艾可儿-我用自己的方式爱你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一 艾可儿-我用自己的方式爱你.mp3",},
{title:"洋澜一 艾可儿-悟了繁华悟了你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一 艾可儿-悟了繁华悟了你.mp3",},
{title:"洋澜一 陈柏曦-离别的秋天 (国粤语版)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一 陈柏曦-离别的秋天 (国粤语版).mp3",},
{title:"洋澜一 侯泽润-敬往事一杯",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一 侯泽润-敬往事一杯.mp3",},
{title:"洋澜一 励志豪-风吹散眼泪 (国粤对唱版)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一 励志豪-风吹散眼泪 (国粤对唱版).mp3",},
{title:"洋澜一 励志豪-下辈子也要找到你 (国粤语版)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一 励志豪-下辈子也要找到你 (国粤语版).mp3",},
{title:"洋澜一 亮声open-离别的秋天 (国粤语版)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一 亮声open-离别的秋天 (国粤语版).mp3",},
{title:"洋澜一 清唯-凌晨的路灯陪我回家",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一 清唯-凌晨的路灯陪我回家.mp3",},
{title:"洋澜一 田园-见一面少一面 (合唱版)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一 田园-见一面少一面 (合唱版).mp3",},
{title:"洋澜一 艺涛-听说你在远方",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一 艺涛-听说你在远方.mp3",},
{title:"洋澜一-阿楚姑娘",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-阿楚姑娘.mp3",},
{title:"洋澜一-爱不爱的我都不爱了",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-爱不爱的我都不爱了.mp3",},
{title:"洋澜一-爱不同不相为谋",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-爱不同不相为谋.mp3",},
{title:"洋澜一-爱到全心全意",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-爱到全心全意.mp3",},
{title:"洋澜一-爱到最后全凭良心",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-爱到最后全凭良心.mp3",},
{title:"洋澜一-爱得糊涂痛得刻骨",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-爱得糊涂痛得刻骨.mp3",},
{title:"洋澜一-爱而不得的遗憾",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-爱而不得的遗憾.mp3",},
{title:"洋澜一-爱来爱去一身伤",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-爱来爱去一身伤.mp3",},
{title:"洋澜一-爱你比爱自己多",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-爱你比爱自己多.mp3",},
{title:"洋澜一-爱你痛那么多",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-爱你痛那么多.mp3",},
{title:"洋澜一-爱如风情如云",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-爱如风情如云.mp3",},
{title:"洋澜一-爱似水仙",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-爱似水仙.mp3",},
{title:"洋澜一-爱她还来折磨我",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-爱她还来折磨我.mp3",},
{title:"洋澜一-爱我的人和我爱的人",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-爱我的人和我爱的人.mp3",},
{title:"洋澜一-爱我还是他",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-爱我还是他.mp3",},
{title:"洋澜一-爱我是你说的谎",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-爱我是你说的谎.mp3",},
{title:"洋澜一-爱一程 念一生",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-爱一程 念一生.mp3",},
{title:"洋澜一-爱一个人好难",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-爱一个人好难.mp3",},
{title:"洋澜一-爱一阵子疼一辈子",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-爱一阵子疼一辈子.mp3",},
{title:"洋澜一-爱与不爱又怎样",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-爱与不爱又怎样.mp3",},
{title:"洋澜一-安静做自己",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-安静做自己.mp3",},
{title:"洋澜一-把悲伤留给自己",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-把悲伤留给自己.mp3",},
{title:"洋澜一-半纸情长",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-半纸情长.mp3",},
{title:"洋澜一-贝加尔湖畔",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-贝加尔湖畔.mp3",},
{title:"洋澜一-背着风流泪",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-背着风流泪.mp3",},
{title:"洋澜一-被爱的人才敢说分手",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-被爱的人才敢说分手.mp3",},
{title:"洋澜一-比谁都认真",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-比谁都认真.mp3",},
{title:"洋澜一-别爱太满",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-别爱太满.mp3",},
{title:"洋澜一-别把疼你的人弄丢了",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-别把疼你的人弄丢了.mp3",},
{title:"洋澜一-别等太久",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-别等太久.mp3",},
{title:"洋澜一-别哭我最爱的人",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-别哭我最爱的人.mp3",},
{title:"洋澜一-别怕我伤心",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-别怕我伤心.mp3",},
{title:"洋澜一-别让我一个人醉",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-别让我一个人醉.mp3",},
{title:"洋澜一-别让昨天的雨淋湿今天的你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-别让昨天的雨淋湿今天的你.mp3",},
{title:"洋澜一-别为难自己",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-别为难自己.mp3",},
{title:"洋澜一-别想他",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-别想他.mp3",},
{title:"洋澜一-别想她",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-别想她.mp3",},
{title:"洋澜一-卜卦",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-卜卦.mp3",},
{title:"洋澜一-不爱你的人就放手",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-不爱你的人就放手.mp3",},
{title:"洋澜一-不定的风",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-不定的风.mp3",},
{title:"洋澜一-不甘",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-不甘.mp3",},
{title:"洋澜一-不值得",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-不值得.mp3",},
{title:"洋澜一-苍天不解人间情",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-苍天不解人间情.mp3",},
{title:"洋澜一-曾经心痛",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-曾经心痛.mp3",},
{title:"洋澜一-曾说过陪我到老的人",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-曾说过陪我到老的人.mp3",},
{title:"洋澜一-禅韵",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-禅韵.mp3",},
{title:"洋澜一-潮湿的心",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-潮湿的心.mp3",},
{title:"洋澜一-沉入没有你的孤岛",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-沉入没有你的孤岛.mp3",},
{title:"洋澜一-痴情换来我伤心",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-痴情换来我伤心.mp3",},
{title:"洋澜一-迟来的爱",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-迟来的爱.mp3",},
{title:"洋澜一-丑小鸭做了场白天鹅的梦",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-丑小鸭做了场白天鹅的梦.mp3",},
{title:"洋澜一-出卖",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-出卖.mp3",},
{title:"洋澜一-出现在梦里的人",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-出现在梦里的人.mp3",},
{title:"洋澜一-除了梦里再没见过你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-除了梦里再没见过你.mp3",},
{title:"洋澜一-穿越人海拥抱你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-穿越人海拥抱你.mp3",},
{title:"洋澜一-此生无憾",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-此生无憾.mp3",},
{title:"洋澜一-赐伤",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-赐伤.mp3",},
{title:"洋澜一-赐痛",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-赐痛.mp3",},
{title:"洋澜一-赐我平身",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-赐我平身.mp3",},
{title:"洋澜一-从此一个人过",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-从此一个人过.mp3",},
{title:"洋澜一-从前说",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-从前说.mp3",},
{title:"洋澜一-错",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-错.mp3",},
{title:"洋澜一-错过的爱",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-错过的爱.mp3",},
{title:"洋澜一-大风吹倒梧桐树",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-大风吹倒梧桐树.mp3",},
{title:"洋澜一-大山里的孩子",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-大山里的孩子.mp3",},
{title:"洋澜一-带不走四季的风",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-带不走四季的风.mp3",},
{title:"洋澜一-单身情歌",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-单身情歌.mp3",},
{title:"洋澜一-当爱恨成过往",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-当爱恨成过往.mp3",},
{title:"洋澜一-当爱在靠近",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-当爱在靠近.mp3",},
{title:"洋澜一-到底错在哪里",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-到底错在哪里.mp3",},
{title:"洋澜一-冬起心凉",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-冬起心凉.mp3",},
{title:"洋澜一-冬天的秘密",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-冬天的秘密.mp3",},
{title:"洋澜一-冬雪飘落",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-冬雪飘落.mp3",},
{title:"洋澜一-懂事的人总被伤的深",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-懂事的人总被伤的深.mp3",},
{title:"洋澜一-动了情伤了心",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-动了情伤了心.mp3",},
{title:"洋澜一-都是我自己的",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-都是我自己的.mp3",},
{title:"洋澜一-独角戏",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-独角戏.mp3",},
{title:"洋澜一-独饮红尘一杯酒",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-独饮红尘一杯酒.mp3",},
{title:"洋澜一-对等关系",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-对等关系.mp3",},
{title:"洋澜一-对你做个收尾",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-对你做个收尾.mp3",},
{title:"洋澜一-多薄的情多深的债",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-多薄的情多深的债.mp3",},
{title:"洋澜一-多久不见",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-多久不见.mp3",},
{title:"洋澜一-多年以前",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-多年以前.mp3",},
{title:"洋澜一-多想再爱一回",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-多想再爱一回.mp3",},
{title:"洋澜一-多余的温柔",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-多余的温柔.mp3",},
{title:"洋澜一-多余的眼泪",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-多余的眼泪.mp3",},
{title:"洋澜一-发错誓爱错人",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-发错誓爱错人.mp3",},
{title:"洋澜一-凡人不想平凡",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-凡人不想平凡.mp3",},
{title:"洋澜一-犯痴",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-犯痴.mp3",},
{title:"洋澜一-放下所有求你回来",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-放下所有求你回来.mp3",},
{title:"洋澜一-飞蛾扑火",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-飞蛾扑火.mp3",},
{title:"洋澜一-分飞",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-分飞.mp3",},
{title:"洋澜一-分手",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-分手.mp3",},
{title:"洋澜一-分手就分手",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-分手就分手.mp3",},
{title:"洋澜一-风吹的沙砾",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-风吹的沙砾.mp3",},
{title:"洋澜一-风吹散眼泪",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-风吹散眼泪.mp3",},
{title:"洋澜一-风吹雪花片片落",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-风吹雪花片片落.mp3",},
{title:"洋澜一-风的尽头是风",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-风的尽头是风.mp3",},
{title:"洋澜一-风的忧伤只有云知道",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-风的忧伤只有云知道.mp3",},
{title:"洋澜一-风没吹过你没来过",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-风没吹过你没来过.mp3",},
{title:"洋澜一-风中的遗憾",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-风中的遗憾.mp3",},
{title:"洋澜一-感性的女人伤的真",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-感性的女人伤的真.mp3",},
{title:"洋澜一-搁浅的鱼",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-搁浅的鱼.mp3",},
{title:"洋澜一-各自好过",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-各自好过.mp3",},
{title:"洋澜一-孤独的罪名",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-孤独的罪名.mp3",},
{title:"洋澜一-故乡下雪了",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-故乡下雪了.mp3",},
{title:"洋澜一-归来不问归期",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-归来不问归期.mp3",},
{title:"洋澜一-滚滚红尘",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-滚滚红尘.mp3",},
{title:"洋澜一-过火",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-过火.mp3",},
{title:"洋澜一-过路的晚风",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-过路的晚风.mp3",},
{title:"洋澜一-过往",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-过往.mp3",},
{title:"洋澜一-还不完的债",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-还不完的债.mp3",},
{title:"洋澜一-还岁月温柔",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-还岁月温柔.mp3",},
{title:"洋澜一-海与天",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-海与天.mp3",},
{title:"洋澜一-寒风对雪花的思恋",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-寒风对雪花的思恋.mp3",},
{title:"洋澜一-喝酒不敢醉",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-喝酒不敢醉.mp3",},
{title:"洋澜一-红豆",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-红豆.mp3",},
{title:"洋澜一-后海酒吧",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-后海酒吧.mp3",},
{title:"洋澜一-后来",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-后来.mp3",},
{title:"洋澜一-后来的你在哪",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-后来的你在哪.mp3",},
{title:"洋澜一-后来你娶的人",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-后来你娶的人.mp3",},
{title:"洋澜一-后来我试着不爱你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-后来我试着不爱你.mp3",},
{title:"洋澜一-花会沿途盛开",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-花会沿途盛开.mp3",},
{title:"洋澜一-化风行万里",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-化风行万里.mp3",},
{title:"洋澜一-画你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-画你.mp3",},
{title:"洋澜一-换了校服等不来婚纱",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-换了校服等不来婚纱.mp3",},
{title:"洋澜一-黄昏",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-黄昏.mp3",},
{title:"洋澜一-回忆是解药也是毒方",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-回忆是解药也是毒方.mp3",},
{title:"洋澜一-婚纱和你都是梦",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-婚纱和你都是梦.mp3",},
{title:"洋澜一-活得不容易",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-活得不容易.mp3",},
{title:"洋澜一-寂寞的人喝不醉",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-寂寞的人喝不醉.mp3",},
{title:"洋澜一-见一面少一面",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-见一面少一面.mp3",},
{title:"洋澜一-江南的风吹落江北的雨",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-江南的风吹落江北的雨.mp3",},
{title:"洋澜一-劫后余生",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-劫后余生.mp3",},
{title:"洋澜一-杰作",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-杰作.mp3",},
{title:"洋澜一-戒了想你戒了难过",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-戒了想你戒了难过.mp3",},
{title:"洋澜一-今生最爱",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-今生最爱.mp3",},
{title:"洋澜一-今天",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-今天.mp3",},
{title:"洋澜一-今夜风悠悠",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-今夜风悠悠.mp3",},
{title:"洋澜一-仅此一年我判若两人",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-仅此一年我判若两人.mp3",},
{title:"洋澜一-敬不到来日方长",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-敬不到来日方长.mp3",},
{title:"洋澜一-敬那段难忘的时光",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-敬那段难忘的时光.mp3",},
{title:"洋澜一-敬往事一杯",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-敬往事一杯.mp3",},
{title:"洋澜一-九十九朵玫瑰",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-九十九朵玫瑰.mp3",},
{title:"洋澜一-九十九个回忆",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-九十九个回忆.mp3",},
{title:"洋澜一-旧情难却",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-旧情难却.mp3",},
{title:"洋澜一-君向南方我向北",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-君向南方我向北.mp3",},
{title:"洋澜一-看见繁花",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-看见繁花.mp3",},
{title:"洋澜一-看透爱情看透你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-看透爱情看透你.mp3",},
{title:"洋澜一-可惜我不是风",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-可惜我不是风.mp3",},
{title:"洋澜一-空荡的酒杯",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-空荡的酒杯.mp3",},
{title:"洋澜一-孔融让梨",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-孔融让梨.mp3",},
{title:"洋澜一-哭砂",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-哭砂.mp3",},
{title:"洋澜一-快乐是一种假笑",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-快乐是一种假笑.mp3",},
{title:"洋澜一-来人间走个过场",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-来人间走个过场.mp3",},
{title:"洋澜一-蓝眼泪",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-蓝眼泪.mp3",},
{title:"洋澜一-类似爱情",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-类似爱情.mp3",},
{title:"洋澜一-冷风心里吹",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-冷风心里吹.mp3",},
{title:"洋澜一-离别的秋天",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-离别的秋天.mp3",},
{title:"洋澜一-连同青春输给他",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-连同青春输给他.mp3",},
{title:"洋澜一-凉意",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-凉意.mp3",},
{title:"洋澜一-撩夜",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-撩夜.mp3",},
{title:"洋澜一-凌晨零点零分零秒",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-凌晨零点零分零秒.mp3",},
{title:"洋澜一-留不住你不如成全你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-留不住你不如成全你.mp3",},
{title:"洋澜一-流着眼泪抱着你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-流着眼泪抱着你.mp3",},
{title:"洋澜一-落笔都是你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-落笔都是你.mp3",},
{title:"洋澜一-没爱你的本事",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-没爱你的本事.mp3",},
{title:"洋澜一-没有胆量继续爱",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-没有胆量继续爱.mp3",},
{title:"洋澜一-没有你的城市还在下雨",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-没有你的城市还在下雨.mp3",},
{title:"洋澜一-没有你陪伴真的好孤单",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-没有你陪伴真的好孤单.mp3",},
{title:"洋澜一-没有你我也可以过得好",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-没有你我也可以过得好.mp3",},
{title:"洋澜一-没有人会永远爱你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-没有人会永远爱你.mp3",},
{title:"洋澜一-梦醒时分",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-梦醒时分.mp3",},
{title:"洋澜一-面对面晚安",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-面对面晚安.mp3",},
{title:"洋澜一-明月夜",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-明月夜.mp3",},
{title:"洋澜一-抹去泪水",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-抹去泪水.mp3",},
{title:"洋澜一-拿什么来骗我",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-拿什么来骗我.mp3",},
{title:"洋澜一-你逼我放手",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-你逼我放手.mp3",},
{title:"洋澜一-你从未真正懂过我的苦",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-你从未真正懂过我的苦.mp3",},
{title:"洋澜一-你的回忆里是否还有我",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-你的回忆里是否还有我.mp3",},
{title:"洋澜一-你换了一种方式伤害我",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-你换了一种方式伤害我.mp3",},
{title:"洋澜一-你看啊",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-你看啊.mp3",},
{title:"洋澜一-你看我有几分像从前",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-你看我有几分像从前.mp3",},
{title:"洋澜一-你来去像阵风",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-你来去像阵风.mp3",},
{title:"洋澜一-你没错",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-你没错.mp3",},
{title:"洋澜一-你去吧",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-你去吧.mp3",},
{title:"洋澜一-你是藏在我心底的思念",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-你是藏在我心底的思念.mp3",},
{title:"洋澜一-你是否已是最好的人",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-你是否已是最好的人.mp3",},
{title:"洋澜一-你是我不可预约的雪",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-你是我不可预约的雪.mp3",},
{title:"洋澜一-你是我曾经拼了命爱过的人",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-你是我曾经拼了命爱过的人.mp3",},
{title:"洋澜一-你是我第一眼就喜欢的人",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-你是我第一眼就喜欢的人.mp3",},
{title:"洋澜一-你说后来有了她",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-你说后来有了她.mp3",},
{title:"洋澜一-你携风带雨我乱了四季",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-你携风带雨我乱了四季.mp3",},
{title:"洋澜一-你用背影换自由",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-你用背影换自由.mp3",},
{title:"洋澜一-你用玫瑰刺穿我心窝",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-你用玫瑰刺穿我心窝.mp3",},
{title:"洋澜一-你有没有真的爱过我",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-你有没有真的爱过我.mp3",},
{title:"洋澜一-你在不在",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-你在不在.mp3",},
{title:"洋澜一-你怎么才出现",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-你怎么才出现.mp3",},
{title:"洋澜一-你怎么舍得我难过",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-你怎么舍得我难过.mp3",},
{title:"洋澜一-你只是",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-你只是.mp3",},
{title:"洋澜一-你知道不知道",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-你知道不知道.mp3",},
{title:"洋澜一-逆流成河",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-逆流成河.mp3",},
{title:"洋澜一-溺水而亡",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-溺水而亡.mp3",},
{title:"洋澜一-弄丢了爱笑的自己",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-弄丢了爱笑的自己.mp3",},
{title:"洋澜一-诺言",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-诺言.mp3",},
{title:"洋澜一-女人半边天",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-女人半边天.mp3",},
{title:"洋澜一-女人的选择",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-女人的选择.mp3",},
{title:"洋澜一-陪你吃苦的人是我",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-陪你吃苦的人是我.mp3",},
{title:"洋澜一-漂洋过海来看你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-漂洋过海来看你.mp3",},
{title:"洋澜一-萍聚",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-萍聚.mp3",},
{title:"洋澜一-七情六欲",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-七情六欲.mp3",},
{title:"洋澜一-七月七日晴",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-七月七日晴.mp3",},
{title:"洋澜一-奇迹",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-奇迹.mp3",},
{title:"洋澜一-牵手",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-牵手.mp3",},
{title:"洋澜一-窃爱",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-窃爱.mp3",},
{title:"洋澜一-亲爱的你过的好吗",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-亲爱的你过的好吗.mp3",},
{title:"洋澜一-青春没披上嫁衣",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-青春没披上嫁衣.mp3",},
{title:"洋澜一-青花",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-青花.mp3",},
{title:"洋澜一-情话深深浅浅千万遍",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-情话深深浅浅千万遍.mp3",},
{title:"洋澜一-情难枕",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-情难枕.mp3",},
{title:"洋澜一-情人香",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-情人香.mp3",},
{title:"洋澜一-情深不换",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-情深不换.mp3",},
{title:"洋澜一-情深不知痛",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-情深不知痛.mp3",},
{title:"洋澜一-情深能怎样",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-情深能怎样.mp3",},
{title:"洋澜一-请先说你好",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-请先说你好.mp3",},
{title:"洋澜一-秋风吹起",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-秋风吹起.mp3",},
{title:"洋澜一-秋风经过",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-秋风经过.mp3",},
{title:"洋澜一-让我忘记曾经那个你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-让我忘记曾经那个你.mp3",},
{title:"洋澜一-人间半途",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-人间半途.mp3",},
{title:"洋澜一-人生无悔",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-人生无悔.mp3",},
{title:"洋澜一-容易受伤的女人",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-容易受伤的女人.mp3",},
{title:"洋澜一-如果晚风",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-如果晚风.mp3",},
{title:"洋澜一-如果有来世",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-如果有来世.mp3",},
{title:"洋澜一-如果云知道",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-如果云知道.mp3",},
{title:"洋澜一-如果最后不是你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-如果最后不是你.mp3",},
{title:"洋澜一-如你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-如你.mp3",},
{title:"洋澜一-若再回头就该天谴",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-若再回头就该天谴.mp3",},
{title:"洋澜一-三年的结局",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-三年的结局.mp3",},
{title:"洋澜一-散心木屋",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-散心木屋.mp3",},
{title:"洋澜一-沙漠之花",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-沙漠之花.mp3",},
{title:"洋澜一-伤疤还没好就忘了疼",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-伤疤还没好就忘了疼.mp3",},
{title:"洋澜一-伤到极致没有泪",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-伤到极致没有泪.mp3",},
{title:"洋澜一-伤口",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-伤口.mp3",},
{title:"洋澜一-伤心城市",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-伤心城市.mp3",},
{title:"洋澜一-伤心太平洋",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-伤心太平洋.mp3",},
{title:"洋澜一-上了锁的心上了锁的情",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-上了锁的心上了锁的情.mp3",},
{title:"洋澜一-上你的当",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-上你的当.mp3",},
{title:"洋澜一-深秋夜雨",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-深秋夜雨.mp3",},
{title:"洋澜一-生活",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-生活.mp3",},
{title:"洋澜一-盛不盛开都是花",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-盛不盛开都是花.mp3",},
{title:"洋澜一-盛夏的果实",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-盛夏的果实.mp3",},
{title:"洋澜一-失去爱的城市",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-失去爱的城市.mp3",},
{title:"洋澜一-失声",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-失声.mp3",},
{title:"洋澜一-诗酒作人间",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-诗酒作人间.mp3",},
{title:"洋澜一-时光入喉",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-时光入喉.mp3",},
{title:"洋澜一-时间你慢些走",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-时间你慢些走.mp3",},
{title:"洋澜一-世间俗人",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-世间俗人.mp3",},
{title:"洋澜一-世间所有不及你温柔",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-世间所有不及你温柔.mp3",},
{title:"洋澜一-试图",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-试图.mp3",},
{title:"洋澜一-是你狠是我傻",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-是你狠是我傻.mp3",},
{title:"洋澜一-是我爱过了头",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-是我爱过了头.mp3",},
{title:"洋澜一-手心的温度",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-手心的温度.mp3",},
{title:"洋澜一-输不起的年纪",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-输不起的年纪.mp3",},
{title:"洋澜一-谁",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-谁.mp3",},
{title:"洋澜一-谁不是累着痛笑着哭",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-谁不是累着痛笑着哭.mp3",},
{title:"洋澜一-谁懂我心思",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-谁懂我心思.mp3",},
{title:"洋澜一-谁懂这首伤情的歌",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-谁懂这首伤情的歌.mp3",},
{title:"洋澜一-谁都会",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-谁都会.mp3",},
{title:"洋澜一-谁会懂我",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-谁会懂我.mp3",},
{title:"洋澜一-说好的不会离开我",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-说好的不会离开我.mp3",},
{title:"洋澜一-思念成病",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-思念成病.mp3",},
{title:"洋澜一-思念成沙",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-思念成沙.mp3",},
{title:"洋澜一-思念从来没饶过谁",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-思念从来没饶过谁.mp3",},
{title:"洋澜一-思念的弦",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-思念的弦.mp3",},
{title:"洋澜一-思念及时雨",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-思念及时雨.mp3",},
{title:"洋澜一-思念如雪",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-思念如雪.mp3",},
{title:"洋澜一-思念像风",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-思念像风.mp3",},
{title:"洋澜一-撕碎一页伤悲",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-撕碎一页伤悲.mp3",},
{title:"洋澜一-岁月刻刀",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-岁月刻刀.mp3",},
{title:"洋澜一-他他他",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-他他他.mp3",},
{title:"洋澜一-太多",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-太多.mp3",},
{title:"洋澜一-太深",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-太深.mp3",},
{title:"洋澜一-太委屈 (走心版)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-太委屈 (走心版).mp3",},
{title:"洋澜一-太拥挤",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-太拥挤.mp3",},
{title:"洋澜一-掏空",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-掏空.mp3",},
{title:"洋澜一-提笔忘情",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-提笔忘情.mp3",},
{title:"洋澜一-天际",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-天际.mp3",},
{title:"洋澜一-天也不懂情",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-天也不懂情.mp3",},
{title:"洋澜一-听到你的名字",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-听到你的名字.mp3",},
{title:"洋澜一-听说当初你找过我",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-听说当初你找过我.mp3",},
{title:"洋澜一-听说你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-听说你.mp3",},
{title:"洋澜一-同床共枕的人",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-同床共枕的人.mp3",},
{title:"洋澜一-同花顺",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-同花顺.mp3",},
{title:"洋澜一-痛彻心扉",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-痛彻心扉.mp3",},
{title:"洋澜一-痛给了我爱给了你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-痛给了我爱给了你.mp3",},
{title:"洋澜一-痛了没人懂哭了没人哄",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-痛了没人懂哭了没人哄.mp3",},
{title:"洋澜一-偷偷放下",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-偷偷放下.mp3",},
{title:"洋澜一-退而求其次",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-退而求其次.mp3",},
{title:"洋澜一-晚风",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-晚风.mp3",},
{title:"洋澜一-晚风吹匆匆追",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-晚风吹匆匆追.mp3",},
{title:"洋澜一-晚风吹散了我们",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-晚风吹散了我们.mp3",},
{title:"洋澜一-万万千千个思念",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-万万千千个思念.mp3",},
{title:"洋澜一-万物染",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-万物染.mp3",},
{title:"洋澜一-忘不了的人",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-忘不了的人.mp3",},
{title:"洋澜一-忘了你是风",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-忘了你是风.mp3",},
{title:"洋澜一-望故乡",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-望故乡.mp3",},
{title:"洋澜一-为你不远嫁",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-为你不远嫁.mp3",},
{title:"洋澜一-为你祈祷",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-为你祈祷.mp3",},
{title:"洋澜一-唯独没有心疼我",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-唯独没有心疼我.mp3",},
{title:"洋澜一-吻别",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-吻别.mp3",},
{title:"洋澜一-稳稳的幸福",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-稳稳的幸福.mp3",},
{title:"洋澜一-问(柔情版)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-问(柔情版).mp3",},
{title:"洋澜一-问",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-问.mp3",},
{title:"洋澜一-我把故事酿成酒",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-我把故事酿成酒.mp3",},
{title:"洋澜一-我曾",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-我曾.mp3",},
{title:"洋澜一-我曾用心爱着你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-我曾用心爱着你.mp3",},
{title:"洋澜一-我的好你不要",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-我的好你不要.mp3",},
{title:"洋澜一-我的吻再吻不到你的唇",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-我的吻再吻不到你的唇.mp3",},
{title:"洋澜一-我感动不了心里装着别人的人",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-我感动不了心里装着别人的人.mp3",},
{title:"洋澜一-我好心疼现在的自己",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-我好心疼现在的自己.mp3",},
{title:"洋澜一-我会等",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-我会等.mp3",},
{title:"洋澜一-我记得你眼里的依恋",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-我记得你眼里的依恋.mp3",},
{title:"洋澜一-我恋的不是冬",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-我恋的不是冬.mp3",},
{title:"洋澜一-我留不住要走的风",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-我留不住要走的风.mp3",},
{title:"洋澜一-我们到底什么关系",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-我们到底什么关系.mp3",},
{title:"洋澜一-我们的爱输给了时光",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-我们的爱输给了时光.mp3",},
{title:"洋澜一-我们的以后没有以后",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-我们的以后没有以后.mp3",},
{title:"洋澜一-我们还能不能走一趟",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-我们还能不能走一趟.mp3",},
{title:"洋澜一-我们好久不见",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-我们好久不见.mp3",},
{title:"洋澜一-我怕你对我好",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-我怕你对我好.mp3",},
{title:"洋澜一-我怕我爱了没结果",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-我怕我爱了没结果.mp3",},
{title:"洋澜一-我骗不了自己",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-我骗不了自己.mp3",},
{title:"洋澜一-我是不是你最疼爱的人",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-我是不是你最疼爱的人.mp3",},
{title:"洋澜一-我是真的爱上你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-我是真的爱上你.mp3",},
{title:"洋澜一-我太笨",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-我太笨.mp3",},
{title:"洋澜一-我希望",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-我希望.mp3",},
{title:"洋澜一-我笑着看你说谎",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-我笑着看你说谎.mp3",},
{title:"洋澜一-我养的人和养我的人",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-我养的人和养我的人.mp3",},
{title:"洋澜一-我也不想这样",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-我也不想这样.mp3",},
{title:"洋澜一-我也配",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-我也配.mp3",},
{title:"洋澜一-我以为",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-我以为.mp3",},
{title:"洋澜一-我饮红尘一壶酒",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-我饮红尘一壶酒.mp3",},
{title:"洋澜一-我用一生换你一程",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-我用一生换你一程.mp3",},
{title:"洋澜一-我用自己的方式爱你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-我用自己的方式爱你.mp3",},
{title:"洋澜一-我愿心上花开",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-我愿心上花开.mp3",},
{title:"洋澜一-我走过一万年才和你遇见",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-我走过一万年才和你遇见.mp3",},
{title:"洋澜一-乌兰巴托的夜",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-乌兰巴托的夜.mp3",},
{title:"洋澜一-无常",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-无常.mp3",},
{title:"洋澜一-无悔爱过这一回",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-无悔爱过这一回.mp3",},
{title:"洋澜一-无邪",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-无邪.mp3",},
{title:"洋澜一-午夜流浪的姑娘",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-午夜流浪的姑娘.mp3",},
{title:"洋澜一-悟了繁华误了你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-悟了繁华误了你.mp3",},
{title:"洋澜一-下辈子的誓言",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-下辈子的誓言.mp3",},
{title:"洋澜一-下辈子也要找到你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-下辈子也要找到你.mp3",},
{title:"洋澜一-下完这场雨",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-下完这场雨.mp3",},
{title:"洋澜一-下一站再见",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-下一站再见.mp3",},
{title:"洋澜一-先说爱先离开",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-先说爱先离开.mp3",},
{title:"洋澜一-相思债爱情海",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-相思债爱情海.mp3",},
{title:"洋澜一-想嫁的人结了婚",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-想嫁的人结了婚.mp3",},
{title:"洋澜一-想念不相见",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-想念不相见.mp3",},
{title:"洋澜一-想让自己醉一回",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-想让自己醉一回.mp3",},
{title:"洋澜一-想忘忘不得",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-想忘忘不得.mp3",},
{title:"洋澜一-小小的太阳",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-小小的太阳.mp3",},
{title:"洋澜一-写满遗憾的日记",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-写满遗憾的日记.mp3",},
{title:"洋澜一-谢谢你的爱",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-谢谢你的爱.mp3",},
{title:"洋澜一-心甘情愿的俘虏",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-心甘情愿的俘虏.mp3",},
{title:"洋澜一-心事故事往事",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-心事故事往事.mp3",},
{title:"洋澜一-心碎的滋味我不想体会",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-心碎的滋味我不想体会.mp3",},
{title:"洋澜一-心要让你听见",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-心要让你听见.mp3",},
{title:"洋澜一-新一曲红尘",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-新一曲红尘.mp3",},
{title:"洋澜一-星语心愿",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-星语心愿.mp3",},
{title:"洋澜一-醒不来的梦",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-醒不来的梦.mp3",},
{title:"洋澜一-醒过来的梦",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-醒过来的梦.mp3",},
{title:"洋澜一-虚拟",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-虚拟.mp3",},
{title:"洋澜一-学着遗忘",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-学着遗忘.mp3",},
{title:"洋澜一-雪化云开",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-雪化云开.mp3",},
{title:"洋澜一-雪上的誓言留不到春天",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-雪上的誓言留不到春天.mp3",},
{title:"洋澜一-烟雨唱扬州",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-烟雨唱扬州.mp3",},
{title:"洋澜一-眼泪不会撒谎",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-眼泪不会撒谎.mp3",},
{title:"洋澜一-眼中有泪心中有你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-眼中有泪心中有你.mp3",},
{title:"洋澜一-也许",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-也许.mp3",},
{title:"洋澜一-野花",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-野花.mp3",},
{title:"洋澜一-夜色浓",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-夜色浓.mp3",},
{title:"洋澜一-夜愿",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-夜愿.mp3",},
{title:"洋澜一-一百个放心",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-一百个放心.mp3",},
{title:"洋澜一-一半心酸一半遗憾",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-一半心酸一半遗憾.mp3",},
{title:"洋澜一-一步之遥",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-一步之遥.mp3",},
{title:"洋澜一-一定要爱你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-一定要爱你.mp3",},
{title:"洋澜一-一念而已",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-一念而已.mp3",},
{title:"洋澜一-一生有你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-一生有你.mp3",},
{title:"洋澜一-一直有花开",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-一直有花开.mp3",},
{title:"洋澜一-一字一句读懂我",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-一字一句读懂我.mp3",},
{title:"洋澜一-遗憾",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-遗憾.mp3",},
{title:"洋澜一-遗憾的过客",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-遗憾的过客.mp3",},
{title:"洋澜一-以后的以后",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-以后的以后.mp3",},
{title:"洋澜一-忆爱",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-忆爱.mp3",},
{title:"洋澜一-拥抱你离去",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-拥抱你离去.mp3",},
{title:"洋澜一-永远希望你过得比我好",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-永远希望你过得比我好.mp3",},
{title:"洋澜一-用余生忘记你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-用余生忘记你.mp3",},
{title:"洋澜一-有爱就不怕",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-有爱就不怕.mp3",},
{title:"洋澜一-有的人再也见不到",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-有的人再也见不到.mp3",},
{title:"洋澜一-有多少爱可以重来",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-有多少爱可以重来.mp3",},
{title:"洋澜一-有你爱我一生该多好",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-有你爱我一生该多好.mp3",},
{title:"洋澜一-有情变无情",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-有情变无情.mp3",},
{title:"洋澜一-有些人",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-有些人.mp3",},
{title:"洋澜一-有一种遗憾叫我们",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-有一种遗憾叫我们.mp3",},
{title:"洋澜一-有种遗憾叫有缘无份",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-有种遗憾叫有缘无份.mp3",},
{title:"洋澜一-余情若未了",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-余情若未了.mp3",},
{title:"洋澜一-余生不必指教",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-余生不必指教.mp3",},
{title:"洋澜一-余生不打扰",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-余生不打扰.mp3",},
{title:"洋澜一-余生还长",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-余生还长.mp3",},
{title:"洋澜一-雨蝶",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-雨蝶.mp3",},
{title:"洋澜一-遇见花",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-遇见花.mp3",},
{title:"洋澜一-原来你只是一个过客",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-原来你只是一个过客.mp3",},
{title:"洋澜一-远走高飞",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-远走高飞.mp3",},
{title:"洋澜一-怨苍天变了心",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-怨苍天变了心.mp3",},
{title:"洋澜一-愿你我皆安好",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-愿你我皆安好.mp3",},
{title:"洋澜一-愿你眼里永远有光",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-愿你眼里永远有光.mp3",},
{title:"洋澜一-约定",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-约定.mp3",},
{title:"洋澜一-月光落寒霜",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-月光落寒霜.mp3",},
{title:"洋澜一-月亮变了我不变",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-月亮变了我不变.mp3",},
{title:"洋澜一-月亮不该出现在深夜",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-月亮不该出现在深夜.mp3",},
{title:"洋澜一-再回首",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-再回首.mp3",},
{title:"洋澜一-再见吧我最爱的你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-再见吧我最爱的你.mp3",},
{title:"洋澜一-再没有流泪的人",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-再没有流泪的人.mp3",},
{title:"洋澜一-再三保证",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-再三保证.mp3",},
{title:"洋澜一-再遇只是人海",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-再遇只是人海.mp3",},
{title:"洋澜一-早已不顺路",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-早已不顺路.mp3",},
{title:"洋澜一-怎会有人知你的苦",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-怎会有人知你的苦.mp3",},
{title:"洋澜一-找一个字代替",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-找一个字代替.mp3",},
{title:"洋澜一-这个被遗忘的人",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-这个被遗忘的人.mp3",},
{title:"洋澜一-这个年代",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-这个年代.mp3",},
{title:"洋澜一-珍惜眼前人",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-珍惜眼前人.mp3",},
{title:"洋澜一-挣脱月老的线",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-挣脱月老的线.mp3",},
{title:"洋澜一-只是时间不凑巧",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-只是时间不凑巧.mp3",},
{title:"洋澜一-只是说着放下",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-只是说着放下.mp3",},
{title:"洋澜一-只要你还需要我",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-只要你还需要我.mp3",},
{title:"洋澜一-只有我失眠的晚上",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-只有我失眠的晚上.mp3",},
{title:"洋澜一-至少还有你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-至少还有你.mp3",},
{title:"洋澜一-致独一无二的你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-致独一无二的你.mp3",},
{title:"洋澜一-竹马戏",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-竹马戏.mp3",},
{title:"洋澜一-祝我们各自安好",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-祝我们各自安好.mp3",},
{title:"洋澜一-祝我们余生皆幸福",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-祝我们余生皆幸福.mp3",},
{title:"洋澜一-转弯",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-转弯.mp3",},
{title:"洋澜一-装大人的小孩",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-装大人的小孩.mp3",},
{title:"洋澜一-追梦人",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-追梦人.mp3",},
{title:"洋澜一-总会有人",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-总会有人.mp3",},
{title:"洋澜一-总以为来日方长",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-总以为来日方长.mp3",},
{title:"洋澜一-最害怕",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-最害怕.mp3",},
{title:"洋澜一-最后才明白",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-最后才明白.mp3",},
{title:"洋澜一-最后一次",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-最后一次.mp3",},
{title:"洋澜一-最后一次的温柔",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-最后一次的温柔.mp3",},
{title:"洋澜一-最美的情缘",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-最美的情缘.mp3",},
{title:"洋澜一-最痛的礼物",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-最痛的礼物.mp3",},
{title:"洋澜一-最远的你是我最近的爱",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-最远的你是我最近的爱.mp3",},
{title:"洋澜一-醉过方知酒浓",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-醉过方知酒浓.mp3",},
{title:"洋澜一-座位",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/洋澜一/洋澜一-座位.mp3",},

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