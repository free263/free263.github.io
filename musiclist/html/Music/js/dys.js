$(function($){
	// Settings
	$(".maxsize").css({ top : ($(window).width() - $(".maxsize").height())/2  });
	var repeat = localStorage.repeat || 0,
		shuffle = localStorage.shuffle || 'true',
		continous = true,
		autoplay = true,
		playlist = [
{title:"郭德纲-金兰谱.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-金兰谱.mp3",},
{title:"郭德纲-京中名妓.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-京中名妓.mp3",},
{title:"郭德纲-九条命.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-九条命.mp3",},
{title:"郭德纲-九义闹公堂.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-九义闹公堂.mp3",},
{title:"郭德纲-酒令 2010.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-酒令 2010.mp3",},
{title:"郭德纲-倔强的鸡腿.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-倔强的鸡腿.mp3",},
{title:"郭德纲-哭论.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-哭论.mp3",},
{title:"郭德纲-夸住宅.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-夸住宅.mp3",},
{title:"郭德纲-夸住宅+返场》（郭德纲、于谦）.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-夸住宅+返场》（郭德纲、于谦）.mp3",},
{title:"郭德纲-拉风的屌丝气质.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-拉风的屌丝气质.mp3",},
{title:"郭德纲-浪的难受.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-浪的难受.mp3",},
{title:"郭德纲-老郭唱评戏.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-老郭唱评戏.mp3",},
{title:"郭德纲-老老年 高峰 郭德纲.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-老老年 高峰 郭德纲.mp3",},
{title:"郭德纲-老老年.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-老老年.mp3",},
{title:"郭德纲-老师来了.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-老师来了.mp3",},
{title:"郭德纲-老师太缺德了.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-老师太缺德了.mp3",},
{title:"郭德纲-老王八出身.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-老王八出身.mp3",},
{title:"郭德纲-老于家的过节史.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-老于家的过节史.mp3",},
{title:"郭德纲-乐在元宵.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-乐在元宵.mp3",},
{title:"郭德纲-脸我不要了，我有的是牛逼.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-脸我不要了，我有的是牛逼.mp3",},
{title:"郭德纲-梁山伯与祝英台.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-梁山伯与祝英台.mp3",},
{title:"郭德纲-梁祝衰史.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-梁祝衰史.mp3",},
{title:"郭德纲-列宁评戏.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-列宁评戏.mp3",},
{title:"郭德纲-论50年之现状.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-论50年之现状.mp3",},
{title:"郭德纲-论过节.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-论过节.mp3",},
{title:"郭德纲-论梦 .mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-论梦 .mp3",},
{title:"郭德纲-论梦 2010.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-论梦 2010.mp3",},
{title:"郭德纲-论梦.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-论梦.mp3",},
{title:"郭德纲-论梦》郭德纲 李菁 .mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-论梦》郭德纲 李菁 .mp3",},
{title:"郭德纲-论捧逗.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-论捧逗.mp3",},
{title:"郭德纲-论太平歌词.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-论太平歌词.mp3",},
{title:"郭德纲-麻雀也能下鹅蛋.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-麻雀也能下鹅蛋.mp3",},
{title:"郭德纲-买面茶.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-买面茶.mp3",},
{title:"郭德纲-卖布头.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-卖布头.mp3",},
{title:"郭德纲-卖布衣.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-卖布衣.mp3",},
{title:"郭德纲-卖裤头.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-卖裤头.mp3",},
{title:"郭德纲-卖五器.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-卖五器.mp3",},
{title:"郭德纲-满汉全席.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-满汉全席.mp3",},
{title:"郭德纲-美丽人生.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-美丽人生.mp3",},
{title:"郭德纲-美女幽魂.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-美女幽魂.mp3",},
{title:"郭德纲-梦中婚.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-梦中婚.mp3",},
{title:"郭德纲-梦中婚专场.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-梦中婚专场.mp3",},
{title:"郭德纲-妙峰山.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-妙峰山.mp3",},
{title:"郭德纲-民以食为天.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-民以食为天.mp3",},
{title:"郭德纲-墨尔本小调.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-墨尔本小调.mp3",},
{title:"郭德纲-母仪天下.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-母仪天下.mp3",},
{title:"郭德纲-你本善良.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-你本善良.mp3",},
{title:"郭德纲-你猜猜我是谁.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-你猜猜我是谁.mp3",},
{title:"郭德纲-你得娶我.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-你得娶我.mp3",},
{title:"郭德纲-你的罩罩掉了.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-你的罩罩掉了.mp3",},
{title:"郭德纲-你是我的玫瑰.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-你是我的玫瑰.mp3",},
{title:"郭德纲-你压力大吗.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-你压力大吗.mp3",},
{title:"郭德纲-你要高雅.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-你要高雅.mp3",},
{title:"郭德纲-你要娶我.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-你要娶我.mp3",},
{title:"郭德纲-你要折腾.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-你要折腾.mp3",},
{title:"郭德纲--你有病啊.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲--你有病啊.mp3",},
{title:"郭德纲-你怎么不擦啊？.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-你怎么不擦啊？.mp3",},
{title:"郭德纲-你这半辈子.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-你这半辈子.mp3",},
{title:"郭德纲-你这股浪劲.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-你这股浪劲.mp3",},
{title:"郭德纲-你真骚.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-你真骚.mp3",},
{title:"郭德纲-潘杨讼.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-潘杨讼.mp3",},
{title:"郭德纲-朋友论.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-朋友论.mp3",},
{title:"郭德纲-朋友谱.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-朋友谱.mp3",},
{title:"郭德纲-捧爱徒.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-捧爱徒.mp3",},
{title:"郭德纲-批三国.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-批三国.mp3",},
{title:"郭德纲-七月七.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-七月七.mp3",},
{title:"郭德纲-器官移植.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-器官移植.mp3",},
{title:"郭德纲-瞧这一家子.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-瞧这一家子.mp3",},
{title:"郭德纲-怯拜年.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-怯拜年.mp3",},
{title:"郭德纲-怯大鼓.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-怯大鼓.mp3",},
{title:"郭德纲-怯富贵.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-怯富贵.mp3",},
{title:"郭德纲-怯拉车.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-怯拉车.mp3",},
{title:"郭德纲-怯生活.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-怯生活.mp3",},
{title:"郭德纲-怯洗澡.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-怯洗澡.mp3",},
{title:"郭德纲-情义谱01.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-情义谱01.mp3",},
{title:"郭德纲-情义谱02.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-情义谱02.mp3",},
{title:"郭德纲-请教六句话 .mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-请教六句话 .mp3",},
{title:"郭德纲-曲协主席.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-曲协主席.mp3",},
{title:"郭德纲-群八扇.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-群八扇.mp3",},
{title:"郭德纲-人在江湖.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-人在江湖.mp3",},
{title:"郭德纲-日本梆子.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-日本梆子.mp3",},
{title:"郭德纲-日本小妹.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-日本小妹.mp3",},
{title:"郭德纲-三人行.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-三人行.mp3",},
{title:"郭德纲-嫂夫人.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-嫂夫人.mp3",},
{title:"郭德纲-嫂子别闹.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-嫂子别闹.mp3",},
{title:"郭德纲-色论.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-色论.mp3",},
{title:"郭德纲-神马都是浮云.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-神马都是浮云.mp3",},
{title:"郭德纲-师傅经.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-师傅经.mp3",},
{title:"郭德纲-师娘很好客.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-师娘很好客.mp3",},
{title:"郭德纲-十年.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-十年.mp3",},
{title:"郭德纲-收徒欧弟.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-收徒欧弟.mp3",},
{title:"郭德纲-寿比南山.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-寿比南山.mp3",},
{title:"郭德纲-鼠来宝 郭德纲 于谦 高峰.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-鼠来宝 郭德纲 于谦 高峰.mp3",},
{title:"郭德纲-数来宝2010.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-数来宝2010.mp3",},
{title:"郭德纲-拴娃娃.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-拴娃娃.mp3",},
{title:"郭德纲-双背地理图.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-双背地理图.mp3",},
{title:"郭德纲-双唱快板.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-双唱快板.mp3",},
{title:"郭德纲-双唱小曲.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-双唱小曲.mp3",},
{title:"郭德纲-双学济南话.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-双学济南话.mp3",},
{title:"郭德纲-谁动了我的减肥茶.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-谁动了我的减肥茶.mp3",},
{title:"郭德纲-说点别人不知道的.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-说点别人不知道的.mp3",},
{title:"郭德纲-说过节.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-说过节.mp3",},
{title:"郭德纲-死鬼快进来.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-死鬼快进来.mp3",},
{title:"郭德纲-四大名著.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-四大名著.mp3",},
{title:"郭德纲-隋唐木狗.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-隋唐木狗.mp3",},
{title:"郭德纲-太平歌词秦琼观阵.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-太平歌词秦琼观阵.mp3",},
{title:"郭德纲-泰国归来.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-泰国归来.mp3",},
{title:"郭德纲-泰国归来不看鸡.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-泰国归来不看鸡.mp3",},
{title:"郭德纲-探清水河.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-探清水河.mp3",},
{title:"郭德纲-讨论个和尚.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-讨论个和尚.mp3",},
{title:"郭德纲-特级烧烤师.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-特级烧烤师.mp3",},
{title:"郭德纲-跳大神.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-跳大神.mp3",},
{title:"郭德纲-贴身大丫鬟.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-贴身大丫鬟.mp3",},
{title:"郭德纲-痛.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-痛.mp3",},
{title:"郭德纲-偷斧子.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-偷斧子.mp3",},
{title:"郭德纲-偷论.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-偷论.mp3",},
{title:"郭德纲-托妻献子 (2).mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-托妻献子 (2).mp3",},
{title:"郭德纲-托妻献子.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-托妻献子.mp3",},
{title:"郭德纲-歪唱太平歌词 侯震 郭德纲.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-歪唱太平歌词 侯震 郭德纲.mp3",},
{title:"郭德纲-歪唱太平歌词.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-歪唱太平歌词.mp3",},
{title:"郭德纲-歪批三国 郭德纲 李菁.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-歪批三国 郭德纲 李菁.mp3",},
{title:"郭德纲-王八托石碑.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-王八托石碑.mp3",},
{title:"郭德纲-王二姐思夫.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-王二姐思夫.mp3",},
{title:"郭德纲-未央宫斩韩信.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-未央宫斩韩信.mp3",},
{title:"郭德纲-文史专家.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-文史专家.mp3",},
{title:"郭德纲-文武双全.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-文武双全.mp3",},
{title:"郭德纲-闻屎专家.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-闻屎专家.mp3",},
{title:"郭德纲-我爱看春晚.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我爱看春晚.mp3",},
{title:"郭德纲-我爱自由.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我爱自由.mp3",},
{title:"郭德纲-我爱祖国.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我爱祖国.mp3",},
{title:"郭德纲-我的辈分.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我的辈分.mp3",},
{title:"郭德纲-我的大学生活（完整版带返场）.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我的大学生活（完整版带返场）.mp3",},
{title:"郭德纲-我的奋斗史.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我的奋斗史.mp3",},
{title:"郭德纲-我的伙伴.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我的伙伴.mp3",},
{title:"郭德纲-我的老哥.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我的老哥.mp3",},
{title:"郭德纲-我的老家.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我的老家.mp3",},
{title:"郭德纲-我的姥爷.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我的姥爷.mp3",},
{title:"郭德纲-我和我的小伙伴儿.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我和我的小伙伴儿.mp3",},
{title:"郭德纲-我家的狗丢了.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我家的狗丢了.mp3",},
{title:"郭德纲-我们好像见过.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我们好像见过.mp3",},
{title:"郭德纲-我是大师.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我是大师.mp3",},
{title:"郭德纲-我是军事家.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我是军事家.mp3",},
{title:"郭德纲-我是文学家（版本二）.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我是文学家（版本二）.mp3",},
{title:"郭德纲-我是文学家（版本三）.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我是文学家（版本三）.mp3",},
{title:"郭德纲-我是文学家.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我是文学家.mp3",},
{title:"郭德纲-我是舞蹈家 （版本二）.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我是舞蹈家 （版本二）.mp3",},
{title:"郭德纲-我是舞蹈家（2010版本）.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我是舞蹈家（2010版本）.mp3",},
{title:"郭德纲-我是舞蹈家.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我是舞蹈家.mp3",},
{title:"郭德纲-我为歌狂.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我为歌狂.mp3",},
{title:"郭德纲-我要唱歌 .mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我要唱歌 .mp3",},
{title:"郭德纲-我要吃饺子.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我要吃饺子.mp3",},
{title:"郭德纲-我要穿越.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我要穿越.mp3",},
{title:"郭德纲-我要登基.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我要登基.mp3",},
{title:"郭德纲-我要读书（版本二）.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我要读书（版本二）.mp3",},
{title:"郭德纲-我要读书.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我要读书.mp3",},
{title:"郭德纲-我要反三俗（2008元旦版加返场）.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我要反三俗（2008元旦版加返场）.mp3",},
{title:"郭德纲-我要反三俗（全本）.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我要反三俗（全本）.mp3",},
{title:"郭德纲-我要反三俗(新).mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我要反三俗(新).mp3",},
{title:"郭德纲-我要反三俗.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我要反三俗.mp3",},
{title:"郭德纲-我要奋斗（版本二）.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我要奋斗（版本二）.mp3",},
{title:"郭德纲-我要奋斗（版本三）.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我要奋斗（版本三）.mp3",},
{title:"郭德纲-我要奋斗.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我要奋斗.mp3",},
{title:"郭德纲-我要结婚（版本二）.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我要结婚（版本二）.mp3",},
{title:"郭德纲-我要结婚（版本三）.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我要结婚（版本三）.mp3",},
{title:"郭德纲-我要旅游（带返场）.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我要旅游（带返场）.mp3",},
{title:"郭德纲-我要旅游.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我要旅游.mp3",},
{title:"郭德纲-我要闹绯闻（版本二）.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我要闹绯闻（版本二）.mp3",},
{title:"郭德纲-我要闹绯闻（版本三）.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我要闹绯闻（版本三）.mp3",},
{title:"郭德纲-我要闹绯闻（版本四）.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我要闹绯闻（版本四）.mp3",},
{title:"郭德纲-我要闹绯闻（加返场）.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我要闹绯闻（加返场）.mp3",},
{title:"郭德纲-我要闹绯闻.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我要闹绯闻.mp3",},
{title:"郭德纲-我要上春晚（版本二）.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我要上春晚（版本二）.mp3",},
{title:"郭德纲-我要上春晚（版本三）.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我要上春晚（版本三）.mp3",},
{title:"郭德纲-我要上春晚（版本四）.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我要上春晚（版本四）.mp3",},
{title:"郭德纲-我要上春晚.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我要上春晚.mp3",},
{title:"郭德纲-我要玩网游 .mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我要玩网游 .mp3",},
{title:"郭德纲-我要下春晚.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我要下春晚.mp3",},
{title:"郭德纲-我要幸福 （版本二）.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我要幸福 （版本二）.mp3",},
{title:"郭德纲-我要幸福 （版本三）.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我要幸福 （版本三）.mp3",},
{title:"郭德纲-我要幸福 （版本四）.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我要幸福 （版本四）.mp3",},
{title:"郭德纲-我要幸福（版本一）.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我要幸福（版本一）.mp3",},
{title:"郭德纲-我有强迫症.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我有强迫症.mp3",},
{title:"郭德纲-我又成长了.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-我又成长了.mp3",},
{title:"郭德纲-五红图.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-五红图.mp3",},
{title:"郭德纲-五星级酒店.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-五星级酒店.mp3",},
{title:"郭德纲-武坠子.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-武坠子.mp3",},
{title:"郭德纲-舞蹈家.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-舞蹈家.mp3",},
{title:"郭德纲-西瓜地的故事.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-西瓜地的故事.mp3",},
{title:"郭德纲-西河大鼓灞桥挑袍.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-西河大鼓灞桥挑袍.mp3",},
{title:"郭德纲-西征梦.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-西征梦.mp3",},
{title:"郭德纲-戏剧与方言.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-戏剧与方言.mp3",},
{title:"郭德纲-戏叔别兄.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-戏叔别兄.mp3",},
{title:"郭德纲-相面.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-相面.mp3",},
{title:"郭德纲-相声论.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-相声论.mp3",},
{title:"郭德纲-相声演员随身两包烟.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-相声演员随身两包烟.mp3",},
{title:"郭德纲-新—你这半辈子.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-新—你这半辈子.mp3",},
{title:"郭德纲-新西征梦.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-新西征梦.mp3",},
{title:"郭德纲-学电台.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-学电台.mp3",},
{title:"郭德纲-学评书.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-学评书.mp3",},
{title:"郭德纲-学生也疯狂.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-学生也疯狂.mp3",},
{title:"郭德纲-学跳舞.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-学跳舞.mp3",},
{title:"郭德纲-学问家.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-学问家.mp3",},
{title:"郭德纲-学小曲 2010.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-学小曲 2010.mp3",},
{title:"郭德纲-学小曲.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-学小曲.mp3",},
{title:"郭德纲-养王八.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-养王八.mp3",},
{title:"郭德纲-邀请函.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-邀请函.mp3",},
{title:"郭德纲-药引子.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-药引子.mp3",},
{title:"郭德纲-要做文明人.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-要做文明人.mp3",},
{title:"郭德纲-夜行记.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-夜行记.mp3",},
{title:"郭德纲-夜里听歌.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-夜里听歌.mp3",},
{title:"郭德纲-夜总会歪唱.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-夜总会歪唱.mp3",},
{title:"郭德纲-一定要向上.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-一定要向上.mp3",},
{title:"郭德纲-一户侯.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-一户侯.mp3",},
{title:"郭德纲-幽默的说话.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-幽默的说话.mp3",},
{title:"郭德纲-有钱人就是不一样.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-有钱人就是不一样.mp3",},
{title:"郭德纲-于老师家里新职业.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-于老师家里新职业.mp3",},
{title:"郭德纲-于谦的风流人生.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-于谦的风流人生.mp3",},
{title:"郭德纲-于谦发唱片.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-于谦发唱片.mp3",},
{title:"郭德纲-于谦了不起的媳妇们.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-于谦了不起的媳妇们.mp3",},
{title:"郭德纲-于谦与姑娘游泳.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-于谦与姑娘游泳.mp3",},
{title:"郭德纲-于氏父子轶事.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-于氏父子轶事.mp3",},
{title:"郭德纲-愚人节.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-愚人节.mp3",},
{title:"郭德纲-宇宙牌香烟.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-宇宙牌香烟.mp3",},
{title:"郭德纲-云淡风轻.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-云淡风轻.mp3",},
{title:"郭德纲-怎么这么倒霉.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-怎么这么倒霉.mp3",},
{title:"郭德纲-重口味段子集锦.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-重口味段子集锦.mp3",},
{title:"郭德纲-猪八戒出来了.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-猪八戒出来了.mp3",},
{title:"郭德纲-追着幸福跑.mp3",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/德云社mp3/郭德纲/郭德纲-追着幸福跑.mp3",}

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