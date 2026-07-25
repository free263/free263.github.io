// 音乐播放插件 
// 只包括播放暂停，下一曲  以及显示歌曲名称 歌手以及 实时进度
// github： https://github.com/IFmiss/music

(function($,window){
    var DW = {};
    //音乐播放器插件
    DW.music = function(options) {
        var musicValue = {
            width:                  260,                        //宽度
            height:                 56,                         //高度
            hasBlur:                true,                       //是否显示模糊效果
            blur:                   8,                          //模糊的数值
            left:                   'auto',                     //音乐的位置 :left
            right:                  'auto',                     //音乐的位置 :right
            bottom:                 'auto',                     //音乐的位置 :bottom
            top:                    'auto',                     //音乐的位置 :top
            isCenter:               true,                       //是否居中显示  translate
            btnBackground:          'rgba(0,0,0,0.2)',          //按钮背景色
            iconColor:              'rgba(250,250,250.0.2)',    //图标背景色
            hasSelect:              true,                       //是否可选择音乐类型
            hasAjax:                true,                       //是否是ajax请求数据
            selectClassName:        'select-type',              //选择类型按钮的className名称
            musicType:              ['纯音乐','华语','欧美','霉霉','电音','韩国','爱乐之城','网络歌曲'],         //音乐的类型  （需要随机显示）这是结合我自己后台数据库使用的 如果不是用ajax请求是不会显示这个类型的;
            source:                 [
{name:'5566-我难过',singer:'5566',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/5566-我难过.mp3',img_url:'./img/01.jpg',},
{name:'ALin-给我一个理由忘记',singer:'ALin',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/ALin-给我一个理由忘记.mp3',img_url:'./img/02.jpg',},
{name:'ALin-有一种悲伤',singer:'ALin',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/ALin-有一种悲伤.mp3',img_url:'./img/03.jpg',},
{name:'AvrilLavigne-IamWithYou',singer:'AvrilLavigne',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/AvrilLavigne-IamWithYou.mp3',img_url:'./img/04.jpg',},
{name:'BackstreetBoys-As_Long_As_You_Love_M',singer:'BackstreetBoys',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/BackstreetBoys-As_Long_As_You_Love_M.mp3',img_url:'./img/05.jpg',},
{name:'Beyond-不再犹豫',singer:'Beyond',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/Beyond-不再犹豫.mp3',img_url:'./img/01.jpg',},
{name:'Beyond-大地',singer:'Beyond',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/Beyond-大地.mp3',img_url:'./img/02.jpg',},
{name:'Beyond-光辉岁月',singer:'Beyond',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/Beyond-光辉岁月.mp3',img_url:'./img/03.jpg',},
{name:'Beyond-海阔天空',singer:'Beyond',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/Beyond-海阔天空.mp3',img_url:'./img/04.jpg',},
{name:'Beyond-喜欢你',singer:'Beyond',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/Beyond-喜欢你.mp3',img_url:'./img/05.jpg',},
{name:'Beyond-真的爱你',singer:'Beyond',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/Beyond-真的爱你.mp3',img_url:'./img/01.jpg',},
{name:'Dana Winner-Moonlight Shadow',singer:'Dana Winner',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/Dana Winner-Moonlight Shadow.mp3',img_url:'./img/02.jpg',},
{name:'DemiLovato-LetItGo',singer:'DemiLovato',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/DemiLovato-LetItGo.mp3',img_url:'./img/03.jpg',},
{name:'DJ小鱼儿-黑桃A',singer:'DJ小鱼儿',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/DJ小鱼儿-黑桃A.mp3',img_url:'./img/04.jpg',},
{name:'EdSheeran-ShapeOfYou',singer:'EdSheeran',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/EdSheeran-ShapeOfYou.mp3',img_url:'./img/05.jpg',},
{name:'Ella[陈嘉桦]-都几岁了',singer:'Ella[陈嘉桦]',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/Ella[陈嘉桦]-都几岁了.mp3',img_url:'./img/01.jpg',},
{name:'Enya-May It Be',singer:'Enya',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/Enya-May It Be.mp3',img_url:'./img/02.jpg',},
{name:'en-嚣张',singer:'en',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/en-嚣张.mp3',img_url:'./img/03.jpg',},
{name:'F4-流星雨',singer:'F4',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/F4-流星雨.mp3',img_url:'./img/04.jpg',},
{name:'HITA-赤伶',singer:'HITA',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/HITA-赤伶.mp3',img_url:'./img/05.jpg',},
{name:'HITA-牵丝戏',singer:'HITA',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/HITA-牵丝戏.mp3',img_url:'./img/01.jpg',},
{name:'HITA-水龙吟',singer:'HITA',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/HITA-水龙吟.mp3',img_url:'./img/02.jpg',},
{name:'HITA-昔言',singer:'HITA',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/HITA-昔言.mp3',img_url:'./img/03.jpg',},
{name:'HITA-长恨歌',singer:'HITA',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/HITA-长恨歌.mp3',img_url:'./img/04.jpg',},
{name:'Justin Bieber Luis Fonsi Daddy Yankee-Despacito(Remix)',singer:'Justin Bieber Luis Fonsi Daddy Yankee',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/Justin Bieber Luis Fonsi Daddy Yankee-Despacito(Remix).mp3',img_url:'./img/05.jpg',},
{name:'JustinBieber-Baby',singer:'JustinBieber',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/JustinBieber-Baby.mp3',img_url:'./img/01.jpg',},
{name:'kiss-因为是女子',singer:'kiss',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/kiss-因为是女子.mp3',img_url:'./img/02.jpg',},
{name:'LBI利比（时柏尘）-跳楼机',singer:'LBI利比（时柏尘）',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/LBI利比（时柏尘）-跳楼机.mp3',img_url:'./img/03.jpg',},
{name:'LionelRichie-SayYouSayMe',singer:'LionelRichie',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/LionelRichie-SayYouSayMe.mp3',img_url:'./img/04.jpg',},
{name:'Luis Fonsi-Despacito',singer:'Luis Fonsi',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/Luis Fonsi-Despacito.mp3',img_url:'./img/05.jpg',},
{name:'MinnieRiperton-LovingYou',singer:'MinnieRiperton',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/MinnieRiperton-LovingYou.mp3',img_url:'./img/01.jpg',},
{name:'S.H.E-SuperStar',singer:'S.H.E',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/S.H.E-SuperStar.mp3',img_url:'./img/02.jpg',},
{name:'S.H.E-半糖主义',singer:'S.H.E',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/S.H.E-半糖主义.mp3',img_url:'./img/03.jpg',},
{name:'S.H.E-波斯猫',singer:'S.H.E',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/S.H.E-波斯猫.mp3',img_url:'./img/04.jpg',},
{name:'S.H.E-不想长大',singer:'S.H.E',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/S.H.E-不想长大.mp3',img_url:'./img/05.jpg',},
{name:'S.H.E-触电',singer:'S.H.E',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/S.H.E-触电.mp3',img_url:'./img/01.jpg',},
{name:'S.H.E-候鸟',singer:'S.H.E',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/S.H.E-候鸟.mp3',img_url:'./img/02.jpg',},
{name:'S.H.E-恋人未满',singer:'S.H.E',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/S.H.E-恋人未满.mp3',img_url:'./img/03.jpg',},
{name:'S.H.E-美丽新世界',singer:'S.H.E',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/S.H.E-美丽新世界.mp3',img_url:'./img/04.jpg',},
{name:'S.H.E-热带雨林',singer:'S.H.E',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/S.H.E-热带雨林.mp3',img_url:'./img/05.jpg',},
{name:'S.H.E-他还是不懂',singer:'S.H.E',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/S.H.E-他还是不懂.mp3',img_url:'./img/01.jpg',},
{name:'S.H.E-一眼万年',singer:'S.H.E',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/S.H.E-一眼万年.mp3',img_url:'./img/02.jpg',},
{name:'S.H.E-中国话',singer:'S.H.E',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/S.H.E-中国话.mp3',img_url:'./img/03.jpg',},
{name:'S.H.E-紫藤花',singer:'S.H.E',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/S.H.E-紫藤花.mp3',img_url:'./img/04.jpg',},
{name:'sarahBrightman-斯卡布罗集市',singer:'sarahBrightman',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/sarahBrightman-斯卡布罗集市.mp3',img_url:'./img/05.jpg',},
{name:'SarahCoonor-just one last dance',singer:'SarahCoonor',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/SarahCoonor-just one last dance.mp3',img_url:'./img/01.jpg',},
{name:'sara-爱很美',singer:'sara',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/sara-爱很美.mp3',img_url:'./img/02.jpg',},
{name:'Sweety-樱花草',singer:'Sweety',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/Sweety-樱花草.mp3',img_url:'./img/03.jpg',},
{name:'T.R.Y-不是因为寂寞才想你',singer:'T.R.Y',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/T.R.Y-不是因为寂寞才想你.mp3',img_url:'./img/04.jpg',},
{name:'T.R.Y-不要在我寂寞的时候说爱我',singer:'T.R.Y',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/T.R.Y-不要在我寂寞的时候说爱我.mp3',img_url:'./img/05.jpg',},
{name:'TFBOYS-青春修炼手册',singer:'TFBOYS',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/TFBOYS-青春修炼手册.mp3',img_url:'./img/01.jpg',},
{name:'Twins-莫斯科没有眼泪',singer:'Twins',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/Twins-莫斯科没有眼泪.mp3',img_url:'./img/02.jpg',},
{name:'Twins-下一站天后',singer:'Twins',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/Twins-下一站天后.mp3',img_url:'./img/03.jpg',},
{name:'Vitas-奉献',singer:'Vitas',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/Vitas-奉献.mp3',img_url:'./img/04.jpg',},
{name:'Vitas-歌剧2',singer:'Vitas',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/Vitas-歌剧2.mp3',img_url:'./img/05.jpg',},
{name:'Vitas-星星',singer:'Vitas',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/Vitas-星星.mp3',img_url:'./img/01.jpg',},
{name:'WAX-改变化装',singer:'WAX',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/WAX-改变化装.mp3',img_url:'./img/02.jpg',},
{name:'WAX-渴望爱情',singer:'WAX',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/WAX-渴望爱情.mp3',img_url:'./img/03.jpg',},
{name:'WAX-余情',singer:'WAX',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/WAX-余情.mp3',img_url:'./img/04.jpg',},
{name:'WhitneyHouston-IWillAlwaysLoveYou',singer:'WhitneyHouston',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/WhitneyHouston-IWillAlwaysLoveYou.mp3',img_url:'./img/05.jpg',},
{name:'WizKhalifa-See You Again',singer:'WizKhalifa',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/WizKhalifa-See You Again.mp3',img_url:'./img/01.jpg',},
{name:'阿YueYue-不负人间',singer:'阿YueYue',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/阿YueYue-不负人间.mp3',img_url:'./img/02.jpg',},
{name:'阿YueYue-云与海',singer:'阿YueYue',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/阿YueYue-云与海.mp3',img_url:'./img/03.jpg',},
{name:'阿杜-Andy',singer:'阿杜',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/阿杜-Andy.mp3',img_url:'./img/04.jpg',},
{name:'阿杜-坚持到底',singer:'阿杜',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/阿杜-坚持到底.mp3',img_url:'./img/05.jpg',},
{name:'阿杜-离别',singer:'阿杜',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/阿杜-离别.mp3',img_url:'./img/01.jpg',},
{name:'阿杜-撕夜',singer:'阿杜',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/阿杜-撕夜.mp3',img_url:'./img/02.jpg',},
{name:'阿杜-他一定很爱你',singer:'阿杜',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/阿杜-他一定很爱你.mp3',img_url:'./img/03.jpg',},
{name:'阿杜-天黑',singer:'阿杜',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/阿杜-天黑.mp3',img_url:'./img/04.jpg',},
{name:'阿梨粤-秒针',singer:'阿梨粤',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/阿梨粤-秒针.mp3',img_url:'./img/05.jpg',},
{name:'阿梨粤-晚风心里吹',singer:'阿梨粤',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/阿梨粤-晚风心里吹.mp3',img_url:'./img/01.jpg',},
{name:'阿木-有一种爱叫做放手',singer:'阿木',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/阿木-有一种爱叫做放手.mp3',img_url:'./img/02.jpg',},
{name:'阿悄-陪我去流浪',singer:'阿悄',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/阿悄-陪我去流浪.mp3',img_url:'./img/03.jpg',},
{name:'阿冗-你的答案',singer:'阿冗',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/阿冗-你的答案.mp3',img_url:'./img/04.jpg',},
{name:'阿桑-疯了',singer:'阿桑',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/阿桑-疯了.mp3',img_url:'./img/05.jpg',},
{name:'阿桑-寂寞在唱歌',singer:'阿桑',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/阿桑-寂寞在唱歌.mp3',img_url:'./img/01.jpg',},
{name:'阿桑-受了点伤',singer:'阿桑',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/阿桑-受了点伤.mp3',img_url:'./img/02.jpg',},
{name:'阿桑-叶子',singer:'阿桑',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/阿桑-叶子.mp3',img_url:'./img/03.jpg',},
{name:'阿桑-一直很安静',singer:'阿桑',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/阿桑-一直很安静.mp3',img_url:'./img/04.jpg',},
{name:'阿泱-氧气',singer:'阿泱',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/阿泱-氧气.mp3',img_url:'./img/05.jpg',},
{name:'阿悠悠-旧梦一场',singer:'阿悠悠',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/阿悠悠-旧梦一场.mp3',img_url:'./img/01.jpg',},
{name:'阿悠悠-你若三冬',singer:'阿悠悠',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/阿悠悠-你若三冬.mp3',img_url:'./img/02.jpg',},
{name:'艾辰-错位时空',singer:'艾辰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/艾辰-错位时空.mp3',img_url:'./img/03.jpg',},
{name:'艾辰-他他他',singer:'艾辰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/艾辰-他他他.mp3',img_url:'./img/04.jpg',},
{name:'艾可薇 -没出息',singer:'艾可薇 ',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/艾可薇 -没出息.mp3',img_url:'./img/05.jpg',},
{name:'爱乐团王超-放开',singer:'爱乐团王超',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/爱乐团王超-放开.mp3',img_url:'./img/01.jpg',},
{name:'安琥-天使的翅膀',singer:'安琥',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/安琥-天使的翅膀.mp3',img_url:'./img/02.jpg',},
{name:'白鹿-临江仙',singer:'白鹿',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/白鹿-临江仙.mp3',img_url:'./img/03.jpg',},
{name:'半阳-一曲相思',singer:'半阳',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/半阳-一曲相思.mp3',img_url:'./img/04.jpg',},
{name:'伯爵Johnny 唐伯虎Annie-西厢寻他',singer:'伯爵Johnny 唐伯虎Annie',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/伯爵Johnny 唐伯虎Annie-西厢寻他.mp3',img_url:'./img/05.jpg',},
{name:'不才-化身孤岛的鲸',singer:'不才',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/不才-化身孤岛的鲸.mp3',img_url:'./img/01.jpg',},
{name:'不是鱼-今生啊多相见',singer:'不是鱼',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/不是鱼-今生啊多相见.mp3',img_url:'./img/02.jpg',},
{name:'布兰妮-BabyOneMoreTime',singer:'布兰妮',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/布兰妮-BabyOneMoreTime.mp3',img_url:'./img/03.jpg',},
{name:'布兰妮-everytime',singer:'布兰妮',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/布兰妮-everytime.mp3',img_url:'./img/04.jpg',},
{name:'蔡淳佳-依恋',singer:'蔡淳佳',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/蔡淳佳-依恋.mp3',img_url:'./img/05.jpg',},
{name:'蔡国权-不装饰你的梦',singer:'蔡国权',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/蔡国权-不装饰你的梦.mp3',img_url:'./img/01.jpg',},
{name:'蔡国权-顺流逆流',singer:'蔡国权',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/蔡国权-顺流逆流.mp3',img_url:'./img/02.jpg',},
{name:'蔡健雅-Letting Go',singer:'蔡健雅',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/蔡健雅-Letting Go.mp3',img_url:'./img/03.jpg',},
{name:'蔡健雅-红色高跟鞋',singer:'蔡健雅',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/蔡健雅-红色高跟鞋.mp3',img_url:'./img/04.jpg',},
{name:'蔡健雅-无底洞',singer:'蔡健雅',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/蔡健雅-无底洞.mp3',img_url:'./img/05.jpg',},
{name:'蔡琴-把悲伤留给自己',singer:'蔡琴',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/蔡琴-把悲伤留给自己.mp3',img_url:'./img/01.jpg',},
{name:'蔡琴-被遺忘的時光',singer:'蔡琴',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/蔡琴-被遺忘的時光.mp3',img_url:'./img/02.jpg',},
{name:'蔡幸娟-问情',singer:'蔡幸娟',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/蔡幸娟-问情.mp3',img_url:'./img/03.jpg',},
{name:'蔡徐坤-WaitWaitWait',singer:'蔡徐坤',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/蔡徐坤-WaitWaitWait.mp3',img_url:'./img/04.jpg',},
{name:'蔡妍-摇摆',singer:'蔡妍',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/蔡妍-摇摆.mp3',img_url:'./img/05.jpg',},
{name:'蔡依林 陶喆-今天你要嫁给我',singer:'蔡依林 陶喆',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/蔡依林 陶喆-今天你要嫁给我.mp3',img_url:'./img/01.jpg',},
{name:'蔡依林 周杰伦-海盗',singer:'蔡依林 周杰伦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/蔡依林 周杰伦-海盗.mp3',img_url:'./img/02.jpg',},
{name:'蔡依林-LOVELOVELOVE',singer:'蔡依林',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/蔡依林-LOVELOVELOVE.mp3',img_url:'./img/03.jpg',},
{name:'蔡依林-爱情三十六计',singer:'蔡依林',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/蔡依林-爱情三十六计.mp3',img_url:'./img/04.jpg',},
{name:'蔡依林-布拉格广场',singer:'蔡依林',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/蔡依林-布拉格广场.mp3',img_url:'./img/05.jpg',},
{name:'蔡依林-看我72变',singer:'蔡依林',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/蔡依林-看我72变.mp3',img_url:'./img/01.jpg',},
{name:'蔡依林-日不落',singer:'蔡依林',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/蔡依林-日不落.mp3',img_url:'./img/02.jpg',},
{name:'蔡依林-说爱你',singer:'蔡依林',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/蔡依林-说爱你.mp3',img_url:'./img/03.jpg',},
{name:'蔡依林-我知道你很难过',singer:'蔡依林',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/蔡依林-我知道你很难过.mp3',img_url:'./img/04.jpg',},
{name:'蔡依林-舞娘',singer:'蔡依林',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/蔡依林-舞娘.mp3',img_url:'./img/05.jpg',},
{name:'曹格 卓文萱-梁山伯与茱丽叶',singer:'曹格 卓文萱',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/曹格 卓文萱-梁山伯与茱丽叶.mp3',img_url:'./img/01.jpg',},
{name:'草蜢-宝贝对不起',singer:'草蜢',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/草蜢-宝贝对不起.mp3',img_url:'./img/02.jpg',},
{name:'草蜢-失恋阵线联盟',singer:'草蜢',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/草蜢-失恋阵线联盟.mp3',img_url:'./img/03.jpg',},
{name:'岑宁儿-追光者',singer:'岑宁儿',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/岑宁儿-追光者.mp3',img_url:'./img/04.jpg',},
{name:'岑雨桥 萧全-触电(爱的魔力转圈圈)',singer:'岑雨桥 萧全',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/岑雨桥 萧全-触电(爱的魔力转圈圈).mp3',img_url:'./img/05.jpg',},
{name:'曾春年-最幸福的人',singer:'曾春年',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/曾春年-最幸福的人.mp3',img_url:'./img/01.jpg',},
{name:'陈百强-偏偏喜欢你',singer:'陈百强',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈百强-偏偏喜欢你.mp3',img_url:'./img/02.jpg',},
{name:'陈百强-一生何求',singer:'陈百强',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈百强-一生何求.mp3',img_url:'./img/03.jpg',},
{name:'陈楚生-有没有人告诉你',singer:'陈楚生',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈楚生-有没有人告诉你.mp3',img_url:'./img/04.jpg',},
{name:'陈妃平-永远到底有多远',singer:'陈妃平',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈妃平-永远到底有多远.mp3',img_url:'./img/05.jpg',},
{name:'陈冠蒲-就让你走',singer:'陈冠蒲',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈冠蒲-就让你走.mp3',img_url:'./img/01.jpg',},
{name:'陈冠蒲-太多',singer:'陈冠蒲',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈冠蒲-太多.mp3',img_url:'./img/02.jpg',},
{name:'陈光荣-再见...警察...再见',singer:'陈光荣',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈光荣-再见...警察...再见.mp3',img_url:'./img/03.jpg',},
{name:'陈红-走过长安街',singer:'陈红',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈红-走过长安街.mp3',img_url:'./img/04.jpg',},
{name:'陈慧琳-不如跳舞',singer:'陈慧琳',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈慧琳-不如跳舞.mp3',img_url:'./img/05.jpg',},
{name:'陈慧琳-花花宇宙',singer:'陈慧琳',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈慧琳-花花宇宙.mp3',img_url:'./img/01.jpg',},
{name:'陈慧琳-记事本',singer:'陈慧琳',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈慧琳-记事本.mp3',img_url:'./img/02.jpg',},
{name:'陈慧娴-千千阙歌',singer:'陈慧娴',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈慧娴-千千阙歌.mp3',img_url:'./img/03.jpg',},
{name:'陈慧娴-人生何处不相逢',singer:'陈慧娴',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈慧娴-人生何处不相逢.mp3',img_url:'./img/04.jpg',},
{name:'陈乐基-月半小夜曲',singer:'陈乐基',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈乐基-月半小夜曲.mp3',img_url:'./img/05.jpg',},
{name:'陈琳-爱就爱了',singer:'陈琳',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈琳-爱就爱了.mp3',img_url:'./img/01.jpg',},
{name:'陈琳-你的柔情我永远不懂',singer:'陈琳',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈琳-你的柔情我永远不懂.mp3',img_url:'./img/02.jpg',},
{name:'陈明-等你爱我',singer:'陈明',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈明-等你爱我.mp3',img_url:'./img/03.jpg',},
{name:'陈明-快乐老家',singer:'陈明',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈明-快乐老家.mp3',img_url:'./img/04.jpg',},
{name:'陈明-为你',singer:'陈明',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈明-为你.mp3',img_url:'./img/05.jpg',},
{name:'陈明-我要找到你',singer:'陈明',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈明-我要找到你.mp3',img_url:'./img/01.jpg',},
{name:'陈明真-变心的翅膀',singer:'陈明真',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈明真-变心的翅膀.mp3',img_url:'./img/02.jpg',},
{name:'陈明真-到哪里找那么好的人',singer:'陈明真',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈明真-到哪里找那么好的人.mp3',img_url:'./img/03.jpg',},
{name:'陈明真-我用自己的方式爱你',singer:'陈明真',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈明真-我用自己的方式爱你.mp3',img_url:'./img/04.jpg',},
{name:'陈瑞-白狐',singer:'陈瑞',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈瑞-白狐.mp3',img_url:'./img/05.jpg',},
{name:'陈升 刘佳慧-北京一夜',singer:'陈升 刘佳慧',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈升 刘佳慧-北京一夜.mp3',img_url:'./img/01.jpg',},
{name:'陈淑桦-梦醒时分',singer:'陈淑桦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈淑桦-梦醒时分.mp3',img_url:'./img/02.jpg',},
{name:'陈淑桦-情关',singer:'陈淑桦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈淑桦-情关.mp3',img_url:'./img/03.jpg',},
{name:'陈淑桦-笑红尘',singer:'陈淑桦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈淑桦-笑红尘.mp3',img_url:'./img/04.jpg',},
{name:'陈伟霆 宝石Gem-野狼Disco',singer:'陈伟霆 宝石Gem',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈伟霆 宝石Gem-野狼Disco.mp3',img_url:'./img/05.jpg',},
{name:'陈小春-独家记忆',singer:'陈小春',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈小春-独家记忆.mp3',img_url:'./img/01.jpg',},
{name:'陈小春-街角的晚风',singer:'陈小春',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈小春-街角的晚风.mp3',img_url:'./img/02.jpg',},
{name:'陈小春-没那种命',singer:'陈小春',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈小春-没那种命.mp3',img_url:'./img/03.jpg',},
{name:'陈小春-你好毒',singer:'陈小春',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈小春-你好毒.mp3',img_url:'./img/04.jpg',},
{name:'陈小春-神啊救救我',singer:'陈小春',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈小春-神啊救救我.mp3',img_url:'./img/05.jpg',},
{name:'陈小春-算你狠',singer:'陈小春',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈小春-算你狠.mp3',img_url:'./img/01.jpg',},
{name:'陈晓东-比我幸福',singer:'陈晓东',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈晓东-比我幸福.mp3',img_url:'./img/02.jpg',},
{name:'陈旭-哥只是个传说',singer:'陈旭',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈旭-哥只是个传说.mp3',img_url:'./img/03.jpg',},
{name:'陈雪凝-绿色',singer:'陈雪凝',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈雪凝-绿色.mp3',img_url:'./img/04.jpg',},
{name:'陈雪凝-你的酒馆对我打了烊',singer:'陈雪凝',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈雪凝-你的酒馆对我打了烊.mp3',img_url:'./img/05.jpg',},
{name:'陈雅森-下辈子不一定还能遇见你',singer:'陈雅森',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈雅森-下辈子不一定还能遇见你.mp3',img_url:'./img/01.jpg',},
{name:'陈奕迅 王菲-因为爱情',singer:'陈奕迅 王菲',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈奕迅 王菲-因为爱情.mp3',img_url:'./img/02.jpg',},
{name:'陈奕迅-K歌之王',singer:'陈奕迅',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈奕迅-K歌之王.mp3',img_url:'./img/03.jpg',},
{name:'陈奕迅-爱情转移',singer:'陈奕迅',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈奕迅-爱情转移.mp3',img_url:'./img/04.jpg',},
{name:'陈奕迅-浮夸',singer:'陈奕迅',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈奕迅-浮夸.mp3',img_url:'./img/05.jpg',},
{name:'陈奕迅-富士山下',singer:'陈奕迅',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈奕迅-富士山下.mp3',img_url:'./img/01.jpg',},
{name:'陈奕迅-孤勇者',singer:'陈奕迅',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈奕迅-孤勇者.mp3',img_url:'./img/02.jpg',},
{name:'陈奕迅-好久不见',singer:'陈奕迅',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈奕迅-好久不见.mp3',img_url:'./img/03.jpg',},
{name:'陈奕迅-十年',singer:'陈奕迅',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈奕迅-十年.mp3',img_url:'./img/04.jpg',},
{name:'陈卓璇-八日蝉鸣',singer:'陈卓璇',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陈卓璇-八日蝉鸣.mp3',img_url:'./img/05.jpg',},
{name:'成都永哥-爱过的你',singer:'成都永哥',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/成都永哥-爱过的你.mp3',img_url:'./img/01.jpg',},
{name:'成都永哥-撤退',singer:'成都永哥',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/成都永哥-撤退.mp3',img_url:'./img/02.jpg',},
{name:'成龙 陈淑桦-明明白白我的心',singer:'成龙 陈淑桦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/成龙 陈淑桦-明明白白我的心.mp3',img_url:'./img/03.jpg',},
{name:'成龙 范晓萱-身不由己',singer:'成龙 范晓萱',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/成龙 范晓萱-身不由己.mp3',img_url:'./img/04.jpg',},
{name:'成龙 金喜善-无尽的爱',singer:'成龙 金喜善',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/成龙 金喜善-无尽的爱.mp3',img_url:'./img/05.jpg',},
{name:'成龙 李宗盛 周华健-真心英雄',singer:'成龙 李宗盛 周华健',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/成龙 李宗盛 周华健-真心英雄.mp3',img_url:'./img/01.jpg',},
{name:'成龙 苏慧伦-在我生命中的每一天',singer:'成龙 苏慧伦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/成龙 苏慧伦-在我生命中的每一天.mp3',img_url:'./img/02.jpg',},
{name:'成龙-男儿当自强',singer:'成龙',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/成龙-男儿当自强.mp3',img_url:'./img/03.jpg',},
{name:'成龙-你给我一片天',singer:'成龙',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/成龙-你给我一片天.mp3',img_url:'./img/04.jpg',},
{name:'成龙-普通人',singer:'成龙',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/成龙-普通人.mp3',img_url:'./img/05.jpg',},
{name:'成龙-万里长城永不倒',singer:'成龙',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/成龙-万里长城永不倒.mp3',img_url:'./img/01.jpg',},
{name:'成龙-问心无愧',singer:'成龙',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/成龙-问心无愧.mp3',img_url:'./img/02.jpg',},
{name:'成龙-我是谁',singer:'成龙',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/成龙-我是谁.mp3',img_url:'./img/03.jpg',},
{name:'成龙-相信自己',singer:'成龙',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/成龙-相信自己.mp3',img_url:'./img/04.jpg',},
{name:'成龙-英雄故事',singer:'成龙',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/成龙-英雄故事.mp3',img_url:'./img/05.jpg',},
{name:'成龙-油菜花',singer:'成龙',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/成龙-油菜花.mp3',img_url:'./img/01.jpg',},
{name:'成龙-真的用了心',singer:'成龙',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/成龙-真的用了心.mp3',img_url:'./img/02.jpg',},
{name:'成龙-壮志在我胸',singer:'成龙',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/成龙-壮志在我胸.mp3',img_url:'./img/03.jpg',},
{name:'成龙-醉拳',singer:'成龙',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/成龙-醉拳.mp3',img_url:'./img/04.jpg',},
{name:'承桓-爱过的你',singer:'承桓',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/承桓-爱过的你.mp3',img_url:'./img/05.jpg',},
{name:'承桓-撤退',singer:'承桓',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/承桓-撤退.mp3',img_url:'./img/01.jpg',},
{name:'承桓-婚纱',singer:'承桓',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/承桓-婚纱.mp3',img_url:'./img/02.jpg',},
{name:'承桓-他他他',singer:'承桓',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/承桓-他他他.mp3',img_url:'./img/03.jpg',},
{name:'承桓-我明明那么好',singer:'承桓',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/承桓-我明明那么好.mp3',img_url:'./img/04.jpg',},
{name:'承桓-座位',singer:'承桓',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/承桓-座位.mp3',img_url:'./img/05.jpg',},
{name:'程琳-信天游',singer:'程琳',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/程琳-信天游.mp3',img_url:'./img/01.jpg',},
{name:'程响-等你归来',singer:'程响',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/程响-等你归来.mp3',img_url:'./img/02.jpg',},
{name:'程响-可能',singer:'程响',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/程响-可能.mp3',img_url:'./img/03.jpg',},
{name:'程响-人间烟火',singer:'程响',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/程响-人间烟火.mp3',img_url:'./img/04.jpg',},
{name:'程响-时光洪流',singer:'程响',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/程响-时光洪流.mp3',img_url:'./img/05.jpg',},
{name:'程响-世界这么大还是遇见你',singer:'程响',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/程响-世界这么大还是遇见你.mp3',img_url:'./img/01.jpg',},
{name:'程响-四季予你',singer:'程响',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/程响-四季予你.mp3',img_url:'./img/02.jpg',},
{name:'初音未来-甩葱歌',singer:'初音未来',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/初音未来-甩葱歌.mp3',img_url:'./img/03.jpg',},
{name:'川青-下潜',singer:'川青',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/川青-下潜.mp3',img_url:'./img/04.jpg',},
{name:'崔子格-卜卦',singer:'崔子格',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/崔子格-卜卦.mp3',img_url:'./img/05.jpg',},
{name:'大欢-三生石下',singer:'大欢',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/大欢-三生石下.mp3',img_url:'./img/01.jpg',},
{name:'大鹏-都选C',singer:'大鹏',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/大鹏-都选C.mp3',img_url:'./img/02.jpg',},
{name:'大张伟-倍儿爽',singer:'大张伟',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/大张伟-倍儿爽.mp3',img_url:'./img/03.jpg',},
{name:'大张伟-我怎么这么好看',singer:'大张伟',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/大张伟-我怎么这么好看.mp3',img_url:'./img/04.jpg',},
{name:'大冢爱-桃ノ花ビラ',singer:'大冢爱',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/大冢爱-桃ノ花ビラ.mp3',img_url:'./img/05.jpg',},
{name:'大壮-我们不一样',singer:'大壮',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/大壮-我们不一样.mp3',img_url:'./img/01.jpg',},
{name:'大籽-白月光与朱砂痣',singer:'大籽',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/大籽-白月光与朱砂痣.mp3',img_url:'./img/02.jpg',},
{name:'戴佩妮-爱疯了',singer:'戴佩妮',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/戴佩妮-爱疯了.mp3',img_url:'./img/03.jpg',},
{name:'戴佩妮-街角的祝福',singer:'戴佩妮',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/戴佩妮-街角的祝福.mp3',img_url:'./img/04.jpg',},
{name:'戴佩妮-你要的爱',singer:'戴佩妮',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/戴佩妮-你要的爱.mp3',img_url:'./img/05.jpg',},
{name:'戴佩妮-怎样',singer:'戴佩妮',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/戴佩妮-怎样.mp3',img_url:'./img/01.jpg',},
{name:'戴羽彤-来迟',singer:'戴羽彤',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/戴羽彤-来迟.mp3',img_url:'./img/02.jpg',},
{name:'刀郎-2002年的第一场雪',singer:'刀郎',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/刀郎-2002年的第一场雪.mp3',img_url:'./img/03.jpg',},
{name:'刀郎-爱是你我',singer:'刀郎',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/刀郎-爱是你我.mp3',img_url:'./img/04.jpg',},
{name:'刀郎-冲动的惩罚',singer:'刀郎',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/刀郎-冲动的惩罚.mp3',img_url:'./img/05.jpg',},
{name:'刀郎-披着羊皮的狼',singer:'刀郎',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/刀郎-披着羊皮的狼.mp3',img_url:'./img/01.jpg',},
{name:'刀郎-情人',singer:'刀郎',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/刀郎-情人.mp3',img_url:'./img/02.jpg',},
{name:'刀郎-西海情歌',singer:'刀郎',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/刀郎-西海情歌.mp3',img_url:'./img/03.jpg',},
{name:'等什么君-赤伶',singer:'等什么君',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/等什么君-赤伶.mp3',img_url:'./img/04.jpg',},
{name:'等什么君-关山酒',singer:'等什么君',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/等什么君-关山酒.mp3',img_url:'./img/05.jpg',},
{name:'等什么君-江湖策马',singer:'等什么君',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/等什么君-江湖策马.mp3',img_url:'./img/01.jpg',},
{name:'等什么君-踏雪',singer:'等什么君',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/等什么君-踏雪.mp3',img_url:'./img/02.jpg',},
{name:'等什么君-一花一剑',singer:'等什么君',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/等什么君-一花一剑.mp3',img_url:'./img/03.jpg',},
{name:'邓丽君-独上西楼',singer:'邓丽君',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/邓丽君-独上西楼.mp3',img_url:'./img/04.jpg',},
{name:'邓丽君-漫步人生路',singer:'邓丽君',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/邓丽君-漫步人生路.mp3',img_url:'./img/05.jpg',},
{name:'邓丽君-甜蜜蜜',singer:'邓丽君',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/邓丽君-甜蜜蜜.mp3',img_url:'./img/01.jpg',},
{name:'邓丽君-我只在乎你',singer:'邓丽君',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/邓丽君-我只在乎你.mp3',img_url:'./img/02.jpg',},
{name:'邓丽君-小城故事',singer:'邓丽君',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/邓丽君-小城故事.mp3',img_url:'./img/03.jpg',},
{name:'邓丽君-月亮代表我的心',singer:'邓丽君',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/邓丽君-月亮代表我的心.mp3',img_url:'./img/04.jpg',},
{name:'邓丽欣 方力申-十分爱',singer:'邓丽欣 方力申',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/邓丽欣 方力申-十分爱.mp3',img_url:'./img/05.jpg',},
{name:'邓紫棋-倒数',singer:'邓紫棋',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/邓紫棋-倒数.mp3',img_url:'./img/01.jpg',},
{name:'邓紫棋-多远都要在一起',singer:'邓紫棋',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/邓紫棋-多远都要在一起.mp3',img_url:'./img/02.jpg',},
{name:'邓紫棋-光年之外',singer:'邓紫棋',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/邓紫棋-光年之外.mp3',img_url:'./img/03.jpg',},
{name:'邓紫棋-来自天堂的魔鬼',singer:'邓紫棋',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/邓紫棋-来自天堂的魔鬼.mp3',img_url:'./img/04.jpg',},
{name:'邓紫棋-你把我灌醉',singer:'邓紫棋',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/邓紫棋-你把我灌醉.mp3',img_url:'./img/05.jpg',},
{name:'邓紫棋-泡沫',singer:'邓紫棋',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/邓紫棋-泡沫.mp3',img_url:'./img/01.jpg',},
{name:'邓紫棋-桃花诺',singer:'邓紫棋',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/邓紫棋-桃花诺.mp3',img_url:'./img/02.jpg',},
{name:'邓紫棋-喜欢你',singer:'邓紫棋',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/邓紫棋-喜欢你.mp3',img_url:'./img/03.jpg',},
{name:'迪克牛仔-有多少爱可以重来',singer:'迪克牛仔',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/迪克牛仔-有多少爱可以重来.mp3',img_url:'./img/04.jpg',},
{name:'迪丽热巴 汪苏泷-偏偏',singer:'迪丽热巴 汪苏泷',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/迪丽热巴 汪苏泷-偏偏.mp3',img_url:'./img/05.jpg',},
{name:'电影原声-沧海一声笑',singer:'电影原声',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/电影原声-沧海一声笑.mp3',img_url:'./img/01.jpg',},
{name:'刁寒-花好月圆',singer:'刁寒',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/刁寒-花好月圆.mp3',img_url:'./img/02.jpg',},
{name:'丁当-猜不透',singer:'丁当',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/丁当-猜不透.mp3',img_url:'./img/03.jpg',},
{name:'丁当-手掌心',singer:'丁当',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/丁当-手掌心.mp3',img_url:'./img/04.jpg',},
{name:'冬季恋歌-从开始到现在',singer:'冬季恋歌',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/冬季恋歌-从开始到现在.mp3',img_url:'./img/05.jpg',},
{name:'动力火车-背叛情歌',singer:'动力火车',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/动力火车-背叛情歌.mp3',img_url:'./img/01.jpg',},
{name:'动力火车-当',singer:'动力火车',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/动力火车-当.mp3',img_url:'./img/02.jpg',},
{name:'动力火车-第一滴泪',singer:'动力火车',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/动力火车-第一滴泪.mp3',img_url:'./img/03.jpg',},
{name:'动力火车-明天的明天的明天',singer:'动力火车',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/动力火车-明天的明天的明天.mp3',img_url:'./img/04.jpg',},
{name:'动力火车-那就这样吧',singer:'动力火车',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/动力火车-那就这样吧.mp3',img_url:'./img/05.jpg',},
{name:'动力火车-无情的情书',singer:'动力火车',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/动力火车-无情的情书.mp3',img_url:'./img/01.jpg',},
{name:'动力火车-忠孝东路走九遍',singer:'动力火车',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/动力火车-忠孝东路走九遍.mp3',img_url:'./img/02.jpg',},
{name:'杜德伟-情人',singer:'杜德伟',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/杜德伟-情人.mp3',img_url:'./img/03.jpg',},
{name:'樊凡-等不到的爱',singer:'樊凡',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/樊凡-等不到的爱.mp3',img_url:'./img/04.jpg',},
{name:'樊凡-燃烧翅膀',singer:'樊凡',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/樊凡-燃烧翅膀.mp3',img_url:'./img/05.jpg',},
{name:'范玮琪-是非题',singer:'范玮琪',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/范玮琪-是非题.mp3',img_url:'./img/01.jpg',},
{name:'范玮琪-我们的纪念日',singer:'范玮琪',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/范玮琪-我们的纪念日.mp3',img_url:'./img/02.jpg',},
{name:'范玮琪-一个像夏天一个像秋天',singer:'范玮琪',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/范玮琪-一个像夏天一个像秋天.mp3',img_url:'./img/03.jpg',},
{name:'范玮琪-最初的梦想',singer:'范玮琪',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/范玮琪-最初的梦想.mp3',img_url:'./img/04.jpg',},
{name:'范玮琪-最重要的决定',singer:'范玮琪',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/范玮琪-最重要的决定.mp3',img_url:'./img/05.jpg',},
{name:'范晓萱-雪人',singer:'范晓萱',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/范晓萱-雪人.mp3',img_url:'./img/01.jpg',},
{name:'范逸臣-放生',singer:'范逸臣',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/范逸臣-放生.mp3',img_url:'./img/02.jpg',},
{name:'房东的猫-云烟成雨',singer:'房东的猫',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/房东的猫-云烟成雨.mp3',img_url:'./img/03.jpg',},
{name:'飞儿乐团-Lydia',singer:'飞儿乐团',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/飞儿乐团-Lydia.mp3',img_url:'./img/04.jpg',},
{name:'飞儿乐团-你的微笑',singer:'飞儿乐团',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/飞儿乐团-你的微笑.mp3',img_url:'./img/05.jpg',},
{name:'飞儿乐团-千年之恋',singer:'飞儿乐团',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/飞儿乐团-千年之恋.mp3',img_url:'./img/01.jpg',},
{name:'飞儿乐团-我们的爱',singer:'飞儿乐团',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/飞儿乐团-我们的爱.mp3',img_url:'./img/02.jpg',},
{name:'飞儿乐团-月牙湾',singer:'飞儿乐团',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/飞儿乐团-月牙湾.mp3',img_url:'./img/03.jpg',},
{name:'飞轮海 田馥甄-只对你有感觉',singer:'飞轮海 田馥甄',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/飞轮海 田馥甄-只对你有感觉.mp3',img_url:'./img/04.jpg',},
{name:'费玉清-梦驼铃',singer:'费玉清',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/费玉清-梦驼铃.mp3',img_url:'./img/05.jpg',},
{name:'费玉清-一剪梅',singer:'费玉清',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/费玉清-一剪梅.mp3',img_url:'./img/01.jpg',},
{name:'冯晓泉-冰糖葫芦',singer:'冯晓泉',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/冯晓泉-冰糖葫芦.mp3',img_url:'./img/02.jpg',},
{name:'凤飞飞-莫让红颜守空尘',singer:'凤飞飞',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/凤飞飞-莫让红颜守空尘.mp3',img_url:'./img/03.jpg',},
{name:'凤飞飞-追梦人',singer:'凤飞飞',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/凤飞飞-追梦人.mp3',img_url:'./img/04.jpg',},
{name:'凤凰传奇-海底（Live）',singer:'凤凰传奇',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/凤凰传奇-海底（Live）.mp3',img_url:'./img/05.jpg',},
{name:'凤凰传奇-荷塘月色',singer:'凤凰传奇',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/凤凰传奇-荷塘月色.mp3',img_url:'./img/01.jpg',},
{name:'凤凰传奇-奢香夫人',singer:'凤凰传奇',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/凤凰传奇-奢香夫人.mp3',img_url:'./img/02.jpg',},
{name:'凤凰传奇-我从草原来',singer:'凤凰传奇',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/凤凰传奇-我从草原来.mp3',img_url:'./img/03.jpg',},
{name:'凤凰传奇-月亮之上',singer:'凤凰传奇',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/凤凰传奇-月亮之上.mp3',img_url:'./img/04.jpg',},
{name:'凤凰传奇-自由飞翔',singer:'凤凰传奇',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/凤凰传奇-自由飞翔.mp3',img_url:'./img/05.jpg',},
{name:'付笛声 任静-知心爱人',singer:'付笛声 任静',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/付笛声 任静-知心爱人.mp3',img_url:'./img/01.jpg',},
{name:'甘萍-潮湿的心',singer:'甘萍',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/甘萍-潮湿的心.mp3',img_url:'./img/02.jpg',},
{name:'高安,黑鸭子-红尘情歌',singer:'高安,黑鸭子',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/高安,黑鸭子-红尘情歌.mp3',img_url:'./img/03.jpg',},
{name:'高慧君 张学友-你最珍贵',singer:'高慧君 张学友',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/高慧君 张学友-你最珍贵.mp3',img_url:'./img/04.jpg',},
{name:'高进-别想她',singer:'高进',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/高进-别想她.mp3',img_url:'./img/05.jpg',},
{name:'高林生-牵挂你的人是我',singer:'高林生',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/高林生-牵挂你的人是我.mp3',img_url:'./img/01.jpg',},
{name:'高胜美 左宏元-渡情',singer:'高胜美 左宏元',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/高胜美 左宏元-渡情.mp3',img_url:'./img/02.jpg',},
{name:'高胜美-千年等一回',singer:'高胜美',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/高胜美-千年等一回.mp3',img_url:'./img/03.jpg',},
{name:'高胜美-青青河边草',singer:'高胜美',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/高胜美-青青河边草.mp3',img_url:'./img/04.jpg',},
{name:'高晓松-一个北京人在北京',singer:'高晓松',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/高晓松-一个北京人在北京.mp3',img_url:'./img/05.jpg',},
{name:'格格-火苗',singer:'格格',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/格格-火苗.mp3',img_url:'./img/01.jpg',},
{name:'葛东琪-悬溺',singer:'葛东琪',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/葛东琪-悬溺.mp3',img_url:'./img/02.jpg',},
{name:'贡维特-想你想到眼泪流',singer:'贡维特',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/贡维特-想你想到眼泪流.mp3',img_url:'./img/03.jpg',},
{name:'古巨基-好想好想',singer:'古巨基',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/古巨基-好想好想.mp3',img_url:'./img/04.jpg',},
{name:'谷村新司-风姿花传',singer:'谷村新司',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/谷村新司-风姿花传.mp3',img_url:'./img/05.jpg',},
{name:'关淑怡-难得有情人',singer:'关淑怡',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/关淑怡-难得有情人.mp3',img_url:'./img/01.jpg',},
{name:'关喆-想你的夜',singer:'关喆',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/关喆-想你的夜.mp3',img_url:'./img/02.jpg',},
{name:'光良-第一次',singer:'光良',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/光良-第一次.mp3',img_url:'./img/03.jpg',},
{name:'光良-都是你',singer:'光良',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/光良-都是你.mp3',img_url:'./img/04.jpg',},
{name:'光良-童话',singer:'光良',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/光良-童话.mp3',img_url:'./img/05.jpg',},
{name:'光头李进-你在他乡还好吗',singer:'光头李进',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/光头李进-你在他乡还好吗.mp3',img_url:'./img/01.jpg',},
{name:'郭富城-动起来',singer:'郭富城',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/郭富城-动起来.mp3',img_url:'./img/02.jpg',},
{name:'郭富城-对你爱不完',singer:'郭富城',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/郭富城-对你爱不完.mp3',img_url:'./img/03.jpg',},
{name:'郭富城-我是不是该安静的走开',singer:'郭富城',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/郭富城-我是不是该安静的走开.mp3',img_url:'./img/04.jpg',},
{name:'郭富城-樱花之恋',singer:'郭富城',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/郭富城-樱花之恋.mp3',img_url:'./img/05.jpg',},
{name:'郭美美-爱情女神',singer:'郭美美',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/郭美美-爱情女神.mp3',img_url:'./img/01.jpg',},
{name:'郭美美-不怕不怕',singer:'郭美美',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/郭美美-不怕不怕.mp3',img_url:'./img/02.jpg',},
{name:'郭沁 周深-大鱼',singer:'郭沁 周深',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/郭沁 周深-大鱼.mp3',img_url:'./img/03.jpg',},
{name:'郭沁-紫',singer:'郭沁',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/郭沁-紫.mp3',img_url:'./img/04.jpg',},
{name:'国风新语 浮生梦 汐音社-探窗',singer:'国风新语 浮生梦 汐音社',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/国风新语 浮生梦 汐音社-探窗.mp3',img_url:'./img/05.jpg',},
{name:'海来阿木-浮生记',singer:'海来阿木',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/海来阿木-浮生记.mp3',img_url:'./img/01.jpg',},
{name:'海伦-桥边姑娘',singer:'海伦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/海伦-桥边姑娘.mp3',img_url:'./img/02.jpg',},
{name:'海伦-游山恋',singer:'海伦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/海伦-游山恋.mp3',img_url:'./img/03.jpg',},
{name:'海鸣威-老人与海',singer:'海鸣威',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/海鸣威-老人与海.mp3',img_url:'./img/04.jpg',},
{name:'韩宝仪-粉红色的回忆',singer:'韩宝仪',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/韩宝仪-粉红色的回忆.mp3',img_url:'./img/05.jpg',},
{name:'韩宝仪-往事只能回味',singer:'韩宝仪',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/韩宝仪-往事只能回味.mp3',img_url:'./img/01.jpg',},
{name:'韩红-九儿',singer:'韩红',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/韩红-九儿.mp3',img_url:'./img/02.jpg',},
{name:'韩红-那片海',singer:'韩红',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/韩红-那片海.mp3',img_url:'./img/03.jpg',},
{name:'韩红-天亮了',singer:'韩红',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/韩红-天亮了.mp3',img_url:'./img/04.jpg',},
{name:'韩红-天路',singer:'韩红',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/韩红-天路.mp3',img_url:'./img/05.jpg',},
{name:'韩磊-等待',singer:'韩磊',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/韩磊-等待.mp3',img_url:'./img/01.jpg',},
{name:'韩磊-向天再借五百年',singer:'韩磊',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/韩磊-向天再借五百年.mp3',img_url:'./img/02.jpg',},
{name:'韩磊-走四方',singer:'韩磊',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/韩磊-走四方.mp3',img_url:'./img/03.jpg',},
{name:'韩雪-飘雪',singer:'韩雪',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/韩雪-飘雪.mp3',img_url:'./img/04.jpg',},
{name:'韩雪-想起',singer:'韩雪',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/韩雪-想起.mp3',img_url:'./img/05.jpg',},
{name:'杭天琪-前门情思大碗茶',singer:'杭天琪',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/杭天琪-前门情思大碗茶.mp3',img_url:'./img/01.jpg',},
{name:'浩瀚-分手在那个秋天',singer:'浩瀚',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/浩瀚-分手在那个秋天.mp3',img_url:'./img/02.jpg',},
{name:'何炅-栀子花开',singer:'何炅',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/何炅-栀子花开.mp3',img_url:'./img/03.jpg',},
{name:'何洁-你一定要幸福',singer:'何洁',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/何洁-你一定要幸福.mp3',img_url:'./img/04.jpg',},
{name:'何璐-让她降落',singer:'何璐',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/何璐-让她降落.mp3',img_url:'./img/05.jpg',},
{name:'何晟铭-佛说',singer:'何晟铭',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/何晟铭-佛说.mp3',img_url:'./img/01.jpg',},
{name:'黑豹乐队-无地自容',singer:'黑豹乐队',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/黑豹乐队-无地自容.mp3',img_url:'./img/02.jpg',},
{name:'侯旭-逃',singer:'侯旭',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/侯旭-逃.mp3',img_url:'./img/03.jpg',},
{name:'后弦 sara-你还欠我一个拥抱',singer:'后弦 sara',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/后弦 sara-你还欠我一个拥抱.mp3',img_url:'./img/04.jpg',},
{name:'后弦 柳岩-孙尚香',singer:'后弦 柳岩',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/后弦 柳岩-孙尚香.mp3',img_url:'./img/05.jpg',},
{name:'胡夏 李玉刚-将进酒',singer:'胡夏 李玉刚',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/胡夏 李玉刚-将进酒.mp3',img_url:'./img/01.jpg',},
{name:'胡夏 郁可唯-知否知否',singer:'胡夏 郁可唯',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/胡夏 郁可唯-知否知否.mp3',img_url:'./img/02.jpg',},
{name:'胡夏-那些年',singer:'胡夏',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/胡夏-那些年.mp3',img_url:'./img/03.jpg',},
{name:'胡彦斌-红颜',singer:'胡彦斌',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/胡彦斌-红颜.mp3',img_url:'./img/04.jpg',},
{name:'胡彦斌-月光',singer:'胡彦斌',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/胡彦斌-月光.mp3',img_url:'./img/05.jpg',},
{name:'胡杨林-香水有毒',singer:'胡杨林',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/胡杨林-香水有毒.mp3',img_url:'./img/01.jpg',},
{name:'花儿乐队-穷开心',singer:'花儿乐队',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/花儿乐队-穷开心.mp3',img_url:'./img/02.jpg',},
{name:'花儿乐队-嘻唰唰',singer:'花儿乐队',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/花儿乐队-嘻唰唰.mp3',img_url:'./img/03.jpg',},
{name:'花僮-浪子闲话',singer:'花僮',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/花僮-浪子闲话.mp3',img_url:'./img/04.jpg',},
{name:'华晨宇-齐天',singer:'华晨宇',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/华晨宇-齐天.mp3',img_url:'./img/05.jpg',},
{name:'黄安-东南西北风',singer:'黄安',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/黄安-东南西北风.mp3',img_url:'./img/01.jpg',},
{name:'黄安-新鸳鸯蝴蝶梦',singer:'黄安',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/黄安-新鸳鸯蝴蝶梦.mp3',img_url:'./img/02.jpg',},
{name:'黄安-样样红',singer:'黄安',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/黄安-样样红.mp3',img_url:'./img/03.jpg',},
{name:'黄磊-我想我是海',singer:'黄磊',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/黄磊-我想我是海.mp3',img_url:'./img/04.jpg',},
{name:'黄龄 Tang Duy Tan-叹',singer:'黄龄 Tang Duy Tan',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/黄龄 Tang Duy Tan-叹.mp3',img_url:'./img/05.jpg',},
{name:'黄龄 许嵩-惊鸿一面',singer:'黄龄 许嵩',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/黄龄 许嵩-惊鸿一面.mp3',img_url:'./img/01.jpg',},
{name:'黄龄-High歌',singer:'黄龄',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/黄龄-High歌.mp3',img_url:'./img/02.jpg',},
{name:'黄龄-啊',singer:'黄龄',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/黄龄-啊.mp3',img_url:'./img/03.jpg',},
{name:'黄龄-达拉崩吧',singer:'黄龄',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/黄龄-达拉崩吧.mp3',img_url:'./img/04.jpg',},
{name:'黄龄-风月',singer:'黄龄',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/黄龄-风月.mp3',img_url:'./img/05.jpg',},
{name:'黄龄-谎言',singer:'黄龄',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/黄龄-谎言.mp3',img_url:'./img/01.jpg',},
{name:'黄龄-琵琶行',singer:'黄龄',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/黄龄-琵琶行.mp3',img_url:'./img/02.jpg',},
{name:'黄龄-牵丝戏（梦幻西游盘丝洞门派曲）',singer:'黄龄',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/黄龄-牵丝戏（梦幻西游盘丝洞门派曲）.mp3',img_url:'./img/03.jpg',},
{name:'黄龄-入画江南',singer:'黄龄',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/黄龄-入画江南.mp3',img_url:'./img/04.jpg',},
{name:'黄龄-三拜红尘凉',singer:'黄龄',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/黄龄-三拜红尘凉.mp3',img_url:'./img/05.jpg',},
{name:'黄龄-守',singer:'黄龄',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/黄龄-守.mp3',img_url:'./img/01.jpg',},
{name:'黄龄-锁',singer:'黄龄',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/黄龄-锁.mp3',img_url:'./img/02.jpg',},
{name:'黄龄-听夜雨',singer:'黄龄',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/黄龄-听夜雨.mp3',img_url:'./img/03.jpg',},
{name:'黄龄-问情',singer:'黄龄',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/黄龄-问情.mp3',img_url:'./img/04.jpg',},
{name:'黄龄-小雨',singer:'黄龄',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/黄龄-小雨.mp3',img_url:'./img/05.jpg',},
{name:'黄龄-烟雨画卷',singer:'黄龄',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/黄龄-烟雨画卷.mp3',img_url:'./img/01.jpg',},
{name:'黄龄-痒',singer:'黄龄',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/黄龄-痒.mp3',img_url:'./img/02.jpg',},
{name:'黄龄-夜舞',singer:'黄龄',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/黄龄-夜舞.mp3',img_url:'./img/03.jpg',},
{name:'黄龄-鸳鸯戏',singer:'黄龄',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/黄龄-鸳鸯戏.mp3',img_url:'./img/04.jpg',},
{name:'黄龄-醉',singer:'黄龄',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/黄龄-醉.mp3',img_url:'./img/05.jpg',},
{name:'黄品源 莫文蔚-那么爱你为什么',singer:'黄品源 莫文蔚',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/黄品源 莫文蔚-那么爱你为什么.mp3',img_url:'./img/01.jpg',},
{name:'黄品源-海浪',singer:'黄品源',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/黄品源-海浪.mp3',img_url:'./img/02.jpg',},
{name:'黄品源-你怎么舍得我难过',singer:'黄品源',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/黄品源-你怎么舍得我难过.mp3',img_url:'./img/03.jpg',},
{name:'黄品源-小薇',singer:'黄品源',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/黄品源-小薇.mp3',img_url:'./img/04.jpg',},
{name:'黄绮珊-剪爱(Live)',singer:'黄绮珊',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/黄绮珊-剪爱(Live).mp3',img_url:'./img/05.jpg',},
{name:'黄霄雲-星辰大海',singer:'黄霄雲',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/黄霄雲-星辰大海.mp3',img_url:'./img/01.jpg',},
{name:'黄小琥-伴',singer:'黄小琥',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/黄小琥-伴.mp3',img_url:'./img/02.jpg',},
{name:'黄小琥-没那么简单',singer:'黄小琥',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/黄小琥-没那么简单.mp3',img_url:'./img/03.jpg',},
{name:'黄小琥-顺其自然',singer:'黄小琥',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/黄小琥-顺其自然.mp3',img_url:'./img/04.jpg',},
{name:'黄小琥-重来',singer:'黄小琥',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/黄小琥-重来.mp3',img_url:'./img/05.jpg',},
{name:'黄怡-少年心',singer:'黄怡',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/黄怡-少年心.mp3',img_url:'./img/01.jpg',},
{name:'黄勇-勇敢勇敢',singer:'黄勇',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/黄勇-勇敢勇敢.mp3',img_url:'./img/02.jpg',},
{name:'回小仙-醒不来的梦',singer:'回小仙',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/回小仙-醒不来的梦.mp3',img_url:'./img/03.jpg',},
{name:'火箭少女101-卡路里',singer:'火箭少女101',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/火箭少女101-卡路里.mp3',img_url:'./img/04.jpg',},
{name:'霍尊-卷珠帘',singer:'霍尊',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/霍尊-卷珠帘.mp3',img_url:'./img/05.jpg',},
{name:'贾乃亮,甜馨-大王叫我来巡山',singer:'贾乃亮,甜馨',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/贾乃亮,甜馨-大王叫我来巡山.mp3',img_url:'./img/01.jpg',},
{name:'剑网3缘起印象曲-眉间雪',singer:'剑网3缘起印象曲',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/剑网3缘起印象曲-眉间雪.mp3',img_url:'./img/02.jpg',},
{name:'江美琪-亲爱的你怎么不在我身边',singer:'江美琪',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/江美琪-亲爱的你怎么不在我身边.mp3',img_url:'./img/03.jpg',},
{name:'江美琪-下辈子如果我还记得你',singer:'江美琪',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/江美琪-下辈子如果我还记得你.mp3',img_url:'./img/04.jpg',},
{name:'江涛-愚公移山',singer:'江涛',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/江涛-愚公移山.mp3',img_url:'./img/05.jpg',},
{name:'江远兮-这一别是永远',singer:'江远兮',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/江远兮-这一别是永远.mp3',img_url:'./img/01.jpg',},
{name:'姜鹏-问佛',singer:'姜鹏',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/姜鹏-问佛.mp3',img_url:'./img/02.jpg',},
{name:'姜鹏-赢在江湖',singer:'姜鹏',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/姜鹏-赢在江湖.mp3',img_url:'./img/03.jpg',},
{name:'姜育恒-梅花三弄',singer:'姜育恒',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/姜育恒-梅花三弄.mp3',img_url:'./img/04.jpg',},
{name:'姜育恒-驿动的心',singer:'姜育恒',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/姜育恒-驿动的心.mp3',img_url:'./img/05.jpg',},
{name:'姜育恒-再回首',singer:'姜育恒',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/姜育恒-再回首.mp3',img_url:'./img/01.jpg',},
{name:'蒋雪儿-梦的翅膀受了伤',singer:'蒋雪儿',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/蒋雪儿-梦的翅膀受了伤.mp3',img_url:'./img/02.jpg',},
{name:'蒋雪儿-莫问归期',singer:'蒋雪儿',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/蒋雪儿-莫问归期.mp3',img_url:'./img/03.jpg',},
{name:'蒋雪儿-谁在意我留下的泪',singer:'蒋雪儿',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/蒋雪儿-谁在意我留下的泪.mp3',img_url:'./img/04.jpg',},
{name:'蒋雪儿-燕无歇',singer:'蒋雪儿',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/蒋雪儿-燕无歇.mp3',img_url:'./img/05.jpg',},
{name:'降央卓玛-西海情歌',singer:'降央卓玛',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/降央卓玛-西海情歌.mp3',img_url:'./img/01.jpg',},
{name:'金海心-爱似水仙',singer:'金海心',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/金海心-爱似水仙.mp3',img_url:'./img/02.jpg',},
{name:'金海心-把耳朵叫醒',singer:'金海心',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/金海心-把耳朵叫醒.mp3',img_url:'./img/03.jpg',},
{name:'金海心-悲伤的秋千',singer:'金海心',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/金海心-悲伤的秋千.mp3',img_url:'./img/04.jpg',},
{name:'金海心-那么骄傲',singer:'金海心',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/金海心-那么骄傲.mp3',img_url:'./img/05.jpg',},
{name:'金南玲-逆流成河',singer:'金南玲',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/金南玲-逆流成河.mp3',img_url:'./img/01.jpg',},
{name:'金莎-梦千年之恋',singer:'金莎',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/金莎-梦千年之恋.mp3',img_url:'./img/02.jpg',},
{name:'金莎-星月神话',singer:'金莎',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/金莎-星月神话.mp3',img_url:'./img/03.jpg',},
{name:'井胧 井迪儿-骁',singer:'井胧 井迪儿',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/井胧 井迪儿-骁.mp3',img_url:'./img/04.jpg',},
{name:'景岗山-我的眼里只有你',singer:'景岗山',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/景岗山-我的眼里只有你.mp3',img_url:'./img/05.jpg',},
{name:'就是南方凯-离别开出花',singer:'就是南方凯',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/就是南方凯-离别开出花.mp3',img_url:'./img/01.jpg',},
{name:'卡朋特-YesterdayOnceMore',singer:'卡朋特',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/卡朋特-YesterdayOnceMore.mp3',img_url:'./img/02.jpg',},
{name:'侃侃-滴答',singer:'侃侃',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/侃侃-滴答.mp3',img_url:'./img/03.jpg',},
{name:'筷子兄弟-小苹果',singer:'筷子兄弟',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/筷子兄弟-小苹果.mp3',img_url:'./img/04.jpg',},
{name:'蓝色生死恋-祈祷',singer:'蓝色生死恋',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/蓝色生死恋-祈祷.mp3',img_url:'./img/05.jpg',},
{name:'蓝心湄-一见钟情',singer:'蓝心湄',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/蓝心湄-一见钟情.mp3',img_url:'./img/01.jpg',},
{name:'蓝心羽-寂寞烟火',singer:'蓝心羽',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/蓝心羽-寂寞烟火.mp3',img_url:'./img/02.jpg',},
{name:'老狼-恋恋风尘',singer:'老狼',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/老狼-恋恋风尘.mp3',img_url:'./img/03.jpg',},
{name:'老狼-同桌的你',singer:'老狼',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/老狼-同桌的你.mp3',img_url:'./img/04.jpg',},
{name:'乐凡-你是我心里的宝',singer:'乐凡',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/乐凡-你是我心里的宝.mp3',img_url:'./img/05.jpg',},
{name:'雷佳-芦花',singer:'雷佳',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/雷佳-芦花.mp3',img_url:'./img/01.jpg',},
{name:'雷佳-人世间',singer:'雷佳',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/雷佳-人世间.mp3',img_url:'./img/02.jpg',},
{name:'冷漠-没有你陪伴我真的好孤单',singer:'冷漠',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/冷漠-没有你陪伴我真的好孤单.mp3',img_url:'./img/03.jpg',},
{name:'黎明-深秋的黎明',singer:'黎明',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/黎明-深秋的黎明.mp3',img_url:'./img/04.jpg',},
{name:'李彩桦-我爱雨天',singer:'李彩桦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李彩桦-我爱雨天.mp3',img_url:'./img/05.jpg',},
{name:'李常超（Lao乾妈）-盗墓笔记·十年人间',singer:'李常超（Lao乾妈）',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李常超（Lao乾妈）-盗墓笔记·十年人间.mp3',img_url:'./img/01.jpg',},
{name:'李春波-小芳',singer:'李春波',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李春波-小芳.mp3',img_url:'./img/02.jpg',},
{name:'李慧珍-爱死了昨天',singer:'李慧珍',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李慧珍-爱死了昨天.mp3',img_url:'./img/03.jpg',},
{name:'李慧珍-习惯',singer:'李慧珍',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李慧珍-习惯.mp3',img_url:'./img/04.jpg',},
{name:'李佳璐-如果下辈子还能遇见你',singer:'李佳璐',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李佳璐-如果下辈子还能遇见你.mp3',img_url:'./img/05.jpg',},
{name:'李佳璐-无法原谅',singer:'李佳璐',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李佳璐-无法原谅.mp3',img_url:'./img/01.jpg',},
{name:'李佳薇-煎熬',singer:'李佳薇',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李佳薇-煎熬.mp3',img_url:'./img/02.jpg',},
{name:'李佳薇-天后',singer:'李佳薇',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李佳薇-天后.mp3',img_url:'./img/03.jpg',},
{name:'李健-贝加尔湖畔',singer:'李健',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李健-贝加尔湖畔.mp3',img_url:'./img/04.jpg',},
{name:'李健-春风十里不如你',singer:'李健',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李健-春风十里不如你.mp3',img_url:'./img/05.jpg',},
{name:'李健-当你老了(Live)',singer:'李健',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李健-当你老了(Live).mp3',img_url:'./img/01.jpg',},
{name:'李健-风吹麦浪',singer:'李健',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李健-风吹麦浪.mp3',img_url:'./img/02.jpg',},
{name:'李健-假如爱有天意',singer:'李健',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李健-假如爱有天意.mp3',img_url:'./img/03.jpg',},
{name:'李克勤-爱不释手',singer:'李克勤',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李克勤-爱不释手.mp3',img_url:'./img/04.jpg',},
{name:'李克勤-红日',singer:'李克勤',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李克勤-红日.mp3',img_url:'./img/05.jpg',},
{name:'李克勤-护花使者',singer:'李克勤',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李克勤-护花使者.mp3',img_url:'./img/01.jpg',},
{name:'李克勤-旧欢如梦',singer:'李克勤',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李克勤-旧欢如梦.mp3',img_url:'./img/02.jpg',},
{name:'李克勤-一生不变',singer:'李克勤',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李克勤-一生不变.mp3',img_url:'./img/03.jpg',},
{name:'李克勤-月半小夜曲',singer:'李克勤',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李克勤-月半小夜曲.mp3',img_url:'./img/04.jpg',},
{name:'李丽芬-爱不释手',singer:'李丽芬',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李丽芬-爱不释手.mp3',img_url:'./img/05.jpg',},
{name:'李丽芬-爱江山更爱美人',singer:'李丽芬',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李丽芬-爱江山更爱美人.mp3',img_url:'./img/01.jpg',},
{name:'李丽芬-得意的笑',singer:'李丽芬',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李丽芬-得意的笑.mp3',img_url:'./img/02.jpg',},
{name:'李玲玉-人在旅途',singer:'李玲玉',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李玲玉-人在旅途.mp3',img_url:'./img/03.jpg',},
{name:'李玟 周杰伦-刀马旦',singer:'李玟 周杰伦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李玟 周杰伦-刀马旦.mp3',img_url:'./img/04.jpg',},
{name:'李玟-Baby对不起',singer:'李玟',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李玟-Baby对不起.mp3',img_url:'./img/05.jpg',},
{name:'李玟-DiDaDi',singer:'李玟',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李玟-DiDaDi.mp3',img_url:'./img/01.jpg',},
{name:'李玟-好心情',singer:'李玟',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李玟-好心情.mp3',img_url:'./img/02.jpg',},
{name:'李玟-美丽笨女人',singer:'李玟',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李玟-美丽笨女人.mp3',img_url:'./img/03.jpg',},
{name:'李玟-魔镜',singer:'李玟',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李玟-魔镜.mp3',img_url:'./img/04.jpg',},
{name:'李玟-想你的365天',singer:'李玟',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李玟-想你的365天.mp3',img_url:'./img/05.jpg',},
{name:'李玟-月光爱人',singer:'李玟',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李玟-月光爱人.mp3',img_url:'./img/01.jpg',},
{name:'李娜-好人一生平安',singer:'李娜',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李娜-好人一生平安.mp3',img_url:'./img/02.jpg',},
{name:'李娜-黄土高坡',singer:'李娜',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李娜-黄土高坡.mp3',img_url:'./img/03.jpg',},
{name:'李娜-女人是老虎',singer:'李娜',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李娜-女人是老虎.mp3',img_url:'./img/04.jpg',},
{name:'李娜-青藏高原',singer:'李娜',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李娜-青藏高原.mp3',img_url:'./img/05.jpg',},
{name:'李娜-嫂子颂',singer:'李娜',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李娜-嫂子颂.mp3',img_url:'./img/01.jpg',},
{name:'李娜-信天游',singer:'李娜',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李娜-信天游.mp3',img_url:'./img/02.jpg',},
{name:'李沁-小偷',singer:'李沁',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李沁-小偷.mp3',img_url:'./img/03.jpg',},
{name:'李琼-山路十八弯',singer:'李琼',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李琼-山路十八弯.mp3',img_url:'./img/04.jpg',},
{name:'李荣浩-不将就',singer:'李荣浩',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李荣浩-不将就.mp3',img_url:'./img/05.jpg',},
{name:'李荣浩-李白',singer:'李荣浩',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李荣浩-李白.mp3',img_url:'./img/01.jpg',},
{name:'李荣浩-麻雀',singer:'李荣浩',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李荣浩-麻雀.mp3',img_url:'./img/02.jpg',},
{name:'李荣浩-模特',singer:'李荣浩',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李荣浩-模特.mp3',img_url:'./img/03.jpg',},
{name:'李荣浩-年少有为',singer:'李荣浩',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李荣浩-年少有为.mp3',img_url:'./img/04.jpg',},
{name:'李圣杰-痴心绝对',singer:'李圣杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李圣杰-痴心绝对.mp3',img_url:'./img/05.jpg',},
{name:'李圣杰-你那么爱她',singer:'李圣杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李圣杰-你那么爱她.mp3',img_url:'./img/01.jpg',},
{name:'李圣杰-手放开',singer:'李圣杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李圣杰-手放开.mp3',img_url:'./img/02.jpg',},
{name:'李殊-原谅我过去不懂',singer:'李殊',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李殊-原谅我过去不懂.mp3',img_url:'./img/03.jpg',},
{name:'李晓杰-朋友的酒',singer:'李晓杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李晓杰-朋友的酒.mp3',img_url:'./img/04.jpg',},
{name:'李孝利-10minutes',singer:'李孝利',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李孝利-10minutes.mp3',img_url:'./img/05.jpg',},
{name:'李昕融 樊桐舟 李凯稠-你笑起来真好看',singer:'李昕融 樊桐舟 李凯稠',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李昕融 樊桐舟 李凯稠-你笑起来真好看.mp3',img_url:'./img/01.jpg',},
{name:'李秀英-AlsoILoveYou',singer:'李秀英',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李秀英-AlsoILoveYou.mp3',img_url:'./img/02.jpg',},
{name:'李秀英-NEVERAGAIN',singer:'李秀英',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李秀英-NEVERAGAIN.mp3',img_url:'./img/03.jpg',},
{name:'李翊君-风中的承诺',singer:'李翊君',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李翊君-风中的承诺.mp3',img_url:'./img/04.jpg',},
{name:'李翊君-诺言',singer:'李翊君',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李翊君-诺言.mp3',img_url:'./img/05.jpg',},
{name:'李翊君-沙漠寂寞',singer:'李翊君',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李翊君-沙漠寂寞.mp3',img_url:'./img/01.jpg',},
{name:'李翊君-婉君',singer:'李翊君',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李翊君-婉君.mp3',img_url:'./img/02.jpg',},
{name:'李翊君-雨蝶',singer:'李翊君',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李翊君-雨蝶.mp3',img_url:'./img/03.jpg',},
{name:'李宇春-梨花香',singer:'李宇春',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李宇春-梨花香.mp3',img_url:'./img/04.jpg',},
{name:'李宇春-无价之姐',singer:'李宇春',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李宇春-无价之姐.mp3',img_url:'./img/05.jpg',},
{name:'李宇春-下个路口见',singer:'李宇春',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李宇春-下个路口见.mp3',img_url:'./img/01.jpg',},
{name:'李雨儿 石头-雨花石',singer:'李雨儿 石头',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李雨儿 石头-雨花石.mp3',img_url:'./img/02.jpg',},
{name:'李玉刚-赤伶',singer:'李玉刚',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李玉刚-赤伶.mp3',img_url:'./img/03.jpg',},
{name:'李玉刚-刚好遇见你',singer:'李玉刚',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李玉刚-刚好遇见你.mp3',img_url:'./img/04.jpg',},
{name:'李玉刚-贵妃醉酒',singer:'李玉刚',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李玉刚-贵妃醉酒.mp3',img_url:'./img/05.jpg',},
{name:'李玉刚-菊花台',singer:'李玉刚',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李玉刚-菊花台.mp3',img_url:'./img/01.jpg',},
{name:'李玉刚-铁血丹心',singer:'李玉刚',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李玉刚-铁血丹心.mp3',img_url:'./img/02.jpg',},
{name:'李玉刚-万疆',singer:'李玉刚',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李玉刚-万疆.mp3',img_url:'./img/03.jpg',},
{name:'李玉刚-枉凝眉',singer:'李玉刚',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李玉刚-枉凝眉.mp3',img_url:'./img/04.jpg',},
{name:'李玉刚-新贵妃醉酒',singer:'李玉刚',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李玉刚-新贵妃醉酒.mp3',img_url:'./img/05.jpg',},
{name:'李宗盛-山丘',singer:'李宗盛',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/李宗盛-山丘.mp3',img_url:'./img/01.jpg',},
{name:'梁静茹-爱你不是两三天',singer:'梁静茹',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/梁静茹-爱你不是两三天.mp3',img_url:'./img/02.jpg',},
{name:'梁静茹-分手快乐',singer:'梁静茹',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/梁静茹-分手快乐.mp3',img_url:'./img/03.jpg',},
{name:'梁静茹-会呼吸的痛',singer:'梁静茹',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/梁静茹-会呼吸的痛.mp3',img_url:'./img/04.jpg',},
{name:'梁静茹-可惜不是你',singer:'梁静茹',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/梁静茹-可惜不是你.mp3',img_url:'./img/05.jpg',},
{name:'梁静茹-宁夏',singer:'梁静茹',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/梁静茹-宁夏.mp3',img_url:'./img/01.jpg',},
{name:'梁静茹-暖暖',singer:'梁静茹',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/梁静茹-暖暖.mp3',img_url:'./img/02.jpg',},
{name:'梁静茹-燕尾蝶',singer:'梁静茹',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/梁静茹-燕尾蝶.mp3',img_url:'./img/03.jpg',},
{name:'梁静茹-勇气',singer:'梁静茹',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/梁静茹-勇气.mp3',img_url:'./img/04.jpg',},
{name:'梁咏琪-胆小鬼',singer:'梁咏琪',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/梁咏琪-胆小鬼.mp3',img_url:'./img/05.jpg',},
{name:'梁咏琪-向左走向右走',singer:'梁咏琪',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/梁咏琪-向左走向右走.mp3',img_url:'./img/01.jpg',},
{name:'林宸希-不再问',singer:'林宸希',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/林宸希-不再问.mp3',img_url:'./img/02.jpg',},
{name:'林俊杰 蔡卓妍-小酒窝',singer:'林俊杰 蔡卓妍',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/林俊杰 蔡卓妍-小酒窝.mp3',img_url:'./img/03.jpg',},
{name:'林俊杰-爱笑的眼睛',singer:'林俊杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/林俊杰-爱笑的眼睛.mp3',img_url:'./img/04.jpg',},
{name:'林俊杰-背对背拥抱',singer:'林俊杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/林俊杰-背对背拥抱.mp3',img_url:'./img/05.jpg',},
{name:'林俊杰-编号89757',singer:'林俊杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/林俊杰-编号89757.mp3',img_url:'./img/01.jpg',},
{name:'林俊杰-不潮不用花钱',singer:'林俊杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/林俊杰-不潮不用花钱.mp3',img_url:'./img/02.jpg',},
{name:'林俊杰-不死之身',singer:'林俊杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/林俊杰-不死之身.mp3',img_url:'./img/03.jpg',},
{name:'林俊杰-曹操',singer:'林俊杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/林俊杰-曹操.mp3',img_url:'./img/04.jpg',},
{name:'林俊杰-关键词',singer:'林俊杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/林俊杰-关键词.mp3',img_url:'./img/05.jpg',},
{name:'林俊杰-黑武士',singer:'林俊杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/林俊杰-黑武士.mp3',img_url:'./img/01.jpg',},
{name:'林俊杰-江南',singer:'林俊杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/林俊杰-江南.mp3',img_url:'./img/02.jpg',},
{name:'林俊杰-就是我',singer:'林俊杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/林俊杰-就是我.mp3',img_url:'./img/03.jpg',},
{name:'林俊杰-可惜没如果',singer:'林俊杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/林俊杰-可惜没如果.mp3',img_url:'./img/04.jpg',},
{name:'林俊杰-美人鱼',singer:'林俊杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/林俊杰-美人鱼.mp3',img_url:'./img/05.jpg',},
{name:'林俊杰-杀手',singer:'林俊杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/林俊杰-杀手.mp3',img_url:'./img/01.jpg',},
{name:'林俊杰-她说',singer:'林俊杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/林俊杰-她说.mp3',img_url:'./img/02.jpg',},
{name:'林俊杰-一千年以后',singer:'林俊杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/林俊杰-一千年以后.mp3',img_url:'./img/03.jpg',},
{name:'林俊杰-醉赤壁',singer:'林俊杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/林俊杰-醉赤壁.mp3',img_url:'./img/04.jpg',},
{name:'林心如-落花',singer:'林心如',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/林心如-落花.mp3',img_url:'./img/05.jpg',},
{name:'林心如-倾听我',singer:'林心如',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/林心如-倾听我.mp3',img_url:'./img/01.jpg',},
{name:'林依轮-爱情鸟',singer:'林依轮',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/林依轮-爱情鸟.mp3',img_url:'./img/02.jpg',},
{name:'林忆莲-爱上一个不回家的人',singer:'林忆莲',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/林忆莲-爱上一个不回家的人.mp3',img_url:'./img/03.jpg',},
{name:'林忆莲-不必在乎我是谁',singer:'林忆莲',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/林忆莲-不必在乎我是谁.mp3',img_url:'./img/04.jpg',},
{name:'林忆莲-伤痕',singer:'林忆莲',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/林忆莲-伤痕.mp3',img_url:'./img/05.jpg',},
{name:'林忆莲-为你我受冷风吹',singer:'林忆莲',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/林忆莲-为你我受冷风吹.mp3',img_url:'./img/01.jpg',},
{name:'林忆莲-至少还有你',singer:'林忆莲',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/林忆莲-至少还有你.mp3',img_url:'./img/02.jpg',},
{name:'林宥嘉-你是我的眼',singer:'林宥嘉',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/林宥嘉-你是我的眼.mp3',img_url:'./img/03.jpg',},
{name:'林宥嘉-说谎',singer:'林宥嘉',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/林宥嘉-说谎.mp3',img_url:'./img/04.jpg',},
{name:'林志炫-opera',singer:'林志炫',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/林志炫-opera.mp3',img_url:'./img/05.jpg',},
{name:'林志炫-单身情歌',singer:'林志炫',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/林志炫-单身情歌.mp3',img_url:'./img/01.jpg',},
{name:'林志炫-没离开过',singer:'林志炫',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/林志炫-没离开过.mp3',img_url:'./img/02.jpg',},
{name:'林志炫-蒙娜丽莎的眼泪',singer:'林志炫',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/林志炫-蒙娜丽莎的眼泪.mp3',img_url:'./img/03.jpg',},
{name:'林志炫-烟花易冷',singer:'林志炫',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/林志炫-烟花易冷.mp3',img_url:'./img/04.jpg',},
{name:'林志颖-稻草人',singer:'林志颖',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/林志颖-稻草人.mp3',img_url:'./img/05.jpg',},
{name:'林志颖-十七岁的雨季',singer:'林志颖',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/林志颖-十七岁的雨季.mp3',img_url:'./img/01.jpg',},
{name:'林子祥-敢爱敢做',singer:'林子祥',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/林子祥-敢爱敢做.mp3',img_url:'./img/02.jpg',},
{name:'林子祥-男儿当自强',singer:'林子祥',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/林子祥-男儿当自强.mp3',img_url:'./img/03.jpg',},
{name:'林子祥-数字人生',singer:'林子祥',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/林子祥-数字人生.mp3',img_url:'./img/04.jpg',},
{name:'林子祥-谁能明白我',singer:'林子祥',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/林子祥-谁能明白我.mp3',img_url:'./img/05.jpg',},
{name:'林子祥-长路漫漫伴你闯',singer:'林子祥',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/林子祥-长路漫漫伴你闯.mp3',img_url:'./img/01.jpg',},
{name:'林子祥-真的汉子',singer:'林子祥',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/林子祥-真的汉子.mp3',img_url:'./img/02.jpg',},
{name:'零点乐队-爱不爱我',singer:'零点乐队',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/零点乐队-爱不爱我.mp3',img_url:'./img/03.jpg',},
{name:'零点乐队-相信自己',singer:'零点乐队',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/零点乐队-相信自己.mp3',img_url:'./img/04.jpg',},
{name:'刘德华 陈慧琳-我不够爱你',singer:'刘德华 陈慧琳',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/刘德华 陈慧琳-我不够爱你.mp3',img_url:'./img/05.jpg',},
{name:'刘德华-17岁',singer:'刘德华',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/刘德华-17岁.mp3',img_url:'./img/01.jpg',},
{name:'刘德华-爱你一万年',singer:'刘德华',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/刘德华-爱你一万年.mp3',img_url:'./img/02.jpg',},
{name:'刘德华-笨小孩',singer:'刘德华',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/刘德华-笨小孩.mp3',img_url:'./img/03.jpg',},
{name:'刘德华-冰雨',singer:'刘德华',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/刘德华-冰雨.mp3',img_url:'./img/04.jpg',},
{name:'刘德华-独自去偷欢',singer:'刘德华',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/刘德华-独自去偷欢.mp3',img_url:'./img/05.jpg',},
{name:'刘德华-恭喜发财',singer:'刘德华',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/刘德华-恭喜发财.mp3',img_url:'./img/01.jpg',},
{name:'刘德华-孤星泪',singer:'刘德华',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/刘德华-孤星泪.mp3',img_url:'./img/02.jpg',},
{name:'刘德华-今天',singer:'刘德华',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/刘德华-今天.mp3',img_url:'./img/03.jpg',},
{name:'刘德华-来生缘',singer:'刘德华',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/刘德华-来生缘.mp3',img_url:'./img/04.jpg',},
{name:'刘德华-练习',singer:'刘德华',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/刘德华-练习.mp3',img_url:'./img/05.jpg',},
{name:'刘德华-木鱼与金鱼',singer:'刘德华',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/刘德华-木鱼与金鱼.mp3',img_url:'./img/01.jpg',},
{name:'刘德华-男人哭吧不是罪',singer:'刘德华',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/刘德华-男人哭吧不是罪.mp3',img_url:'./img/02.jpg',},
{name:'刘德华-你是我的女人',singer:'刘德华',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/刘德华-你是我的女人.mp3',img_url:'./img/03.jpg',},
{name:'刘德华-你是我的温柔',singer:'刘德华',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/刘德华-你是我的温柔.mp3',img_url:'./img/04.jpg',},
{name:'刘德华-亲爱的小孩',singer:'刘德华',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/刘德华-亲爱的小孩.mp3',img_url:'./img/05.jpg',},
{name:'刘德华-如果天有情',singer:'刘德华',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/刘德华-如果天有情.mp3',img_url:'./img/01.jpg',},
{name:'刘德华-世界第一等',singer:'刘德华',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/刘德华-世界第一等.mp3',img_url:'./img/02.jpg',},
{name:'刘德华-天意',singer:'刘德华',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/刘德华-天意.mp3',img_url:'./img/03.jpg',},
{name:'刘德华-忘情水',singer:'刘德华',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/刘德华-忘情水.mp3',img_url:'./img/04.jpg',},
{name:'刘德华-我恨我痴心',singer:'刘德华',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/刘德华-我恨我痴心.mp3',img_url:'./img/05.jpg',},
{name:'刘德华-谢谢你的爱',singer:'刘德华',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/刘德华-谢谢你的爱.mp3',img_url:'./img/01.jpg',},
{name:'刘德华-一起走过的日子',singer:'刘德华',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/刘德华-一起走过的日子.mp3',img_url:'./img/02.jpg',},
{name:'刘德华-中国人',singer:'刘德华',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/刘德华-中国人.mp3',img_url:'./img/03.jpg',},
{name:'刘端端 陈卓璇-黑洞',singer:'刘端端 陈卓璇',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/刘端端 陈卓璇-黑洞.mp3',img_url:'./img/04.jpg',},
{name:'刘嘉亮-你到底爱谁',singer:'刘嘉亮',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/刘嘉亮-你到底爱谁.mp3',img_url:'./img/05.jpg',},
{name:'刘珂矣-半壶纱',singer:'刘珂矣',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/刘珂矣-半壶纱.mp3',img_url:'./img/01.jpg',},
{name:'刘珂矣-芙蓉雨',singer:'刘珂矣',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/刘珂矣-芙蓉雨.mp3',img_url:'./img/02.jpg',},
{name:'刘若英-很爱很爱你',singer:'刘若英',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/刘若英-很爱很爱你.mp3',img_url:'./img/03.jpg',},
{name:'刘若英-后来',singer:'刘若英',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/刘若英-后来.mp3',img_url:'./img/04.jpg',},
{name:'刘若英-为爱痴狂',singer:'刘若英',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/刘若英-为爱痴狂.mp3',img_url:'./img/05.jpg',},
{name:'刘若英-一辈子的孤单',singer:'刘若英',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/刘若英-一辈子的孤单.mp3',img_url:'./img/01.jpg',},
{name:'刘诗诗-等你的季节',singer:'刘诗诗',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/刘诗诗-等你的季节.mp3',img_url:'./img/02.jpg',},
{name:'刘惜君-拆心',singer:'刘惜君',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/刘惜君-拆心.mp3',img_url:'./img/03.jpg',},
{name:'刘惜君-我很快乐',singer:'刘惜君',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/刘惜君-我很快乐.mp3',img_url:'./img/04.jpg',},
{name:'刘小慧-初恋情人',singer:'刘小慧',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/刘小慧-初恋情人.mp3',img_url:'./img/05.jpg',},
{name:'刘艺雯-听闻远方有你',singer:'刘艺雯',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/刘艺雯-听闻远方有你.mp3',img_url:'./img/01.jpg',},
{name:'刘亦菲 杨洋-三生三世十里桃花',singer:'刘亦菲 杨洋',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/刘亦菲 杨洋-三生三世十里桃花.mp3',img_url:'./img/02.jpg',},
{name:'柳真-ChaCha',singer:'柳真',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/柳真-ChaCha.mp3',img_url:'./img/03.jpg',},
{name:'六哲-错错错',singer:'六哲',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/六哲-错错错.mp3',img_url:'./img/04.jpg',},
{name:'卢冠廷-一生所爱',singer:'卢冠廷',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/卢冠廷-一生所爱.mp3',img_url:'./img/05.jpg',},
{name:'陆虎-雪落下的声音',singer:'陆虎',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陆虎-雪落下的声音.mp3',img_url:'./img/01.jpg',},
{name:'陆思恒 陆可儿-千禧恋曲2020',singer:'陆思恒 陆可儿',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陆思恒 陆可儿-千禧恋曲2020.mp3',img_url:'./img/02.jpg',},
{name:'罗大佑 陈淑桦-滚滚红尘',singer:'罗大佑 陈淑桦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/罗大佑 陈淑桦-滚滚红尘.mp3',img_url:'./img/03.jpg',},
{name:'罗大佑-光阴的故事',singer:'罗大佑',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/罗大佑-光阴的故事.mp3',img_url:'./img/04.jpg',},
{name:'罗大佑-你的样子',singer:'罗大佑',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/罗大佑-你的样子.mp3',img_url:'./img/05.jpg',},
{name:'罗大佑-童年',singer:'罗大佑',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/罗大佑-童年.mp3',img_url:'./img/01.jpg',},
{name:'罗文 甄妮-铁血丹心',singer:'罗文 甄妮',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/罗文 甄妮-铁血丹心.mp3',img_url:'./img/02.jpg',},
{name:'罗志祥-狐狸精',singer:'罗志祥',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/罗志祥-狐狸精.mp3',img_url:'./img/03.jpg',},
{name:'罗志祥-恋爱达人',singer:'罗志祥',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/罗志祥-恋爱达人.mp3',img_url:'./img/04.jpg',},
{name:'洛天依-小鸡哔哔',singer:'洛天依',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/洛天依-小鸡哔哔.mp3',img_url:'./img/05.jpg',},
{name:'吕方-老情歌',singer:'吕方',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/吕方-老情歌.mp3',img_url:'./img/01.jpg',},
{name:'马頔-南山南',singer:'马頔',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/马頔-南山南.mp3',img_url:'./img/02.jpg',},
{name:'马天宇-该死的温柔',singer:'马天宇',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/马天宇-该死的温柔.mp3',img_url:'./img/03.jpg',},
{name:'马旭东-入戏太深',singer:'马旭东',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/马旭东-入戏太深.mp3',img_url:'./img/04.jpg',},
{name:'马郁-下辈子如果我还记得你',singer:'马郁',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/马郁-下辈子如果我还记得你.mp3',img_url:'./img/05.jpg',},
{name:'马郁-一天死去一点',singer:'马郁',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/马郁-一天死去一点.mp3',img_url:'./img/01.jpg',},
{name:'满文军-懂你',singer:'满文军',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/满文军-懂你.mp3',img_url:'./img/02.jpg',},
{name:'满文军-望乡',singer:'满文军',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/满文军-望乡.mp3',img_url:'./img/03.jpg',},
{name:'毛阿敏-渴望',singer:'毛阿敏',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/毛阿敏-渴望.mp3',img_url:'./img/04.jpg',},
{name:'毛阿敏-同一首歌',singer:'毛阿敏',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/毛阿敏-同一首歌.mp3',img_url:'./img/05.jpg',},
{name:'毛阿敏-相思',singer:'毛阿敏',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/毛阿敏-相思.mp3',img_url:'./img/01.jpg',},
{name:'毛不易-消愁',singer:'毛不易',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/毛不易-消愁.mp3',img_url:'./img/02.jpg',},
{name:'毛宁-蓝蓝的夜蓝蓝的梦',singer:'毛宁',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/毛宁-蓝蓝的夜蓝蓝的梦.mp3',img_url:'./img/03.jpg',},
{name:'毛宁-涛声依旧',singer:'毛宁',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/毛宁-涛声依旧.mp3',img_url:'./img/04.jpg',},
{name:'梅艳芳-女人花',singer:'梅艳芳',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/梅艳芳-女人花.mp3',img_url:'./img/05.jpg',},
{name:'萌萌哒天团-帝都',singer:'萌萌哒天团',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/萌萌哒天团-帝都.mp3',img_url:'./img/01.jpg',},
{name:'孟庭苇-冬季到台北来看雨',singer:'孟庭苇',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/孟庭苇-冬季到台北来看雨.mp3',img_url:'./img/02.jpg',},
{name:'孟庭苇-风中有朵雨做的云',singer:'孟庭苇',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/孟庭苇-风中有朵雨做的云.mp3',img_url:'./img/03.jpg',},
{name:'孟庭苇-没有情人的情人节',singer:'孟庭苇',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/孟庭苇-没有情人的情人节.mp3',img_url:'./img/04.jpg',},
{name:'孟庭苇-你究竟有几个好妹妹',singer:'孟庭苇',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/孟庭苇-你究竟有几个好妹妹.mp3',img_url:'./img/05.jpg',},
{name:'孟庭苇-你看你看月亮的脸',singer:'孟庭苇',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/孟庭苇-你看你看月亮的脸.mp3',img_url:'./img/01.jpg',},
{name:'孟庭苇-情人节快乐',singer:'孟庭苇',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/孟庭苇-情人节快乐.mp3',img_url:'./img/02.jpg',},
{name:'孟庭苇-谁的眼泪在飞',singer:'孟庭苇',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/孟庭苇-谁的眼泪在飞.mp3',img_url:'./img/03.jpg',},
{name:'孟庭苇-羞答答的玫瑰静悄悄地开',singer:'孟庭苇',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/孟庭苇-羞答答的玫瑰静悄悄地开.mp3',img_url:'./img/04.jpg',},
{name:'孟杨-错位时空',singer:'孟杨',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/孟杨-错位时空.mp3',img_url:'./img/05.jpg',},
{name:'梦然-没有你陪伴真的好孤单',singer:'梦然',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/梦然-没有你陪伴真的好孤单.mp3',img_url:'./img/01.jpg',},
{name:'梦然-少年',singer:'梦然',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/梦然-少年.mp3',img_url:'./img/02.jpg',},
{name:'梦然-是你',singer:'梦然',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/梦然-是你.mp3',img_url:'./img/03.jpg',},
{name:'梦小月-你永远不知道',singer:'梦小月',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/梦小月-你永远不知道.mp3',img_url:'./img/04.jpg',},
{name:'摩登兄弟刘宇宁-就在江湖之上',singer:'摩登兄弟刘宇宁',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/摩登兄弟刘宇宁-就在江湖之上.mp3',img_url:'./img/05.jpg',},
{name:'莫文蔚 张洪量-广岛之恋',singer:'莫文蔚 张洪量',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/莫文蔚 张洪量-广岛之恋.mp3',img_url:'./img/01.jpg',},
{name:'莫文蔚-电台情歌',singer:'莫文蔚',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/莫文蔚-电台情歌.mp3',img_url:'./img/02.jpg',},
{name:'莫文蔚-寂寞的恋人啊',singer:'莫文蔚',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/莫文蔚-寂寞的恋人啊.mp3',img_url:'./img/03.jpg',},
{name:'莫文蔚-盛夏的果实',singer:'莫文蔚',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/莫文蔚-盛夏的果实.mp3',img_url:'./img/04.jpg',},
{name:'莫文蔚-他不爱我',singer:'莫文蔚',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/莫文蔚-他不爱我.mp3',img_url:'./img/05.jpg',},
{name:'莫文蔚-阴天',singer:'莫文蔚',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/莫文蔚-阴天.mp3',img_url:'./img/01.jpg',},
{name:'莫文蔚-这世界那么多人',singer:'莫文蔚',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/莫文蔚-这世界那么多人.mp3',img_url:'./img/02.jpg',},
{name:'木杰-人间这一遭',singer:'木杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/木杰-人间这一遭.mp3',img_url:'./img/03.jpg',},
{name:'慕容晓晓-爱情买卖',singer:'慕容晓晓',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/慕容晓晓-爱情买卖.mp3',img_url:'./img/04.jpg',},
{name:'那英 刘德华-东方之珠',singer:'那英 刘德华',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/那英 刘德华-东方之珠.mp3',img_url:'./img/05.jpg',},
{name:'那英 王菲-相约一九九八',singer:'那英 王菲',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/那英 王菲-相约一九九八.mp3',img_url:'./img/01.jpg',},
{name:'那英-爱上你等于爱上寂寞',singer:'那英',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/那英-爱上你等于爱上寂寞.mp3',img_url:'./img/02.jpg',},
{name:'那英-爱要有你才完美',singer:'那英',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/那英-爱要有你才完美.mp3',img_url:'./img/03.jpg',},
{name:'那英-白天不懂夜的黑',singer:'那英',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/那英-白天不懂夜的黑.mp3',img_url:'./img/04.jpg',},
{name:'那英-不管有多苦',singer:'那英',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/那英-不管有多苦.mp3',img_url:'./img/05.jpg',},
{name:'那英-出卖',singer:'那英',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/那英-出卖.mp3',img_url:'./img/01.jpg',},
{name:'那英-春暖花开',singer:'那英',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/那英-春暖花开.mp3',img_url:'./img/02.jpg',},
{name:'那英-放爱一条生路',singer:'那英',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/那英-放爱一条生路.mp3',img_url:'./img/03.jpg',},
{name:'那英-好大一棵树',singer:'那英',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/那英-好大一棵树.mp3',img_url:'./img/04.jpg',},
{name:'那英-花一开满就相爱',singer:'那英',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/那英-花一开满就相爱.mp3',img_url:'./img/05.jpg',},
{name:'那英-酒干倘卖无',singer:'那英',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/那英-酒干倘卖无.mp3',img_url:'./img/01.jpg',},
{name:'那英-两个人一个人',singer:'那英',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/那英-两个人一个人.mp3',img_url:'./img/02.jpg',},
{name:'那英-梦一场',singer:'那英',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/那英-梦一场.mp3',img_url:'./img/03.jpg',},
{name:'那英-默',singer:'那英',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/那英-默.mp3',img_url:'./img/04.jpg',},
{name:'那英-那又怎样',singer:'那英',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/那英-那又怎样.mp3',img_url:'./img/05.jpg',},
{name:'那英-你的微笑',singer:'那英',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/那英-你的微笑.mp3',img_url:'./img/01.jpg',},
{name:'那英-偏心',singer:'那英',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/那英-偏心.mp3',img_url:'./img/02.jpg',},
{name:'那英-千万次的问',singer:'那英',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/那英-千万次的问.mp3',img_url:'./img/03.jpg',},
{name:'那英-三生三世十里桃花',singer:'那英',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/那英-三生三世十里桃花.mp3',img_url:'./img/04.jpg',},
{name:'那英-山不转水转',singer:'那英',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/那英-山不转水转.mp3',img_url:'./img/05.jpg',},
{name:'那英-我不是天使',singer:'那英',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/那英-我不是天使.mp3',img_url:'./img/01.jpg',},
{name:'那英-雾里看花',singer:'那英',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/那英-雾里看花.mp3',img_url:'./img/02.jpg',},
{name:'那英-相爱恨早',singer:'那英',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/那英-相爱恨早.mp3',img_url:'./img/03.jpg',},
{name:'那英-相见不如怀念',singer:'那英',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/那英-相见不如怀念.mp3',img_url:'./img/04.jpg',},
{name:'那英-心酸的浪漫',singer:'那英',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/那英-心酸的浪漫.mp3',img_url:'./img/05.jpg',},
{name:'那英-醒时做梦',singer:'那英',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/那英-醒时做梦.mp3',img_url:'./img/01.jpg',},
{name:'那英-一笑而过',singer:'那英',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/那英-一笑而过.mp3',img_url:'./img/02.jpg',},
{name:'那英-一眼千年',singer:'那英',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/那英-一眼千年.mp3',img_url:'./img/03.jpg',},
{name:'那英-有个爱你的人不容易',singer:'那英',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/那英-有个爱你的人不容易.mp3',img_url:'./img/04.jpg',},
{name:'那英-愿赌服输',singer:'那英',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/那英-愿赌服输.mp3',img_url:'./img/05.jpg',},
{name:'那英-征服',singer:'那英',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/那英-征服.mp3',img_url:'./img/01.jpg',},
{name:'那英-只因为你',singer:'那英',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/那英-只因为你.mp3',img_url:'./img/02.jpg',},
{name:'宁小泽 梦小月-你永远不知道',singer:'宁小泽 梦小月',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/宁小泽 梦小月-你永远不知道.mp3',img_url:'./img/03.jpg',},
{name:'欧得洋-孤单北半球',singer:'欧得洋',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/欧得洋-孤单北半球.mp3',img_url:'./img/04.jpg',},
{name:'潘安邦-外婆的澎湖湾',singer:'潘安邦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/潘安邦-外婆的澎湖湾.mp3',img_url:'./img/05.jpg',},
{name:'潘美辰-我曾用心爱着你',singer:'潘美辰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/潘美辰-我曾用心爱着你.mp3',img_url:'./img/01.jpg',},
{name:'潘美辰-我想有个家',singer:'潘美辰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/潘美辰-我想有个家.mp3',img_url:'./img/02.jpg',},
{name:'潘玮柏 苏芮-我想更懂你',singer:'潘玮柏 苏芮',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/潘玮柏 苏芮-我想更懂你.mp3',img_url:'./img/03.jpg',},
{name:'潘玮柏-WUHA',singer:'潘玮柏',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/潘玮柏-WUHA.mp3',img_url:'./img/04.jpg',},
{name:'潘玮柏-不得不爱',singer:'潘玮柏',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/潘玮柏-不得不爱.mp3',img_url:'./img/05.jpg',},
{name:'潘玮柏-反转地球',singer:'潘玮柏',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/潘玮柏-反转地球.mp3',img_url:'./img/01.jpg',},
{name:'潘玮柏-快乐崇拜',singer:'潘玮柏',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/潘玮柏-快乐崇拜.mp3',img_url:'./img/02.jpg',},
{name:'潘玮柏-我的麦克风',singer:'潘玮柏',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/潘玮柏-我的麦克风.mp3',img_url:'./img/03.jpg',},
{name:'潘越云-天天天蓝',singer:'潘越云',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/潘越云-天天天蓝.mp3',img_url:'./img/04.jpg',},
{name:'潘越云-我是不是你最疼爱的人',singer:'潘越云',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/潘越云-我是不是你最疼爱的人.mp3',img_url:'./img/05.jpg',},
{name:'庞龙-两只蝴蝶',singer:'庞龙',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/庞龙-两只蝴蝶.mp3',img_url:'./img/01.jpg',},
{name:'庞龙-你是我的玫瑰花',singer:'庞龙',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/庞龙-你是我的玫瑰花.mp3',img_url:'./img/02.jpg',},
{name:'裴勇俊-MyMemory',singer:'裴勇俊',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/裴勇俊-MyMemory.mp3',img_url:'./img/03.jpg',},
{name:'彭佳慧-好久不见',singer:'彭佳慧',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/彭佳慧-好久不见.mp3',img_url:'./img/04.jpg',},
{name:'彭佳慧-相见恨晚',singer:'彭佳慧',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/彭佳慧-相见恨晚.mp3',img_url:'./img/05.jpg',},
{name:'彭羚-囚鸟',singer:'彭羚',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/彭羚-囚鸟.mp3',img_url:'./img/01.jpg',},
{name:'彭筝-太想念',singer:'彭筝',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/彭筝-太想念.mp3',img_url:'./img/02.jpg',},
{name:'平生不晚-难却',singer:'平生不晚',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/平生不晚-难却.mp3',img_url:'./img/03.jpg',},
{name:'朴惠京-RAIN',singer:'朴惠京',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/朴惠京-RAIN.mp3',img_url:'./img/04.jpg',},
{name:'朴树-白桦林',singer:'朴树',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/朴树-白桦林.mp3',img_url:'./img/05.jpg',},
{name:'朴树-那些花儿',singer:'朴树',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/朴树-那些花儿.mp3',img_url:'./img/01.jpg',},
{name:'朴树-平凡之路',singer:'朴树',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/朴树-平凡之路.mp3',img_url:'./img/02.jpg',},
{name:'朴树-生如夏花',singer:'朴树',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/朴树-生如夏花.mp3',img_url:'./img/03.jpg',},
{name:'七叔（叶泽浩）-半生雪',singer:'七叔（叶泽浩）',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/七叔（叶泽浩）-半生雪.mp3',img_url:'./img/04.jpg',},
{name:'七叔（叶泽浩）-踏山河',singer:'七叔（叶泽浩）',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/七叔（叶泽浩）-踏山河.mp3',img_url:'./img/05.jpg',},
{name:'戚薇 杨宗纬-为了遇见你',singer:'戚薇 杨宗纬',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/戚薇 杨宗纬-为了遇见你.mp3',img_url:'./img/01.jpg',},
{name:'齐晨-咱们结婚吧',singer:'齐晨',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/齐晨-咱们结婚吧.mp3',img_url:'./img/02.jpg',},
{name:'齐秦-不让我的眼泪陪我过夜',singer:'齐秦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/齐秦-不让我的眼泪陪我过夜.mp3',img_url:'./img/03.jpg',},
{name:'齐秦-大约在冬季',singer:'齐秦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/齐秦-大约在冬季.mp3',img_url:'./img/04.jpg',},
{name:'齐秦-狼',singer:'齐秦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/齐秦-狼.mp3',img_url:'./img/05.jpg',},
{name:'齐秦-往事随风',singer:'齐秦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/齐秦-往事随风.mp3',img_url:'./img/01.jpg',},
{name:'齐秦-无情的雨无情的你',singer:'齐秦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/齐秦-无情的雨无情的你.mp3',img_url:'./img/02.jpg',},
{name:'齐秦-夜夜夜夜',singer:'齐秦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/齐秦-夜夜夜夜.mp3',img_url:'./img/03.jpg',},
{name:'齐豫-橄榄树',singer:'齐豫',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/齐豫-橄榄树.mp3',img_url:'./img/04.jpg',},
{name:'祁隆 乐凡-等你等了那么久',singer:'祁隆 乐凡',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/祁隆 乐凡-等你等了那么久.mp3',img_url:'./img/05.jpg',},
{name:'奇然 沈谧仁-琵琶行',singer:'奇然 沈谧仁',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/奇然 沈谧仁-琵琶行.mp3',img_url:'./img/01.jpg',},
{name:'千百惠-走过咖啡屋',singer:'千百惠',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/千百惠-走过咖啡屋.mp3',img_url:'./img/02.jpg',},
{name:'浅影阿 汐音社-探故知',singer:'浅影阿 汐音社',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/浅影阿 汐音社-探故知.mp3',img_url:'./img/03.jpg',},
{name:'邱永传-十一年',singer:'邱永传',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/邱永传-十一年.mp3',img_url:'./img/04.jpg',},
{name:'裘海正-爱你十分泪七分',singer:'裘海正',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/裘海正-爱你十分泪七分.mp3',img_url:'./img/05.jpg',},
{name:'裘海正-爱我的人和我爱的人',singer:'裘海正',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/裘海正-爱我的人和我爱的人.mp3',img_url:'./img/01.jpg',},
{name:'裘海正-九千九百九十九滴眼泪',singer:'裘海正',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/裘海正-九千九百九十九滴眼泪.mp3',img_url:'./img/02.jpg',},
{name:'瞿颖-加速度',singer:'瞿颖',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/瞿颖-加速度.mp3',img_url:'./img/03.jpg',},
{name:'曲婉婷-我的歌声里',singer:'曲婉婷',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/曲婉婷-我的歌声里.mp3',img_url:'./img/04.jpg',},
{name:'群星-夜空中最闪亮的星',singer:'群星',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/群星-夜空中最闪亮的星.mp3',img_url:'./img/05.jpg',},
{name:'饶天亮-做你的爱人',singer:'饶天亮',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/饶天亮-做你的爱人.mp3',img_url:'./img/01.jpg',},
{name:'任妙音-风筝',singer:'任妙音',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/任妙音-风筝.mp3',img_url:'./img/02.jpg',},
{name:'任然-无人之岛',singer:'任然',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/任然-无人之岛.mp3',img_url:'./img/03.jpg',},
{name:'任贤齐 阿牛 光良-浪花一朵朵',singer:'任贤齐 阿牛 光良',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/任贤齐 阿牛 光良-浪花一朵朵.mp3',img_url:'./img/04.jpg',},
{name:'任贤齐-沧海一声笑',singer:'任贤齐',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/任贤齐-沧海一声笑.mp3',img_url:'./img/05.jpg',},
{name:'任贤齐-春天花会开',singer:'任贤齐',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/任贤齐-春天花会开.mp3',img_url:'./img/01.jpg',},
{name:'任贤齐-对面的女孩看过来',singer:'任贤齐',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/任贤齐-对面的女孩看过来.mp3',img_url:'./img/02.jpg',},
{name:'任贤齐-飞鸟',singer:'任贤齐',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/任贤齐-飞鸟.mp3',img_url:'./img/03.jpg',},
{name:'任贤齐-风云决',singer:'任贤齐',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/任贤齐-风云决.mp3',img_url:'./img/04.jpg',},
{name:'任贤齐-还有我',singer:'任贤齐',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/任贤齐-还有我.mp3',img_url:'./img/05.jpg',},
{name:'任贤齐-很受伤',singer:'任贤齐',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/任贤齐-很受伤.mp3',img_url:'./img/01.jpg',},
{name:'任贤齐-花太香',singer:'任贤齐',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/任贤齐-花太香.mp3',img_url:'./img/02.jpg',},
{name:'任贤齐-橘子香水',singer:'任贤齐',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/任贤齐-橘子香水.mp3',img_url:'./img/03.jpg',},
{name:'任贤齐-哭个痛快',singer:'任贤齐',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/任贤齐-哭个痛快.mp3',img_url:'./img/04.jpg',},
{name:'任贤齐-流着泪的你的脸',singer:'任贤齐',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/任贤齐-流着泪的你的脸.mp3',img_url:'./img/05.jpg',},
{name:'任贤齐-任逍遥',singer:'任贤齐',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/任贤齐-任逍遥.mp3',img_url:'./img/01.jpg',},
{name:'任贤齐-伤心太平洋',singer:'任贤齐',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/任贤齐-伤心太平洋.mp3',img_url:'./img/02.jpg',},
{name:'任贤齐-少年游',singer:'任贤齐',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/任贤齐-少年游.mp3',img_url:'./img/03.jpg',},
{name:'任贤齐-死不了',singer:'任贤齐',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/任贤齐-死不了.mp3',img_url:'./img/04.jpg',},
{name:'任贤齐-天使也一样',singer:'任贤齐',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/任贤齐-天使也一样.mp3',img_url:'./img/05.jpg',},
{name:'任贤齐-天涯',singer:'任贤齐',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/任贤齐-天涯.mp3',img_url:'./img/01.jpg',},
{name:'任贤齐-我是一只鱼',singer:'任贤齐',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/任贤齐-我是一只鱼.mp3',img_url:'./img/02.jpg',},
{name:'任贤齐-小雪',singer:'任贤齐',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/任贤齐-小雪.mp3',img_url:'./img/03.jpg',},
{name:'任贤齐-心太软',singer:'任贤齐',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/任贤齐-心太软.mp3',img_url:'./img/04.jpg',},
{name:'任贤齐-兄弟',singer:'任贤齐',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/任贤齐-兄弟.mp3',img_url:'./img/05.jpg',},
{name:'任贤齐-依靠',singer:'任贤齐',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/任贤齐-依靠.mp3',img_url:'./img/01.jpg',},
{name:'任贤齐-只爱你一个人',singer:'任贤齐',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/任贤齐-只爱你一个人.mp3',img_url:'./img/02.jpg',},
{name:'容祖儿-挥着翅膀的女孩',singer:'容祖儿',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/容祖儿-挥着翅膀的女孩.mp3',img_url:'./img/03.jpg',},
{name:'容祖儿-我的骄傲',singer:'容祖儿',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/容祖儿-我的骄傲.mp3',img_url:'./img/04.jpg',},
{name:'容祖儿-小小',singer:'容祖儿',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/容祖儿-小小.mp3',img_url:'./img/05.jpg',},
{name:'萨顶顶 周深-左手指月',singer:'萨顶顶 周深',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/萨顶顶 周深-左手指月.mp3',img_url:'./img/01.jpg',},
{name:'萨顶顶-咚巴啦',singer:'萨顶顶',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/萨顶顶-咚巴啦.mp3',img_url:'./img/02.jpg',},
{name:'萨顶顶-万物生(梵文版)',singer:'萨顶顶',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/萨顶顶-万物生(梵文版).mp3',img_url:'./img/03.jpg',},
{name:'萨顶顶-万物生',singer:'萨顶顶',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/萨顶顶-万物生.mp3',img_url:'./img/04.jpg',},
{name:'萨顶顶-自己美',singer:'萨顶顶',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/萨顶顶-自己美.mp3',img_url:'./img/05.jpg',},
{name:'萨顶顶-自由行走的花',singer:'萨顶顶',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/萨顶顶-自由行走的花.mp3',img_url:'./img/01.jpg',},
{name:'萨顶顶-左手指月',singer:'萨顶顶',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/萨顶顶-左手指月.mp3',img_url:'./img/02.jpg',},
{name:'三楠-晚风作酒',singer:'三楠',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/三楠-晚风作酒.mp3',img_url:'./img/03.jpg',},
{name:'沙宝亮-暗香',singer:'沙宝亮',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/沙宝亮-暗香.mp3',img_url:'./img/04.jpg',},
{name:'沙宝亮-斑马斑马',singer:'沙宝亮',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/沙宝亮-斑马斑马.mp3',img_url:'./img/05.jpg',},
{name:'少女时代-Gee',singer:'少女时代',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/少女时代-Gee.mp3',img_url:'./img/01.jpg',},
{name:'少女时代-MrTaxi',singer:'少女时代',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/少女时代-MrTaxi.mp3',img_url:'./img/02.jpg',},
{name:'少女时代-TheBoys',singer:'少女时代',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/少女时代-TheBoys.mp3',img_url:'./img/03.jpg',},
{name:'深海鱼子酱-千千万万',singer:'深海鱼子酱',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/深海鱼子酱-千千万万.mp3',img_url:'./img/04.jpg',},
{name:'石头 李玉刚-雨花石',singer:'石头 李玉刚',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/石头 李玉刚-雨花石.mp3',img_url:'./img/05.jpg',},
{name:'石头-坚强的石头',singer:'石头',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/石头-坚强的石头.mp3',img_url:'./img/01.jpg',},
{name:'淑熙-啦啦啦',singer:'淑熙',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/淑熙-啦啦啦.mp3',img_url:'./img/02.jpg',},
{name:'水木年华-一生有你',singer:'水木年华',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/水木年华-一生有你.mp3',img_url:'./img/03.jpg',},
{name:'水木年华-在他乡',singer:'水木年华',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/水木年华-在他乡.mp3',img_url:'./img/04.jpg',},
{name:'顺子-回家(Live)',singer:'顺子',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/顺子-回家(Live).mp3',img_url:'./img/05.jpg',},
{name:'司南-冬眠',singer:'司南',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/司南-冬眠.mp3',img_url:'./img/01.jpg',},
{name:'斯琴高丽-犯错',singer:'斯琴高丽',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/斯琴高丽-犯错.mp3',img_url:'./img/02.jpg',},
{name:'苏慧伦-鸭子',singer:'苏慧伦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/苏慧伦-鸭子.mp3',img_url:'./img/03.jpg',},
{name:'苏芮-跟着感觉走',singer:'苏芮',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/苏芮-跟着感觉走.mp3',img_url:'./img/04.jpg',},
{name:'苏芮-牵手',singer:'苏芮',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/苏芮-牵手.mp3',img_url:'./img/05.jpg',},
{name:'苏星婕-听悲伤的情歌',singer:'苏星婕',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/苏星婕-听悲伤的情歌.mp3',img_url:'./img/01.jpg',},
{name:'苏永康-爱一个人好难',singer:'苏永康',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/苏永康-爱一个人好难.mp3',img_url:'./img/02.jpg',},
{name:'苏永康-男人不该让女人流泪',singer:'苏永康',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/苏永康-男人不该让女人流泪.mp3',img_url:'./img/03.jpg',},
{name:'苏运莹-野子',singer:'苏运莹',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/苏运莹-野子.mp3',img_url:'./img/04.jpg',},
{name:'孙国庆-代价',singer:'孙国庆',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/孙国庆-代价.mp3',img_url:'./img/05.jpg',},
{name:'孙国庆-上上签',singer:'孙国庆',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/孙国庆-上上签.mp3',img_url:'./img/01.jpg',},
{name:'孙浩-中华民谣',singer:'孙浩',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/孙浩-中华民谣.mp3',img_url:'./img/02.jpg',},
{name:'孙楠 韩红-美丽的神话',singer:'孙楠 韩红',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/孙楠 韩红-美丽的神话.mp3',img_url:'./img/03.jpg',},
{name:'孙楠 那英-只要有你',singer:'孙楠 那英',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/孙楠 那英-只要有你.mp3',img_url:'./img/04.jpg',},
{name:'孙楠-IBelieve',singer:'孙楠',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/孙楠-IBelieve.mp3',img_url:'./img/05.jpg',},
{name:'孙楠-你快回来',singer:'孙楠',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/孙楠-你快回来.mp3',img_url:'./img/01.jpg',},
{name:'孙楠-缘分的天空',singer:'孙楠',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/孙楠-缘分的天空.mp3',img_url:'./img/02.jpg',},
{name:'孙楠-拯救',singer:'孙楠',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/孙楠-拯救.mp3',img_url:'./img/03.jpg',},
{name:'孙燕姿-风筝',singer:'孙燕姿',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/孙燕姿-风筝.mp3',img_url:'./img/04.jpg',},
{name:'孙燕姿-坏天气',singer:'孙燕姿',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/孙燕姿-坏天气.mp3',img_url:'./img/05.jpg',},
{name:'孙燕姿-开始懂了',singer:'孙燕姿',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/孙燕姿-开始懂了.mp3',img_url:'./img/01.jpg',},
{name:'孙燕姿-绿光',singer:'孙燕姿',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/孙燕姿-绿光.mp3',img_url:'./img/02.jpg',},
{name:'孙燕姿-神奇',singer:'孙燕姿',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/孙燕姿-神奇.mp3',img_url:'./img/03.jpg',},
{name:'孙燕姿-天黑黑',singer:'孙燕姿',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/孙燕姿-天黑黑.mp3',img_url:'./img/04.jpg',},
{name:'孙燕姿-我要的幸福',singer:'孙燕姿',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/孙燕姿-我要的幸福.mp3',img_url:'./img/05.jpg',},
{name:'孙燕姿-遇见',singer:'孙燕姿',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/孙燕姿-遇见.mp3',img_url:'./img/01.jpg',},
{name:'孙燕姿-原来你什么都不要',singer:'孙燕姿',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/孙燕姿-原来你什么都不要.mp3',img_url:'./img/02.jpg',},
{name:'孙悦-快乐指南',singer:'孙悦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/孙悦-快乐指南.mp3',img_url:'./img/03.jpg',},
{name:'孙悦-心情不错',singer:'孙悦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/孙悦-心情不错.mp3',img_url:'./img/04.jpg',},
{name:'孙悦-幸福快车',singer:'孙悦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/孙悦-幸福快车.mp3',img_url:'./img/05.jpg',},
{name:'孙悦-祝你平安',singer:'孙悦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/孙悦-祝你平安.mp3',img_url:'./img/01.jpg',},
{name:'索朗扎西-姑娘我爱你',singer:'索朗扎西',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/索朗扎西-姑娘我爱你.mp3',img_url:'./img/02.jpg',},
{name:'邰正宵 孙悦-好人好梦',singer:'邰正宵 孙悦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/邰正宵 孙悦-好人好梦.mp3',img_url:'./img/03.jpg',},
{name:'邰正宵-九百九十九朵玫瑰',singer:'邰正宵',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/邰正宵-九百九十九朵玫瑰.mp3',img_url:'./img/04.jpg',},
{name:'邰正宵-千纸鹤',singer:'邰正宵',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/邰正宵-千纸鹤.mp3',img_url:'./img/05.jpg',},
{name:'邰正宵-心要让你听见',singer:'邰正宵',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/邰正宵-心要让你听见.mp3',img_url:'./img/01.jpg',},
{name:'邰正宵-一千零一夜',singer:'邰正宵',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/邰正宵-一千零一夜.mp3',img_url:'./img/02.jpg',},
{name:'邰正宵-找一个字代替',singer:'邰正宵',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/邰正宵-找一个字代替.mp3',img_url:'./img/03.jpg',},
{name:'谭晶-赤伶',singer:'谭晶',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/谭晶-赤伶.mp3',img_url:'./img/04.jpg',},
{name:'谭咏麟-爱的根源',singer:'谭咏麟',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/谭咏麟-爱的根源.mp3',img_url:'./img/05.jpg',},
{name:'谭咏麟-爱在深秋',singer:'谭咏麟',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/谭咏麟-爱在深秋.mp3',img_url:'./img/01.jpg',},
{name:'谭咏麟-讲不出再见',singer:'谭咏麟',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/谭咏麟-讲不出再见.mp3',img_url:'./img/02.jpg',},
{name:'谭咏麟-朋友',singer:'谭咏麟',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/谭咏麟-朋友.mp3',img_url:'./img/03.jpg',},
{name:'谭咏麟-水中花',singer:'谭咏麟',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/谭咏麟-水中花.mp3',img_url:'./img/04.jpg',},
{name:'谭咏麟-一生中最爱',singer:'谭咏麟',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/谭咏麟-一生中最爱.mp3',img_url:'./img/05.jpg',},
{name:'谭咏麟-再见亦是泪',singer:'谭咏麟',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/谭咏麟-再见亦是泪.mp3',img_url:'./img/01.jpg',},
{name:'汤潮-狼爱上羊',singer:'汤潮',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/汤潮-狼爱上羊.mp3',img_url:'./img/02.jpg',},
{name:'汤潮-美了美了',singer:'汤潮',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/汤潮-美了美了.mp3',img_url:'./img/03.jpg',},
{name:'唐伯虎Annie 伯爵Johnny-弱水三千',singer:'唐伯虎Annie 伯爵Johnny',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/唐伯虎Annie 伯爵Johnny-弱水三千.mp3',img_url:'./img/04.jpg',},
{name:'唐伯虎Annie-落',singer:'唐伯虎Annie',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/唐伯虎Annie-落.mp3',img_url:'./img/05.jpg',},
{name:'唐伯虎Annie-青丝',singer:'唐伯虎Annie',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/唐伯虎Annie-青丝.mp3',img_url:'./img/01.jpg',},
{name:'唐汉霄-烂泥',singer:'唐汉霄',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/唐汉霄-烂泥.mp3',img_url:'./img/02.jpg',},
{name:'唐磊-丁香花',singer:'唐磊',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/唐磊-丁香花.mp3',img_url:'./img/03.jpg',},
{name:'逃跑计划-夜空中最亮的星',singer:'逃跑计划',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/逃跑计划-夜空中最亮的星.mp3',img_url:'./img/04.jpg',},
{name:'桃籽-此去半生',singer:'桃籽',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/桃籽-此去半生.mp3',img_url:'./img/05.jpg',},
{name:'陶晶莹-太委屈',singer:'陶晶莹',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陶晶莹-太委屈.mp3',img_url:'./img/01.jpg',},
{name:'陶喆-melody',singer:'陶喆',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陶喆-melody.mp3',img_url:'./img/02.jpg',},
{name:'陶喆-爱很简单',singer:'陶喆',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陶喆-爱很简单.mp3',img_url:'./img/03.jpg',},
{name:'陶喆-爱我还是他',singer:'陶喆',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陶喆-爱我还是他.mp3',img_url:'./img/04.jpg',},
{name:'陶喆-小镇姑娘',singer:'陶喆',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/陶喆-小镇姑娘.mp3',img_url:'./img/05.jpg',},
{name:'腾格尔-天堂',singer:'腾格尔',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/腾格尔-天堂.mp3',img_url:'./img/01.jpg',},
{name:'田馥甄-寂寞寂寞就好',singer:'田馥甄',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/田馥甄-寂寞寂寞就好.mp3',img_url:'./img/02.jpg',},
{name:'田馥甄-小幸运',singer:'田馥甄',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/田馥甄-小幸运.mp3',img_url:'./img/03.jpg',},
{name:'田震-风雨彩虹铿锵玫瑰',singer:'田震',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/田震-风雨彩虹铿锵玫瑰.mp3',img_url:'./img/04.jpg',},
{name:'田震-干杯朋友',singer:'田震',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/田震-干杯朋友.mp3',img_url:'./img/05.jpg',},
{name:'铁达尼号主题曲-MyHeartWillGoOn',singer:'铁达尼号主题曲',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/铁达尼号主题曲-MyHeartWillGoOn.mp3',img_url:'./img/01.jpg',},
{name:'童安格-梦开始的地方',singer:'童安格',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/童安格-梦开始的地方.mp3',img_url:'./img/02.jpg',},
{name:'童安格-明天你是否依然爱我',singer:'童安格',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/童安格-明天你是否依然爱我.mp3',img_url:'./img/03.jpg',},
{name:'童安格-耶利亚女郎',singer:'童安格',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/童安格-耶利亚女郎.mp3',img_url:'./img/04.jpg',},
{name:'屠洪刚-霸王别姬',singer:'屠洪刚',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/屠洪刚-霸王别姬.mp3',img_url:'./img/05.jpg',},
{name:'屠洪刚-江山无限',singer:'屠洪刚',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/屠洪刚-江山无限.mp3',img_url:'./img/01.jpg',},
{name:'屠洪刚-精忠报国',singer:'屠洪刚',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/屠洪刚-精忠报国.mp3',img_url:'./img/02.jpg',},
{name:'屠洪刚-我心为谁动',singer:'屠洪刚',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/屠洪刚-我心为谁动.mp3',img_url:'./img/03.jpg',},
{name:'屠洪刚-英雄谁属',singer:'屠洪刚',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/屠洪刚-英雄谁属.mp3',img_url:'./img/04.jpg',},
{name:'屠洪刚-中国功夫',singer:'屠洪刚',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/屠洪刚-中国功夫.mp3',img_url:'./img/05.jpg',},
{name:'娃娃-漂洋过海来看你',singer:'娃娃',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/娃娃-漂洋过海来看你.mp3',img_url:'./img/01.jpg',},
{name:'婉婷-拱手让人',singer:'婉婷',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/婉婷-拱手让人.mp3',img_url:'./img/02.jpg',},
{name:'汪峰-北京北京',singer:'汪峰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/汪峰-北京北京.mp3',img_url:'./img/03.jpg',},
{name:'汪峰-春天里',singer:'汪峰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/汪峰-春天里.mp3',img_url:'./img/04.jpg',},
{name:'汪峰-存在',singer:'汪峰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/汪峰-存在.mp3',img_url:'./img/05.jpg',},
{name:'汪峰-飞得更高',singer:'汪峰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/汪峰-飞得更高.mp3',img_url:'./img/01.jpg',},
{name:'汪峰-怒放的生命',singer:'汪峰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/汪峰-怒放的生命.mp3',img_url:'./img/02.jpg',},
{name:'汪峰-无处安放',singer:'汪峰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/汪峰-无处安放.mp3',img_url:'./img/03.jpg',},
{name:'汪峰-也许我可以无视死亡',singer:'汪峰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/汪峰-也许我可以无视死亡.mp3',img_url:'./img/04.jpg',},
{name:'汪峰-一起摇摆',singer:'汪峰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/汪峰-一起摇摆.mp3',img_url:'./img/05.jpg',},
{name:'汪明荃-万水千山总是情',singer:'汪明荃',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/汪明荃-万水千山总是情.mp3',img_url:'./img/01.jpg',},
{name:'汪苏泷 By2-有点甜',singer:'汪苏泷 By2',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/汪苏泷 By2-有点甜.mp3',img_url:'./img/02.jpg',},
{name:'汪苏泷-不分手的恋爱',singer:'汪苏泷',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/汪苏泷-不分手的恋爱.mp3',img_url:'./img/03.jpg',},
{name:'汪正正-超越梦想',singer:'汪正正',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/汪正正-超越梦想.mp3',img_url:'./img/04.jpg',},
{name:'汪正正-重头再来',singer:'汪正正',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/汪正正-重头再来.mp3',img_url:'./img/05.jpg',},
{name:'王冰洋-飞舞',singer:'王冰洋',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王冰洋-飞舞.mp3',img_url:'./img/01.jpg',},
{name:'王贰浪-像鱼',singer:'王贰浪',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王贰浪-像鱼.mp3',img_url:'./img/02.jpg',},
{name:'王菲 陈奕迅 -因为爱情',singer:'王菲 陈奕迅 ',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王菲 陈奕迅 -因为爱情.mp3',img_url:'./img/03.jpg',},
{name:'王菲 那英-生命之河',singer:'王菲 那英',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王菲 那英-生命之河.mp3',img_url:'./img/04.jpg',},
{name:'王菲 那英-岁月',singer:'王菲 那英',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王菲 那英-岁月.mp3',img_url:'./img/05.jpg',},
{name:'王菲-传奇',singer:'王菲',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王菲-传奇.mp3',img_url:'./img/01.jpg',},
{name:'王菲-红豆',singer:'王菲',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王菲-红豆.mp3',img_url:'./img/02.jpg',},
{name:'王菲-容易受伤的女人',singer:'王菲',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王菲-容易受伤的女人.mp3',img_url:'./img/03.jpg',},
{name:'王菲-如愿',singer:'王菲',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王菲-如愿.mp3',img_url:'./img/04.jpg',},
{name:'王菲-世界赠予我的',singer:'王菲',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王菲-世界赠予我的.mp3',img_url:'./img/05.jpg',},
{name:'王菲-笑忘书',singer:'王菲',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王菲-笑忘书.mp3',img_url:'./img/01.jpg',},
{name:'王赫野-大风吹',singer:'王赫野',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王赫野-大风吹.mp3',img_url:'./img/02.jpg',},
{name:'王杰 王韵婵-祈祷',singer:'王杰 王韵婵',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王杰 王韵婵-祈祷.mp3',img_url:'./img/03.jpg',},
{name:'王杰-爱得太多',singer:'王杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王杰-爱得太多.mp3',img_url:'./img/04.jpg',},
{name:'王杰-安妮',singer:'王杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王杰-安妮.mp3',img_url:'./img/05.jpg',},
{name:'王杰-冰冷长街',singer:'王杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王杰-冰冷长街.mp3',img_url:'./img/01.jpg',},
{name:'王杰-不浪漫罪名',singer:'王杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王杰-不浪漫罪名.mp3',img_url:'./img/02.jpg',},
{name:'王杰-惦记这一些',singer:'王杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王杰-惦记这一些.mp3',img_url:'./img/03.jpg',},
{name:'王杰-封锁我一生',singer:'王杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王杰-封锁我一生.mp3',img_url:'./img/04.jpg',},
{name:'王杰-红尘有你',singer:'王杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王杰-红尘有你.mp3',img_url:'./img/05.jpg',},
{name:'王杰-回家',singer:'王杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王杰-回家.mp3',img_url:'./img/01.jpg',},
{name:'王杰-几分伤心几分痴',singer:'王杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王杰-几分伤心几分痴.mp3',img_url:'./img/02.jpg',},
{name:'王杰-可能',singer:'王杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王杰-可能.mp3',img_url:'./img/03.jpg',},
{name:'王杰-你是我胸口永远的痛',singer:'王杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王杰-你是我胸口永远的痛.mp3',img_url:'./img/04.jpg',},
{name:'王杰-伤心1999',singer:'王杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王杰-伤心1999.mp3',img_url:'./img/05.jpg',},
{name:'王杰-谁明浪子心',singer:'王杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王杰-谁明浪子心.mp3',img_url:'./img/01.jpg',},
{name:'王杰-她的背影',singer:'王杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王杰-她的背影.mp3',img_url:'./img/02.jpg',},
{name:'王杰-忘记你不如忘记自己',singer:'王杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王杰-忘记你不如忘记自己.mp3',img_url:'./img/03.jpg',},
{name:'王杰-忘了你忘了我',singer:'王杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王杰-忘了你忘了我.mp3',img_url:'./img/04.jpg',},
{name:'王杰-为了爱梦一生',singer:'王杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王杰-为了爱梦一生.mp3',img_url:'./img/05.jpg',},
{name:'王杰-我是真的爱上你',singer:'王杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王杰-我是真的爱上你.mp3',img_url:'./img/01.jpg',},
{name:'王杰-心痛',singer:'王杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王杰-心痛.mp3',img_url:'./img/02.jpg',},
{name:'王杰-一场游戏一场梦',singer:'王杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王杰-一场游戏一场梦.mp3',img_url:'./img/03.jpg',},
{name:'王杰-一无所有',singer:'王杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王杰-一无所有.mp3',img_url:'./img/04.jpg',},
{name:'王杰-英雄泪',singer:'王杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王杰-英雄泪.mp3',img_url:'./img/05.jpg',},
{name:'王靖雯-沦陷',singer:'王靖雯',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王靖雯-沦陷.mp3',img_url:'./img/01.jpg',},
{name:'王靖雯-善变',singer:'王靖雯',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王靖雯-善变.mp3',img_url:'./img/02.jpg',},
{name:'王力宏 selina-你是我心内的一首歌',singer:'王力宏 selina',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王力宏 selina-你是我心内的一首歌.mp3',img_url:'./img/03.jpg',},
{name:'王力宏 卢巧音-好心分手',singer:'王力宏 卢巧音',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王力宏 卢巧音-好心分手.mp3',img_url:'./img/04.jpg',},
{name:'王力宏 谭维维-缘分一道桥',singer:'王力宏 谭维维',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王力宏 谭维维-缘分一道桥.mp3',img_url:'./img/05.jpg',},
{name:'王力宏-爱的就是你',singer:'王力宏',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王力宏-爱的就是你.mp3',img_url:'./img/01.jpg',},
{name:'王力宏-大城小爱',singer:'王力宏',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王力宏-大城小爱.mp3',img_url:'./img/02.jpg',},
{name:'王力宏-改变自己',singer:'王力宏',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王力宏-改变自己.mp3',img_url:'./img/03.jpg',},
{name:'王力宏-花田错',singer:'王力宏',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王力宏-花田错.mp3',img_url:'./img/04.jpg',},
{name:'王力宏-龙的传人',singer:'王力宏',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王力宏-龙的传人.mp3',img_url:'./img/05.jpg',},
{name:'王力宏-天地龙鳞',singer:'王力宏',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王力宏-天地龙鳞.mp3',img_url:'./img/01.jpg',},
{name:'王力宏-唯一',singer:'王力宏',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王力宏-唯一.mp3',img_url:'./img/02.jpg',},
{name:'王麟 完玛三智-唐古拉',singer:'王麟 完玛三智',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王麟 完玛三智-唐古拉.mp3',img_url:'./img/03.jpg',},
{name:'王麟-QQ爱',singer:'王麟',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王麟-QQ爱.mp3',img_url:'./img/04.jpg',},
{name:'王麟-伤不起',singer:'王麟',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王麟-伤不起.mp3',img_url:'./img/05.jpg',},
{name:'王强 -不想让你哭',singer:'王强 ',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王强 -不想让你哭.mp3',img_url:'./img/01.jpg',},
{name:'王强-你把爱情给了谁',singer:'王强',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王强-你把爱情给了谁.mp3',img_url:'./img/02.jpg',},
{name:'王强-秋天不回来',singer:'王强',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王强-秋天不回来.mp3',img_url:'./img/03.jpg',},
{name:'王蓉-哎呀',singer:'王蓉',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王蓉-哎呀.mp3',img_url:'./img/04.jpg',},
{name:'王蓉-爸爸妈妈',singer:'王蓉',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王蓉-爸爸妈妈.mp3',img_url:'./img/05.jpg',},
{name:'王蓉-我不是黄蓉',singer:'王蓉',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王蓉-我不是黄蓉.mp3',img_url:'./img/01.jpg',},
{name:'王唯旖-无情画',singer:'王唯旖',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王唯旖-无情画.mp3',img_url:'./img/02.jpg',},
{name:'王心凌-honey',singer:'王心凌',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王心凌-honey.mp3',img_url:'./img/03.jpg',},
{name:'王心凌-爱你',singer:'王心凌',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王心凌-爱你.mp3',img_url:'./img/04.jpg',},
{name:'王心凌-不哭',singer:'王心凌',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王心凌-不哭.mp3',img_url:'./img/05.jpg',},
{name:'王心凌-彩虹的微笑',singer:'王心凌',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王心凌-彩虹的微笑.mp3',img_url:'./img/01.jpg',},
{name:'王心凌-第一次爱的人',singer:'王心凌',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王心凌-第一次爱的人.mp3',img_url:'./img/02.jpg',},
{name:'王心凌-心心相印',singer:'王心凌',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王心凌-心心相印.mp3',img_url:'./img/03.jpg',},
{name:'王馨平-别问我是谁',singer:'王馨平',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王馨平-别问我是谁.mp3',img_url:'./img/04.jpg',},
{name:'王娅-爱情错觉',singer:'王娅',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王娅-爱情错觉.mp3',img_url:'./img/05.jpg',},
{name:'王宇宙Leto 乔浚丞-若月亮没来',singer:'王宇宙Leto 乔浚丞',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王宇宙Leto 乔浚丞-若月亮没来.mp3',img_url:'./img/01.jpg',},
{name:'王铮亮-时间都去哪儿了',singer:'王铮亮',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/王铮亮-时间都去哪儿了.mp3',img_url:'./img/02.jpg',},
{name:'旺仔小乔-年轮',singer:'旺仔小乔',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/旺仔小乔-年轮.mp3',img_url:'./img/03.jpg',},
{name:'旺仔小乔-樱花树下的约定',singer:'旺仔小乔',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/旺仔小乔-樱花树下的约定.mp3',img_url:'./img/04.jpg',},
{name:'魏爱梓欣-不渡',singer:'魏爱梓欣',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/魏爱梓欣-不渡.mp3',img_url:'./img/05.jpg',},
{name:'魏爱梓欣-成魔（你啊妖摇入骨情欲滔天）',singer:'魏爱梓欣',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/魏爱梓欣-成魔（你啊妖摇入骨情欲滔天）.mp3',img_url:'./img/01.jpg',},
{name:'魏爱梓欣-给阿嬷的情书',singer:'魏爱梓欣',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/魏爱梓欣-给阿嬷的情书.mp3',img_url:'./img/02.jpg',},
{name:'魏爱梓欣-醒来折花',singer:'魏爱梓欣',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/魏爱梓欣-醒来折花.mp3',img_url:'./img/03.jpg',},
{name:'魏新雨-恋人心',singer:'魏新雨',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/魏新雨-恋人心.mp3',img_url:'./img/04.jpg',},
{name:'魏新雨-余情未了',singer:'魏新雨',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/魏新雨-余情未了.mp3',img_url:'./img/05.jpg',},
{name:'魏玉慧-相思遥',singer:'魏玉慧',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/魏玉慧-相思遥.mp3',img_url:'./img/01.jpg',},
{name:'温奕心-一路生花',singer:'温奕心',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/温奕心-一路生花.mp3',img_url:'./img/02.jpg',},
{name:'闻人听書-虞兮叹',singer:'闻人听書',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/闻人听書-虞兮叹.mp3',img_url:'./img/03.jpg',},
{name:'闻人听書-鸳鸯戏',singer:'闻人听書',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/闻人听書-鸳鸯戏.mp3',img_url:'./img/04.jpg',},
{name:'窝窝-月亮照山川',singer:'窝窝',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/窝窝-月亮照山川.mp3',img_url:'./img/05.jpg',},
{name:'乌达木-梦中的额吉',singer:'乌达木',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/乌达木-梦中的额吉.mp3',img_url:'./img/01.jpg',},
{name:'乌兰托娅-火红的萨日朗',singer:'乌兰托娅',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/乌兰托娅-火红的萨日朗.mp3',img_url:'./img/02.jpg',},
{name:'乌兰托娅-套马杆',singer:'乌兰托娅',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/乌兰托娅-套马杆.mp3',img_url:'./img/03.jpg',},
{name:'巫启贤-红尘来去一场梦',singer:'巫启贤',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/巫启贤-红尘来去一场梦.mp3',img_url:'./img/04.jpg',},
{name:'巫启贤-太傻',singer:'巫启贤',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/巫启贤-太傻.mp3',img_url:'./img/05.jpg',},
{name:'吴克群-为你写诗',singer:'吴克群',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/吴克群-为你写诗.mp3',img_url:'./img/01.jpg',},
{name:'吴奇隆-烟火',singer:'吴奇隆',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/吴奇隆-烟火.mp3',img_url:'./img/02.jpg',},
{name:'吴奇隆-祝你一路顺风',singer:'吴奇隆',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/吴奇隆-祝你一路顺风.mp3',img_url:'./img/03.jpg',},
{name:'吴亦凡-大碗宽面',singer:'吴亦凡',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/吴亦凡-大碗宽面.mp3',img_url:'./img/04.jpg',},
{name:'五月天-你不是真正的快乐',singer:'五月天',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/五月天-你不是真正的快乐.mp3',img_url:'./img/05.jpg',},
{name:'五月天-突然好想你',singer:'五月天',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/五月天-突然好想你.mp3',img_url:'./img/01.jpg',},
{name:'伍佰 China Blue-我会好好的',singer:'伍佰 China Blue',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/伍佰 China Blue-我会好好的.mp3',img_url:'./img/02.jpg',},
{name:'伍佰-孤星泪',singer:'伍佰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/伍佰-孤星泪.mp3',img_url:'./img/03.jpg',},
{name:'伍佰-浪人情歌',singer:'伍佰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/伍佰-浪人情歌.mp3',img_url:'./img/04.jpg',},
{name:'伍佰-挪威的森林',singer:'伍佰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/伍佰-挪威的森林.mp3',img_url:'./img/05.jpg',},
{name:'伍佰-如果这都不算爱',singer:'伍佰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/伍佰-如果这都不算爱.mp3',img_url:'./img/01.jpg',},
{name:'伍佰-世界第一等',singer:'伍佰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/伍佰-世界第一等.mp3',img_url:'./img/02.jpg',},
{name:'伍佰-痛哭的人',singer:'伍佰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/伍佰-痛哭的人.mp3',img_url:'./img/03.jpg',},
{name:'伍佰-突然的自我',singer:'伍佰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/伍佰-突然的自我.mp3',img_url:'./img/04.jpg',},
{name:'伍佰-与你到永久',singer:'伍佰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/伍佰-与你到永久.mp3',img_url:'./img/05.jpg',},
{name:'伍佰-再度重相逢',singer:'伍佰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/伍佰-再度重相逢.mp3',img_url:'./img/01.jpg',},
{name:'伍思凯-特别的爱给特别的你',singer:'伍思凯',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/伍思凯-特别的爱给特别的你.mp3',img_url:'./img/02.jpg',},
{name:'希莉娜依 胡兵-归去来',singer:'希莉娜依 胡兵',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/希莉娜依 胡兵-归去来.mp3',img_url:'./img/03.jpg',},
{name:'希林娜依高-红尘莫欺我年少',singer:'希林娜依高',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/希林娜依高-红尘莫欺我年少.mp3',img_url:'./img/04.jpg',},
{name:'希林娜依高-那年星辰',singer:'希林娜依高',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/希林娜依高-那年星辰.mp3',img_url:'./img/05.jpg',},
{name:'希林娜依高-微光星海',singer:'希林娜依高',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/希林娜依高-微光星海.mp3',img_url:'./img/01.jpg',},
{name:'希林娜依高-瑕面舞会',singer:'希林娜依高',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/希林娜依高-瑕面舞会.mp3',img_url:'./img/02.jpg',},
{name:'希亚-心醉',singer:'希亚',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/希亚-心醉.mp3',img_url:'./img/03.jpg',},
{name:'夏婉安-听不完的情歌',singer:'夏婉安',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/夏婉安-听不完的情歌.mp3',img_url:'./img/04.jpg',},
{name:'弦子 王唯乐-不甘',singer:'弦子 王唯乐',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/弦子 王唯乐-不甘.mp3',img_url:'./img/05.jpg',},
{name:'弦子 姚晓棠-会开花的云',singer:'弦子 姚晓棠',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/弦子 姚晓棠-会开花的云.mp3',img_url:'./img/01.jpg',},
{name:'弦子-第三者的第三者',singer:'弦子',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/弦子-第三者的第三者.mp3',img_url:'./img/02.jpg',},
{name:'弦子-舍不得',singer:'弦子',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/弦子-舍不得.mp3',img_url:'./img/03.jpg',},
{name:'弦子-天空之外',singer:'弦子',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/弦子-天空之外.mp3',img_url:'./img/04.jpg',},
{name:'弦子-天真',singer:'弦子',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/弦子-天真.mp3',img_url:'./img/05.jpg',},
{name:'弦子-沿海地带',singer:'弦子',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/弦子-沿海地带.mp3',img_url:'./img/01.jpg',},
{name:'弦子-醉清风',singer:'弦子',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/弦子-醉清风.mp3',img_url:'./img/02.jpg',},
{name:'香香-猪之歌',singer:'香香',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/香香-猪之歌.mp3',img_url:'./img/03.jpg',},
{name:'萧煌奇-偷走',singer:'萧煌奇',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/萧煌奇-偷走.mp3',img_url:'./img/04.jpg',},
{name:'萧敬腾-王妃',singer:'萧敬腾',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/萧敬腾-王妃.mp3',img_url:'./img/05.jpg',},
{name:'萧全 孙语赛-不仅仅是喜欢',singer:'萧全 孙语赛',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/萧全 孙语赛-不仅仅是喜欢.mp3',img_url:'./img/01.jpg',},
{name:'萧全-海草舞',singer:'萧全',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/萧全-海草舞.mp3',img_url:'./img/02.jpg',},
{name:'萧全-社会摇',singer:'萧全',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/萧全-社会摇.mp3',img_url:'./img/03.jpg',},
{name:'萧萧-倔强的坚强',singer:'萧萧',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/萧萧-倔强的坚强.mp3',img_url:'./img/04.jpg',},
{name:'萧潇-爱要坦荡荡',singer:'萧潇',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/萧潇-爱要坦荡荡.mp3',img_url:'./img/05.jpg',},
{name:'萧亚轩 韩庚-最佳听众',singer:'萧亚轩 韩庚',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/萧亚轩 韩庚-最佳听众.mp3',img_url:'./img/01.jpg',},
{name:'萧亚轩-Cappuccino',singer:'萧亚轩',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/萧亚轩-Cappuccino.mp3',img_url:'./img/02.jpg',},
{name:'萧亚轩-HoneyHoneyHoney',singer:'萧亚轩',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/萧亚轩-HoneyHoneyHoney.mp3',img_url:'./img/03.jpg',},
{name:'萧亚轩-窗外的天气',singer:'萧亚轩',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/萧亚轩-窗外的天气.mp3',img_url:'./img/04.jpg',},
{name:'萧亚轩-类似爱情',singer:'萧亚轩',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/萧亚轩-类似爱情.mp3',img_url:'./img/05.jpg',},
{name:'萧亚轩-蔷薇',singer:'萧亚轩',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/萧亚轩-蔷薇.mp3',img_url:'./img/01.jpg',},
{name:'萧亚轩-突然想起你',singer:'萧亚轩',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/萧亚轩-突然想起你.mp3',img_url:'./img/02.jpg',},
{name:'萧亚轩-我爱你那么多',singer:'萧亚轩',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/萧亚轩-我爱你那么多.mp3',img_url:'./img/03.jpg',},
{name:'萧亚轩-一个人的精彩',singer:'萧亚轩',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/萧亚轩-一个人的精彩.mp3',img_url:'./img/04.jpg',},
{name:'萧亚轩-最熟悉的陌生人',singer:'萧亚轩',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/萧亚轩-最熟悉的陌生人.mp3',img_url:'./img/05.jpg',},
{name:'小虎队-爱',singer:'小虎队',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/小虎队-爱.mp3',img_url:'./img/01.jpg',},
{name:'小虎队-青苹果乐园',singer:'小虎队',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/小虎队-青苹果乐园.mp3',img_url:'./img/02.jpg',},
{name:'小虎队-十七岁的雨季',singer:'小虎队',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/小虎队-十七岁的雨季.mp3',img_url:'./img/03.jpg',},
{name:'小潘潘 小峰峰-学猫叫',singer:'小潘潘 小峰峰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/小潘潘 小峰峰-学猫叫.mp3',img_url:'./img/04.jpg',},
{name:'小沈阳-爱是你我',singer:'小沈阳',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/小沈阳-爱是你我.mp3',img_url:'./img/05.jpg',},
{name:'小沈阳-都要好好的',singer:'小沈阳',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/小沈阳-都要好好的.mp3',img_url:'./img/01.jpg',},
{name:'小鱼干-没出息',singer:'小鱼干',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/小鱼干-没出息.mp3',img_url:'./img/02.jpg',},
{name:'谢东-清官谣',singer:'谢东',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/谢东-清官谣.mp3',img_url:'./img/03.jpg',},
{name:'谢东-笑脸',singer:'谢东',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/谢东-笑脸.mp3',img_url:'./img/04.jpg',},
{name:'谢东-中华民谣',singer:'谢东',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/谢东-中华民谣.mp3',img_url:'./img/05.jpg',},
{name:'谢军-那一夜',singer:'谢军',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/谢军-那一夜.mp3',img_url:'./img/01.jpg',},
{name:'谢军-心在跳情在烧',singer:'谢军',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/谢军-心在跳情在烧.mp3',img_url:'./img/02.jpg',},
{name:'谢霆锋-谢谢你的爱1999',singer:'谢霆锋',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/谢霆锋-谢谢你的爱1999.mp3',img_url:'./img/03.jpg',},
{name:'谢霆锋-因为爱所以爱',singer:'谢霆锋',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/谢霆锋-因为爱所以爱.mp3',img_url:'./img/04.jpg',},
{name:'谢雨欣-步步高',singer:'谢雨欣',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/谢雨欣-步步高.mp3',img_url:'./img/05.jpg',},
{name:'谢雨欣-第三天',singer:'谢雨欣',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/谢雨欣-第三天.mp3',img_url:'./img/01.jpg',},
{name:'谢雨欣-天仙子',singer:'谢雨欣',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/谢雨欣-天仙子.mp3',img_url:'./img/02.jpg',},
{name:'辛晓琪-味道',singer:'辛晓琪',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/辛晓琪-味道.mp3',img_url:'./img/03.jpg',},
{name:'信乐团-海阔天空',singer:'信乐团',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/信乐团-海阔天空.mp3',img_url:'./img/04.jpg',},
{name:'信乐团-假如',singer:'信乐团',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/信乐团-假如.mp3',img_url:'./img/05.jpg',},
{name:'信乐团-离歌',singer:'信乐团',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/信乐团-离歌.mp3',img_url:'./img/01.jpg',},
{name:'信乐团-死了都要爱',singer:'信乐团',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/信乐团-死了都要爱.mp3',img_url:'./img/02.jpg',},
{name:'熊天平-火柴天堂',singer:'熊天平',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/熊天平-火柴天堂.mp3',img_url:'./img/03.jpg',},
{name:'徐怀钰-叮咚',singer:'徐怀钰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/徐怀钰-叮咚.mp3',img_url:'./img/04.jpg',},
{name:'徐怀钰-分飞',singer:'徐怀钰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/徐怀钰-分飞.mp3',img_url:'./img/05.jpg',},
{name:'徐怀钰-踏浪',singer:'徐怀钰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/徐怀钰-踏浪.mp3',img_url:'./img/01.jpg',},
{name:'徐佳莹-突然好想你',singer:'徐佳莹',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/徐佳莹-突然好想你.mp3',img_url:'./img/02.jpg',},
{name:'徐良 李玉刚-花魁',singer:'徐良 李玉刚',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/徐良 李玉刚-花魁.mp3',img_url:'./img/03.jpg',},
{name:'徐良-那时雨',singer:'徐良',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/徐良-那时雨.mp3',img_url:'./img/04.jpg',},
{name:'徐千雅-彩云之南',singer:'徐千雅',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/徐千雅-彩云之南.mp3',img_url:'./img/05.jpg',},
{name:'徐千雅-我在景德镇等你',singer:'徐千雅',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/徐千雅-我在景德镇等你.mp3',img_url:'./img/01.jpg',},
{name:'徐千雅-坐上火车去拉萨',singer:'徐千雅',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/徐千雅-坐上火车去拉萨.mp3',img_url:'./img/02.jpg',},
{name:'徐小凤-明月千里寄相思',singer:'徐小凤',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/徐小凤-明月千里寄相思.mp3',img_url:'./img/03.jpg',},
{name:'徐小凤-顺流逆流',singer:'徐小凤',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/徐小凤-顺流逆流.mp3',img_url:'./img/04.jpg',},
{name:'徐誉滕-等一分钟 -',singer:'徐誉滕',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/徐誉滕-等一分钟 -.mp3',img_url:'./img/05.jpg',},
{name:'徐誉滕-天使的翅膀',singer:'徐誉滕',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/徐誉滕-天使的翅膀.mp3',img_url:'./img/01.jpg',},
{name:'许慧欣-七月七日晴',singer:'许慧欣',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/许慧欣-七月七日晴.mp3',img_url:'./img/02.jpg',},
{name:'许佳慧-预谋',singer:'许佳慧',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/许佳慧-预谋.mp3',img_url:'./img/03.jpg',},
{name:'许美静-城里的月光',singer:'许美静',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/许美静-城里的月光.mp3',img_url:'./img/04.jpg',},
{name:'许美静-荡漾',singer:'许美静',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/许美静-荡漾.mp3',img_url:'./img/05.jpg',},
{name:'许美静-都是夜归人',singer:'许美静',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/许美静-都是夜归人.mp3',img_url:'./img/01.jpg',},
{name:'许美静-快乐无罪',singer:'许美静',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/许美静-快乐无罪.mp3',img_url:'./img/02.jpg',},
{name:'许美静-蔓延',singer:'许美静',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/许美静-蔓延.mp3',img_url:'./img/03.jpg',},
{name:'许美静-迷乱',singer:'许美静',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/许美静-迷乱.mp3',img_url:'./img/04.jpg',},
{name:'许美静-迫在眉梢',singer:'许美静',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/许美静-迫在眉梢.mp3',img_url:'./img/05.jpg',},
{name:'许美静-铁窗',singer:'许美静',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/许美静-铁窗.mp3',img_url:'./img/01.jpg',},
{name:'许美静-阳光总在风雨后',singer:'许美静',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/许美静-阳光总在风雨后.mp3',img_url:'./img/02.jpg',},
{name:'许美静-遗憾',singer:'许美静',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/许美静-遗憾.mp3',img_url:'./img/03.jpg',},
{name:'许茹芸-独角戏',singer:'许茹芸',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/许茹芸-独角戏.mp3',img_url:'./img/04.jpg',},
{name:'许茹芸-泪海',singer:'许茹芸',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/许茹芸-泪海.mp3',img_url:'./img/05.jpg',},
{name:'许茹芸-日光机场',singer:'许茹芸',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/许茹芸-日光机场.mp3',img_url:'./img/01.jpg',},
{name:'许茹芸-如果云知道',singer:'许茹芸',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/许茹芸-如果云知道.mp3',img_url:'./img/02.jpg',},
{name:'许茹芸-我依然爱你',singer:'许茹芸',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/许茹芸-我依然爱你.mp3',img_url:'./img/03.jpg',},
{name:'许茹芸-一直是晴天',singer:'许茹芸',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/许茹芸-一直是晴天.mp3',img_url:'./img/04.jpg',},
{name:'许韶洋-花香',singer:'许韶洋',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/许韶洋-花香.mp3',img_url:'./img/05.jpg',},
{name:'许韶洋-幸福的瞬间',singer:'许韶洋',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/许韶洋-幸福的瞬间.mp3',img_url:'./img/01.jpg',},
{name:'许嵩 何曼婷-素颜',singer:'许嵩 何曼婷',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/许嵩 何曼婷-素颜.mp3',img_url:'./img/02.jpg',},
{name:'许嵩-半城烟沙',singer:'许嵩',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/许嵩-半城烟沙.mp3',img_url:'./img/03.jpg',},
{name:'许嵩-断桥残雪',singer:'许嵩',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/许嵩-断桥残雪.mp3',img_url:'./img/04.jpg',},
{name:'许嵩-有何不可',singer:'许嵩',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/许嵩-有何不可.mp3',img_url:'./img/05.jpg',},
{name:'许巍-曾经的你',singer:'许巍',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/许巍-曾经的你.mp3',img_url:'./img/01.jpg',},
{name:'许巍-蓝莲花',singer:'许巍',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/许巍-蓝莲花.mp3',img_url:'./img/02.jpg',},
{name:'许志安-为什么你背着我爱别人',singer:'许志安',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/许志安-为什么你背着我爱别人.mp3',img_url:'./img/03.jpg',},
{name:'薛之谦-暧昧',singer:'薛之谦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/薛之谦-暧昧.mp3',img_url:'./img/04.jpg',},
{name:'薛之谦-丑八怪',singer:'薛之谦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/薛之谦-丑八怪.mp3',img_url:'./img/05.jpg',},
{name:'薛之谦-刚刚好',singer:'薛之谦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/薛之谦-刚刚好.mp3',img_url:'./img/01.jpg',},
{name:'薛之谦-你还要我怎样',singer:'薛之谦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/薛之谦-你还要我怎样.mp3',img_url:'./img/02.jpg',},
{name:'薛之谦-演员',singer:'薛之谦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/薛之谦-演员.mp3',img_url:'./img/03.jpg',},
{name:'薛之谦-租购',singer:'薛之谦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/薛之谦-租购.mp3',img_url:'./img/04.jpg',},
{name:'严艺丹-等你的季节',singer:'严艺丹',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/严艺丹-等你的季节.mp3',img_url:'./img/05.jpg',},
{name:'严艺丹-三寸天堂',singer:'严艺丹',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/严艺丹-三寸天堂.mp3',img_url:'./img/01.jpg',},
{name:'严正花-都走吧',singer:'严正花',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/严正花-都走吧.mp3',img_url:'./img/02.jpg',},
{name:'央金兰泽-遇上你是我的缘',singer:'央金兰泽',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/央金兰泽-遇上你是我的缘.mp3',img_url:'./img/03.jpg',},
{name:'杨不乖-怪我打扰了',singer:'杨不乖',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/杨不乖-怪我打扰了.mp3',img_url:'./img/04.jpg',},
{name:'杨臣刚-老鼠爱大米',singer:'杨臣刚',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/杨臣刚-老鼠爱大米.mp3',img_url:'./img/05.jpg',},
{name:'杨丞琳-暧昧',singer:'杨丞琳',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/杨丞琳-暧昧.mp3',img_url:'./img/01.jpg',},
{name:'杨丞琳-水墨如烟',singer:'杨丞琳',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/杨丞琳-水墨如烟.mp3',img_url:'./img/02.jpg',},
{name:'杨丞琳-一千零一个愿望',singer:'杨丞琳',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/杨丞琳-一千零一个愿望.mp3',img_url:'./img/03.jpg',},
{name:'杨坤 陈琳-两个人的世界',singer:'杨坤 陈琳',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/杨坤 陈琳-两个人的世界.mp3',img_url:'./img/04.jpg',},
{name:'杨坤-那一天',singer:'杨坤',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/杨坤-那一天.mp3',img_url:'./img/05.jpg',},
{name:'杨坤-无所谓',singer:'杨坤',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/杨坤-无所谓.mp3',img_url:'./img/01.jpg',},
{name:'杨幂-爱的供养',singer:'杨幂',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/杨幂-爱的供养.mp3',img_url:'./img/02.jpg',},
{name:'杨培安-爱上你是一个错',singer:'杨培安',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/杨培安-爱上你是一个错.mp3',img_url:'./img/03.jpg',},
{name:'杨培安-我相信',singer:'杨培安',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/杨培安-我相信.mp3',img_url:'./img/04.jpg',},
{name:'杨千桦-小城大事',singer:'杨千桦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/杨千桦-小城大事.mp3',img_url:'./img/05.jpg',},
{name:'杨小曼-我爱你胜过你爱我',singer:'杨小曼',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/杨小曼-我爱你胜过你爱我.mp3',img_url:'./img/01.jpg',},
{name:'杨钰莹 毛宁-心雨',singer:'杨钰莹 毛宁',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/杨钰莹 毛宁-心雨.mp3',img_url:'./img/02.jpg',},
{name:'杨钰莹-茶山情歌',singer:'杨钰莹',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/杨钰莹-茶山情歌.mp3',img_url:'./img/03.jpg',},
{name:'杨钰莹-轻轻的告诉你',singer:'杨钰莹',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/杨钰莹-轻轻的告诉你.mp3',img_url:'./img/04.jpg',},
{name:'杨钰莹-我不想说',singer:'杨钰莹',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/杨钰莹-我不想说.mp3',img_url:'./img/05.jpg',},
{name:'杨钰莹-月亮船',singer:'杨钰莹',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/杨钰莹-月亮船.mp3',img_url:'./img/01.jpg',},
{name:'杨宗纬 张碧晨-凉凉',singer:'杨宗纬 张碧晨',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/杨宗纬 张碧晨-凉凉.mp3',img_url:'./img/02.jpg',},
{name:'杨宗纬-洋葱',singer:'杨宗纬',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/杨宗纬-洋葱.mp3',img_url:'./img/03.jpg',},
{name:'杨宗纬-一次就好',singer:'杨宗纬',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/杨宗纬-一次就好.mp3',img_url:'./img/04.jpg',},
{name:'洋澜一-阿楚姑娘',singer:'洋澜一',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/洋澜一-阿楚姑娘.mp3',img_url:'./img/05.jpg',},
{name:'洋澜一-后海酒吧',singer:'洋澜一',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/洋澜一-后海酒吧.mp3',img_url:'./img/01.jpg',},
{name:'洋澜一-后来的你在哪',singer:'洋澜一',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/洋澜一-后来的你在哪.mp3',img_url:'./img/02.jpg',},
{name:'洋澜一-化风行万里',singer:'洋澜一',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/洋澜一-化风行万里.mp3',img_url:'./img/03.jpg',},
{name:'洋澜一-见一面少一面',singer:'洋澜一',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/洋澜一-见一面少一面.mp3',img_url:'./img/04.jpg',},
{name:'洋澜一-逆流成河',singer:'洋澜一',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/洋澜一-逆流成河.mp3',img_url:'./img/05.jpg',},
{name:'洋澜一-谁',singer:'洋澜一',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/洋澜一-谁.mp3',img_url:'./img/01.jpg',},
{name:'洋澜一-乌兰巴托的夜',singer:'洋澜一',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/洋澜一-乌兰巴托的夜.mp3',img_url:'./img/02.jpg',},
{name:'姚六一-雾里',singer:'姚六一',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/姚六一-雾里.mp3',img_url:'./img/03.jpg',},
{name:'姚晓棠-会开花的云',singer:'姚晓棠',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/姚晓棠-会开花的云.mp3',img_url:'./img/04.jpg',},
{name:'要不要买菜-下山',singer:'要不要买菜',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/要不要买菜-下山.mp3',img_url:'./img/05.jpg',},
{name:'叶蓓-想把我唱给你听',singer:'叶蓓',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/叶蓓-想把我唱给你听.mp3',img_url:'./img/01.jpg',},
{name:'叶丽仪-上海滩',singer:'叶丽仪',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/叶丽仪-上海滩.mp3',img_url:'./img/02.jpg',},
{name:'叶启田-爱拼才会赢',singer:'叶启田',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/叶启田-爱拼才会赢.mp3',img_url:'./img/03.jpg',},
{name:'叶倩文 林子祥-选择',singer:'叶倩文 林子祥',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/叶倩文 林子祥-选择.mp3',img_url:'./img/04.jpg',},
{name:'叶倩文-潇洒走一回',singer:'叶倩文',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/叶倩文-潇洒走一回.mp3',img_url:'./img/05.jpg',},
{name:'叶倩文-真心真意过一生',singer:'叶倩文',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/叶倩文-真心真意过一生.mp3',img_url:'./img/01.jpg',},
{name:'叶倩文-祝福',singer:'叶倩文',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/叶倩文-祝福.mp3',img_url:'./img/02.jpg',},
{name:'叶振棠-大侠霍元甲',singer:'叶振棠',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/叶振棠-大侠霍元甲.mp3',img_url:'./img/03.jpg',},
{name:'叶振棠-大丈夫',singer:'叶振棠',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/叶振棠-大丈夫.mp3',img_url:'./img/04.jpg',},
{name:'叶振棠-人生长跑',singer:'叶振棠',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/叶振棠-人生长跑.mp3',img_url:'./img/05.jpg',},
{name:'叶振棠-万里长城永不倒',singer:'叶振棠',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/叶振棠-万里长城永不倒.mp3',img_url:'./img/01.jpg',},
{name:'叶振棠-忘尽心中情',singer:'叶振棠',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/叶振棠-忘尽心中情.mp3',img_url:'./img/02.jpg',},
{name:'叶振棠-戏剧人生',singer:'叶振棠',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/叶振棠-戏剧人生.mp3',img_url:'./img/03.jpg',},
{name:'一只白羊 承桓-家门口的狗尾巴花',singer:'一只白羊 承桓',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/一只白羊 承桓-家门口的狗尾巴花.mp3',img_url:'./img/04.jpg',},
{name:'一只白羊-赐我',singer:'一只白羊',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/一只白羊-赐我.mp3',img_url:'./img/05.jpg',},
{name:'伊格赛听 叶里-谪仙',singer:'伊格赛听 叶里',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/伊格赛听 叶里-谪仙.mp3',img_url:'./img/01.jpg',},
{name:'伊扬-纸飞机',singer:'伊扬',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/伊扬-纸飞机.mp3',img_url:'./img/02.jpg',},
{name:'音阙诗听-红昭愿',singer:'音阙诗听',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/音阙诗听-红昭愿.mp3',img_url:'./img/03.jpg',},
{name:'银临 Aki阿杰-牵丝戏',singer:'银临 Aki阿杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/银临 Aki阿杰-牵丝戏.mp3',img_url:'./img/04.jpg',},
{name:'尹昔眠-三拜红尘凉',singer:'尹昔眠',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/尹昔眠-三拜红尘凉.mp3',img_url:'./img/05.jpg',},
{name:'游鸿明-爱我的人和我爱的人',singer:'游鸿明',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/游鸿明-爱我的人和我爱的人.mp3',img_url:'./img/01.jpg',},
{name:'游鸿明-下沙',singer:'游鸿明',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/游鸿明-下沙.mp3',img_url:'./img/02.jpg',},
{name:'于果-侧脸',singer:'于果',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/于果-侧脸.mp3',img_url:'./img/03.jpg',},
{name:'于文文-体面',singer:'于文文',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/于文文-体面.mp3',img_url:'./img/04.jpg',},
{name:'俞灏明 简美妍-陷入爱里面',singer:'俞灏明 简美妍',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/俞灏明 简美妍-陷入爱里面.mp3',img_url:'./img/05.jpg',},
{name:'俞静-红豆红',singer:'俞静',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/俞静-红豆红.mp3',img_url:'./img/01.jpg',},
{name:'宇桐非-感动天感动地',singer:'宇桐非',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/宇桐非-感动天感动地.mp3',img_url:'./img/02.jpg',},
{name:'羽·泉-奔跑',singer:'羽·泉',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/羽·泉-奔跑.mp3',img_url:'./img/03.jpg',},
{name:'羽·泉-彩虹',singer:'羽·泉',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/羽·泉-彩虹.mp3',img_url:'./img/04.jpg',},
{name:'羽·泉-感觉不到你',singer:'羽·泉',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/羽·泉-感觉不到你.mp3',img_url:'./img/05.jpg',},
{name:'羽·泉-冷酷到底',singer:'羽·泉',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/羽·泉-冷酷到底.mp3',img_url:'./img/01.jpg',},
{name:'羽·泉-深呼吸',singer:'羽·泉',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/羽·泉-深呼吸.mp3',img_url:'./img/02.jpg',},
{name:'羽·泉-心似狂潮',singer:'羽·泉',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/羽·泉-心似狂潮.mp3',img_url:'./img/03.jpg',},
{name:'羽·泉-最美',singer:'羽·泉',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/羽·泉-最美.mp3',img_url:'./img/04.jpg',},
{name:'庾澄庆-春泥',singer:'庾澄庆',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/庾澄庆-春泥.mp3',img_url:'./img/05.jpg',},
{name:'庾澄庆-情非得已',singer:'庾澄庆',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/庾澄庆-情非得已.mp3',img_url:'./img/01.jpg',},
{name:'庾澄庆-让我一次爱个够',singer:'庾澄庆',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/庾澄庆-让我一次爱个够.mp3',img_url:'./img/02.jpg',},
{name:'庾澄庆-热情的沙漠',singer:'庾澄庆',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/庾澄庆-热情的沙漠.mp3',img_url:'./img/03.jpg',},
{name:'郁可唯-时间煮雨',singer:'郁可唯',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/郁可唯-时间煮雨.mp3',img_url:'./img/04.jpg',},
{name:'郁可唯-水中花(Live)',singer:'郁可唯',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/郁可唯-水中花(Live).mp3',img_url:'./img/05.jpg',},
{name:'郁可唯-思慕',singer:'郁可唯',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/郁可唯-思慕.mp3',img_url:'./img/01.jpg',},
{name:'袁成杰 戚薇-想我了吗',singer:'袁成杰 戚薇',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/袁成杰 戚薇-想我了吗.mp3',img_url:'./img/02.jpg',},
{name:'袁小葳 阿辰（阎辰）-化作烟火为你坠落',singer:'袁小葳 阿辰（阎辰）',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/袁小葳 阿辰（阎辰）-化作烟火为你坠落.mp3',img_url:'./img/03.jpg',},
{name:'袁娅维-阿楚姑娘',singer:'袁娅维',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/袁娅维-阿楚姑娘.mp3',img_url:'./img/04.jpg',},
{name:'袁娅维-说散就散',singer:'袁娅维',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/袁娅维-说散就散.mp3',img_url:'./img/05.jpg',},
{name:'云汐-故事还长',singer:'云汐',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/云汐-故事还长.mp3',img_url:'./img/01.jpg',},
{name:'展展与罗罗-沙漠骆驼',singer:'展展与罗罗',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/展展与罗罗-沙漠骆驼.mp3',img_url:'./img/02.jpg',},
{name:'张柏芝-星语心愿',singer:'张柏芝',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张柏芝-星语心愿.mp3',img_url:'./img/03.jpg',},
{name:'张碧晨 张杰-只要平凡',singer:'张碧晨 张杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张碧晨 张杰-只要平凡.mp3',img_url:'./img/04.jpg',},
{name:'张碧晨-光的方向',singer:'张碧晨',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张碧晨-光的方向.mp3',img_url:'./img/05.jpg',},
{name:'张碧晨-开往早晨的午夜',singer:'张碧晨',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张碧晨-开往早晨的午夜.mp3',img_url:'./img/01.jpg',},
{name:'张碧晨-笼',singer:'张碧晨',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张碧晨-笼.mp3',img_url:'./img/02.jpg',},
{name:'张碧晨-年轮',singer:'张碧晨',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张碧晨-年轮.mp3',img_url:'./img/03.jpg',},
{name:'张栋梁-北极星的眼泪',singer:'张栋梁',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张栋梁-北极星的眼泪.mp3',img_url:'./img/04.jpg',},
{name:'张栋梁-当你孤单你会想起谁',singer:'张栋梁',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张栋梁-当你孤单你会想起谁.mp3',img_url:'./img/05.jpg',},
{name:'张镐哲-好男人',singer:'张镐哲',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张镐哲-好男人.mp3',img_url:'./img/01.jpg',},
{name:'张国荣-沉默是金',singer:'张国荣',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张国荣-沉默是金.mp3',img_url:'./img/02.jpg',},
{name:'张国荣-倩女幽魂',singer:'张国荣',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张国荣-倩女幽魂.mp3',img_url:'./img/03.jpg',},
{name:'张含韵-闪亮亮',singer:'张含韵',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张含韵-闪亮亮.mp3',img_url:'./img/04.jpg',},
{name:'张含韵-酸酸甜甜就是我',singer:'张含韵',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张含韵-酸酸甜甜就是我.mp3',img_url:'./img/05.jpg',},
{name:'张含韵-想唱就唱',singer:'张含韵',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张含韵-想唱就唱.mp3',img_url:'./img/01.jpg',},
{name:'张含韵-一百万个可能',singer:'张含韵',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张含韵-一百万个可能.mp3',img_url:'./img/02.jpg',},
{name:'张行-迟到',singer:'张行',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张行-迟到.mp3',img_url:'./img/03.jpg',},
{name:'张行-站台',singer:'张行',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张行-站台.mp3',img_url:'./img/04.jpg',},
{name:'张洪量-你知道我在等你吗',singer:'张洪量',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张洪量-你知道我在等你吗.mp3',img_url:'./img/05.jpg',},
{name:'张惠妹-BadBoy',singer:'张惠妹',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张惠妹-BadBoy.mp3',img_url:'./img/01.jpg',},
{name:'张惠妹-火',singer:'张惠妹',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张惠妹-火.mp3',img_url:'./img/02.jpg',},
{name:'张惠妹-剪爱',singer:'张惠妹',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张惠妹-剪爱.mp3',img_url:'./img/03.jpg',},
{name:'张惠妹-姐妹',singer:'张惠妹',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张惠妹-姐妹.mp3',img_url:'./img/04.jpg',},
{name:'张惠妹-可以抱你吗',singer:'张惠妹',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张惠妹-可以抱你吗.mp3',img_url:'./img/05.jpg',},
{name:'张惠妹-哭不出来',singer:'张惠妹',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张惠妹-哭不出来.mp3',img_url:'./img/01.jpg',},
{name:'张惠妹-听海',singer:'张惠妹',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张惠妹-听海.mp3',img_url:'./img/02.jpg',},
{name:'张惠妹-一想到你呀',singer:'张惠妹',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张惠妹-一想到你呀.mp3',img_url:'./img/03.jpg',},
{name:'张惠妹-原来你什么都不想要',singer:'张惠妹',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张惠妹-原来你什么都不想要.mp3',img_url:'./img/04.jpg',},
{name:'张惠妹-站在高岗上',singer:'张惠妹',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张惠妹-站在高岗上.mp3',img_url:'./img/05.jpg',},
{name:'张杰 张碧晨-只要平凡',singer:'张杰 张碧晨',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张杰 张碧晨-只要平凡.mp3',img_url:'./img/01.jpg',},
{name:'张杰-逆战',singer:'张杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张杰-逆战.mp3',img_url:'./img/02.jpg',},
{name:'张杰-天下',singer:'张杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张杰-天下.mp3',img_url:'./img/03.jpg',},
{name:'张杰-星星',singer:'张杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张杰-星星.mp3',img_url:'./img/04.jpg',},
{name:'张杰-雪龙吟',singer:'张杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张杰-雪龙吟.mp3',img_url:'./img/05.jpg',},
{name:'张杰-这,就是爱',singer:'张杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张杰-这,就是爱.mp3',img_url:'./img/01.jpg',},
{name:'张敬轩-断点',singer:'张敬轩',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张敬轩-断点.mp3',img_url:'./img/02.jpg',},
{name:'张靓颖 张杰-爱的供养',singer:'张靓颖 张杰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张靓颖 张杰-爱的供养.mp3',img_url:'./img/03.jpg',},
{name:'张靓颖-暗恋',singer:'张靓颖',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张靓颖-暗恋.mp3',img_url:'./img/04.jpg',},
{name:'张靓颖-不惜时光',singer:'张靓颖',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张靓颖-不惜时光.mp3',img_url:'./img/05.jpg',},
{name:'张靓颖-化身孤岛的鲸',singer:'张靓颖',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张靓颖-化身孤岛的鲸.mp3',img_url:'./img/01.jpg',},
{name:'张靓颖-画心',singer:'张靓颖',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张靓颖-画心.mp3',img_url:'./img/02.jpg',},
{name:'张靓颖-九万字',singer:'张靓颖',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张靓颖-九万字.mp3',img_url:'./img/03.jpg',},
{name:'张靓颖-口头禅',singer:'张靓颖',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张靓颖-口头禅.mp3',img_url:'./img/04.jpg',},
{name:'张靓颖-如果爱下去',singer:'张靓颖',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张靓颖-如果爱下去.mp3',img_url:'./img/05.jpg',},
{name:'张靓颖-如果这就是爱情',singer:'张靓颖',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张靓颖-如果这就是爱情.mp3',img_url:'./img/01.jpg',},
{name:'张靓颖-天下无双',singer:'张靓颖',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张靓颖-天下无双.mp3',img_url:'./img/02.jpg',},
{name:'张靓颖-我的梦',singer:'张靓颖',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张靓颖-我的梦.mp3',img_url:'./img/03.jpg',},
{name:'张靓颖-我们说好的',singer:'张靓颖',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张靓颖-我们说好的.mp3',img_url:'./img/04.jpg',},
{name:'张靓颖-想你零点零一分',singer:'张靓颖',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张靓颖-想你零点零一分.mp3',img_url:'./img/05.jpg',},
{name:'张靓颖-野心家',singer:'张靓颖',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张靓颖-野心家.mp3',img_url:'./img/01.jpg',},
{name:'张靓颖-一路之下',singer:'张靓颖',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张靓颖-一路之下.mp3',img_url:'./img/02.jpg',},
{name:'张靓颖-与爱',singer:'张靓颖',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张靓颖-与爱.mp3',img_url:'./img/03.jpg',},
{name:'张靓颖-终于等到你',singer:'张靓颖',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张靓颖-终于等到你.mp3',img_url:'./img/04.jpg',},
{name:'张明敏-龙的传人',singer:'张明敏',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张明敏-龙的传人.mp3',img_url:'./img/05.jpg',},
{name:'张明敏-我的中国心',singer:'张明敏',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张明敏-我的中国心.mp3',img_url:'./img/01.jpg',},
{name:'张娜拉-SweetDream韩文',singer:'张娜拉',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张娜拉-SweetDream韩文.mp3',img_url:'./img/02.jpg',},
{name:'张娜拉-泪流满面',singer:'张娜拉',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张娜拉-泪流满面.mp3',img_url:'./img/03.jpg',},
{name:'张韶涵 王赫野-篇章',singer:'张韶涵 王赫野',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张韶涵 王赫野-篇章.mp3',img_url:'./img/04.jpg',},
{name:'张韶涵 王晰-黎明前的黑暗 (Live)',singer:'张韶涵 王晰',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张韶涵 王晰-黎明前的黑暗 (Live).mp3',img_url:'./img/05.jpg',},
{name:'张韶涵 周深-一路生花',singer:'张韶涵 周深',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张韶涵 周深-一路生花.mp3',img_url:'./img/01.jpg',},
{name:'张韶涵-冲破',singer:'张韶涵',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张韶涵-冲破.mp3',img_url:'./img/02.jpg',},
{name:'张韶涵-梦里花',singer:'张韶涵',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张韶涵-梦里花.mp3',img_url:'./img/03.jpg',},
{name:'张韶涵-呐喊',singer:'张韶涵',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张韶涵-呐喊.mp3',img_url:'./img/04.jpg',},
{name:'张韶涵-欧若拉',singer:'张韶涵',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张韶涵-欧若拉.mp3',img_url:'./img/05.jpg',},
{name:'张韶涵-潘朵拉',singer:'张韶涵',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张韶涵-潘朵拉.mp3',img_url:'./img/01.jpg',},
{name:'张韶涵-破茧',singer:'张韶涵',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张韶涵-破茧.mp3',img_url:'./img/02.jpg',},
{name:'张韶涵-亲爱的那不是爱情',singer:'张韶涵',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张韶涵-亲爱的那不是爱情.mp3',img_url:'./img/03.jpg',},
{name:'张韶涵-无名的人',singer:'张韶涵',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张韶涵-无名的人.mp3',img_url:'./img/04.jpg',},
{name:'张韶涵-遗失的美好',singer:'张韶涵',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张韶涵-遗失的美好.mp3',img_url:'./img/05.jpg',},
{name:'张韶涵-隐形的翅膀',singer:'张韶涵',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张韶涵-隐形的翅膀.mp3',img_url:'./img/01.jpg',},
{name:'张韶涵-寓言',singer:'张韶涵',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张韶涵-寓言.mp3',img_url:'./img/02.jpg',},
{name:'张卫健-孤独不苦',singer:'张卫健',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张卫健-孤独不苦.mp3',img_url:'./img/03.jpg',},
{name:'张卫健-你爱我像谁',singer:'张卫健',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张卫健-你爱我像谁.mp3',img_url:'./img/04.jpg',},
{name:'张卫健-疼爱',singer:'张卫健',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张卫健-疼爱.mp3',img_url:'./img/05.jpg',},
{name:'张卫健-虚虚实实',singer:'张卫健',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张卫健-虚虚实实.mp3',img_url:'./img/01.jpg',},
{name:'张卫健-一辈子一场梦',singer:'张卫健',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张卫健-一辈子一场梦.mp3',img_url:'./img/02.jpg',},
{name:'张卫健-真英雄',singer:'张卫健',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张卫健-真英雄.mp3',img_url:'./img/03.jpg',},
{name:'张卫健-真真假假',singer:'张卫健',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张卫健-真真假假.mp3',img_url:'./img/04.jpg',},
{name:'张信哲 范文芳-别让情两难',singer:'张信哲 范文芳',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张信哲 范文芳-别让情两难.mp3',img_url:'./img/05.jpg',},
{name:'张信哲 刘嘉玲-有一点动心',singer:'张信哲 刘嘉玲',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张信哲 刘嘉玲-有一点动心.mp3',img_url:'./img/01.jpg',},
{name:'张信哲 薛之谦-你不是一个人',singer:'张信哲 薛之谦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张信哲 薛之谦-你不是一个人.mp3',img_url:'./img/02.jpg',},
{name:'张信哲-爱不留',singer:'张信哲',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张信哲-爱不留.mp3',img_url:'./img/03.jpg',},
{name:'张信哲-爱就一个字',singer:'张信哲',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张信哲-爱就一个字.mp3',img_url:'./img/04.jpg',},
{name:'张信哲-爱如潮水',singer:'张信哲',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张信哲-爱如潮水.mp3',img_url:'./img/05.jpg',},
{name:'张信哲-别怕我伤心',singer:'张信哲',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张信哲-别怕我伤心.mp3',img_url:'./img/01.jpg',},
{name:'张信哲-不要对他说',singer:'张信哲',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张信哲-不要对他说.mp3',img_url:'./img/02.jpg',},
{name:'张信哲-从开始到现在',singer:'张信哲',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张信哲-从开始到现在.mp3',img_url:'./img/03.jpg',},
{name:'张信哲-过火',singer:'张信哲',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张信哲-过火.mp3',img_url:'./img/04.jpg',},
{name:'张信哲-宽容',singer:'张信哲',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张信哲-宽容.mp3',img_url:'./img/05.jpg',},
{name:'张信哲-某某某',singer:'张信哲',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张信哲-某某某.mp3',img_url:'./img/01.jpg',},
{name:'张信哲-难以抗拒你容颜',singer:'张信哲',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张信哲-难以抗拒你容颜.mp3',img_url:'./img/02.jpg',},
{name:'张信哲-太想爱你',singer:'张信哲',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张信哲-太想爱你.mp3',img_url:'./img/03.jpg',},
{name:'张信哲-忘情忘爱',singer:'张信哲',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张信哲-忘情忘爱.mp3',img_url:'./img/04.jpg',},
{name:'张信哲-我是真的爱你',singer:'张信哲',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张信哲-我是真的爱你.mp3',img_url:'./img/05.jpg',},
{name:'张信哲-信仰',singer:'张信哲',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张信哲-信仰.mp3',img_url:'./img/01.jpg',},
{name:'张信哲-用情',singer:'张信哲',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张信哲-用情.mp3',img_url:'./img/02.jpg',},
{name:'张信哲-直觉',singer:'张信哲',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张信哲-直觉.mp3',img_url:'./img/03.jpg',},
{name:'张学友 汤宝如-相思风雨中',singer:'张学友 汤宝如',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张学友 汤宝如-相思风雨中.mp3',img_url:'./img/04.jpg',},
{name:'张学友-当我想起你',singer:'张学友',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张学友-当我想起你.mp3',img_url:'./img/05.jpg',},
{name:'张学友-等你等到我心痛',singer:'张学友',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张学友-等你等到我心痛.mp3',img_url:'./img/01.jpg',},
{name:'张学友-饿狼传说',singer:'张学友',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张学友-饿狼传说.mp3',img_url:'./img/02.jpg',},
{name:'张学友-烦恼歌',singer:'张学友',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张学友-烦恼歌.mp3',img_url:'./img/03.jpg',},
{name:'张学友-分手总要在雨天',singer:'张学友',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张学友-分手总要在雨天.mp3',img_url:'./img/04.jpg',},
{name:'张学友高慧君-你最珍贵',singer:'张学友高慧君',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张学友高慧君-你最珍贵.mp3',img_url:'./img/05.jpg',},
{name:'张学友-回头太难',singer:'张学友',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张学友-回头太难.mp3',img_url:'./img/01.jpg',},
{name:'张学友-李香兰',singer:'张学友',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张学友-李香兰.mp3',img_url:'./img/02.jpg',},
{name:'张学友-慢慢',singer:'张学友',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张学友-慢慢.mp3',img_url:'./img/03.jpg',},
{name:'张学友-你好毒',singer:'张学友',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张学友-你好毒.mp3',img_url:'./img/04.jpg',},
{name:'张学友-情书',singer:'张学友',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张学友-情书.mp3',img_url:'./img/05.jpg',},
{name:'张学友-秋意浓',singer:'张学友',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张学友-秋意浓.mp3',img_url:'./img/01.jpg',},
{name:'张学友-如果这都不算爱',singer:'张学友',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张学友-如果这都不算爱.mp3',img_url:'./img/02.jpg',},
{name:'张学友-深海',singer:'张学友',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张学友-深海.mp3',img_url:'./img/03.jpg',},
{name:'张学友-偷心',singer:'张学友',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张学友-偷心.mp3',img_url:'./img/04.jpg',},
{name:'张学友-头发乱了',singer:'张学友',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张学友-头发乱了.mp3',img_url:'./img/05.jpg',},
{name:'张学友-忘记你我做不到',singer:'张学友',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张学友-忘记你我做不到.mp3',img_url:'./img/01.jpg',},
{name:'张学友-忘情冷雨夜',singer:'张学友',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张学友-忘情冷雨夜.mp3',img_url:'./img/02.jpg',},
{name:'张学友-吻别',singer:'张学友',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张学友-吻别.mp3',img_url:'./img/03.jpg',},
{name:'张学友-我等到花儿也谢了',singer:'张学友',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张学友-我等到花儿也谢了.mp3',img_url:'./img/04.jpg',},
{name:'张学友-夕阳醉了',singer:'张学友',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张学友-夕阳醉了.mp3',img_url:'./img/05.jpg',},
{name:'张学友-想和你去吹吹风',singer:'张学友',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张学友-想和你去吹吹风.mp3',img_url:'./img/01.jpg',},
{name:'张学友-小城大事',singer:'张学友',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张学友-小城大事.mp3',img_url:'./img/02.jpg',},
{name:'张学友-心如刀割',singer:'张学友',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张学友-心如刀割.mp3',img_url:'./img/03.jpg',},
{name:'张学友-心碎了无痕',singer:'张学友',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张学友-心碎了无痕.mp3',img_url:'./img/04.jpg',},
{name:'张学友-遥远的她',singer:'张学友',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张学友-遥远的她.mp3',img_url:'./img/05.jpg',},
{name:'张学友-一路上有你',singer:'张学友',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张学友-一路上有你.mp3',img_url:'./img/01.jpg',},
{name:'张学友-一千个伤心的理由',singer:'张学友',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张学友-一千个伤心的理由.mp3',img_url:'./img/02.jpg',},
{name:'张学友-只想一生跟你走',singer:'张学友',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张学友-只想一生跟你走.mp3',img_url:'./img/03.jpg',},
{name:'张学友-只愿一生爱一人',singer:'张学友',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张学友-只愿一生爱一人.mp3',img_url:'./img/04.jpg',},
{name:'张学友-祝福',singer:'张学友',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张学友-祝福.mp3',img_url:'./img/05.jpg',},
{name:'张宇-大女人',singer:'张宇',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张宇-大女人.mp3',img_url:'./img/01.jpg',},
{name:'张宇-给你们',singer:'张宇',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张宇-给你们.mp3',img_url:'./img/02.jpg',},
{name:'张宇-千金难买',singer:'张宇',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张宇-千金难买.mp3',img_url:'./img/03.jpg',},
{name:'张宇-一言难尽',singer:'张宇',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张宇-一言难尽.mp3',img_url:'./img/04.jpg',},
{name:'张宇-用心良苦',singer:'张宇',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张宇-用心良苦.mp3',img_url:'./img/05.jpg',},
{name:'张宇-雨一直下',singer:'张宇',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张宇-雨一直下.mp3',img_url:'./img/01.jpg',},
{name:'张宇-月亮惹的祸',singer:'张宇',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张宇-月亮惹的祸.mp3',img_url:'./img/02.jpg',},
{name:'张雨生-大海',singer:'张雨生',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张雨生-大海.mp3',img_url:'./img/03.jpg',},
{name:'张雨生-我的未来不是梦',singer:'张雨生',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张雨生-我的未来不是梦.mp3',img_url:'./img/04.jpg',},
{name:'张雨生-一天到晚游泳的鱼',singer:'张雨生',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张雨生-一天到晚游泳的鱼.mp3',img_url:'./img/05.jpg',},
{name:'张远-嘉宾',singer:'张远',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张远-嘉宾.mp3',img_url:'./img/01.jpg',},
{name:'张云雷-探清水河',singer:'张云雷',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张云雷-探清水河.mp3',img_url:'./img/02.jpg',},
{name:'张芸京-春泥',singer:'张芸京',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张芸京-春泥.mp3',img_url:'./img/03.jpg',},
{name:'张芸京-偏爱',singer:'张芸京',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张芸京-偏爱.mp3',img_url:'./img/04.jpg',},
{name:'张震岳-爱的初体验',singer:'张震岳',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张震岳-爱的初体验.mp3',img_url:'./img/05.jpg',},
{name:'张震岳-再见',singer:'张震岳',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张震岳-再见.mp3',img_url:'./img/01.jpg',},
{name:'张紫豪-可不可以',singer:'张紫豪',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/张紫豪-可不可以.mp3',img_url:'./img/02.jpg',},
{name:'赵传-爱要怎么说出口',singer:'赵传',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/赵传-爱要怎么说出口.mp3',img_url:'./img/03.jpg',},
{name:'赵传-我很丑可是我很温柔',singer:'赵传',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/赵传-我很丑可是我很温柔.mp3',img_url:'./img/04.jpg',},
{name:'赵传-我是一只小小鸟',singer:'赵传',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/赵传-我是一只小小鸟.mp3',img_url:'./img/05.jpg',},
{name:'赵方婧-闭月',singer:'赵方婧',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/赵方婧-闭月.mp3',img_url:'./img/01.jpg',},
{name:'赵方婧-尽头',singer:'赵方婧',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/赵方婧-尽头.mp3',img_url:'./img/02.jpg',},
{name:'赵方婧-芒种',singer:'赵方婧',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/赵方婧-芒种.mp3',img_url:'./img/03.jpg',},
{name:'赵方婧-青灯',singer:'赵方婧',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/赵方婧-青灯.mp3',img_url:'./img/04.jpg',},
{name:'赵方婧-瑞鹤仙',singer:'赵方婧',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/赵方婧-瑞鹤仙.mp3',img_url:'./img/05.jpg',},
{name:'赵方婧-小暑',singer:'赵方婧',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/赵方婧-小暑.mp3',img_url:'./img/01.jpg',},
{name:'赵方婧-直觉',singer:'赵方婧',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/赵方婧-直觉.mp3',img_url:'./img/02.jpg',},
{name:'赵雷-成都',singer:'赵雷',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/赵雷-成都.mp3',img_url:'./img/03.jpg',},
{name:'赵露思-时光话',singer:'赵露思',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/赵露思-时光话.mp3',img_url:'./img/04.jpg',},
{name:'赵薇-爱情大魔咒',singer:'赵薇',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/赵薇-爱情大魔咒.mp3',img_url:'./img/05.jpg',},
{name:'赵薇-好想好想',singer:'赵薇',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/赵薇-好想好想.mp3',img_url:'./img/01.jpg',},
{name:'赵薇-情深深雨濛濛',singer:'赵薇',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/赵薇-情深深雨濛濛.mp3',img_url:'./img/02.jpg',},
{name:'赵英俊-大王叫我来巡山',singer:'赵英俊',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/赵英俊-大王叫我来巡山.mp3',img_url:'./img/03.jpg',},
{name:'赵咏华-最浪漫的事',singer:'赵咏华',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/赵咏华-最浪漫的事.mp3',img_url:'./img/04.jpg',},
{name:'甄妮-鲁冰花',singer:'甄妮',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/甄妮-鲁冰花.mp3',img_url:'./img/05.jpg',},
{name:'甄妮-我曾用心爱着你',singer:'甄妮',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/甄妮-我曾用心爱着你.mp3',img_url:'./img/01.jpg',},
{name:'郑钧-灰姑娘',singer:'郑钧',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/郑钧-灰姑娘.mp3',img_url:'./img/02.jpg',},
{name:'郑钧-回到拉萨',singer:'郑钧',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/郑钧-回到拉萨.mp3',img_url:'./img/03.jpg',},
{name:'郑秀文-独家试唱',singer:'郑秀文',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/郑秀文-独家试唱.mp3',img_url:'./img/04.jpg',},
{name:'郑秀文-眉飞色舞',singer:'郑秀文',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/郑秀文-眉飞色舞.mp3',img_url:'./img/05.jpg',},
{name:'郑秀文-值得',singer:'郑秀文',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/郑秀文-值得.mp3',img_url:'./img/01.jpg',},
{name:'郑伊健-虫儿飞',singer:'郑伊健',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/郑伊健-虫儿飞.mp3',img_url:'./img/02.jpg',},
{name:'郑伊健-友情岁月',singer:'郑伊健',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/郑伊健-友情岁月.mp3',img_url:'./img/03.jpg',},
{name:'郑源-包容',singer:'郑源',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/郑源-包容.mp3',img_url:'./img/04.jpg',},
{name:'郑源-寒江雪',singer:'郑源',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/郑源-寒江雪.mp3',img_url:'./img/05.jpg',},
{name:'郑源-怎么会狠心伤害我',singer:'郑源',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/郑源-怎么会狠心伤害我.mp3',img_url:'./img/01.jpg',},
{name:'郑智化-水手',singer:'郑智化',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/郑智化-水手.mp3',img_url:'./img/02.jpg',},
{name:'郑智化-星星点灯',singer:'郑智化',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/郑智化-星星点灯.mp3',img_url:'./img/03.jpg',},
{name:'指尖笑-不问别离',singer:'指尖笑',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/指尖笑-不问别离.mp3',img_url:'./img/04.jpg',},
{name:'中岛美嘉-雪華',singer:'中岛美嘉',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/中岛美嘉-雪華.mp3',img_url:'./img/05.jpg',},
{name:'钟镇涛-只要你过得比我好',singer:'钟镇涛',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/钟镇涛-只要你过得比我好.mp3',img_url:'./img/01.jpg',},
{name:'周笔畅-笔记',singer:'周笔畅',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周笔畅-笔记.mp3',img_url:'./img/02.jpg',},
{name:'周笔畅-最美的期待',singer:'周笔畅',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周笔畅-最美的期待.mp3',img_url:'./img/03.jpg',},
{name:'周冰倩-真的好想你',singer:'周冰倩',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周冰倩-真的好想你.mp3',img_url:'./img/04.jpg',},
{name:'周传雄-出卖',singer:'周传雄',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周传雄-出卖.mp3',img_url:'./img/05.jpg',},
{name:'周传雄-冬天的秘密',singer:'周传雄',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周传雄-冬天的秘密.mp3',img_url:'./img/01.jpg',},
{name:'周传雄-关不上的窗',singer:'周传雄',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周传雄-关不上的窗.mp3',img_url:'./img/02.jpg',},
{name:'周传雄-花香',singer:'周传雄',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周传雄-花香.mp3',img_url:'./img/03.jpg',},
{name:'周传雄-黄昏',singer:'周传雄',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周传雄-黄昏.mp3',img_url:'./img/04.jpg',},
{name:'周传雄-记事本',singer:'周传雄',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周传雄-记事本.mp3',img_url:'./img/05.jpg',},
{name:'周传雄-寂寞沙洲冷',singer:'周传雄',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周传雄-寂寞沙洲冷.mp3',img_url:'./img/01.jpg',},
{name:'周传雄-蓝色土耳其',singer:'周传雄',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周传雄-蓝色土耳其.mp3',img_url:'./img/02.jpg',},
{name:'周传雄-末班车',singer:'周传雄',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周传雄-末班车.mp3',img_url:'./img/03.jpg',},
{name:'周传雄-暖风',singer:'周传雄',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周传雄-暖风.mp3',img_url:'./img/04.jpg',},
{name:'周传雄-忘记',singer:'周传雄',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周传雄-忘记.mp3',img_url:'./img/05.jpg',},
{name:'周传雄-我的心太乱',singer:'周传雄',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周传雄-我的心太乱.mp3',img_url:'./img/01.jpg',},
{name:'周传雄-有没有一首歌会让你想起我',singer:'周传雄',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周传雄-有没有一首歌会让你想起我.mp3',img_url:'./img/02.jpg',},
{name:'周华健 齐豫-神话情话',singer:'周华健 齐豫',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周华健 齐豫-神话情话.mp3',img_url:'./img/03.jpg',},
{name:'周华健 齐豫-天下有情人',singer:'周华健 齐豫',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周华健 齐豫-天下有情人.mp3',img_url:'./img/04.jpg',},
{name:'周华健-刀剑如梦',singer:'周华健',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周华健-刀剑如梦.mp3',img_url:'./img/05.jpg',},
{name:'周华健-风雨无阻',singer:'周华健',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周华健-风雨无阻.mp3',img_url:'./img/01.jpg',},
{name:'周华健-覆水难收',singer:'周华健',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周华健-覆水难收.mp3',img_url:'./img/02.jpg',},
{name:'周华健-花心',singer:'周华健',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周华健-花心.mp3',img_url:'./img/03.jpg',},
{name:'周华健-江湖笑',singer:'周华健',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周华健-江湖笑.mp3',img_url:'./img/04.jpg',},
{name:'周华健-明天我要嫁给你了',singer:'周华健',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周华健-明天我要嫁给你了.mp3',img_url:'./img/05.jpg',},
{name:'周华健-难念的经',singer:'周华健',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周华健-难念的经.mp3',img_url:'./img/01.jpg',},
{name:'周华健-朋友',singer:'周华健',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周华健-朋友.mp3',img_url:'./img/02.jpg',},
{name:'周华健-让我欢喜让我忧',singer:'周华健',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周华健-让我欢喜让我忧.mp3',img_url:'./img/03.jpg',},
{name:'周蕙-不想让你知道',singer:'周蕙',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周蕙-不想让你知道.mp3',img_url:'./img/04.jpg',},
{name:'周蕙-风铃',singer:'周蕙',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周蕙-风铃.mp3',img_url:'./img/05.jpg',},
{name:'周蕙-好想好好爱你',singer:'周蕙',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周蕙-好想好好爱你.mp3',img_url:'./img/01.jpg',},
{name:'周蕙-没有你',singer:'周蕙',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周蕙-没有你.mp3',img_url:'./img/02.jpg',},
{name:'周蕙-我看',singer:'周蕙',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周蕙-我看.mp3',img_url:'./img/03.jpg',},
{name:'周蕙-相遇太早',singer:'周蕙',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周蕙-相遇太早.mp3',img_url:'./img/04.jpg',},
{name:'周蕙-约定',singer:'周蕙',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周蕙-约定.mp3',img_url:'./img/05.jpg',},
{name:'周杰伦 费玉清-千里之外',singer:'周杰伦 费玉清',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周杰伦 费玉清-千里之外.mp3',img_url:'./img/01.jpg',},
{name:'周杰伦 潘儿-夜的第七章',singer:'周杰伦 潘儿',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周杰伦 潘儿-夜的第七章.mp3',img_url:'./img/02.jpg',},
{name:'周杰伦 温岚-屋顶',singer:'周杰伦 温岚',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周杰伦 温岚-屋顶.mp3',img_url:'./img/03.jpg',},
{name:'周杰伦-爱在西元前',singer:'周杰伦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周杰伦-爱在西元前.mp3',img_url:'./img/04.jpg',},
{name:'周杰伦-安静',singer:'周杰伦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周杰伦-安静.mp3',img_url:'./img/05.jpg',},
{name:'周杰伦-稻香',singer:'周杰伦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周杰伦-稻香.mp3',img_url:'./img/01.jpg',},
{name:'周杰伦-东风破',singer:'周杰伦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周杰伦-东风破.mp3',img_url:'./img/02.jpg',},
{name:'周杰伦-断了的弦',singer:'周杰伦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周杰伦-断了的弦.mp3',img_url:'./img/03.jpg',},
{name:'周杰伦-发如雪',singer:'周杰伦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周杰伦-发如雪.mp3',img_url:'./img/04.jpg',},
{name:'周杰伦-告白气球',singer:'周杰伦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周杰伦-告白气球.mp3',img_url:'./img/05.jpg',},
{name:'周杰伦-红尘客栈',singer:'周杰伦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周杰伦-红尘客栈.mp3',img_url:'./img/01.jpg',},
{name:'周杰伦-回到过去',singer:'周杰伦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周杰伦-回到过去.mp3',img_url:'./img/02.jpg',},
{name:'周杰伦-简单爱',singer:'周杰伦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周杰伦-简单爱.mp3',img_url:'./img/03.jpg',},
{name:'周杰伦-借口',singer:'周杰伦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周杰伦-借口.mp3',img_url:'./img/04.jpg',},
{name:'周杰伦-菊花台',singer:'周杰伦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周杰伦-菊花台.mp3',img_url:'./img/05.jpg',},
{name:'周杰伦-兰亭序',singer:'周杰伦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周杰伦-兰亭序.mp3',img_url:'./img/01.jpg',},
{name:'周杰伦-龙卷风',singer:'周杰伦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周杰伦-龙卷风.mp3',img_url:'./img/02.jpg',},
{name:'周杰伦-七里香',singer:'周杰伦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周杰伦-七里香.mp3',img_url:'./img/03.jpg',},
{name:'周杰伦-青花瓷',singer:'周杰伦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周杰伦-青花瓷.mp3',img_url:'./img/04.jpg',},
{name:'周杰伦-晴天',singer:'周杰伦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周杰伦-晴天.mp3',img_url:'./img/05.jpg',},
{name:'周杰伦-三年二班',singer:'周杰伦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周杰伦-三年二班.mp3',img_url:'./img/01.jpg',},
{name:'周杰伦-甜甜的',singer:'周杰伦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周杰伦-甜甜的.mp3',img_url:'./img/02.jpg',},
{name:'周杰伦-夜曲',singer:'周杰伦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周杰伦-夜曲.mp3',img_url:'./img/03.jpg',},
{name:'周杰伦-以父之名',singer:'周杰伦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周杰伦-以父之名.mp3',img_url:'./img/04.jpg',},
{name:'周杰伦-最长的电影',singer:'周杰伦',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周杰伦-最长的电影.mp3',img_url:'./img/05.jpg',},
{name:'周林枫-阿嬷',singer:'周林枫',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周林枫-阿嬷.mp3',img_url:'./img/01.jpg',},
{name:'周深-LetItGo',singer:'周深',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周深-LetItGo.mp3',img_url:'./img/02.jpg',},
{name:'周深-触不可及',singer:'周深',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周深-触不可及.mp3',img_url:'./img/03.jpg',},
{name:'周深-大鱼',singer:'周深',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周深-大鱼.mp3',img_url:'./img/04.jpg',},
{name:'周深-胆小鬼',singer:'周深',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周深-胆小鬼.mp3',img_url:'./img/05.jpg',},
{name:'周深-和光同尘',singer:'周深',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周深-和光同尘.mp3',img_url:'./img/01.jpg',},
{name:'周深-花西子',singer:'周深',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周深-花西子.mp3',img_url:'./img/02.jpg',},
{name:'周深-化身孤岛的鲸',singer:'周深',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周深-化身孤岛的鲸.mp3',img_url:'./img/03.jpg',},
{name:'周深-欢颜',singer:'周深',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周深-欢颜.mp3',img_url:'./img/04.jpg',},
{name:'周深-可梦',singer:'周深',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周深-可梦.mp3',img_url:'./img/05.jpg',},
{name:'周深-年轮',singer:'周深',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周深-年轮.mp3',img_url:'./img/01.jpg',},
{name:'周深-起风了',singer:'周深',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周深-起风了.mp3',img_url:'./img/02.jpg',},
{name:'周深-若梦',singer:'周深',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周深-若梦.mp3',img_url:'./img/03.jpg',},
{name:'周深-身骑白马',singer:'周深',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周深-身骑白马.mp3',img_url:'./img/04.jpg',},
{name:'周深-斯卡布罗集市',singer:'周深',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周深-斯卡布罗集市.mp3',img_url:'./img/05.jpg',},
{name:'周深-天堂岛之歌',singer:'周深',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周深-天堂岛之歌.mp3',img_url:'./img/01.jpg',},
{name:'周深-小幸运',singer:'周深',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周深-小幸运.mp3',img_url:'./img/02.jpg',},
{name:'周深-雪落下的声音',singer:'周深',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周深-雪落下的声音.mp3',img_url:'./img/03.jpg',},
{name:'周迅-飘摇',singer:'周迅',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周迅-飘摇.mp3',img_url:'./img/04.jpg',},
{name:'周艳泓-要嫁就嫁灰太狼',singer:'周艳泓',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周艳泓-要嫁就嫁灰太狼.mp3',img_url:'./img/05.jpg',},
{name:'周治平-那一场风花雪月的故事',singer:'周治平',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/周治平-那一场风花雪月的故事.mp3',img_url:'./img/01.jpg',},
{name:'庄心妍 祁隆-一万个舍不得',singer:'庄心妍 祁隆',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/庄心妍 祁隆-一万个舍不得.mp3',img_url:'./img/02.jpg',},
{name:'庄心妍-爱囚',singer:'庄心妍',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/庄心妍-爱囚.mp3',img_url:'./img/03.jpg',},
{name:'庄心妍-以后的以后',singer:'庄心妍',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/庄心妍-以后的以后.mp3',img_url:'./img/04.jpg',},
{name:'庄心妍-再见只是陌生人',singer:'庄心妍',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/庄心妍-再见只是陌生人.mp3',img_url:'./img/05.jpg',},
{name:'庄心妍-走着走着就散了',singer:'庄心妍',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/庄心妍-走着走着就散了.mp3',img_url:'./img/01.jpg',},
{name:'宗次郎-故乡的原风景',singer:'宗次郎',url:'https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/宗次郎-故乡的原风景.mp3',img_url:'./img/02.jpg',}
                                    ],

            //进度信息
            durationBg:             'rgba(255,255,255,0)',

            // 线性渐变的颜色
            progressBg:             [{
                                        position:0,         //0 是起点, 1为终点   范围为  0 - 1 之间
                                        color:'#FB3232',    //起点的颜色   
                                    },{
                                        position:1,
                                        color:'#FC8F3F',
                                    }],
            //滚动列表正在播放的背景色  //配合长按事件使用
            // scrollActiveBg:         'rgba(224, 189, 134, 0.298039)',

            beforeMusicPlay:function(){},                               //音乐加载之前   可以播放之前
            afterMusicLoading:function(){},                             //音乐加载成功  可播之后
            musicChanged:function(){},                                  //音乐切换之后，类似切歌
            getMusicInfo:function(){},                                  //获取所有音乐信息
        }


        var _this = this;
        var opt = $.extend(musicValue,options || {});

        var music_duration = 0;
        var musicLenth = 0;
        var musicData = '';

        //音乐dom初始化
        musicValue._init = function(){
            if(opt.isCenter){
                _this.cpt_music = $('<div class="cpt-dw-music music-div active"></div>').css({
                    width:opt.width,
                    height:opt.height,
                    bottom:opt.bottom,
                    left:opt.left,
                    right:opt.right,
                    top:opt.top,
                    '-webkit-transform':'translate3d(-50%,-50%,0)',
                    '-moz-transform':'translate3d(-50%,-50%,0)',
                    'transform':'translate3d(-50%,-50%,0)',
                    '-webkit-transform':'translate(-50%,-50%)',
                    '-moz-transform':'translate(-50%,-50%)',
                    'transform':'translate(-50%,-50%)',
                }).appendTo($('body'));
            }else{
                _this.cpt_music = $('<div class="cpt-dw-music music-div active"></div>').css({
                    width:opt.width,
                    height:opt.height,
                    bottom:opt.bottom,
                    left:opt.left,
                    right:opt.right,
                    top:opt.top,
                    '-webkit-transform':'translate3d(-50%,-50%,0)',
                    '-moz-transform':'translate3d(-50%,-50%,0)',
                    'transform':'translate3d(-50%,-50%,0)',
                    '-webkit-transform':'translate(-50%,-50%)',
                    '-moz-transform':'translate(-50%,-50%)',
                    'transform':'translate(-50%,-50%)',
                }).appendTo($('body'));
            }
            _this.music_play = $('<div class="music-play-div"></div>').appendTo(_this.cpt_music);

            if(opt.hasSelect && opt.hasAjax){
                //选择音乐类型
                _this.music_typeSelect = $('<div class="music-typeSelect"></div>').appendTo(_this.cpt_music);
                _this.music_all = $('<div class="music-all music-typeSelect" data-type="">全部</div>').appendTo(_this.music_typeSelect);
                _this.music_typeList = $('<div class="music-random-typeSelect music-typeSelect" data-type="纯音乐">纯音乐</div><div class="music-random-typeSelect music-typeSelect" data-type="华语">华语</div>').appendTo(_this.music_typeSelect);
                _this.music_refresh = $('<div class="music-refresh">刷新</div>').appendTo(_this.music_typeSelect);
            }

            if(opt.hasBlur){
                _this.music_blur = $('<div class="filterBg"></div>').css({
                    '-webkit-filter': 'blur('+opt.blur+'px)',
                    '-moz-filter': 'blur('+opt.blur+'px)',
                    '-ms-filter': 'blur('+opt.blur+'px)',
                    'filter': 'progid:DXImageTransform.Microsoft.Blur(PixelRadius='+opt.blur+', MakeShadow=false)', /* IE6~IE9 */
                }).appendTo(_this.cpt_music);
            }

            _this.music_status = $('<div class="pauseplay"><i class="dw-icon-play"></i></div>').appendTo(_this.music_play);
            _this.music_next = $('<div class="next"><i class="dw-icon-next"></i></div>').appendTo(_this.music_play);
            _this.music_info = $('<div class="music-info"></div>').appendTo(_this.music_play);
            _this.music_name = $('<p class="music-name">未曾遗忘的青春</p>').appendTo(_this.music_info);
            _this.music_singer = $('<p class="music-singer">music plugin</p>').appendTo(_this.music_info);

            _this.music_logo = $('<div class="music-div-logo"></div>').appendTo(_this.cpt_music);
            // _this.music_shadow = $('<div class="music-logo-shadow"></div>').appendTo(_this.music_logo);
            _this.music_img = $('<img class="music-logo" src="http://www.daiwei.org/index/images/img/indeximg.jpg">').appendTo(_this.music_logo);
            _this.music_progress = $('<canvas id="music_canvas" style="position:absolute;top:0;left:0;zoom:0.25"></canvas>').appendTo(_this.music_logo );

            _this.audio = $('<audio id="cpt_dw_music" src=""></audio>').appendTo($('body'));

            opt.beforeMusicPlay();
            

            //监听选择类型事件
            musicValue._selectEvent();

            musicValue._selectByClass();
        }

        //给类型选择列表加监听事件
        musicValue._selectEvent = function(){
            if(opt.hasSelect && opt.hasAjax){
                musicValue._randomSelect(2);

                _this.music_typeSelect.find('.music-typeSelect').on('click',function(event){
                    var text = $(this).attr('data-type');
                    event.stopPropagation();
                    _this.music_typeSelect.remove();
                    //获取数据
                    musicValue._dataType(text);
                });

                _this.music_refresh.on('click',function(event){
                    event.stopPropagation();
                    musicValue._randomSelect(2);
                });
            }else{
                musicValue._dataType();
            }
        };

        //随机设置类型
        musicValue._randomSelect = function(index){
            var arr = opt.musicType;
            var new_arr = musicValue.getRandomElementFromArr(arr,index);
            for(var i = 0;i < index; i++){
                _this.music_typeSelect.find('.music-typeSelect').eq(i+1).text(new_arr[i]).attr('data-type',new_arr[i]);
            };
        };

        //音乐播放的点击事件
        musicValue._clickEvent = function(){
            _this.music_status.off().on('click',function(event){
                event.stopPropagation();
                musicValue._playPause();
            });

            _this.music_next.off().on('click',function(event){
                event.stopPropagation();
                musicValue._playNext();
            });

            _this.cpt_music.off().on('click',function(){
                $(this).toggleClass('circle');
            });

            $(".li-music-list").off().on('click',function(){
                var _this = $(this);
                var index = _this.attr('data-index');
                musicValue._playIndex(index);
            })

            //长按事件
           //  _this.cpt_music.longPress({
           //   duration:300,
           //   longPress:function(){
           //       var music_list = new Array();
           //       for(var i = 0 ; i < musicData.length ; i++ ){
           //           music_list.push({'title':musicData[i].name +' - '+ musicData[i].singer,
           //                           'hasHref':false,
           //                           'font_imgClass':'dw-icon-music',
           //                           'rightFont_imgClass':''});
           //       }

           //       var index = _this.audio.attr('data-index') * 1;
           //       // alert(JSON.stringify(music_list));
           //       DW.scrollMenu({
           //           source:music_list,
           //           hasLineBorder:false,
           //           click:function(ret){
           //               musicValue._playIndex(ret.index);
           //           }
           //       });

           //       $('.cpt-selectScrollMenu').find('li').eq(index).css({
                    //  background:opt.scrollActiveBg,
                    // });
           //   }
           //  });
        };

        //显示加载的loading   需引用loading插件
        musicValue._showMusicLoading = function(name){
            if($('.music-div').find('.cpt_loading_mask').length > 0){
                return;
            }
            var name = name || 'music';
            //添加加载浮层
            $('.music-div').loading({
                name:name,
                title:'',
                discription:'',
                originDivWidth:30,
                originDivHeight:30,
                flexCenter:true,
                originWidth:5,
                originHeight:5,
                loadingWidth:opt.width + 20,
                loadingHeight:opt.height,
                originBg:'rgba(34,222,44,0.5)'
            });
        };

        //暂停
        musicValue._pause = function(){
            _this.audio[0].pause();
            // _this.music_img.removeClass('active');
            // _this.music_status.find('i').removeClass('dw-icon-pause').addClass('dw-icon-play');
        };

        //播放
        musicValue._play = function(){
            _this.audio[0].play();
            _this.music_img.addClass('active');
            _this.music_status.find('i').removeClass('dw-icon-play').addClass('dw-icon-pause');
        };

        //播放暂停效果
        musicValue._playPause = function(){
            try{
                if(_this.audio[0].paused){
                    _this.audio[0].play();
                }else{
                    _this.audio[0].pause();
                }
            } catch (e){
                DW.showMessage(e.name + ": " + e.message);
            }
        };

        //音频播放结束事件
        musicValue._onended = function(){
            _this.audio.on('ended',function(){
                if(_this.audio[0].loop){
                    _this.audio[0].load();
                    _this.audio[0].play();
                }else{
                    musicValue._playNext();
                }
            });
        };

        //音频处于播放状态的事件
        musicValue._onplaying = function(){
            _this.audio.on('playing',function(){
                DW.removeLoading('music_waiting');
            });

            //实时显示canvas进度
            var dw_audio = document.getElementById('cpt_dw_music');
            dw_audio.addEventListener('canplay',function(){
                musicValue._showLoading(dw_audio);
            });
        };

        //音频需要加载之后才播放事件
        musicValue._onwaiting = function(){
            _this.audio.on('waiting',function(){
                musicValue._showMusicLoading('music_waiting');
            });
        };

        //监听音乐是否暂停
        musicValue._onpause = function(){
            _this.audio.on('pause',function(){
                _this.music_img.removeClass('active');
                _this.music_status.find('i').removeClass('dw-icon-pause').addClass('dw-icon-play');
            })
        };

        //监听音乐是否暂停
        musicValue._onplay = function(){
            _this.audio.on('play',function(){
                _this.music_img.addClass('active');
                _this.music_status.find('i').removeClass('dw-icon-play').addClass('dw-icon-pause');
            })
        };

        //跳动进度的时候执行
        // musicValue._seeked = function(){

        // };

        musicValue._keyPress = function(){
            document.onkeydown = function(e) {
                var keycode = e.which || window.event.keyCode;
                if(keycode == 32 && !$('input').is(':focus')){
                    musicValue._playPause();
                }

                if(keycode == 39 || keycode == 40 && !$('input').is(':focus')){
                    musicValue._playNext();
                }

                if(keycode == 37 || keycode == 38 && !$('input').is(':focus')){
                    musicValue._playPrev();
                }
            }
        };

        //自定义选择音乐类型事件 
        musicValue._selectByClass = function () {
            var typeClass = opt.selectClassName;
            $('.'+typeClass).on('click',function(){
                var type = $(this).attr('data-type');
                musicValue._pause();
                musicValue._dataType(type);
            })
        };

        //播放上一首音乐
        musicValue._playPrev = function(){
            //通过data-index+1来播放下一集
            var index = _this.audio.attr('data-index')*1 - 1;
            if(index < 0){
                index = musicLenth-1;
            }

            musicValue._insertData(musicData,index);
            musicValue._playPause();

            if($('.cpt-selectScrollMenu').length){
                $('.cpt-selectScrollMenu').find('li').eq(index).css({
                    background:opt.scrollActiveBg,
                    // color:'#fff',
                }).siblings().css({
                    background:'#fff',
                    // color:'#fff',
                });
            }
        };

        //点击下一首音乐事件
        musicValue._playNext = function(){
            //通过data-index+1来播放下一集
            var index = _this.audio.attr('data-index')*1 + 1;
            if(index >= musicLenth){
                index = 0;
            }

            musicValue._insertData(musicData,index);
            musicValue._playPause();

            if($('.cpt-selectScrollMenu').length){
                $('.cpt-selectScrollMenu').find('li').eq(index).css({
                    background:opt.scrollActiveBg,
                    // color:'#fff',
                }).siblings().css({
                    background:'#fff',
                    // color:'#fff',
                });
            }
        };

        musicValue._playIndex = function(index){
            //通过data-index+1来播放下一集
            var index = index;
            if(index >= musicLenth){
                index = 0;
            }

            musicValue._insertData(musicData,index);
            musicValue._playPause();
        };

        //写入音乐的事件监听
        musicValue._musicListener = function(){
            if(_this.audio[0].readyState === 3){
                opt.afterMusicLoading();
                //删除加载浮层
                DW.removeLoading('music_waiting');
            }

            //注册点击事件
            musicValue._clickEvent();

            //音乐播放结束事件
            musicValue._onended();

            // 音乐处于播放或中途中暂停的状态
            musicValue._onplaying();

            //当媒介已停止播放但打算继续播放时运行脚本
            musicValue._onwaiting();

            //音乐暂停会触发事件   主要是图标的改动
            musicValue._onpause();

            //音乐暂停会触发事件   主要是图标的改动
            musicValue._onplay();

            //按键事件  控制音乐播放
            musicValue._keyPress();
        };

        //给dom装填数据
        musicValue._insertData = function(data,index){
            var music_imgUrl = data[index].img_url || 'http://www.daiwei.org/index/images/img/indeximg.jpg';
            var music_name = data[index].name || '爱乐之城 纯音乐';
            var music_url = data[index].url || 'http://oiq8j9er1.bkt.clouddn.com/Justin%20Hurwitz%20-%20Planetarium%20-%20From%20La%20La%20Land%20Soundtrack.mp3';
            var music_singer = data[index].singer || '默认音乐';
            var music_sortIndex = data[index].sort_index || 0;
            _this.music_name.text(music_name).attr('title',music_name);
            _this.music_singer.text(music_singer).attr('title',music_singer);
            _this.music_img.attr('src',music_imgUrl);
            if(opt.hasBlur){
                var blur_bg = ('url('+ music_imgUrl +')center right no-repeat').toString();
                _this.music_blur.css({
                    background:blur_bg,
                    'background-size':'cover',
                });
            };

            var ret = {
                index:index,
                data:data,
                url:music_url,
            };

            // opt.musicPlayByWebAudio(ret);
            opt.musicChanged(ret);
            
            _this.audio.attr('src',music_url);
            _this.audio.attr('data-index',music_sortIndex);
        };

        //获取数据之后的操作  添加sort_index属性
        musicValue._getMusicInfo = function(){
            //给获取的音乐添加sortindex 索引   添加属性
            musicLenth = musicData.length;

            for(var i = 0; i < musicLenth; i++){
                musicData[i].sort_index = i;
            }

            if(musicLenth){
                opt.getMusicInfo(musicData);

                musicValue._insertData(musicData,0);

                //监听状态
                musicValue._musicListener();
            }else{
                return;
            }
        };

        musicValue.getRandomElementFromArr = function(arr,num){
            var test_arr = new Array();
            for(var index in arr){
                test_arr.push(arr[index]);    //创建新的arr  为了不改变原来的arr值
            };

            var result_arr = new Array();
            for(var i = 0;i < num; i++) {
                if(test_arr.length>0){
                    var index = Math.floor(Math.random() * test_arr.length);
                    result_arr.push(test_arr[index]);
                    test_arr.splice(index,1);
                }else{
                    return;
                }
            }
            return result_arr;
        }

        //选择获取数据类型  本地 or ajax
        musicValue._dataType = function(text){
            var value = text || '';
            if(opt.hasAjax){
                musicValue._ajax(value);
                // parseData = JSON.parse(data);
            }else{
                // parseData = opt.source;
                musicValue._localData();
            }
        };

        //执行本地数据
        musicValue._localData = function() {
            musicData = opt.source;
            musicValue._getMusicInfo();
        };

        // musicValue._showMusicList = function() {

        // };

        //执行ajax请求的数据
        musicValue._ajax = function(value){
            var value = value || '';
            var host = window.location.host;
            var music_data = '';
            $.ajax({
                url:"../../music/server.php?inAjax=1&do=getMusic",
                type:'post',
                datatype:'json',
                data:{type:value},
                success:function(data){
                    musicData = data;
                    // alert(data);
                    musicValue._getMusicInfo();
                },

                error:function(XMLHttpRequest, textStatus, errorThrown) {
                    console.error('XMLHttpRequest.status: ' +XMLHttpRequest.status);
                    console.error('XMLHttpRequest.readyState: ' +XMLHttpRequest.readyState);
                    console.error('textStatus: '+textStatus);
                    return;
                },
            });
        }

        //显示canvas进度
        musicValue._showLoading = function(audio) {
            var music_ele = audio || '';
            // var myAudio = document.getElementById('music_canvas');
            music_duration = music_ele.duration;
            
            // init canvas
            var canvas = document.getElementById('music_canvas');
            canvas.width = (opt.height + 2) * 4;
            canvas.height = (opt.height + 2) * 4;
            var context = canvas.getContext('2d');

            var centerX = opt.height / 2 + 1;
            var centerY = opt.height / 2 + 1;

            var currnt = 0;
            var rate = (Math.PI * 2 / music_duration).toFixed(5);

            //音频播放事件
            music_ele.ontimeupdate = function(currnt){
                currnt = music_ele.currentTime;
                context.clearRect(0, 0, opt.height, opt.height);
                durationCircle();
                // text(Math.floor(currnt/duration*100));
                progressCircle(currnt);
                if(currnt >= music_duration) currnt = 0;
            };
            


            function progressCircle(currnt) {
                context.save();
                // console.log(currnt);
                var grd = context.createLinearGradient(0,0,opt.height,opt.height);
                for(var i = 0;i<opt.progressBg.length;i++){
                    grd.addColorStop(opt.progressBg[i].position,opt.progressBg[i].color);
                }

                context.translate(0.5, 0.5);
                context.lineCap="round";
                context.strokeStyle = grd;  //设置描边样式
                context.lineWidth = 3.5;     //设置线宽
                context.scale(4,4);
                context.beginPath();   //路径开始
                context.arc(centerX,centerY,opt.height / 2,-Math.PI/2, -Math.PI/2 +currnt*rate, false);   //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
                context.stroke(); //绘制
                context.closePath(); //路径结束
                context.restore();
            }

            //绘制白色外圈
            function durationCircle(){
                context.save();
                context.scale(4,4);
                context.beginPath();
                context.strokeStyle = opt.durationBg;
                context.lineWidth = 3.5;
                context.arc(centerX, centerY, opt.height / 2 , 0, Math.PI*2, false);
                context.stroke();
                context.closePath();
                context.restore();
            }  
        }

        musicValue._init();
        return _this;
    }

    $.fn.loading = function(options){
        var $this = $(this);
        var _this = this;
        return this.each(function(){
            var loadingPosition ='';
            var defaultProp = {
                direction:              'column',                                               //方向，column纵向   row 横向
                animateStyle:           'fadeInNoTransform',                                    //进入类型
                title:                  '请稍等...',                                           //显示什么内容
                name:                   'loadingName',                                          //loading的data-name的属性值  用于删除loading需要的参数
                type:                   'origin',                                               //pic   origin  
                discription:            '这是一个描述',                                       //loading的描述
                titleColor:             'rgba(255,255,255,0.7)',                                //title文本颜色
                discColor:              'rgba(255,255,255,0.7)',                                //disc文本颜色
                loadingWidth:           260,                                                    //中间的背景宽度width
                loadingBg:              'rgba(0, 0, 0, 0.6);',                                  //中间的背景色
                borderRadius:           12,                                                     //中间的背景色的borderRadius
                loadingMaskBg:          'transparent',                                          //背景遮罩层颜色
                zIndex:                 1000001,                                                //层级

                // 这是圆形旋转的loading样式    （originLoading）
                originDivWidth:         60,                                                     //loadingDiv的width
                originDivHeight:        60,                                                     //loadingDiv的Height

                originWidth:            8,                                                      //小圆点width
                originHeight:           8,                                                      //小圆点Height
                originBg:               '#fefefe',                                              //小圆点背景色
                smallLoading:           false,                                                  //显示小的loading

                // 这是图片的样式   (pic)
                imgSrc:                 'http://www.daiwei.org/index/images/logo/dw.png',       //默认的图片地址
                imgDivWidth:            80,                                                     //imgDiv的width
                imgDivHeight:           80,                                                     //imgDiv的Height

                flexCenter:             false,                                                  //是否用flex布局让loading-div垂直水平居中
                flexDirection:          'row',                                                  //row column  flex的方向   横向 和 纵向             
                mustRelative:           false,                                                  //$this是否规定relative
            };


            var opt = $.extend(defaultProp,options || {});

            if($this.selector == 'body'){
                $('body,html').css({
                    overflow:'hidden',
                });
                loadingPosition = 'fixed';
            }else if(opt.mustRelative){
                $this.css({
                    position:'relative',
                });
                loadingPosition = 'absolute';
            }else{
                loadingPosition = 'absolute';
            }

            var _showOriginLoading = function(){
                var smallLoadingMargin = opt.smallLoading ? 0 : '-10px';
                if(opt.direction == 'row'){smallLoadingMargin='-6px'}

                //悬浮层
                _this.cpt_loading_mask = $('<div class="cpt-loading-mask animated '+opt.animateStyle+' '+opt.direction+'" data-name="'+opt.name+'"></div>').css({
                    'background':opt.loadingMaskBg,
                    'z-index':opt.zIndex,
                    'position':loadingPosition,
                }).appendTo($this);

                //中间的显示层
                _this.div_loading = $('<div class="div-loading"></div>').css({
                    'background':opt.loadingBg,
                    'width':opt.loadingWidth,
                    'height':opt.loadingHeight,
                    '-webkit-border-radius':opt.borderRadius,
                    '-moz-border-radius':opt.borderRadius,
                    'border-radius':opt.borderRadius,
                }).appendTo(_this.cpt_loading_mask);

                if(opt.flexCenter){
                    _this.div_loading.css({
                        "display": "-webkit-flex",
                        "display": "flex",
                        "-webkit-flex-direction":opt.flexDirection,
                        "flex-direction":opt.flexDirection,
                        "-webkit-align-items": "center",
                        "align-items": "center",
                        "-webkit-justify-content": "center",
                        "justify-content":"center",
                    });
                }

                //loading标题
                _this.loading_title = $('<p class="loading-title txt-textOneRow"></p>').css({
                    color:opt.titleColor,
                }).html(opt.title).appendTo(_this.div_loading);

                //loading中间的内容  可以是图片或者转动的小圆球
                _this.loading = $('<div class="loading '+opt.type+'"></div>').css({
                    'width':opt.originDivWidth,
                    'height':opt.originDivHeight,
                }).appendTo(_this.div_loading);

                //描述
                _this.loading_discription = $('<p class="loading-discription txt-textOneRow"></p>').css({
                    color:opt.discColor,
                }).html(opt.discription).appendTo(_this.div_loading);

                if(opt.type == 'origin'){
                    _this.loadingOrigin = $('<div class="div-loadingOrigin"><span></span></div><div class="div-loadingOrigin"><span></span></div><div class="div_loadingOrigin"><span></span></div><div class="div_loadingOrigin"><span></span></div><div class="div_loadingOrigin"><span></span></div>').appendTo(_this.loading);
                    _this.loadingOrigin.children().css({
                        "margin-top":smallLoadingMargin,
                        "margin-left":smallLoadingMargin,
                        "width":opt.originWidth,
                        "height":opt.originHeight,
                        "background":opt.originBg,
                    });
                }   

                if(opt.type == 'pic'){
                    _this.loadingPic = $('<img src="'+opt.imgSrc+'" alt="loading" />').appendTo(_this.loading);
                }         


                //关闭事件冒泡  和默认的事件
                _this.cpt_loading_mask.on('touchstart touchend touchmove click',function(e){
                    e.stopPropagation();
                    e.preventDefault();
                });
            };

            function createLoading(){
                //不能生成两个loading data-name 一样的loading
                if($(".cpt-loading-mask[data-name="+opt.name+"]").length > 0){
                    // console.error('loading mask cant has same date-name('+opt.name+'), you cant set "date-name" prop when you create it');
                    return
                }
                
                _showOriginLoading();
            };

            createLoading();
        });
    }

    //关闭Loading
    DW.removeLoading = function(loadingName){
        var loadingName = loadingName || '';
        $('body,html').css({
            overflow:'auto',
        });

        if(loadingName == ''){
            $(".cpt-loading-mask").remove();
        }else{
            var name = loadingName || 'loadingName';
            $(".cpt-loading-mask[data-name="+name+"]").remove();        
        }
    }

    window.MC = DW;
})(jQuery,window)