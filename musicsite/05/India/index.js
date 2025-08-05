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
                "track": 39,
                "name": "印度音乐-用爱对我",
                "length": "4:46",
                "file": "印度歌曲/印度音乐-用爱对我.mp3"
				},
				{
                "track": 38,
                "name": "印度音乐-印度之花",
                "length": "4:46",
                "file": "印度歌曲/印度音乐-印度之花.mp3"
				},
				{
                "track": 37,
                "name": "印度音乐-印度音乐",
                "length": "4:46",
                "file": "印度歌曲/印度音乐-印度音乐.mp3"
				},
				{
                "track": 36,
                "name": "印度音乐-印度魔咒_dj舞曲",
                "length": "4:46",
                "file": "印度歌曲/印度音乐-印度魔咒_dj舞曲.mp3"
				},
				{
                "track": 35,
                "name": "印度音乐-音乐心情_一首超好听的印度歌曲",
                "length": "4:46",
                "file": "印度歌曲/印度音乐-音乐心情_一首超好听的印度歌曲.mp3"
				},
				{
                "track": 34,
                "name": "印度音乐-一首超爽的印度舞曲",
                "length": "4:46",
                "file": "印度歌曲/印度音乐-一首超爽的印度舞曲.mp3"
				},
				{
                "track": 33,
                "name": "印度音乐-想要对你说爱你的人",
                "length": "4:46",
                "file": "印度歌曲/印度音乐-想要对你说爱你的人.mp3"
				},
				{
                "track": 32,
                "name": "印度音乐-妩媚撩人_巨好听的印度慢摇舞曲",
                "length": "4:46",
                "file": "印度歌曲/印度音乐-妩媚撩人_巨好听的印度慢摇舞曲.mp3"
				},
				{
                "track": 31,
                "name": "印度音乐-我终生爱你至死不渝",
                "length": "4:46",
                "file": "印度歌曲/印度音乐-我终生爱你至死不渝.mp3"
				},
				{
                "track": 30,
                "name": "印度音乐-天竺少女",
                "length": "4:46",
                "file": "印度歌曲/印度音乐-天竺少女.mp3"
				},
				{
                "track": 29,
                "name": "印度音乐-天使之吻_亲嘴歌_女声版",
                "length": "4:46",
                "file": "印度歌曲/印度音乐-天使之吻_亲嘴歌_女声版.mp3"
				},
				{
                "track": 28,
                "name": "印度音乐-天使之吻 亲嘴歌",
                "length": "4:46",
                "file": "印度歌曲/印度音乐-天使之吻 亲嘴歌.mp3"
				},
				{
                "track": 27,
                "name": "印度音乐-神秘国度_印度民族音乐",
                "length": "4:46",
                "file": "印度歌曲/印度音乐-神秘国度_印度民族音乐.mp3"
				},
				{
                "track": 26,
                "name": "印度音乐-热辣媚娘_恰恰",
                "length": "4:46",
                "file": "印度歌曲/印度音乐-热辣媚娘_恰恰.mp3"
				},
				{
                "track": 25,
                "name": "印度音乐-情字路上",
                "length": "4:46",
                "file": "印度歌曲/印度音乐-情字路上.mp3"
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