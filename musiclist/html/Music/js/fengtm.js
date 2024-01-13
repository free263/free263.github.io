$(function($){
	// Settings
	$(".maxsize").css({ top : ($(window).width() - $(".maxsize").height())/2  });
	var repeat = localStorage.repeat || 0,
		shuffle = localStorage.shuffle || 'true',
		continous = true,
		autoplay = true,
		playlist = [
{title:"冯提莫- 一个人失忆",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 一个人失忆.mp3",},
{title:"冯提莫- 一剪梅",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 一剪梅.mp3",},
{title:"冯提莫- 一千年以后",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 一千年以后.mp3",},
{title:"冯提莫- 一次就好",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 一次就好.mp3",},
{title:"冯提莫- 一生所爱",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 一生所爱.mp3",},
{title:"冯提莫- 一直很安静",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 一直很安静.mp3",},
{title:"冯提莫- 七里香",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 七里香.mp3",},
{title:"冯提莫- 万物生",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 万物生.mp3",},
{title:"冯提莫- 下个路口见",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 下个路口见.mp3",},
{title:"冯提莫- 下雨天",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 下雨天.mp3",},
{title:"冯提莫- 不再联系",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 不再联系.mp3",},
{title:"冯提莫- 不将就",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 不将就.mp3",},
{title:"冯提莫- 东京不太热",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 东京不太热.mp3",},
{title:"冯提莫- 为你我受冷风吹",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 为你我受冷风吹.mp3",},
{title:"冯提莫- 乌克丽丽",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 乌克丽丽.mp3",},
{title:"冯提莫- 五环之歌",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 五环之歌.mp3",},
{title:"冯提莫- 人质",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 人质.mp3",},
{title:"冯提莫- 人间 (2)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 人间 (2).mp3",},
{title:"冯提莫- 人间",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 人间.mp3",},
{title:"冯提莫- 他一定很爱你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 他一定很爱你.mp3",},
{title:"冯提莫- 他不爱我",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 他不爱我.mp3",},
{title:"冯提莫- 他说.wav",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 他说.wav",},
{title:"冯提莫- 传奇",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 传奇.mp3",},
{title:"冯提莫- 你一定要幸福",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 你一定要幸福.mp3",},
{title:"冯提莫- 你就不要想起我",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 你就不要想起我.mp3",},
{title:"冯提莫- 你是我最重要的决定",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 你是我最重要的决定.mp3",},
{title:"冯提莫- 你的甜蜜",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 你的甜蜜.mp3",},
{title:"冯提莫- 依恋",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 依恋.mp3",},
{title:"冯提莫- 修炼爱情",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 修炼爱情.mp3",},
{title:"冯提莫- 倩女幽魂",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 倩女幽魂.mp3",},
{title:"冯提莫- 倾城",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 倾城.mp3",},
{title:"冯提莫- 健康歌",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 健康歌.mp3",},
{title:"冯提莫- 光年之外",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 光年之外.mp3",},
{title:"冯提莫- 六月的雨",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 六月的雨.mp3",},
{title:"冯提莫- 写不出的温柔",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 写不出的温柔.mp3",},
{title:"冯提莫- 写不完的温柔",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 写不完的温柔.mp3",},
{title:"冯提莫- 凉凉",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 凉凉.mp3",},
{title:"冯提莫- 分手快乐",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 分手快乐.mp3",},
{title:"冯提莫- 别找我麻烦",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 别找我麻烦.mp3",},
{title:"冯提莫- 匆匆那年",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 匆匆那年.mp3",},
{title:"冯提莫- 十年",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 十年.mp3",},
{title:"冯提莫- 千年之恋",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 千年之恋.mp3",},
{title:"冯提莫- 单身情歌",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 单身情歌.mp3",},
{title:"冯提莫- 单飞",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 单飞.mp3",},
{title:"冯提莫- 南山南",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 南山南.mp3",},
{title:"冯提莫- 卜卦",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 卜卦.mp3",},
{title:"冯提莫- 卜挂",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 卜挂.mp3",},
{title:"冯提莫- 卜掛",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 卜掛.mp3",},
{title:"冯提莫- 卷珠帘",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 卷珠帘.mp3",},
{title:"冯提莫- 友情岁月",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 友情岁月.mp3",},
{title:"冯提莫- 反叛",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 反叛.mp3",},
{title:"冯提莫- 口香糖",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 口香糖.mp3",},
{title:"冯提莫- 古灵精怪",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 古灵精怪.mp3",},
{title:"冯提莫- 可惜不是你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 可惜不是你.mp3",},
{title:"冯提莫- 可惜没如果",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 可惜没如果.mp3",},
{title:"冯提莫- 可爱颂",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 可爱颂.mp3",},
{title:"冯提莫- 可爱颂.mp4",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 可爱颂.mp4",},
{title:"冯提莫- 叶子",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 叶子.mp3",},
{title:"冯提莫- 告白气球",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 告白气球.mp3",},
{title:"冯提莫- 告诉我",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 告诉我.mp3",},
{title:"冯提莫- 哈巴狗",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 哈巴狗.mp3",},
{title:"冯提莫- 喜欢你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 喜欢你.mp3",},
{title:"冯提莫- 囚鸟",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 囚鸟.mp3",},
{title:"冯提莫- 回到过去",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 回到过去.mp3",},
{title:"冯提莫- 在雨中",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 在雨中.mp3",},
{title:"冯提莫- 夏天的风",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 夏天的风.mp3",},
{title:"冯提莫- 多远都要在一起",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 多远都要在一起.mp3",},
{title:"冯提莫- 夜车",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 夜车.mp3",},
{title:"冯提莫- 大城小爱",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 大城小爱.mp3",},
{title:"冯提莫- 大鱼",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 大鱼.mp3",},
{title:"冯提莫- 天后",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 天后.mp3",},
{title:"冯提莫- 套马杆",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 套马杆.mp3",},
{title:"冯提莫- 好想你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 好想你.mp3",},
{title:"冯提莫- 如果有来生",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 如果有来生.mp3",},
{title:"冯提莫- 如果没有你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 如果没有你.mp3",},
{title:"冯提莫- 如果的事",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 如果的事.mp3",},
{title:"冯提莫- 妥协",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 妥协.mp3",},
{title:"冯提莫- 孤独的总和",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 孤独的总和.mp3",},
{title:"冯提莫- 宝贝",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 宝贝.mp3",},
{title:"冯提莫- 容易受伤的女人",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 容易受伤的女人.mp3",},
{title:"冯提莫- 寂寞在唱歌",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 寂寞在唱歌.mp3",},
{title:"冯提莫- 富士山下",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 富士山下.mp3",},
{title:"冯提莫- 小半",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 小半.mp3",},
{title:"冯提莫- 小小",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 小小.mp3",},
{title:"冯提莫- 小幸运",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 小幸运.mp3",},
{title:"冯提莫- 小手拉大手",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 小手拉大手.mp3",},
{title:"冯提莫- 小苹果",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 小苹果.mp3",},
{title:"冯提莫- 小跳蛙",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 小跳蛙.mp3",},
{title:"冯提莫- 小鸡哔哔",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 小鸡哔哔.mp3",},
{title:"冯提莫- 就是我",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 就是我.mp3",},
{title:"冯提莫- 就是爱你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 就是爱你.mp3",},
{title:"冯提莫- 左边",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 左边.mp3",},
{title:"冯提莫- 平凡之路",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 平凡之路.mp3",},
{title:"冯提莫- 年轮",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 年轮.mp3",},
{title:"冯提莫- 当你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 当你.mp3",},
{title:"冯提莫- 彩虹",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 彩虹.mp3",},
{title:"冯提莫- 心墙",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 心墙.mp3",},
{title:"冯提莫- 怎么说我不爱你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 怎么说我不爱你.mp3",},
{title:"冯提莫- 恋爱循环",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 恋爱循环.mp3",},
{title:"冯提莫- 悟空",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 悟空.mp3",},
{title:"冯提莫- 情深深雨蒙蒙",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 情深深雨蒙蒙.mp3",},
{title:"冯提莫- 情非得已",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 情非得已.mp3",},
{title:"冯提莫- 想你的365天",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 想你的365天.mp3",},
{title:"冯提莫- 慢慢",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 慢慢.mp3",},
{title:"冯提莫- 我们的爱",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 我们的爱.mp3",},
{title:"冯提莫- 我在人民广场吃炸鸡",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 我在人民广场吃炸鸡.mp3",},
{title:"冯提莫- 我在人民广场吃着",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 我在人民广场吃着.mp3",},
{title:"冯提莫- 我多么怀念",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 我多么怀念.mp3",},
{title:"冯提莫- 我想对你说baby",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 我想对你说baby.mp3",},
{title:"冯提莫- 我想要飞",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 我想要飞.mp3",},
{title:"冯提莫- 我愿意",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 我愿意.mp3",},
{title:"冯提莫- 我是我的",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 我是我的.mp3",},
{title:"冯提莫- 我是真的爱上你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 我是真的爱上你.mp3",},
{title:"冯提莫- 我的世界",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 我的世界.mp3",},
{title:"冯提莫- 我的天空",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 我的天空.mp3",},
{title:"冯提莫- 我的快乐",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 我的快乐.mp3",},
{title:"冯提莫- 我的秘密",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 我的秘密.mp3",},
{title:"冯提莫- 我真的受伤了",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 我真的受伤了.mp3",},
{title:"冯提莫- 我要你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 我要你.mp3",},
{title:"冯提莫- 战争世界",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 战争世界.mp3",},
{title:"冯提莫- 把耳朵叫醒",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 把耳朵叫醒.mp3",},
{title:"冯提莫- 投食歌",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 投食歌.mp3",},
{title:"冯提莫- 指望",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 指望.mp3",},
{title:"冯提莫- 捉泥鳅",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 捉泥鳅.mp3",},
{title:"冯提莫- 握不住的他",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 握不住的他.mp3",},
{title:"冯提莫- 旋木",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 旋木.mp3",},
{title:"冯提莫- 无底洞",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 无底洞.mp3",},
{title:"冯提莫- 时间煮雨",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 时间煮雨.mp3",},
{title:"冯提莫- 明天我要嫁给你啦",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 明天我要嫁给你啦.mp3",},
{title:"冯提莫- 星月神话",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 星月神话.mp3",},
{title:"冯提莫- 星语星愿",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 星语星愿.mp3",},
{title:"冯提莫- 是什么让我遇见这样的你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 是什么让我遇见这样的你.mp3",},
{title:"冯提莫- 普通disco",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 普通disco.mp3",},
{title:"冯提莫- 晴天",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 晴天.mp3",},
{title:"冯提莫- 暖暖",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 暖暖.mp3",},
{title:"冯提莫- 暗涌",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 暗涌.mp3",},
{title:"冯提莫- 暗香",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 暗香.mp3",},
{title:"冯提莫- 最初的梦想",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 最初的梦想.mp3",},
{title:"冯提莫- 最近",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 最近.mp3",},
{title:"冯提莫- 最重要的决定",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 最重要的决定.mp3",},
{title:"冯提莫- 最长的电影",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 最长的电影.mp3",},
{title:"冯提莫- 月半小夜曲",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 月半小夜曲.mp3",},
{title:"冯提莫- 有可能的夜晚",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 有可能的夜晚.mp3",},
{title:"冯提莫- 有心人",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 有心人.mp3",},
{title:"冯提莫- 杀破狼",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 杀破狼.mp3",},
{title:"冯提莫- 李白",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 李白.mp3",},
{title:"冯提莫- 枫",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 枫.mp3",},
{title:"冯提莫- 柠檬树",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 柠檬树.mp3",},
{title:"冯提莫- 欧若拉",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 欧若拉.mp3",},
{title:"冯提莫- 死性不改",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 死性不改.mp3",},
{title:"冯提莫- 氧气",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 氧气.mp3",},
{title:"冯提莫- 江南",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 江南.mp3",},
{title:"冯提莫- 没那么简单",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 没那么简单.mp3",},
{title:"冯提莫- 泡沫",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 泡沫.mp3",},
{title:"冯提莫- 流年",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 流年.mp3",},
{title:"冯提莫- 海绵宝宝",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 海绵宝宝.mp3",},
{title:"冯提莫- 海阔天空",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 海阔天空.mp3",},
{title:"冯提莫- 满满的都是爱",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 满满的都是爱.mp3",},
{title:"冯提莫- 火烧的寂寞",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 火烧的寂寞.mp3",},
{title:"冯提莫- 热气球",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 热气球.mp3",},
{title:"冯提莫- 煎熬",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 煎熬.mp3",},
{title:"冯提莫- 爱一点",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 爱一点.mp3",},
{title:"冯提莫- 爱一直存在",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 爱一直存在.mp3",},
{title:"冯提莫- 爱上张无忌",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 爱上张无忌.mp3",},
{title:"冯提莫- 爱丫爱丫",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 爱丫爱丫.mp3",},
{title:"冯提莫- 爱你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 爱你.mp3",},
{title:"冯提莫- 爱囚",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 爱囚.mp3",},
{title:"冯提莫- 爱如潮水",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 爱如潮水.mp3",},
{title:"冯提莫- 爱就一个字",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 爱就一个字.mp3",},
{title:"冯提莫- 爱就爱了",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 爱就爱了.mp3",},
{title:"冯提莫- 爱我还是他",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 爱我还是他.mp3",},
{title:"冯提莫- 爱的主打歌",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 爱的主打歌.mp3",},
{title:"冯提莫- 爱的供养",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 爱的供养.mp3",},
{title:"冯提莫- 爱笑的眼睛",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 爱笑的眼睛.mp3",},
{title:"冯提莫- 独照",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 独照.mp3",},
{title:"冯提莫- 理想情人",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 理想情人.mp3",},
{title:"冯提莫- 电台情歌",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 电台情歌.mp3",},
{title:"冯提莫- 画",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 画.mp3",},
{title:"冯提莫- 盛夏光年",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 盛夏光年.mp3",},
{title:"冯提莫- 真的爱你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 真的爱你.mp3",},
{title:"冯提莫- 知足",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 知足.mp3",},
{title:"冯提莫- 禁区",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 禁区.mp3",},
{title:"冯提莫- 稻香",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 稻香.mp3",},
{title:"冯提莫- 空城",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 空城.mp3",},
{title:"冯提莫- 童话",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 童话.mp3",},
{title:"冯提莫- 笑忘书",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 笑忘书.mp3",},
{title:"冯提莫- 笔记",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 笔记.mp3",},
{title:"冯提莫- 等下一个天亮",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 等下一个天亮.mp3",},
{title:"冯提莫- 粉红色的回忆",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 粉红色的回忆.mp3",},
{title:"冯提莫- 红日",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 红日.mp3",},
{title:"冯提莫- 红玫瑰",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 红玫瑰.mp3",},
{title:"冯提莫- 红色高跟鞋",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 红色高跟鞋.mp3",},
{title:"冯提莫- 红豆",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 红豆.mp3",},
{title:"冯提莫- 约定",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 约定.mp3",},
{title:"冯提莫- 给我一个理由忘记",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 给我一个理由忘记.mp3",},
{title:"冯提莫- 美丽心情",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 美丽心情.mp3",},
{title:"冯提莫- 美人鱼",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 美人鱼.mp3",},
{title:"冯提莫- 胖妞之歌.avi",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 胖妞之歌.avi",},
{title:"冯提莫- 自然卷（一丢丢）.wav",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 自然卷（一丢丢）.wav",},
{title:"冯提莫- 致青春",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 致青春.mp3",},
{title:"冯提莫- 舞女泪",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 舞女泪.mp3",},
{title:"冯提莫- 苏高飞.avi",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 苏高飞.avi",},
{title:"冯提莫- 茶汤",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 茶汤.mp3",},
{title:"冯提莫- 薄荷与指甲剪",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 薄荷与指甲剪.mp3",},
{title:"冯提莫- 虫儿飞",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 虫儿飞.mp3",},
{title:"冯提莫- 虹之间",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 虹之间.mp3",},
{title:"冯提莫- 袖手旁观",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 袖手旁观.mp3",},
{title:"冯提莫- 记事本",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 记事本.mp3",},
{title:"冯提莫- 说散就散",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 说散就散.mp3",},
{title:"冯提莫- 贝加尔湖畔",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 贝加尔湖畔.mp3",},
{title:"冯提莫- 走在冷风中",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 走在冷风中.mp3",},
{title:"冯提莫- 踮起脚尖爱",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 踮起脚尖爱.mp3",},
{title:"冯提莫- 身骑白马",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 身骑白马.mp3",},
{title:"冯提莫- 遗失的美好",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 遗失的美好.mp3",},
{title:"冯提莫- 避风港",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 避风港.mp3",},
{title:"冯提莫- 那么骄傲",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 那么骄傲.mp3",},
{title:"冯提莫- 那些花儿",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 那些花儿.mp3",},
{title:"冯提莫- 都是夜归人",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 都是夜归人.mp3",},
{title:"冯提莫- 野子",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 野子.mp3",},
{title:"冯提莫- 钟无艳",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 钟无艳.mp3",},
{title:"冯提莫- 阴天",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 阴天.mp3",},
{title:"冯提莫- 雨蝶",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 雨蝶.mp3",},
{title:"冯提莫- 青鸟",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 青鸟.mp3",},
{title:"冯提莫- 靠近一点点",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 靠近一点点.mp3",},
{title:"冯提莫- 马来西亚的查某",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 马来西亚的查某.mp3",},
{title:"冯提莫- 骑士",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 骑士.mp3",},
{title:"冯提莫- 魔鬼中的天使",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 魔鬼中的天使.mp3",},
{title:"冯提莫- 黑色毛衣",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 黑色毛衣.mp3",},
{title:"冯提莫- 默",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/中文MP3合集/冯提莫- 默.mp3",},
{title:"冯提莫- ET",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- ET.mp3",},
{title:"冯提莫- F..kin perfect",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- F..kin perfect.mp3",},
{title:"冯提莫- Firework",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- Firework.mp3",},
{title:"冯提莫- I Could Be The One",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- I Could Be The One.mp3",},
{title:"冯提莫- a new day has come",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- a new day has come.mp3",},
{title:"冯提莫- aliez",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- aliez.mp3",},
{title:"冯提莫- all about that bass（胖妞之歌）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- all about that bass（胖妞之歌）.mp3",},
{title:"冯提莫- because of you",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- because of you.mp3",},
{title:"冯提莫- boom  clap",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- boom  clap.mp3",},
{title:"冯提莫- boom clap",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- boom clap.mp3",},
{title:"冯提莫- breathless",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- breathless.mp3",},
{title:"冯提莫- butterfly",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- butterfly.mp3",},
{title:"冯提莫- call me maybe",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- call me maybe.mp3",},
{title:"冯提莫- crooked smile",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- crooked smile.mp3",},
{title:"冯提莫- everybody",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- everybody.mp3",},
{title:"冯提莫- fade",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- fade.mp3",},
{title:"冯提莫- faded",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- faded.mp3",},
{title:"冯提莫- far away from home",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- far away from home.mp3",},
{title:"冯提莫- for the first time in forever",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- for the first time in forever.mp3",},
{title:"冯提莫- heartbeats",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- heartbeats.mp3",},
{title:"冯提莫- i knew you were trouble",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- i knew you were trouble.mp3",},
{title:"冯提莫- i love you",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- i love you.mp3",},
{title:"冯提莫- it's only the fairy tale",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- it's only the fairy tale.mp3",},
{title:"冯提莫- let it go",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- let it go.mp3",},
{title:"冯提莫- lf l Ain t Got You",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- lf l Ain t Got You.mp3",},
{title:"冯提莫- lnnocence (1)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- lnnocence (1).mp3",},
{title:"冯提莫- lnnocence",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- lnnocence.mp3",},
{title:"冯提莫- lost stars",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- lost stars.mp3",},
{title:"冯提莫- love me like you do",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- love me like you do.mp3",},
{title:"冯提莫- mariA",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- maria.mp3",},
{title:"冯提莫- me and my broken heart",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- me and my broken heart.mp3",},
{title:"冯提莫- melody",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- melody.mp3",},
{title:"冯提莫- morning",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- morning.mp3",},
{title:"冯提莫- my dilemmA",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- my dilemma.mp3",},
{title:"冯提莫- new soul",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- new soul.mp3",},
{title:"冯提莫- part of me",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- part of me.mp3",},
{title:"冯提莫- payphone",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- payphone.mp3",},
{title:"冯提莫- price tag",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- price tag.mp3",},
{title:"冯提莫- roar",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- roar.mp3",},
{title:"冯提莫- see you again",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- see you again.mp3",},
{title:"冯提莫- shake it off",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- shake it off.mp3",},
{title:"冯提莫- someone like you",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- someone like you.mp3",},
{title:"冯提莫- stay here forever",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- stay here forever.mp3",},
{title:"冯提莫- stuttering",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- stuttering.mp3",},
{title:"冯提莫- sugar",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- sugar.mp3",},
{title:"冯提莫- take a bow",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- take a bow.mp3",},
{title:"冯提莫- time after time",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- time after time.mp3",},
{title:"冯提莫- try",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- try.mp3",},
{title:"冯提莫- undo it",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- undo it.mp3",},
{title:"冯提莫- waka wakA",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- waka waka.mp3",},
{title:"冯提莫- we are never ever getting back together",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- we are never ever getting back together.mp3",},
{title:"冯提莫- what makes you beaut",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- what makes you beaut.mp3",},
{title:"冯提莫- whataya want from me",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- whataya want from me.mp3",},
{title:"冯提莫- when i was your man",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- when i was your man.mp3",},
{title:"冯提莫- wrecking ball",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- wrecking ball.mp3",},
{title:"冯提莫- you make me wannA",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- you make me wanna.mp3",},
{title:"冯提莫- you raise me up",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/英文歌曲MP3合集/冯提莫- you raise me up.mp3",},
{title:"冯提莫- If you",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/日韩MP3合集/冯提莫- If you.mp3",},
{title:"冯提莫- butterfly",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/日韩MP3合集/冯提莫- butterfly.mp3",},
{title:"冯提莫- what can I do",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/日韩MP3合集/冯提莫- what can I do.mp3",},
{title:"冯提莫- 东京食尸鬼",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/日韩MP3合集/冯提莫- 东京食尸鬼.mp3",},
{title:"冯提莫- 可爱颂",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/日韩MP3合集/冯提莫- 可爱颂.mp3",},
{title:"冯提莫- 星象仪",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/经典音乐大收藏/冯提莫300首/日韩MP3合集/冯提莫- 星象仪.mp3",}


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