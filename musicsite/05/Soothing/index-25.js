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
                "track": 696,
                "name": "639.Lavoie",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/639.Lavoie.mp3"
				},
				{
                "track": 695,
                "name": "638.LessonofLife",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/638.LessonofLife.mp3"
				},
				{
                "track": 694,
                "name": "637.LaLaLa...",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/637.LaLaLa....mp3"
				},
				{
                "track": 693,
                "name": "636.Pettirosso",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/636.Pettirosso.mp3"
				},
				{
                "track": 692,
                "name": "635.Forgetandrecall",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/635.Forgetandrecall.mp3"
				},
				{
                "track": 691,
                "name": "634.Melodia",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/634.Melodia.mp3"
				},
				{
                "track": 690,
                "name": "633.ILtramonto",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/633.ILtramonto.mp3"
				},
				{
                "track": 689,
                "name": "632.Pedestrianisland",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/632.Pedestrianisland.mp3"
				},
				{
                "track": 688,
                "name": "631.Lucia",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/631.Lucia.mp3"
				},
				{
                "track": 687,
                "name": "630.Smettiladi",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/630.Smettiladi.mp3"
				},
				{
                "track": 686,
                "name": "629.Loveattractslove",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/629.Loveattractslove.mp3"
				},
				{
                "track": 685,
                "name": "628.Somethingweighingonmind",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/628.Somethingweighingonmind.mp3"
				},
				{
                "track": 684,
                "name": "627.Thisisthejourney",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/627.Thisisthejourney.mp3"
				},
				{
                "track": 683,
                "name": "626.Eeflections",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/626.Eeflections.mp3"
				},
				{
                "track": 682,
                "name": "625.Itsalsothedream",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/625.Itsalsothedream.mp3"
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