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
                "track": 192,
                "name": "192.海底总动员",
                "length": "4:46",
                "file": "自然之声/192.海底总动员.mp3"
				},
				{
                "track": 191,
                "name": "191.心语",
                "length": "4:46",
                "file": "自然之声/191.心语.mp3"
				},
				{
                "track": 190,
                "name": "190.流水潺潺",
                "length": "4:46",
                "file": "自然之声/190.流水潺潺.mp3"
				},
				{
                "track": 189,
                "name": "189.好想你",
                "length": "4:46",
                "file": "自然之声/189.好想你.mp3"
				},
				{
                "track": 188,
                "name": "188.种星星的人",
                "length": "4:46",
                "file": "自然之声/188.种星星的人.mp3"
				},
				{
                "track": 187,
                "name": "187.再遇",
                "length": "4:46",
                "file": "自然之声/187.再遇.mp3"
				},
				{
                "track": 186,
                "name": "186.冬眠",
                "length": "4:46",
                "file": "自然之声/186.冬眠.mp3"
				},
				{
                "track": 185,
                "name": "185.长路慢行",
                "length": "4:46",
                "file": "自然之声/185.长路慢行.mp3"
				},
				{
                "track": 184,
                "name": "184.从前慢",
                "length": "4:46",
                "file": "自然之声/184.从前慢.mp3"
				},
				{
                "track": 183,
                "name": "183.此刻的温柔",
                "length": "4:46",
                "file": "自然之声/183.此刻的温柔.mp3"
				},
				{
                "track": 182,
                "name": "182.等你回来",
                "length": "4:46",
                "file": "自然之声/182.等你回来.mp3"
				},
				{
                "track": 181,
                "name": "181.凉风有信",
                "length": "4:46",
                "file": "自然之声/181.凉风有信.mp3"
				},
				{
                "track": 180,
                "name": "180.壁炉",
                "length": "4:46",
                "file": "自然之声/180.壁炉.mp3"
				},
				{
                "track": 179,
                "name": "179.浪漫篝火",
                "length": "4:46",
                "file": "自然之声/179.浪漫篝火.mp3"
				},
				{
                "track": 178,
                "name": "178.渔歌",
                "length": "4:46",
                "file": "自然之声/178.渔歌.mp3"
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