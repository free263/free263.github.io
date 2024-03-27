// External Files:
// https://api.html5media.info/1.1.8/html5media.min.js (enables <video> and <audio> tags in all major browsers)
// https://cdn.plyr.io/2.0.13/plyr.js


// HTML5 audio player + playlist controls...
// Inspiration: http://jonhall.info/how_to/create_a_playlist_for_html5_audio
// Mythium Archive: https://archive.org/details/mythium/
jQuery(function ($) {
    'use strict'
    var supportsAudio = !!document.createElement('audio').canPlayType;
    if (supportsAudio) {
        var index = 0,
            playing = false,
            mediaPath = 'https://pan.11.wf/free163person/音乐视听/',
            extension = '',
            tracks = [
			
				{
                "track": 172,
                "name": "宗次郎-故乡的原风景",
                "length": "4:46",
                "file": "纯音乐/宗次郎-故乡的原风景.mp3"
				},
				{
                "track": 171,
                "name": "约纳森-杜鹃圆舞曲",
                "length": "4:46",
                "file": "纯音乐/约纳森-杜鹃圆舞曲.mp3"
				},
				{
                "track": 170,
                "name": "约翰·施特劳斯-维也纳森林的故事",
                "length": "4:46",
                "file": "纯音乐/约翰·施特劳斯-维也纳森林的故事.mp3"
				},
				{
                "track": 169,
                "name": "约翰·施特劳斯-蓝色多瑙河",
                "length": "4:46",
                "file": "纯音乐/约翰·施特劳斯-蓝色多瑙河.mp3"
				},
				{
                "track": 168,
                "name": "约翰 施特劳斯-闲聊波尔卡",
                "length": "4:46",
                "file": "纯音乐/约翰 施特劳斯-闲聊波尔卡.mp3"
				},
				{
                "track": 167,
                "name": "约翰 施特劳斯-溜冰圆舞曲",
                "length": "4:46",
                "file": "纯音乐/约翰 施特劳斯-溜冰圆舞曲.mp3"
				},
				{
                "track": 166,
                "name": "姚斯婷-寂静之声",
                "length": "4:46",
                "file": "纯音乐/姚斯婷-寂静之声.mp3"
				},
				{
                "track": 165,
                "name": "徐仁修-森林狂想曲",
                "length": "4:46",
                "file": "纯音乐/徐仁修-森林狂想曲.mp3"
				},
				{
                "track": 164,
                "name": "萧邦-幻想即兴曲",
                "length": "4:46",
                "file": "纯音乐/萧邦-幻想即兴曲.mp3"
				},
				{
                "track": 163,
                "name": "喜多郎-菩提树",
                "length": "4:46",
                "file": "纯音乐/喜多郎-菩提树.mp3"
				},
				{
                "track": 162,
                "name": "喜多郎-飞天",
                "length": "4:46",
                "file": "纯音乐/喜多郎-飞天.mp3"
				},
				{
                "track": 161,
                "name": "乌鸦 片尾曲-月光石 Rurutia",
                "length": "4:46",
                "file": "纯音乐/乌鸦 片尾曲-月光石 Rurutia.mp3"
				},
				{
                "track": 160,
                "name": "威尔第 茶花女-普罗旺斯的陆地和海洋",
                "length": "4:46",
                "file": "纯音乐/威尔第 茶花女-普罗旺斯的陆地和海洋.mp3"
				},
				{
                "track": 159,
                "name": "舒曼-梦幻曲",
                "length": "4:46",
                "file": "纯音乐/舒曼-梦幻曲.mp3"
				},
				{
                "track": 158,
                "name": "舒伯特-圣母颂",
                "length": "4:46",
                "file": "纯音乐/舒伯特-圣母颂.mp3"
				},
			],
            buildPlaylist = $.each(tracks, function(key, value) {
                var trackNumber = value.track,
                    trackName = value.name,
                    trackLength = value.length;
                if (trackNumber.toString().length === 1) {
                    trackNumber = '0' + trackNumber;
                } else {
                    trackNumber = '' + trackNumber;
                }
                $('#plList').append('<li><div class="plItem"><div class="plNum">' + trackNumber + '.</div><div class="plTitle">' + trackName + '</div><div class="plLength">' + trackLength + '</div></div></li>');
            }),
            trackCount = tracks.length,
            npAction = $('#npAction'),
            npTitle = $('#npTitle'),
            audio = $('#audio1').bind('play', function () {
                playing = true;
                npAction.text('Now Playing...');
            }).bind('pause', function () {
                playing = false;
                npAction.text('Paused...');
            }).bind('ended', function () {
                npAction.text('Paused...');
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    audio.play();
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }).get(0),
            btnPrev = $('#btnPrev').click(function () {
                if ((index - 1) > -1) {
                    index--;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            btnNext = $('#btnNext').click(function () {
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            li = $('#plList li').click(function () {
                var id = parseInt($(this).index());
                if (id !== index) {
                    playTrack(id);
                }
            }),
            loadTrack = function (id) {
                $('.plSel').removeClass('plSel');
                $('#plList li:eq(' + id + ')').addClass('plSel');
                npTitle.text(tracks[id].name);
                index = id;
                audio.src = mediaPath + tracks[id].file + extension;
            },
            playTrack = function (id) {
                loadTrack(id);
                audio.play();
            };
        extension = audio.canPlayType('audio/mpeg') ? '' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
        loadTrack(index);
    }
});

//initialize plyr
plyr.setup($('#audio1'), {});