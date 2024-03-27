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
                "track": 56,
                "name": "056.美丽的神话 - 王崴",
                "length": "4:46",
                "file": "唯美纯音乐/056.美丽的神话 - 王崴.mp3"
				},
				{
                "track": 55,
                "name": "055.忧伤的步美 - 名侦探柯南插曲",
                "length": "4:46",
                "file": "唯美纯音乐/055.忧伤的步美 - 名侦探柯南插曲.mp3"
				},
				{
                "track": 54,
                "name": "054.Bandari - 安妮的歌",
                "length": "4:46",
                "file": "唯美纯音乐/054.Bandari - 安妮的歌.mp3"
				},
				{
                "track": 53,
                "name": "053.胡伟立 - 市集",
                "length": "4:46",
                "file": "唯美纯音乐/053.胡伟立 - 市集.mp3"
				},
				{
                "track": 52,
                "name": "052.神秘园之歌 - 钢琴",
                "length": "4:46",
                "file": "唯美纯音乐/052.神秘园之歌 - 钢琴.mp3"
				},
				{
                "track": 51,
                "name": "051.迷情仙境 - 轻音乐",
                "length": "4:46",
                "file": "唯美纯音乐/051.迷情仙境 - 轻音乐.mp3"
				},
				{
                "track": 50,
                "name": "050.绵雪 - 纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/050.绵雪 - 纯音乐.mp3"
				},
				{
                "track": 49,
                "name": "049.茶茗-静心禅乐 (Flowing With The Tea) - Karunesh",
                "length": "4:46",
                "file": "唯美纯音乐/049.茶茗-静心禅乐 (Flowing With The Tea) - Karunesh.mp3"
				},
				{
                "track": 48,
                "name": "048.Forrest Gump 电影《阿甘正传》插曲 — 纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/048.Forrest Gump 电影《阿甘正传》插曲 — 纯音乐.mp3"
				},
				{
                "track": 47,
                "name": "047.美好清晨 - Daveed",
                "length": "4:46",
                "file": "唯美纯音乐/047.美好清晨 - Daveed.mp3"
				},
				{
                "track": 46,
                "name": "046.宽阔的海水 (The Water Is Wide) - David Nevue",
                "length": "4:46",
                "file": "唯美纯音乐/046.宽阔的海水 (The Water Is Wide) - David Nevue.mp3"
				},
				{
                "track": 45,
                "name": "045.耳边私语 (Almost a Whisper) - Chris Phillips",
                "length": "4:46",
                "file": "唯美纯音乐/045.耳边私语 (Almost a Whisper) - Chris Phillips.mp3"
				},
				{
                "track": 44,
                "name": "044.古诗 (Greek Meditation) - 吉他排笛",
                "length": "4:46",
                "file": "唯美纯音乐/044.古诗 (Greek Meditation) - 吉他排笛.mp3"
				},
				{
                "track": 43,
                "name": "043.A Simple Life (唯美小清新治愈系) - Brian Crain",
                "length": "4:46",
                "file": "唯美纯音乐/043.A Simple Life (唯美小清新治愈系) - Brian Crain.mp3"
				},
				{
                "track": 42,
                "name": "042.康妮的蝴蝶 — 纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/042.康妮的蝴蝶 — 纯音乐.mp3"
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