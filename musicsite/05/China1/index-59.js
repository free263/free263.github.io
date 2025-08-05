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
                "track": 242,
                "name": "胡夏、郁可唯-知否知否",
                "length": "4:46",
                "file": "精选/胡夏、郁可唯-知否知否.mp3"
				},
				{
                "track": 241,
                "name": "胡夏、李玉刚-将进酒",
                "length": "4:46",
                "file": "精选/胡夏、李玉刚-将进酒.mp3"
				},
				{
                "track": 240,
                "name": "后弦、sara-你还欠我一个拥抱",
                "length": "4:46",
                "file": "精选/后弦、sara-你还欠我一个拥抱.mp3"
				},
				{
                "track": 239,
                "name": "侯旭-逃",
                "length": "4:46",
                "file": "精选/侯旭-逃.mp3"
				},
				{
                "track": 238,
                "name": "黑豹乐队-无地自容",
                "length": "4:46",
                "file": "精选/黑豹乐队-无地自容.mp3"
				},
				{
                "track": 237,
                "name": "何晟铭-佛说",
                "length": "4:46",
                "file": "精选/何晟铭-佛说.mp3"
				},
				{
                "track": 236,
                "name": "何璐-让她降落",
                "length": "4:46",
                "file": "精选/何璐-让她降落.mp3"
				},
				{
                "track": 235,
                "name": "何洁-你一定要幸福",
                "length": "4:46",
                "file": "精选/何洁-你一定要幸福.mp3"
				},
				{
                "track": 234,
                "name": "浩瀚-分手在那个秋天",
                "length": "4:46",
                "file": "精选/浩瀚-分手在那个秋天.mp3"
				},
				{
                "track": 233,
                "name": "杭天琪-前门情思大碗茶",
                "length": "4:46",
                "file": "精选/杭天琪-前门情思大碗茶.mp3"
				},
				{
                "track": 232,
                "name": "韩雪-想起",
                "length": "4:46",
                "file": "精选/韩雪-想起.mp3"
				},
				{
                "track": 231,
                "name": "韩雪-飘雪",
                "length": "4:46",
                "file": "精选/韩雪-飘雪.mp3"
				},
				{
                "track": 230,
                "name": "韩磊-向天再借五百年",
                "length": "4:46",
                "file": "精选/韩磊-向天再借五百年.mp3"
				},
				{
                "track": 229,
                "name": "韩磊-等待",
                "length": "4:46",
                "file": "精选/韩磊-等待.mp3"
				},
				{
                "track": 228,
                "name": "韩红-天路",
                "length": "4:46",
                "file": "精选/韩红-天路.mp3"
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