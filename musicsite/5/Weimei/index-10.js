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
                "track": 221,
                "name": "221.睁不开眼就看不见- 纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/221.睁不开眼就看不见- 纯音乐.mp3"
				},
				{
                "track": 220,
                "name": "220.希望曙光 - 喵步小雨中",
                "length": "4:46",
                "file": "唯美纯音乐/220.希望曙光 - 喵步小雨中.mp3"
				},
				{
                "track": 219,
                "name": "219.生命之舞(钢琴与排笛) - Brad White & Pierre Grill",
                "length": "4:46",
                "file": "唯美纯音乐/219.生命之舞(钢琴与排笛) - Brad White & Pierre Grill.mp3"
				},
				{
                "track": 218,
                "name": "218.欢乐的珍珠——凯文·科恩",
                "length": "4:46",
                "file": "唯美纯音乐/218.欢乐的珍珠——凯文·科恩.mp3"
				},
				{
                "track": 217,
                "name": "217.花言叶 - α·Pav",
                "length": "4:46",
                "file": "唯美纯音乐/217.花言叶 - α·Pav.mp3"
				},
				{
                "track": 216,
                "name": "216.微笑的弧度 (Silent Love) - 何真真",
                "length": "4:46",
                "file": "唯美纯音乐/216.微笑的弧度 (Silent Love) - 何真真.mp3"
				},
				{
                "track": 215,
                "name": "215.Follow Your Heart (聆听心灵深处的呼唤) - Karunesh",
                "length": "4:46",
                "file": "唯美纯音乐/215.Follow Your Heart (聆听心灵深处的呼唤) - Karunesh.mp3"
				},
				{
                "track": 214,
                "name": "214.我在那一角落患过伤风 - 赵海洋",
                "length": "4:46",
                "file": "唯美纯音乐/214.我在那一角落患过伤风 - 赵海洋.mp3"
				},
				{
                "track": 213,
                "name": "213.卡农 (小提琴) - 利未人室内乐团",
                "length": "4:46",
                "file": "唯美纯音乐/213.卡农 (小提琴) - 利未人室内乐团.mp3"
				},
				{
                "track": 212,
                "name": "212.Childhood's Memory 陶笛版 (思い出の小箱) - 宗次郎",
                "length": "4:46",
                "file": "唯美纯音乐/212.Childhood's Memory 陶笛版 (思い出の小箱) - 宗次郎.mp3"
				},
				{
                "track": 211,
                "name": "211.以思念 (十九岁的纯情背景音乐) - 钢琴曲",
                "length": "4:46",
                "file": "唯美纯音乐/211.以思念 (十九岁的纯情背景音乐) - 钢琴曲.mp3"
				},
				{
                "track": 210,
                "name": "210.一起走过的日子(古筝) - 李炜",
                "length": "4:46",
                "file": "唯美纯音乐/210.一起走过的日子(古筝) - 李炜.mp3"
				},
				{
                "track": 209,
                "name": "209.季节的女王 (The Queen Of Season) - Danbi",
                "length": "4:46",
                "file": "唯美纯音乐/209.季节的女王 (The Queen Of Season) - Danbi.mp3"
				},
				{
                "track": 208,
                "name": "208.蓝色生死恋I主题曲 - Lawrence",
                "length": "4:46",
                "file": "唯美纯音乐/208.蓝色生死恋I主题曲 - Lawrence.mp3"
				},
				{
                "track": 207,
                "name": "207.你的心河 (River Flows In You) - Eisblume",
                "length": "4:46",
                "file": "唯美纯音乐/207.你的心河 (River Flows In You) - Eisblume.mp3"
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