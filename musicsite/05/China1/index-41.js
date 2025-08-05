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
                "track": 512,
                "name": "少女时代-TheBoys",
                "length": "4:46",
                "file": "精选/少女时代-TheBoys.mp3"
				},
				{
                "track": 511,
                "name": "少女时代-MrTaxi",
                "length": "4:46",
                "file": "精选/少女时代-MrTaxi.mp3"
				},
				{
                "track": 510,
                "name": "少女时代-Gee",
                "length": "4:46",
                "file": "精选/少女时代-Gee.mp3"
				},
				{
                "track": 509,
                "name": "沙宝亮-斑马斑马",
                "length": "4:46",
                "file": "精选/沙宝亮-斑马斑马.mp3"
				},
				{
                "track": 508,
                "name": "沙宝亮-暗香",
                "length": "4:46",
                "file": "精选/沙宝亮-暗香.mp3"
				},
				{
                "track": 507,
                "name": "三楠-晚风作酒",
                "length": "4:46",
                "file": "精选/三楠-晚风作酒.mp3"
				},
				{
                "track": 506,
                "name": "萨顶顶-左手指月",
                "length": "4:46",
                "file": "精选/萨顶顶-左手指月.mp3"
				},
				{
                "track": 505,
                "name": "萨顶顶-自由行走的花",
                "length": "4:46",
                "file": "精选/萨顶顶-自由行走的花.mp3"
				},
				{
                "track": 504,
                "name": "萨顶顶-自己美",
                "length": "4:46",
                "file": "精选/萨顶顶-自己美.mp3"
				},
				{
                "track": 503,
                "name": "萨顶顶-万物生",
                "length": "4:46",
                "file": "精选/萨顶顶-万物生.mp3"
				},
				{
                "track": 502,
                "name": "萨顶顶-咚巴啦",
                "length": "4:46",
                "file": "精选/萨顶顶-咚巴啦.mp3"
				},
				{
                "track": 501,
                "name": "萨顶顶、周深-左手指月",
                "length": "4:46",
                "file": "精选/萨顶顶、周深-左手指月.mp3"
				},
				{
                "track": 500,
                "name": "容祖儿-小小",
                "length": "4:46",
                "file": "精选/容祖儿-小小.mp3"
				},
				{
                "track": 499,
                "name": "容祖儿-我的骄傲",
                "length": "4:46",
                "file": "精选/容祖儿-我的骄傲.mp3"
				},
				{
                "track": 498,
                "name": "容祖儿-挥着翅膀的女孩",
                "length": "4:46",
                "file": "精选/容祖儿-挥着翅膀的女孩.mp3"
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