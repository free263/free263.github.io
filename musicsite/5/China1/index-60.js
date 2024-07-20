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
                "track": 227,
                "name": "韩红-天亮了",
                "length": "4:46",
                "file": "精选/韩红-天亮了.mp3"
				},
				{
                "track": 226,
                "name": "韩宝仪-往事只能回味",
                "length": "4:46",
                "file": "精选/韩宝仪-往事只能回味.mp3"
				},
				{
                "track": 225,
                "name": "韩宝仪-粉红色的回忆",
                "length": "4:46",
                "file": "精选/韩宝仪-粉红色的回忆.mp3"
				},
				{
                "track": 224,
                "name": "海鸣威-老人与海",
                "length": "4:46",
                "file": "精选/海鸣威-老人与海.mp3"
				},
				{
                "track": 223,
                "name": "海伦-游山恋",
                "length": "4:46",
                "file": "精选/海伦-游山恋.mp3"
				},
				{
                "track": 222,
                "name": "海伦-桥边姑娘",
                "length": "4:46",
                "file": "精选/海伦-桥边姑娘.mp3"
				},
				{
                "track": 221,
                "name": "郭美美-不怕不怕",
                "length": "4:46",
                "file": "精选/郭美美-不怕不怕.mp3"
				},
				{
                "track": 220,
                "name": "郭美美-爱情女神",
                "length": "4:46",
                "file": "精选/郭美美-爱情女神.mp3"
				},
				{
                "track": 219,
                "name": "郭富城-樱花之恋",
                "length": "4:46",
                "file": "精选/郭富城-樱花之恋.mp3"
				},
				{
                "track": 218,
                "name": "郭富城-我是不是该安静的走开",
                "length": "4:46",
                "file": "精选/郭富城-我是不是该安静的走开.mp3"
				},
				{
                "track": 217,
                "name": "郭富城-对你爱不完",
                "length": "4:46",
                "file": "精选/郭富城-对你爱不完.mp3"
				},
				{
                "track": 216,
                "name": "郭富城-动起来",
                "length": "4:46",
                "file": "精选/郭富城-动起来.mp3"
				},
				{
                "track": 215,
                "name": "光头李进-你在他乡还好吗",
                "length": "4:46",
                "file": "精选/光头李进-你在他乡还好吗.mp3"
				},
				{
                "track": 214,
                "name": "光良-童话",
                "length": "4:46",
                "file": "精选/光良-童话.mp3"
				},
				{
                "track": 213,
                "name": "光良-都是你",
                "length": "4:46",
                "file": "精选/光良-都是你.mp3"
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