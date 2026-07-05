// ============================================================
//  music.js  —  音乐播放列表数据
//  请将此文件与 index.html 放在同一目录下
// ============================================================

const INDIA_DATA = [
{id: 1,title: 'MeghnaMishra-NachdiPhirA',artist: 'MeghnaMishrA',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/印度歌曲/MeghnaMishra-NachdiPhira.mp3',duration: 300},
{id: 2,title: '印度歌曲-KaruneshPunjab',artist: '印度音乐',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/印度歌曲/印度歌曲-KaruneshPunjab.mp3',duration: 300},
{id: 3,title: '印度音乐-WadaNaTod',artist: '印度音乐',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/印度歌曲/印度音乐-WadaNaTod.mp3',duration: 300},
{id: 4,title: '印度音乐-一首超爽的印度舞曲',artist: '印度音乐',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/印度歌曲/印度音乐-一首超爽的印度舞曲.mp3',duration: 300},
{id: 5,title: '印度音乐-不要不要',artist: '印度音乐',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/印度歌曲/印度音乐-不要不要.mp3',duration: 300},
{id: 6,title: '印度音乐-印度之花',artist: '印度音乐',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/印度歌曲/印度音乐-印度之花.mp3',duration: 300},
{id: 7,title: '印度音乐-印度音乐',artist: '印度音乐',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/印度歌曲/印度音乐-印度音乐.mp3',duration: 300},
{id: 8,title: '印度音乐-印度魔咒_dj舞曲',artist: '印度音乐',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/印度歌曲/印度音乐-印度魔咒_dj舞曲.mp3',duration: 300},
{id: 9,title: '印度音乐-吉特巴舞曲踩着我的节拍跳起来吧',artist: '印度音乐',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/印度歌曲/印度音乐-吉特巴舞曲踩着我的节拍跳起来吧.mp3',duration: 300},
{id: 10,title: '印度音乐-吉米来吧',artist: '印度音乐',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/印度歌曲/印度音乐-吉米来吧.mp3',duration: 300},
{id: 11,title: '印度音乐-大悲咒',artist: '印度音乐',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/印度歌曲/印度音乐-大悲咒.mp3',duration: 300},
{id: 12,title: '印度音乐-天使之吻 亲嘴歌',artist: '印度音乐',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/印度歌曲/印度音乐-天使之吻 亲嘴歌.mp3',duration: 300},
{id: 13,title: '印度音乐-天使之吻_亲嘴歌_女声版',artist: '印度音乐',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/印度歌曲/印度音乐-天使之吻_亲嘴歌_女声版.mp3',duration: 300},
{id: 14,title: '印度音乐-天竺少女',artist: '印度音乐',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/印度歌曲/印度音乐-天竺少女.mp3',duration: 300},
{id: 15,title: '印度音乐-奴里 清楚版',artist: '印度音乐',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/印度歌曲/印度音乐-奴里 清楚版.mp3',duration: 300},
{id: 16,title: '印度音乐-妩媚撩人_巨好听的印度慢摇舞曲',artist: '印度音乐',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/印度歌曲/印度音乐-妩媚撩人_巨好听的印度慢摇舞曲.mp3',duration: 300},
{id: 17,title: '印度音乐-情字路上',artist: '印度音乐',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/印度歌曲/印度音乐-情字路上.mp3',duration: 300},
{id: 18,title: '印度音乐-想要对你说爱你的人',artist: '印度音乐',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/印度歌曲/印度音乐-想要对你说爱你的人.mp3',duration: 300},
{id: 19,title: '印度音乐-慢摇_非常舒服的节奏',artist: '印度音乐',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/印度歌曲/印度音乐-慢摇_非常舒服的节奏.mp3',duration: 300},
{id: 20,title: '印度音乐-慢摇精华舞曲_酒吧dj音乐',artist: '印度音乐',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/印度歌曲/印度音乐-慢摇精华舞曲_酒吧dj音乐.mp3',duration: 300},
{id: 21,title: '印度音乐-慢摇英文跳舞曲',artist: '印度音乐',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/印度歌曲/印度音乐-慢摇英文跳舞曲.mp3',duration: 300},
{id: 22,title: '印度音乐-我终生爱你至死不渝',artist: '印度音乐',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/印度歌曲/印度音乐-我终生爱你至死不渝.mp3',duration: 300},
{id: 23,title: '印度音乐-热辣媚娘_恰恰',artist: '印度音乐',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/印度歌曲/印度音乐-热辣媚娘_恰恰.mp3',duration: 300},
{id: 24,title: '印度音乐-用爱对我',artist: '印度音乐',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/印度歌曲/印度音乐-用爱对我.mp3',duration: 300},
{id: 25,title: '印度音乐-的士高劲歌舞曲',artist: '印度音乐',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/印度歌曲/印度音乐-的士高劲歌舞曲.mp3',duration: 300},
{id: 26,title: '印度音乐-神秘国度_印度民族音乐',artist: '印度音乐',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/印度歌曲/印度音乐-神秘国度_印度民族音乐.mp3',duration: 300},
{id: 27,title: '印度音乐-秘密桑巴',artist: '印度音乐',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/印度歌曲/印度音乐-秘密桑巴.mp3',duration: 300},
{id: 28,title: '印度音乐-纯净如天簌的',artist: '印度音乐',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/印度歌曲/印度音乐-纯净如天簌的.mp3',duration: 300},
{id: 29,title: '印度音乐-绝对动听的印度歌曲',artist: '印度音乐',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/印度歌曲/印度音乐-绝对动听的印度歌曲.mp3',duration: 300},
{id: 30,title: '印度音乐-肚皮舞 卡西卡少女之春',artist: '印度音乐',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/印度歌曲/印度音乐-肚皮舞 卡西卡少女之春.mp3',duration: 300},
{id: 31,title: '印度音乐-芭杜尔快来吧',artist: '印度音乐',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/印度歌曲/印度音乐-芭杜尔快来吧.mp3',duration: 300},
{id: 32,title: '印度音乐-迷幻音乐',artist: '印度音乐',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/印度歌曲/印度音乐-迷幻音乐.mp3',duration: 300},
{id: 33,title: '印度音乐-阿育王 忧伤的笛子',artist: '印度音乐',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/印度歌曲/印度音乐-阿育王 忧伤的笛子.mp3',duration: 300},
{id: 34,title: '印度音乐-雷鬼',artist: '印度音乐',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/印度歌曲/印度音乐-雷鬼.mp3',duration: 300},
{id: 35,title: '印度音乐-音乐心情_一首超好听的印度歌曲',artist: '印度音乐',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/印度歌曲/印度音乐-音乐心情_一首超好听的印度歌曲.mp3',duration: 300},
{id: 36,title: '印度音乐-风情舞动',artist: '印度音乐',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/印度歌曲/印度音乐-风情舞动.mp3',duration: 300},
{id: 37,title: '印度音乐-麻吉_印度神游',artist: '印度音乐',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/印度歌曲/印度音乐-麻吉_印度神游.mp3',duration: 300},
{id: 38,title: '阿育王主题曲-RoshiniSe',artist: '阿育王主题曲',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/印度歌曲/阿育王主题曲-RoshiniSe.mp3',duration: 300},
{id: 39,title: '阿育王插曲-AsokaTheme',artist: '阿育王主题曲',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/印度歌曲/阿育王插曲-AsokaTheme.mp3',duration: 300}
];

// 如果需要在其他环境中使用，也可导出
// 浏览器环境中直接使用全局变量 MUSIC_DATA
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MUSIC_DATA;
}