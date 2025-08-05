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
                "track": 212,
                "name": "光良-第一次",
                "length": "4:46",
                "file": "精选/光良-第一次.mp3"
				},
				{
                "track": 211,
                "name": "关喆-想你的夜",
                "length": "4:46",
                "file": "精选/关喆-想你的夜.mp3"
				},
				{
                "track": 210,
                "name": "谷村新司-风姿花传",
                "length": "4:46",
                "file": "精选/谷村新司-风姿花传.mp3"
				},
				{
                "track": 209,
                "name": "古巨基-好想好想",
                "length": "4:46",
                "file": "精选/古巨基-好想好想.mp3"
				},
				{
                "track": 208,
                "name": "贡维特-想你想到眼泪流",
                "length": "4:46",
                "file": "精选/贡维特-想你想到眼泪流.mp3"
				},
				{
                "track": 207,
                "name": "葛东琪-悬溺",
                "length": "4:46",
                "file": "精选/葛东琪-悬溺.mp3"
				},
				{
                "track": 206,
                "name": "格格-火苗",
                "length": "4:46",
                "file": "精选/格格-火苗.mp3"
				},
				{
                "track": 205,
                "name": "高晓松-一个北京人在北京",
                "length": "4:46",
                "file": "精选/高晓松-一个北京人在北京.mp3"
				},
				{
                "track": 204,
                "name": "高胜美-青青河边草",
                "length": "4:46",
                "file": "精选/高胜美-青青河边草.mp3"
				},
				{
                "track": 203,
                "name": "高胜美-千年等一回",
                "length": "4:46",
                "file": "精选/高胜美-千年等一回.mp3"
				},
				{
                "track": 202,
                "name": "高胜美、左宏元-渡情",
                "length": "4:46",
                "file": "精选/高胜美、左宏元-渡情.mp3"
				},
				{
                "track": 201,
                "name": "高慧君、张学友-你最珍贵",
                "length": "4:46",
                "file": "精选/高慧君、张学友-你最珍贵.mp3"
				},
				{
                "track": 200,
                "name": "高安,黑鸭子-红尘情歌",
                "length": "4:46",
                "file": "精选/高安,黑鸭子-红尘情歌.mp3"
				},
				{
                "track": 199,
                "name": "甘萍-潮湿的心",
                "length": "4:46",
                "file": "精选/甘萍-潮湿的心.mp3"
				},
				{
                "track": 198,
                "name": "付笛声、任静-知心爱人",
                "length": "4:46",
                "file": "精选/付笛声、任静-知心爱人.mp3"
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