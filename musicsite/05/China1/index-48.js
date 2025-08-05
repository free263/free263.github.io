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
                "track": 407,
                "name": "柳真-ChaCha",
                "length": "4:46",
                "file": "精选/柳真-ChaCha.mp3"
				},
				{
                "track": 406,
                "name": "刘亦菲、杨洋-三生三世十里桃花",
                "length": "4:46",
                "file": "精选/刘亦菲、杨洋-三生三世十里桃花.mp3"
				},
				{
                "track": 405,
                "name": "刘艺雯-听闻远方有你",
                "length": "4:46",
                "file": "精选/刘艺雯-听闻远方有你.mp3"
				},
				{
                "track": 404,
                "name": "刘惜君-我很快乐",
                "length": "4:46",
                "file": "精选/刘惜君-我很快乐.mp3"
				},
				{
                "track": 403,
                "name": "刘惜君-拆心",
                "length": "4:46",
                "file": "精选/刘惜君-拆心.mp3"
				},
				{
                "track": 402,
                "name": "刘诗诗-等你的季节",
                "length": "4:46",
                "file": "精选/刘诗诗-等你的季节.mp3"
				},
				{
                "track": 401,
                "name": "刘若英-一辈子的孤单",
                "length": "4:46",
                "file": "精选/刘若英-一辈子的孤单.mp3"
				},
				{
                "track": 400,
                "name": "刘若英-为爱痴狂",
                "length": "4:46",
                "file": "精选/刘若英-为爱痴狂.mp3"
				},
				{
                "track": 399,
                "name": "刘若英-后来",
                "length": "4:46",
                "file": "精选/刘若英-后来.mp3"
				},
				{
                "track": 398,
                "name": "刘若英-很爱很爱你",
                "length": "4:46",
                "file": "精选/刘若英-很爱很爱你.mp3"
				},
				{
                "track": 397,
                "name": "刘珂矣-芙蓉雨",
                "length": "4:46",
                "file": "精选/刘珂矣-芙蓉雨.mp3"
				},
				{
                "track": 396,
                "name": "刘珂矣-半壶纱",
                "length": "4:46",
                "file": "精选/刘珂矣-半壶纱.mp3"
				},
				{
                "track": 395,
                "name": "刘德华-我恨我痴心",
                "length": "4:46",
                "file": "精选/刘德华-我恨我痴心.mp3"
				},
				{
                "track": 394,
                "name": "刘德华-忘情水",
                "length": "4:46",
                "file": "精选/刘德华-忘情水.mp3"
				},
				{
                "track": 393,
                "name": "刘德华-天意",
                "length": "4:46",
                "file": "精选/刘德华-天意.mp3"
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