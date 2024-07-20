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
            mediaPath = 'https://vercel.11.wf/free163person/音乐视听/',
            extension = '',
            tracks = [
			
				{
                "track": 24,
                "name": "印度音乐-奴里 清楚版",
                "length": "4:46",
                "file": "印度歌曲/印度音乐-奴里 清楚版.mp3"
				},
				{
                "track": 23,
                "name": "印度音乐-秘密桑巴",
                "length": "4:46",
                "file": "印度歌曲/印度音乐-秘密桑巴.mp3"
				},
				{
                "track": 22,
                "name": "印度音乐-迷幻音乐",
                "length": "4:46",
                "file": "印度歌曲/印度音乐-迷幻音乐.mp3"
				},
				{
                "track": 21,
                "name": "印度音乐-慢摇英文跳舞曲",
                "length": "4:46",
                "file": "印度歌曲/印度音乐-慢摇英文跳舞曲.mp3"
				},
				{
                "track": 20,
                "name": "印度音乐-慢摇精华舞曲_酒吧dj音乐",
                "length": "4:46",
                "file": "印度歌曲/印度音乐-慢摇精华舞曲_酒吧dj音乐.mp3"
				},
				{
                "track": 19,
                "name": "印度音乐-慢摇_非常舒服的节奏",
                "length": "4:46",
                "file": "印度歌曲/印度音乐-慢摇_非常舒服的节奏.mp3"
				},
				{
                "track": 18,
                "name": "印度音乐-麻吉_印度神游",
                "length": "4:46",
                "file": "印度歌曲/印度音乐-麻吉_印度神游.mp3"
				},
				{
                "track": 17,
                "name": "印度音乐-雷鬼",
                "length": "4:46",
                "file": "印度歌曲/印度音乐-雷鬼.mp3"
				},
				{
                "track": 16,
                "name": "印度音乐-绝对动听的印度歌曲",
                "length": "4:46",
                "file": "印度歌曲/印度音乐-绝对动听的印度歌曲.mp3"
				},
				{
                "track": 15,
                "name": "印度音乐-吉特巴舞曲踩着我的节拍跳起来吧",
                "length": "4:46",
                "file": "印度歌曲/印度音乐-吉特巴舞曲踩着我的节拍跳起来吧.mp3"
				},
				{
                "track": 14,
                "name": "印度音乐-吉米来吧",
                "length": "4:46",
                "file": "印度歌曲/印度音乐-吉米来吧.mp3"
				},
				{
                "track": 13,
                "name": "印度音乐-风情舞动",
                "length": "4:46",
                "file": "印度歌曲/印度音乐-风情舞动.mp3"
				},
				{
                "track": 12,
                "name": "印度音乐-肚皮舞 卡西卡少女之春",
                "length": "4:46",
                "file": "印度歌曲/印度音乐-肚皮舞 卡西卡少女之春.mp3"
				},
				{
                "track": 11,
                "name": "印度音乐-的士高劲歌舞曲",
                "length": "4:46",
                "file": "印度歌曲/印度音乐-的士高劲歌舞曲.mp3"
				},
				{
                "track": 10,
                "name": "印度音乐-大悲咒",
                "length": "4:46",
                "file": "印度歌曲/印度音乐-大悲咒.mp3"
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