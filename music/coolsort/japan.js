// ============================================================
//  music.js  —  音乐播放列表数据
//  请将此文件与 index.html 放在同一目录下
// ============================================================

const JAPAN_DATA = [
{id: 1,title: 'azu-angel',artist: 'azu',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/日本音乐/azu-angel.mp3',duration: 300},
{id: 2,title: 'juju-この夜を止めてよ',artist: 'juju',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/日本音乐/juju-この夜を止めてよ.mp3',duration: 300},
{id: 3,title: 'rania-DrFeelGood',artist: 'rania',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/日本音乐/rania-DrFeelGood.mp3',duration: 300},
{id: 4,title: '中岛美嘉-雪華',artist: '中岛美嘉',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/日本音乐/中岛美嘉-雪華.mp3',duration: 300},
{id: 5,title: '中島みゆき-容易受伤的女人原曲',artist: '中島みゆき',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/日本音乐/中島みゆき-容易受伤的女人原曲.mp3',duration: 300},
{id: 6,title: '初音未来-甩葱歌',artist: '初音未来',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/日本音乐/初音未来-甩葱歌.mp3',duration: 300},
{id: 7,title: '大冢爱-プラネタリウム',artist: '大冢爱',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/日本音乐/大冢爱-プラネタリウム.mp3',duration: 300},
{id: 8,title: '大冢爱-桃ノ花ビラ',artist: '大冢爱',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/日本音乐/大冢爱-桃ノ花ビラ.mp3',duration: 300},
{id: 9,title: '宇多田光-First_Love',artist: '宇多田光',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/日本音乐/宇多田光-First_Love.mp3',duration: 300},
{id: 10,title: '宗次郎-故乡的原风景',artist: '宗次郎',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/日本音乐/宗次郎-故乡的原风景.mp3',duration: 300},
{id: 11,title: '少女时代-mr taxi',artist: '少女时代',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/日本音乐/少女时代-mr taxi.mp3',duration: 300},
{id: 12,title: '少女时代-the boys',artist: '少女时代',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/日本音乐/少女时代-the boys.mp3',duration: 300},
{id: 13,title: '川嶋あい-大丈夫だよ',artist: '川嶋あい',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/日本音乐/川嶋あい-大丈夫だよ.mp3',duration: 300},
{id: 14,title: '日本歌曲 星の在り処',artist: '日本歌曲',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/日本音乐/日本歌曲 星の在り処.mp3',duration: 300},
{id: 15,title: '日本歌曲-漠然の莹',artist: '日本歌曲',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/日本音乐/日本歌曲-漠然の莹.mp3',duration: 300},
{id: 16,title: '滨崎步-A_Song_For_Xx',artist: '滨崎步',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/日本音乐/滨崎步-A_Song_For_Xx.mp3',duration: 300},
{id: 17,title: '滨崎步-Blue_Bird',artist: '滨崎步',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/日本音乐/滨崎步-Blue_Bird.mp3',duration: 300},
{id: 18,title: '滨崎步-depend_on_you',artist: '滨崎步',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/日本音乐/滨崎步-depend_on_you.mp3',duration: 300},
{id: 19,title: '滨崎步-fly_high',artist: '滨崎步',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/日本音乐/滨崎步-fly_high.mp3',duration: 300},
{id: 20,title: '滨崎步-M',artist: '滨崎步',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/日本音乐/滨崎步-M.mp3',duration: 300},
{id: 21,title: '滨崎步-To_Be',artist: '滨崎步',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/日本音乐/滨崎步-To_Be.mp3',duration: 300},
{id: 22,title: '谷村新司-いい日旅立ち',artist: '谷村新司',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/日本音乐/谷村新司-いい日旅立ち.mp3',duration: 300},
{id: 23,title: '谷村新司-カノン',artist: '谷村新司',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/日本音乐/谷村新司-カノン.mp3',duration: 300},
{id: 24,title: '谷村新司-君の歌',artist: '谷村新司',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/日本音乐/谷村新司-君の歌.mp3',duration: 300},
{id: 25,title: '谷村新司-忘れないで',artist: '谷村新司',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/日本音乐/谷村新司-忘れないで.mp3',duration: 300},
{id: 26,title: '谷村新司-昂一すばゐ',artist: '谷村新司',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/日本音乐/谷村新司-昂一すばゐ.mp3',duration: 300},
{id: 27,title: '谷村新司-星',artist: '谷村新司',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/日本音乐/谷村新司-星.mp3',duration: 300},
{id: 28,title: '谷村新司-睡莲',artist: '谷村新司',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/日本音乐/谷村新司-睡莲.mp3',duration: 300},
{id: 29,title: '谷村新司-风姿花传',artist: '谷村新司',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/日本音乐/谷村新司-风姿花传.mp3',duration: 300}
];

// 如果需要在其他环境中使用，也可导出
// 浏览器环境中直接使用全局变量 MUSIC_DATA
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MUSIC_DATA;
}