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
                "track": 52,
                "name": "爱尔兰风笛 漫步神秘园",
                "length": "4:46",
                "file": "纯音乐/爱尔兰风笛 漫步神秘园.mp3"
				},
				{
                "track": 51,
                "name": "yiruma-雨的印记",
                "length": "4:46",
                "file": "纯音乐/yiruma-雨的印记.mp3"
				},
				{
                "track": 50,
                "name": "Joanie madden-The level plain",
                "length": "4:46",
                "file": "纯音乐/Joanie madden-The level plain.mp3"
				},
				{
                "track": 49,
                "name": "Chunyy-最终幻想",
                "length": "4:46",
                "file": "纯音乐/Chunyy-最终幻想.mp3"
				},
				{
                "track": 48,
                "name": "Chunyy-只此一生",
                "length": "4:46",
                "file": "纯音乐/Chunyy-只此一生.mp3"
				},
				{
                "track": 47,
                "name": "Chunyy-云淡风轻",
                "length": "4:46",
                "file": "纯音乐/Chunyy-云淡风轻.mp3"
				},
				{
                "track": 46,
                "name": "Chunyy-月光下的凤尾竹",
                "length": "4:46",
                "file": "纯音乐/Chunyy-月光下的凤尾竹.mp3"
				},
				{
                "track": 45,
                "name": "Chunyy-雨中漫步",
                "length": "4:46",
                "file": "纯音乐/Chunyy-雨中漫步.mp3"
				},
				{
                "track": 44,
                "name": "Chunyy-雨林深处",
                "length": "4:46",
                "file": "纯音乐/Chunyy-雨林深处.mp3"
				},
				{
                "track": 43,
                "name": "Chunyy-印象之旅",
                "length": "4:46",
                "file": "纯音乐/Chunyy-印象之旅.mp3"
				},
				{
                "track": 42,
                "name": "Chunyy-野鸟情歌",
                "length": "4:46",
                "file": "纯音乐/Chunyy-野鸟情歌.mp3"
				},
				{
                "track": 41,
                "name": "Chunyy-雪之梦",
                "length": "4:46",
                "file": "纯音乐/Chunyy-雪之梦.mp3"
				},
				{
                "track": 40,
                "name": "Chunyy-小雨落在你脸上",
                "length": "4:46",
                "file": "纯音乐/Chunyy-小雨落在你脸上.mp3"
				},
				{
                "track": 39,
                "name": "Chunyy-小步舞曲",
                "length": "4:46",
                "file": "纯音乐/Chunyy-小步舞曲.mp3"
				},
				{
                "track": 38,
                "name": "Chunyy-相识也是缘份",
                "length": "4:46",
                "file": "纯音乐/Chunyy-相识也是缘份.mp3"
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