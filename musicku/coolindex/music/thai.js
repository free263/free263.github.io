// ============================================================
//  music.js  —  音乐播放列表数据
//  请将此文件与 index.html 放在同一目录下
// ============================================================

const MUSIC_DATA = [
{id: 1,title: 'focus-等待着你',artist: '',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/泰国音乐/focus-等待着你.mp3',duration: 300},
{id: 2,title: 'Lydia-DontLeaveMeHere',artist: '',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/泰国音乐/Lydia-DontLeaveMeHere.mp3',duration: 300},
{id: 3,title: 'Lydia-YOU',artist: '',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/泰国音乐/Lydia-YOU.mp3',duration: 300},
{id: 4,title: 'Lydia-前女友的规则',artist: '',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/泰国音乐/Lydia-前女友的规则.mp3',duration: 300},
{id: 5,title: 'Lydia-如果我说爱你行吗',artist: '',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/泰国音乐/Lydia-如果我说爱你行吗.mp3',duration: 300},
{id: 6,title: 'lydia-为什么不接电话',artist: '',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/泰国音乐/lydia-为什么不接电话.mp3',duration: 300},
{id: 7,title: 'sara-即使知道要见面',artist: '',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/泰国音乐/sara-即使知道要见面.mp3',duration: 300},
{id: 8,title: 'Sara-没关系',artist: '',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/泰国音乐/Sara-没关系.mp3',duration: 300},
{id: 9,title: 'sara-是否要忘记',artist: '',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/泰国音乐/sara-是否要忘记.mp3',duration: 300},
{id: 10,title: 'sara-想说什么吗',artist: '',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/泰国音乐/sara-想说什么吗.mp3',duration: 300},
{id: 11,title: 'Sara-总好过难过',artist: '',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/泰国音乐/Sara-总好过难过.mp3',duration: 300},
{id: 12,title: 'Zaza-KuamPidTidTua',artist: '',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/泰国音乐/Zaza-KuamPidTidTua.mp3',duration: 300},
{id: 13,title: '泰国歌曲-慢嗨舞曲',artist: '',src: 'https://cloud.hhhnn.com/d/189Family133/音乐视听/泰国音乐/泰国歌曲-慢嗨舞曲.mp3',duration: 300}
];

// 如果需要在其他环境中使用，也可导出
// 浏览器环境中直接使用全局变量 MUSIC_DATA
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MUSIC_DATA;
}