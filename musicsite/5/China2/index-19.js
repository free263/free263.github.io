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
            mediaPath = 'https://pan.11.wf/free163person/音乐视听/',
            extension = '',
            tracks = [
			
				{
                "track": 57,
                "name": "海伦-游山恋",
                "length": "4:46",
                "file": "简选/国语/海伦-游山恋.mp3"
				},
				{
                "track": 56,
                "name": "光良-童话",
                "length": "4:46",
                "file": "简选/国语/光良-童话.mp3"
				},
				{
                "track": 55,
                "name": "光良-都是你",
                "length": "4:46",
                "file": "简选/国语/光良-都是你.mp3"
				},
				{
                "track": 54,
                "name": "光良-第一次",
                "length": "4:46",
                "file": "简选/国语/光良-第一次.mp3"
				},
				{
                "track": 53,
                "name": "高胜美、左宏元-渡情",
                "length": "4:46",
                "file": "简选/国语/高胜美、左宏元-渡情.mp3"
				},
				{
                "track": 52,
                "name": "付笛声、任静-知心爱人",
                "length": "4:46",
                "file": "简选/国语/付笛声、任静-知心爱人.mp3"
				},
				{
                "track": 51,
                "name": "凤凰传奇-奢香夫人",
                "length": "4:46",
                "file": "简选/国语/凤凰传奇-奢香夫人.mp3"
				},
				{
                "track": 50,
                "name": "凤凰传奇-海底（Live）",
                "length": "4:46",
                "file": "简选/国语/凤凰传奇-海底（Live）.mp3"
				},
				{
                "track": 49,
                "name": "樊凡-等不到的爱",
                "length": "4:46",
                "file": "简选/国语/樊凡-等不到的爱.mp3"
				},
				{
                "track": 48,
                "name": "迪丽热巴、汪苏泷-偏偏",
                "length": "4:46",
                "file": "简选/国语/迪丽热巴、汪苏泷-偏偏.mp3"
				},
				{
                "track": 47,
                "name": "邓紫棋-泡沫",
                "length": "4:46",
                "file": "简选/国语/邓紫棋-泡沫.mp3"
				},
				{
                "track": 46,
                "name": "邓紫棋-你把我灌醉",
                "length": "4:46",
                "file": "简选/国语/邓紫棋-你把我灌醉.mp3"
				},
				{
                "track": 45,
                "name": "邓紫棋-光年之外",
                "length": "4:46",
                "file": "简选/国语/邓紫棋-光年之外.mp3"
				},
				{
                "track": 44,
                "name": "邓紫棋-多远都要在一起",
                "length": "4:46",
                "file": "简选/国语/邓紫棋-多远都要在一起.mp3"
				},
				{
                "track": 43,
                "name": "邓紫棋-倒数",
                "length": "4:46",
                "file": "简选/国语/邓紫棋-倒数.mp3"
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