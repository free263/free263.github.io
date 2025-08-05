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
                "track": 13,
                "name": "泰国歌曲-慢嗨舞曲",
                "length": "4:46",
                "file": "泰国音乐/泰国歌曲-慢嗨舞曲.mp3"
				},
				{
                "track": 12,
                "name": "Zaza-KuamPidTidTua",
                "length": "4:46",
                "file": "泰国音乐/Zaza-KuamPidTidTua.mp3"
				},
				{
                "track": 11,
                "name": "Sara-总好过难过",
                "length": "4:46",
                "file": "泰国音乐/Sara-总好过难过.mp3"
				},
				{
                "track": 10,
                "name": "sara-想说什么吗",
                "length": "4:46",
                "file": "泰国音乐/sara-想说什么吗.mp3"
				},
				{
                "track": 9,
                "name": "sara-是否要忘记",
                "length": "4:46",
                "file": "泰国音乐/sara-是否要忘记.mp3"
				},
				{
                "track": 8,
                "name": "Sara-没关系",
                "length": "4:46",
                "file": "泰国音乐/Sara-没关系.mp3"
				},
				{
                "track": 7,
                "name": "sara-即使知道要见面",
                "length": "4:46",
                "file": "泰国音乐/sara-即使知道要见面.mp3"
				},
				{
                "track": 6,
                "name": "lydia-为什么不接电话",
                "length": "4:46",
                "file": "泰国音乐/lydia-为什么不接电话.mp3"
				},
				{
                "track": 5,
                "name": "Lydia-如果我说爱你行吗",
                "length": "4:46",
                "file": "泰国音乐/Lydia-如果我说爱你行吗.mp3"
				},
				{
                "track": 4,
                "name": "Lydia-前女友的规则",
                "length": "4:46",
                "file": "泰国音乐/Lydia-前女友的规则.mp3"
				},
				{
                "track": 3,
                "name": "Lydia-YOU",
                "length": "4:46",
                "file": "泰国音乐/Lydia-YOU.mp3"
				},
				{
                "track": 2,
                "name": "Lydia-DontLeaveMeHere",
                "length": "4:46",
                "file": "泰国音乐/Lydia-DontLeaveMeHere.mp3"
				},
				{
                "track": 1,
                "name": "focus-等待着你",
                "length": "4:46",
                "file": "泰国音乐/focus-等待着你.mp3"
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