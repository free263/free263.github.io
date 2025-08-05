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
                "track": 177,
                "name": "177.旅行的诗",
                "length": "4:46",
                "file": "自然之声/177.旅行的诗.mp3"
				},
				{
                "track": 176,
                "name": "176.梦游记",
                "length": "4:46",
                "file": "自然之声/176.梦游记.mp3"
				},
				{
                "track": 175,
                "name": "175.山里农家",
                "length": "4:46",
                "file": "自然之声/175.山里农家.mp3"
				},
				{
                "track": 174,
                "name": "174.下个路口",
                "length": "4:46",
                "file": "自然之声/174.下个路口.mp3"
				},
				{
                "track": 173,
                "name": "173.淋雨一直走",
                "length": "4:46",
                "file": "自然之声/173.淋雨一直走.mp3"
				},
				{
                "track": 172,
                "name": "172.蓝色海岸线",
                "length": "4:46",
                "file": "自然之声/172.蓝色海岸线.mp3"
				},
				{
                "track": 171,
                "name": "171.我爱我家",
                "length": "4:46",
                "file": "自然之声/171.我爱我家.mp3"
				},
				{
                "track": 170,
                "name": "170.冬至",
                "length": "4:46",
                "file": "自然之声/170.冬至.mp3"
				},
				{
                "track": 169,
                "name": "169.下班",
                "length": "4:46",
                "file": "自然之声/169.下班.mp3"
				},
				{
                "track": 168,
                "name": "168.轻轻的脚步声",
                "length": "4:46",
                "file": "自然之声/168.轻轻的脚步声.mp3"
				},
				{
                "track": 167,
                "name": "167.梦见你",
                "length": "4:46",
                "file": "自然之声/167.梦见你.mp3"
				},
				{
                "track": 166,
                "name": "166.初雪",
                "length": "4:46",
                "file": "自然之声/166.初雪.mp3"
				},
				{
                "track": 165,
                "name": "165.雪落下的声音",
                "length": "4:46",
                "file": "自然之声/165.雪落下的声音.mp3"
				},
				{
                "track": 164,
                "name": "164.星语心愿",
                "length": "4:46",
                "file": "自然之声/164.星语心愿.mp3"
				},
				{
                "track": 163,
                "name": "163.平安夜",
                "length": "4:46",
                "file": "自然之声/163.平安夜.mp3"
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