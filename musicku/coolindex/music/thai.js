// ============================================================
//  music.js  —  音乐播放列表数据
//  请将此文件与 index.html 放在同一目录下
// ============================================================

const MUSIC_DATA = [
{id: 1,title: 'B Ray_Han Sara_Masew-Xin Dung Nhac May",artist:"",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/泰国音乐/B Ray_Han Sara_Masew-Xin Dung Nhac May.mp3",cover:"t.png",},
{id: 2,title: 'Chillies_SUNI孙夏铃_Rhymastic-Cu Chill Thoi",artist:"",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/泰国音乐/Chillies_SUNI孙夏铃_Rhymastic-Cu Chill Thoi.mp3",cover:"t.png",},
{id: 3,title: 'focus-等待着你",artist:"",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/泰国音乐/focus-等待着你.mp3",cover:"t.png",},
{id: 4,title: 'HKT-Them Mot Lan Dau(痛多一次)",artist:"",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/泰国音乐/HKT-Them Mot Lan Dau(痛多一次).mp3",cover:"t.png",},
{id: 5,title: 'Lydia-DontLeaveMeHere",artist:"",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/泰国音乐/Lydia-DontLeaveMeHere.mp3",cover:"t.png",},
{id: 6,title: 'Lydia-YOU",artist:"",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/泰国音乐/Lydia-YOU.mp3",cover:"t.png",},
{id: 7,title: 'Lydia-前女友的规则",artist:"",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/泰国音乐/Lydia-前女友的规则.mp3",cover:"t.png",},
{id: 8,title: 'Lydia-如果我说爱你行吗",artist:"",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/泰国音乐/Lydia-如果我说爱你行吗.mp3",cover:"t.png",},
{id: 9,title: 'lydia-为什么不接电话",artist:"",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/泰国音乐/lydia-为什么不接电话.mp3",cover:"t.png",},
{id: 10,title: 'Phao_Masew-2 Phut Han(两分多钟)",artist:"",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/泰国音乐/Phao_Masew-2 Phut Han(两分多钟).mp3",cover:"t.png",},
{id: 11,title: 'sara-即使知道要见面",artist:"",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/泰国音乐/sara-即使知道要见面.mp3",cover:"t.png",},
{id: 12,title: 'Sara-没关系",artist:"",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/泰国音乐/Sara-没关系.mp3",cover:"t.png",},
{id: 13,title: 'sara-是否要忘记",artist:"",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/泰国音乐/sara-是否要忘记.mp3",cover:"t.png",},
{id: 14,title: 'sara-想说什么吗",artist:"",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/泰国音乐/sara-想说什么吗.mp3",cover:"t.png",},
{id: 15,title: 'Sara-总好过难过",artist:"",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/泰国音乐/Sara-总好过难过.mp3",cover:"t.png",},
{id: 16,title: 'Zaza-KuamPidTidTua",artist:"",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/泰国音乐/Zaza-KuamPidTidTua.mp3",cover:"t.png",},
{id: 17,title: '曾维新 BAE-D? Vu(夜舞)",artist:"",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/泰国音乐/曾维新 BAE-D? Vu(夜舞).mp3",cover:"t.png",},
{id: 18,title: '曾维新 Phong Max-Ngay Tho(天真)",artist:"",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/泰国音乐/曾维新 Phong Max-Ngay Tho(天真).mp3",cover:"t.png",},
{id: 19,title: '黄垂玲-Ke Cap Gap Ba Gia",artist:"",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/泰国音乐/黄垂玲-Ke Cap Gap Ba Gia.mp3",cover:"t.png",},
{id: 20,title: '黄垂玲-See Tình(遇见挚爱)",artist:"",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/泰国音乐/黄垂玲-See Tình(遇见挚爱).mp3",cover:"t.png",},
{id: 21,title: '泰国歌曲-慢嗨舞曲",artist:"",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/泰国音乐/泰国歌曲-慢嗨舞曲.mp3",cover:"t.png",}
];

// 如果需要在其他环境中使用，也可导出
// 浏览器环境中直接使用全局变量 MUSIC_DATA
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MUSIC_DATA;
}