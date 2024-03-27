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
                "track": 947,
                "name": "周深-超级玩家",
                "length": "4:46",
                "file": "精选/周深-超级玩家.mp3"
				},
				{
                "track": 946,
                "name": "周深-曾经沧海",
                "length": "4:46",
                "file": "精选/周深-曾经沧海.mp3"
				},
				{
                "track": 945,
                "name": "周深-不再流浪",
                "length": "4:46",
                "file": "精选/周深-不再流浪.mp3"
				},
				{
                "track": 944,
                "name": "周深-不说话",
                "length": "4:46",
                "file": "精选/周深-不说话.mp3"
				},
				{
                "track": 943,
                "name": "周深-彼岸花",
                "length": "4:46",
                "file": "精选/周深-彼岸花.mp3"
				},
				{
                "track": 942,
                "name": "周深-奔向你",
                "length": "4:46",
                "file": "精选/周深-奔向你.mp3"
				},
				{
                "track": 941,
                "name": "周深-白墙",
                "length": "4:46",
                "file": "精选/周深-白墙.mp3"
				},
				{
                "track": 940,
                "name": "周深-My Only",
                "length": "4:46",
                "file": "精选/周深-My Only.mp3"
				},
				{
                "track": 939,
                "name": "周深-Monsters",
                "length": "4:46",
                "file": "精选/周深-Monsters.mp3"
				},
				{
                "track": 938,
                "name": "周深-LetItGo(九语男版)",
                "length": "4:46",
                "file": "精选/周深-LetItGo(九语男版).mp3"
				},
				{
                "track": 937,
                "name": "周深-I See Us",
                "length": "4:46",
                "file": "精选/周深-I See Us.mp3"
				},
				{
                "track": 936,
                "name": "周深、于文文-暗香(Live)",
                "length": "4:46",
                "file": "精选/周深、于文文-暗香(Live).mp3"
				},
				{
                "track": 935,
                "name": "周深、王者荣耀-祈愿山海",
                "length": "4:46",
                "file": "精选/周深、王者荣耀-祈愿山海.mp3"
				},
				{
                "track": 934,
                "name": "周深、王者荣耀-很高兴遇见你",
                "length": "4:46",
                "file": "精选/周深、王者荣耀-很高兴遇见你.mp3"
				},
				{
                "track": 933,
                "name": "周深、陆虎-缘落",
                "length": "4:46",
                "file": "精选/周深、陆虎-缘落.mp3"
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